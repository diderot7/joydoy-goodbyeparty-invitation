import React from "react";
import { pictureList } from "../utill/picture.js";

const MainFooter = () => {
  pictureList.map((it) => console.log(it));
  return (
    <div className="PictureFrame">
      {pictureList.map((it) => (
        <div className="PictureList">
          <img src={it.joydoy_img} />
        </div>
      ))}
    </div>
  );
};

export default MainFooter;
