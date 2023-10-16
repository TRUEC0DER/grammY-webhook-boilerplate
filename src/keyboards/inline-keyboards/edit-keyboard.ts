const editKeyboard = {
    inline_keyboard: [
        [
            {text: "👤 Change username", callback_data: "change-username"},
            {text: "✨ Change clicks count", callback_data: "change-clicks-count"}
        ],
        [
            {text: "❌ Cancel", callback_data: "conversation-cancel"}
        ]
    ],
    resize_keyboard: true
}

export default editKeyboard