import React, { useState } from "react";
import MainHeader from "./components/MainHeader";
import KakaoMap from "./components/KakaoMap";
import MainContent from "./components/MainContent";
import MainFooter from "./components/MainFooter";
import "./App.css";

const App = () => {
  const [reservationDate, setReservationDate] = useState(new Date());

  return (
    <div className="App">
      <MainHeader />
      <KakaoMap />
      <MainContent
        placeText={"마곡"}
        reservationDate={reservationDate}
        reservationTime={reservationDate}
      />
      <MainFooter />
    </div>
  );
};
export default App;
