import displayMarker from "./marker.js";

const searchInput = document.querySelector(".search-input-in");
const searchBtn = document.getElementById("search-btn");

// 장소 검색 객체를 생성합니다
const ps = new kakao.maps.services.Places();

searchBtn.addEventListener("click", click);
searchInput.addEventListener("keyup", enterkey);

function click() {
  if (!searchInput.value) {
    alert("목적지를 입력해주세요!");
    searchInput.focus();
    return;
  }

  // 키워드로 장소를 검색합니다
  ps.keywordSearch(searchInput.value, placesSearchCB);
  console.log("success search");
}

function enterkey(event) {
  if (searchInput.value === null) {
    alert("목적지를 입력해주세요!");
    searchInput.focus();
    return false;
  }

  if (event.keyCode == 13) {
    // 엔터키가 눌렸을 때 실행할 내용
    ps.keywordSearch(searchInput.value, placesSearchCB);
    console.log("success search");
  }
}

function placesSearchCB(data, status, pagination) {
  if (status === kakao.maps.services.Status.OK) {
    const coords = new kakao.maps.LatLng(data[0].y, data[0].x);
    const place = data[0];
    // search 한걸로 마커
    displayMarker(coords, place);
  }
}
