// These sample JSONs should match the latest documentation:
// https://www.teneo.ai/engine/channels/teneo-web-chat#message-types

export const textMessage = {
    "type": "text",
    "data": {
        "text": "Are you sure you wish to stop this chat?",
    }
}

export const audioMessage = {
    "type": "audio",
    "data": { "audio_url": "https://url.to/audio.mp3" },
}

export const quickReplyMessage = {
    "type": "quickreply",
    "quick_replies": [
        {
            "style": "primary",
            "title": "Primary",
            "postback": "Primary"
        },
        {
            "style": "secondary",
            "title": "Secondary",
            "postback": "Secondary"
        }
    ]
}

export const buttonsMessage = {
    "type": "buttons",
    data: {
        "title": "Optional title",
            "button_items": [
                {
                    "style": "primary",
                    "title": "Primary",
                    "postback": "Primary"
                },
            ]
    }
}

export const cardMessageJSON = {
    "type": "card",
    data: {
        "image": {
            "image_url": "https://url.to/an/image.png",
            "alt": "This is an image"
        },
        "title": "This is the title",
        "subtitle": "This is the subtitle",
        "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt."
    }
}
export const cardMessageJSONwithLinks = {
    "type": "card",
    data: {
        "image": {
            "image_url": "https://url.to/an/image.png",
            "alt": "This is an image"
        },
        "title": "This is the title",
        "subtitle": "This is the subtitle",
        "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.",
        "link_items": [
            {
                "title": "Card link",
                "url": "https://url.to/a/page"
            },
            {
                "title": "Another link",
                "url": "https://url.to/another/page"
            }
        ]
    }
}
export const cardMessageJSONwithButtons = {
    "type": "card",
    data: {
        "image": {
            "image_url": "https://url.to/an/image.png",
            "alt": "This is an image"
        },
        "title": "This is the title",
        "subtitle": "This is the subtitle",
        "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.",
        "link_items": [
            {
                "title": "Card link",
                "url": "https://url.to/a/page"
            },
            {
                "title": "Another link",
                "url": "https://url.to/another/page"
            }
        ]
    }
}
export const cardMessageJSONwithClickablelist = {
    "type": "card",
    data: {
        "image": {
            "image_url": "https://url.to/an/image.png",
            "alt": "This is an image"
        },
        "title": "This is the title",
        "subtitle": "This is the subtitle",
        "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.",
        "link_items": [
            {
                "title": "Card link",
                "url": "https://url.to/a/page"
            },
            {
                "title": "Another link",
                "url": "https://url.to/another/page"
            }
        ]
    }
}

export const clickableListMessageJSON = {
    "type": "clickablelist",
    data: {
        "title": "Optional title",
        "list_items": [
            {
                "title": "One",
                "postback": "One"
            },
            {
                "title": "Two",
                "postback": "Two"
            },
        ]
    }
}


export const comboMessageJSON = {
    "author": "bot",
    "type": "combo",
    data:{
        "type": "combo",
        "components": [
            {
                "type": "text",
                "text": "This is an additional speech bubble shown below the card."
            },
            {
                "type": "audio",
                "audio_url": "https://url.to/audio.mp3",          
            },
            {
                "type": "quickreply",
                "quick_replies": [
                    {
                        "style": "primary",
                        "title": "Primary",
                        "postback": "Primary"
                    },
                    {
                        "style": "secondary",
                        "title": "Secondary",
                        "postback": "Secondary"
                    }
                ]
            },            
            {
                "type": "clickablelist",
                "title": "Optional title",
                "list_items": [
                    {
                        "title": "One",
                        "postback": "One"
                    },
                    {
                        "title": "Two",
                        "postback": "Two"
                    },
                ]
            },
            {
                "type": "image",
                "image_url": "https://url.to/an/image.png",
                "alt": "This is an image"
            },
            {
                "type": "youtubevideo",
                "video_url": "https://www.youtube.com/embed/123456789"
            },
            {
                "type": "vimeovideo",
                "video_url": "https://player.vimeo.com/video/12345678"
            },
            {
                "type": "filevideo",
                "video_url": "https://url.to/a/video.mp4"
            },
            {
                "type": "buttons",
                "title": "Are you sure?",
                "button_items": [
                    {
                        "style": "danger",
                        "title": "Yes",
                        "postback": "Yes"
                    },
                    {
                        "style": "success",
                        "title": "No",
                        "postback": "No"
                    }
                ]
            },
            {
                "type": "card",
                "image": {
                    "image_url": "https://as-freaky-styley-714c5e.bots.teneo.ai/tene…t_tes_3gzgctjx5q84x8fztj2bdzxtrh/images/trees.png", 
                    "alt": "This is an image"
                },
                "title": "This is the title",
                "subtitle": "This is the subtitle",
                "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt."
            },
        ]
    }
}

export const filevideoMessageJSON = {
    "type": "filevideo",
    data: {
        "video_url": "https://url.to/a/video.mp4"
    }
}

export const imageMessageJSON = {
    "type": "image",
    data: {
        "image_url": "https://url.to/an/image.png",
        "alt": "This is an image"
    }
}

export const modalMessageJSON = { 
    "type": "modal", 
    data: {
        "image": { 
            "image_url": "https://url.to/an/image.png",
            "alt": "This is an image"
        }, 
        "title": "This is the title", 
        "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", 
        "button_items": [
            { 
                "style": "secondary", 
                "title": "Secondary", 
                "postback": "modal-secondary" 
            }, 
            { 
                "style": "danger", 
                "title": "Danger", 
                "postback": "modal-danger" 
            }
        ] 
    }
}

export const quickreplyMessageJSON = {
    "type": "quickreply",
    data: {
        "quick_replies": [
            {
                "title": "Small",
                "postback": "small"
            },
            {
                "title": "Medium",
                "postback": "medium"
            }
        ]
    }
}

export const systemMessageJSON = {
    "type": "system",
    data: {
        "text": "This is a system message."
    }
}

export const vimeovideoMessageJSON = {
    "type": "vimeovideo",
    data: {
        "video_url": "https://player.vimeo.com/video/12345678"
    }
}

export const youtubevideoMessageJSON = {
    "type": "youtubevideo",
    data: {
        "video_url": "https://www.youtube.com/embed/123456789"
    }
}