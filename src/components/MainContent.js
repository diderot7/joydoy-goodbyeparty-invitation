import React from "react";

const MainContent = ({ placeText, reservationDate, reservationTime }) => {
  return (
    <div className="MainContent">
      <div className="MainContent-container">
        <div className="MainContent-Place">
          <h2>장소 :</h2>
          <p className="PlaceText">{placeText}</p>
        </div>
        <div className="MainContent-Date">
          <h2>날짜 : </h2>
          <p className="PlaceDateText">{JSON.stringify(reservationDate)}</p>
        </div>
        <div className="MainContent-Time">
          <h2>시간 :</h2>
          <p className="PlaceDateTime">{JSON.stringify(reservationDate)}</p>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
