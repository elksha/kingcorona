var mapContainer = document.getElementById("map"); // 지도를 표시할 div

var KoreaUniv = {
  latitude: 37.591071,
  longitude: 127.027756
};

var mapOption = {
  center: new kakao.maps.LatLng(KoreaUniv.latitude, KoreaUniv.longitude), // 지도의 중심좌표
  level: 3 // 지도의 확대 레벨
};

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
