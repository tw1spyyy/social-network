import { act } from "react-dom/test-utils";

const inititalState = {
  postsData: [
    { id: 1, name: "vlad gerast", coment: "my nave is vlad and i am a boss" },
    { id: 2, name: "Gustavo Fring", coment: "But you can call me gus" },
    { id: 3, name: "Sabinina mama", coment: "it is my first post" },
  ],
  newPostText: "hey, whats up ,bro",
};

export const ProfileReducer = (state = inititalState, action) => {
  if (action.type === "CHANGE-POST-TEXT") {
    return {
      ...state,
      newPostText: action.newText,
    };
  } else if (action.type === "SEND-POST") {
    const newPost = {
      id: 4,
      name: "sabinina mama",
      coment: state.newPostText,
    };
    return {
      ...state,
      postsData: [...state.postsData, newPost],
      newPostText: "",
    };
  }
  return state;
};

export const onChangePostAC = (newText) => ({
  type: "CHANGE-POST-TEXT",
  newText: newText,
});

export const onClickSendAC = () => ({
  type: "SEND-POST",
});
