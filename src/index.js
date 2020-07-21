import Vue from 'vue';

import TeneoWebChat from './TeneoWebChat.vue';
import teneoApiPlugin from './plugins/teneo-api.js';
import { EventBus, events } from '../src/utils/event-bus.js';
import { API_VERSION, DEFAULT_TITLE, API_STATE_MINIMIZED} from '../src/utils/constants.js';
import * as apiConstants from '../src/utils/api-function-names.js';
import handleExtension from '../src/utils/handle-extension.js';
import messageListCache from '../src/utils/message-list-cache.js';
import { store } from '../src/store/store.js';


var functionMap = new Map();
var stateMap = {'visibility': API_STATE_MINIMIZED, 'title':DEFAULT_TITLE};
const validFunctionNames = Object.values(apiConstants)
const messageList = new messageListCache();

window['TeneoWebChat'] = {
  // initialize(element, title, teneoEngineUrl, closeTieSessionOnExit = 'no', imageUrl = '', extraEngineParams = {}, twcProps) {
  initialize(element, twcProps) {
    Vue.prototype.$store = store;

    // store properties in storage
    if (twcProps.teneoEngineUrl) {
      // TODO: Check if teneoEngineUrl is a string and a url
      store.commit('teneoEngineUrl',twcProps.teneoEngineUrl);
    }
    if (twcProps.title) {
      // TODO: Check if title is a string
      store.commit('title',twcProps.title);
    }
    if (twcProps.titleIconUrl) {
      // TODO: Check if titleIconUrl is a string and a url
      store.commit('titleIconUrl',twcProps.titleIconUrl);
    }
    if (twcProps.teneoEngineParams) {
      // TODO: Check if twcProps.teneoEngineParams is a map
      store.commit('teneoEngineParams',twcProps.teneoEngineParams);
    }
    if (twcProps.showCloseButton) {
      // TODO: Check if twcProps.teneoEngineParams is a bool
      store.commit('showCloseButton',twcProps.showCloseButton);
    }

    // check required properties
    if (!store.getters.teneoEngineUrl) {
      console.log("teneoEngineUrl missing")
      return
    }

    Vue.use(teneoApiPlugin(store.getters.teneoEngineUrl));
    Vue.prototype.$extensionMethods = functionMap;
    

    
    EventBus.$on(events.API_STATE_READY, () => {
      handleExtension(apiConstants.API_ON_READY, store.getters.state);
    });

    const closeTieSessionOnExit = 'no' // TEMP
    const imageUrl = '' // TEMP
    var tmpVue = new Vue({
      render: (h) => h(TeneoWebChat, { props: { closeTieSessionOnExit, imageUrl} }),
    }).$mount(element);

  },
  on(function_name, func){

    // this 'on' method is called each time someone registers
    // a 'function_name' (ready, visibility_change, engine_response etc)

    // only continue if function name provided is valid
    if (!validFunctionNames.includes(function_name)) {
      // TODO: thow error if invalid function_name was provided?
      return
    }
    
    // devs may register same function name multiple times 
    // so we need keep a list of callback functions per 'function_name'

    // fist initialize an empty list
    var callbackFunctions = [];

    // if we already have callbacks for an api function_name, get them
    if (functionMap.get(function_name)) {
      callbackFunctions = functionMap.get(function_name)
    }
    // then add the new callback function to the list
    callbackFunctions.push(func)

    // store the list of callbacks function for this 'function_name'
    functionMap.set(function_name,callbackFunctions);
  },
  off(function_name){
    functionMap.delete(function_name);
  },
  get(function_name){
    switch (function_name) {
      case apiConstants.API_GET_STATE:
        return store.getters.state;

      case apiConstants.API_GET_CHAT_HISTORY:
        return messageList.get();
    }
  },
  call(function_name, payload = undefined) {

    switch (function_name) {
      case apiConstants.API_CALL_MAXIMIZE:
        console.log("Call maximize")
        EventBus.$emit(events.MAXIMIZE_WINDOW);
        break
  
      case apiConstants.API_CALL_MINIMIZE:
        EventBus.$emit(events.MINIMIZE_WINDOW);
        break
        
      case apiConstants.API_CALL_SEND_INPUT:
        // check if payload is object
        // TODO: throw error if payload is invalid?
        if (Object.keys(payload).length > 0 && payload.constructor === Object) {

          // key 'text' is mandatory
          if (payload.text && typeof payload.text === "string") {
            var text = payload.text;
            var parameters = {};
            var isSilent = false;

            if (payload.parameters && Object.keys(payload.parameters).length > 0 && payload.parameters.constructor === Object) {
              parameters = payload.parameters;
            }

            if (payload.silent) {
              isSilent = true;
            }
  
            EventBus.$emit(events.SEND_INPUT, text, parameters, isSilent);
          }
        }
        break

      case apiConstants.API_CALL_END_SESSION:
        EventBus.$emit(events.END_SESSION);
        break

      case apiConstants.API_CALL_CLEAR_CHAT_HISTORY:
        EventBus.$emit(events.CLEAR_HISTORY);
        break

      case apiConstants.API_CALL_RESET:
        EventBus.$emit(events.RESET_SESSION);
        break
        
      case apiConstants.API_CALL_ADD_MESSAGE:
        // TODO: throw error if payload is invalid?
        if (Object.keys(payload).length > 0 && payload.constructor === Object) {
          EventBus.$emit(events.ADD_MESSAGE, payload);
        }
        break

      case apiConstants.API_CALL_SET_WINDOW_TITLE:
        // TODO: throw error if payload is invalid?
        if (typeof payload === "string") {
          store.commit('title',"New Title");
          // EventBus.$emit(events.SET_WINDOW_TITLE, payload);
          // stateMap.title = payload
        }
        break

      default:
        break
    }
  },
  version() {
    return API_VERSION;
  },
  resetChat(){
    console.log("Deprecated. Use TeneoWebChat.call('reset')")
    EventBus.$emit(events.RESET_SESSION);
  },
};
