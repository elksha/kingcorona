var markers = [];
// 지도에 마커와 인포윈도우를 표시하는 함수입니다
function displayMarker(locPosition, place) {
  // 마커를 생성합니다
  map.setLevel(5);
  hideMarkers();
  hideOverlays();

  const marker = new kakao.maps.Marker({
    map: map,
    position: locPosition
  });

  // const infowindow = new kakao.maps.InfoWindow({zIndex:1});
  // 마커에 클릭이벤트를 등록합니다
  if(place){
    const content = '<div class="wrap" id="overdiv">' + 
    '    <div class="info">' + 
    '        <div class="title">' + place.place_name + 
    '            <div id="search-overlay" class="close" onclick="closeSearchOverLay()" title="닫기"></div>' + 
    '        </div>' + 
    '        <div class="body">' +
    '            <div class="desc">' + 
    '                <div class="ellipsis">' + place.address_name + '</div>' + 
    '<div class="telroad" style="display: flex; flex-direction: row; justify-content: space-around; position: relative; right: 10px;">' +
    '                <div><div class="smallicons phone"></div><a href="tel:' + place.phone + '" target="_blank" class="link">전화걸기</a></div>' + 
    '                <div><div class="smallicons pin"></div><a href="https://map.kakao.com/link/to/' + place.address_name + ',' + place.y + ',' + place.x +'" class="link">길찾기</div>' +
    '</div>' +
    '            </div>' + 
    '        </div>' + 
    '    </div>' +    
    '</div>';

    const overLay = new kakao.maps.CustomOverlay({
                      content: content,
                      map: map,
                      position: locPosition,       
                  });

    // overLay.setMap(null);   
    // overLay.setMap(map);

    
    kakao.maps.event.addListener(marker, "click", function() {
      // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
      overLay.setMap(null);   
      overLay.setMap(map);
      // seracrOverLays.push(overLay);
    });
    searchOverLays.push(overLay);
  }

  // 지도 중심좌표를 접속위치로 변경합니다
  map.setCenter(locPosition);
  marker.setMap(map);
  markers.push(marker);
}

function hideMarkers(){
  for(let i=0; i<markers.length; i++){
    markers[i].setMap(null); 
  }
}

function hideOverlays(){
  setCoffeeOverlays(null);
  setStoreOverlays(null);
  setSearchOverlays(null);
}

function closeSearchOverLay(){
  for(let i=0; i<searchOverLays.length; i++){
    searchOverLays[i].setMap(null);
  }
}

export {displayMarker, hideMarkers};