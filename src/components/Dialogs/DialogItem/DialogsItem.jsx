import React from "react";
import s from "./../Dialogs.module.css";
import { NavLink } from "react-router-dom";

function DialogItem(props) {
  let path = "/dialogs/" + props.id;
  return (
    <div className={s.dialog}>
      <NavLink to={path} className={s.dialog}>
        {props.name}
      </NavLink>
    </div>
  );
}

export default DialogItem;
