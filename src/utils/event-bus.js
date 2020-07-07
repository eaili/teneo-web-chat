import Vue from 'vue';

export const events = {
  MESSAGE_SENT: 'message-sent',
  RESET_SESSION: 'reset-session',
  ENGINE_REPLIED: 'engine-replied',
  PUSH_BUBBLE: 'push-bubble',
  START_SPINNER: 'start-spinner',
  MAXIMIZE_WINDOW: 'maximize',
};

export const EventBus = new Vue();
