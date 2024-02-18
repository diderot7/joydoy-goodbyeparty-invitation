import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const KakaoMap = () => {
  const { kakao } = window;
  useEffect(() => {
    const container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
    const options = {
      //지도를 생성할 때 필요한 기본 옵션
      center: new kakao.maps.LatLng(37.5619185, 126.826919), //지도의 중심좌표.
      level: 3, //지도의 레벨(확대, 축소 정도)
    };
    const map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
    const markerPosition = new kakao.maps.LatLng(37.5619185, 126.826919);
    const marker = new kakao.maps.Marker({
      position: markerPosition,
    });
    marker.setMap(map);
  }, []);

  // <Link to="kakaomap://look?p=37.537229,127.00551"></Link>
  return (
    <div className="mapcontainer">
      <div id="map" className="map"></div>
      <div className="map-direct-btn">
        <div className="map-direct-btn-kakao">
          <Link to="https://map.kakao.com/link/to/카카오판교오피스,37.402056,127.108212">
            <button>
              <img src={`${process.env.PUBLIC_URL}/kakao_map.jpg`} />
            </button>
          </Link>
        </div>

        <div>
          <Link to="https://map.kakao.com/link/to/카카오판교오피스,37.402056,127.108212">
            <button>s</button>
          </Link>
        </div>
        <div>
          <button>s</button>
        </div>
      </div>
    </div>
  );
};

export default KakaoMap;
