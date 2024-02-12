import React, { useState } from "react";
import { pictureList } from "../utill/picture.js";
import MainHeader from "./MainHeader.js";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const sliceImg = pictureList.map((it) => (
  <div className="PictureList">
    <img src={it.joydoy_img} />
  </div>
));

const MainFooter = () => {
  const [currentIndex, setCurrentIndex] = useState();
  function handleChange(index) {
    setCurrentIndex(index);
  }
  return (
    <div className="MainFooter">
      <MainHeader text={"도련님과의 시간들"} />
      <div className="PictureFrame">
        <Carousel
          showArrows={true}
          autoPlay={true}
          infiniteLoop={true}
          showThumbs={false}
          selectedItem={sliceImg[currentIndex]}
          onChange={handleChange}
          className="PictureList"
        >
          {sliceImg}
        </Carousel>
      </div>
    </div>
  );
};

export default MainFooter;
