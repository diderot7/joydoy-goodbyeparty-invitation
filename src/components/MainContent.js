import React from "react";

const MainContent = ({ placeText, reservationDate, reservationTime }) => {
  return (
    <div className="MainContent">
      <div className="MainContent-container">
        <div className="MainContent-Place">
          <h2>장소 : </h2>
          <p className="PlaceText">엉터리 생고기</p>
        </div>

        <div className="MainContent-Time">
          <h2>시간 :</h2>
          <p className="PlaceDateTime">18:00</p>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
