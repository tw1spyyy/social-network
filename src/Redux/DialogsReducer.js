const initialState = {
  messagesData: [
    { id: 1, message: "hey whats up!" },
    { id: 2, message: "Hey bro its OK" },
    { id: 3, message: "Are you ready?" },
    { id: 4, message: "I am always ready, dude" },
    { id: 5, message: "Come on ,bro" },
  ],
  contactsData: [
    { id: 1, name: "sophie" },
    { id: 2, name: "sonia" },
    { id: 3, name: "vlad" },
    { id: 4, name: "misha" },
  ],
  newDialogsMessage: "",
};

export const DialogsReducer = (state = initialState, action) => {
  if (action.type === "CHANGE-DIALOGS-MESSAGE") {
    return {
      ...state,
      newDialogsMessage: action.newText,
    };
  } else if (action.type === "SEND-DIALOGS-MESSAGE") {
    const newMessage = {
      id: 6,
      message: state.newDialogsMessage,
    };
    return {
      ...state,
      messagesData: [...state.messagesData, newMessage],
      newDialogsMessage: "",
    };
  }
  return state;
};

export const sendMessageAC = () => ({
  type: "SEND-DIALOGS-MESSAGE",
});

export const changeMessageAC = (newText) => ({
  type: "CHANGE-DIALOGS-MESSAGE",
  newText: newText,
});
