import React from "react";
import DialogItem from "./DialogItem/DialogsItem.jsx";
import s from "./Dialogs.module.css";
import Message from "./Message/Message.jsx";
import {Redirect} from "react-router-dom"

function Dialogs(props) {
  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map((d) => {
    return <DialogItem name={d.name} key={d.id} id={d.id} />;
  });
  let messagesElements = state.messages.map((m) => {
    return <Message messages={m.message} key={m.id}/>;
  });
  let newMessageBody = state.newMessageBody;

  let onSendMessageClick = () => {
    props.sendMessage();
  };

  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
  };

  if (!props.isAuth) return <Redirect to={"/login"}/>

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>

      <div className={s.messages}>
        <div>{messagesElements}</div>
        <div>
          <div>
            <textarea
              value={newMessageBody}
              onChange={onNewMessageChange}
              placeholder="Enter your message"
            ></textarea>
          </div>
          <div>
            <button onClick={onSendMessageClick}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dialogs;
