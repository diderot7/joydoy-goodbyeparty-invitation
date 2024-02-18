import React from "react";
import MainHeader from "../components/MainHeader";
import KakaoMap from "../components/KakaoMap";
import MainContent from "../components/MainContent";
import MainFooter from "../components/MainFooter";
import MyButton from "../components/MyButton";
import { useNavigate } from "react-router-dom";
import MainCalendar from "../components/MainCalendar";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="Home">
      <MainHeader text={"세젤귀 전도영군의 잘가라(가지마)파티에 초대합니다❤"} />
      <KakaoMap />
      <MainContent />
      <MainCalendar />
      <MainFooter />
      {/* <MyButton
        text={"도련님에게 한마디"}
        onClick={() => navigate(`/comment`)}
      /> */}
    </div>
  );
};

export default Home;

// import MainHeader from "./components/MainHeader";
// import KakaoMap from "./components/KakaoMap";
// import MainContent from "./components/MainContent";
// import MainFooter from "./components/MainFooter";

// <MainHeader />
//         <KakaoMap />
//         <MainContent
//           placeText={"마곡"}
//           reservationDate={reservationDate}
//           reservationTime={reservationDate}
//         />
//         <MainFooter />
