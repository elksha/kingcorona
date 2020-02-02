import displayMarker from "./marker.js";

const reLocate = document.querySelector(".currpos");

reLocate.addEventListener("click", getAndDisplayLocation);

getAndDisplayLocation();

// HTML5의 geolocation으로 사용할 수 있는지 확인합니다
function getAndDisplayLocation() {
  if (navigator.geolocation) {
    // GeoLocation을 이용해서 접속 위치를 얻어옵니다
    navigator.geolocation.getCurrentPosition(
      geolocationSuccess,
      geolocationFail
    );
  } else {
    // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
    geolocationDefault();
  }
}

function geolocationSuccess(position) {
  const lat = position.coords.latitude; // 위도
  const lon = position.coords.longitude; // 경도

  const locPosition = new kakao.maps.LatLng(lat, lon); // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다

  // 마커와 인포윈도우를 표시합니다
  displayMarker(locPosition);
}

function geolocationFail(error) {
  if (error.code == error.PERMISSION_DENIED) {
    geolocationDefault();
  }
}

function geolocationDefault() {
  const locPosition = new kakao.maps.LatLng(
    KoreaUniv.latitude,
    KoreaUniv.longitude
  );
  displayMarker(locPosition);
}
