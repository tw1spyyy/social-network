import { combineReducers, createStore } from "redux";
import { NavReducer } from "./NavReducer";
import { ProfileReducer } from "./ProfileReducer";
import { DialogsReducer } from "./DialogsReducer";
import { MusicReducer } from "./MusicReducer";

let reducers = combineReducers({
  navPage: NavReducer,
  profilePage: ProfileReducer,
  dialogsPage: DialogsReducer,
  musicPage: MusicReducer,
});

export let store = createStore(reducers);
