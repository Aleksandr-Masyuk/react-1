import React from "react";
import s from "./../Dialogs.module.css";


function Message(props) {
  return <div className={s.message}>{props.messages}</div>;
}

export default Message;
