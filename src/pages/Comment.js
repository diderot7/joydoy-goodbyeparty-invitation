import React from "react";
import MyButton from "../components/MyButton";

const Comment = () => {
  return (
    <div className="Comment">
      <div className="CommentList">
        <h2>commnet List 위치</h2>
      </div>
      <div className="Commnet-Input-MainInputArea">
        <textarea />
        <div className="Commnet-Input-MainNameArea">
          <div className="Comment-Input-Area">
            <div className="Comment-Input-Area-NameArea">
              <p className="Comment-Input-Area-Name">이름 :</p>
              <input className="Comment-Input-Area-Value" />
            </div>
            <div className="Comment-Input-Area-NameArea">
              <p className="Comment-Input-Area-Name">비밀번호 :</p>
              <input className="Comment-Input-Area-Value" />
            </div>
            <div>
              <MyButton text={"입력"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
