import React from "react";
import s from "./Post.module.css";

function Post(props) {
  return (
    <div className={s.item}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQryBRJbe7-3dRFP26EphWQhZokbr7JdRQRdQ&usqp=CAU" />
      {props.message}
      <div>
        like {props.likesCount}
      </div>
    </div>
  );
}

export default Post;
