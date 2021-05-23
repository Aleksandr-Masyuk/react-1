const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
  let stateCopy;

  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      return {
        ...state,
        newMessageBody: action.body,
      };



    case SEND_MESSAGE:
      let body = state.newMessageBody;
      return {
        ...state,
        newMessageBody: "",
        messages: [...state.messages, { id: 5, message: body }],
      };

    default:
      return state;
  }
};

export const sendMessageCreator = () => {
  return {
    type: SEND_MESSAGE,
  };
};
export const updateNewMessageBodyCreator = (body) => {
  return {
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body,
  };
};

export default dialogsReducer;
