var mapContainer = document.getElementById('map'), // 지도를 표시할 div
	mapOption = {
		center : new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
		level : 3 // 지도의 확대 레벨
	};

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성

// 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성
var mapTypeControl = new kakao.maps.MapTypeControl();

// 지도에 컨트롤을 추가해야 지도위에 표시
// kakao.maps.ControlPosition은 컨트롤이 표시 위치 TOPRIGHT는 오른쪽 위를 의미
map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

// 지도 확대 축소를 제어할 수 있는 줌 컨트롤을 생성
var zoomControl = new kakao.maps.ZoomControl();
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

// 지도에 클릭 이벤트를 등록
// 지도를 클릭하면 마지막 파라미터로 넘어온 함수를 호출
kakao.maps.event.addListener(map, 'click', function(mouseEvent){
	
	// 클릭한 위도, 경도 정보를 얻음
	var latlng = mouseEvent.latLng;
	
	var message = '클릭한 위치의 위도는' + latlng.getLat() + '이고, ';
	message += '경도는 ' + latlng.getLng() + ' 이다';
	
	var resultDiv =document.getElementById('result');
	resultDiv.innerHTML = message;
});