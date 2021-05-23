import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 0, message: "Hi 111111", likesCount: 12 },
        { id: 1, message: "Hi 222222", likesCount: 11 },
        { id: 2, message: "Hi 222222", likesCount: 17 },
        { id: 3, message: "Hi 222222", likesCount: 14 },
        { id: 4, message: "Hi 222222", likesCount: 1 },
      ],

      newPostText: "it-kam",
    },

    dialogsPage: {
      dialogs: [
        { id: 1, name: "Sergeu" },
        { id: 2, name: "Alexandr" },
        { id: 3, name: "Alexseu" },
        { id: 4, name: "Dnimriu" },
        { id: 5, name: "Alena" },
      ],

      messages: [
        { id: 0, message: "Hi 1" },
        { id: 1, message: "Hi 2" },
        { id: 2, message: "Hi 3" },
        { id: 3, message: "Hi 4" },
        { id: 4, message: "Hi 5" },
      ],
      newMessageBody: "",
    },
    sidebar: {},
  },
  _callSubscriber() {
    console.log("state");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  },
};

export default store;
window.store = store;
