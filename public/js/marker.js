// 지도에 마커와 인포윈도우를 표시하는 함수입니다
function displayMarker(locPosition, place) {
  // 마커를 생성합니다
  const marker = new kakao.maps.Marker({
    map: map,
    position: locPosition
  });

  const infowindow = new kakao.maps.InfoWindow({zIndex:1});
  // 마커에 클릭이벤트를 등록합니다
  if(place){
    kakao.maps.event.addListener(marker, "click", function() {
      // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
      infowindow.setContent(
        '<div style="padding:5px;font-size:12px;">' + place.place_name + "</div>"
      );
      infowindow.open(map, marker);
    });
  }

  // 지도 중심좌표를 접속위치로 변경합니다
  map.setCenter(locPosition);
  marker.setMap(map);
}

export default displayMarker;