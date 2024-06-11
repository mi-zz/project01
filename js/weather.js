$(function () {
  /* 날씨데이터 */
  /* API(애플리케이션 프로그래밍 인터페이스):API는 응용 프로그램에서 사용할 수 있도록, 운영 체제나 프로그래밍 언어가 제공하는 기능을 제어할 수 있게 만든 인터페이스.
   - API를 사용하면 구현 방식을 알지 못해도 제품 또는 서비스가 서로 커뮤니케이션할 수 있으며 애플리케이션 개발을 간소화하여 시간과 비용을 절약 즉, API를 사용하면 많은 이점들이 있는데요. Private API를 이용할 경우, 개발자들이 애플리케이션 코드를 작성하는 방법을 표준화함으로써, 간소화되고 빠른 프로세스 처리를 가능하게 함. */

  /* jQuery를 이용해 JSON 데이터 가져오기.  GET 으로 데이터를 전송하고 JSON으로 받을 때 사용. JSON (JavaScript Object Notation)은 경량의 DATA-교환 형식이다. 이 형식은 사람이 읽고 쓰기에 용이하며, 기계가 분석하고 생성함에도 용이 */

  /* https://www.google.com/search?q=%EC%95%88%EC%96%91+api+%EC%BD%94%EB%93%9C&ei=k0i5YbqQL6ONseMPucKCwAs&ved=0ahUKEwj6pcOd1-T0AhWjRmwGHTmhALgQ4dUDCA4&uact=5&oq=%EC%95%88%EC%96%91+api+%EC%BD%94%EB%93%9C&gs_lcp=Cgdnd3Mtd2l6EAM6CAgAELADEM0COgUIABDNAjoFCCEQoAE6BgghEAoQKkoECEEYAUoECEYYAFDrBljODWCDEWgCcAB4AIABgwKIAbYFkgEFMS4zLjGYAQCgAQHIAQHAAQE&sclient=gws-wiz */

  /* 안양지역코드 : 102340 */

  /* 참고 : https://okky.kr/article/843982 */

  /* API는 응용 프로그램에서 사용할 수 있도록, 운영 체제나 프로그래밍 언어가 제공하는 기능을 제어할 수 있게 만든 인터페이스를 뜻한다 */
  /* 참고사이트 :  https://icedhotchoco.tistory.com/entry/OpenWeatherMap-%EB%82%A0%EC%94%A8-API */

  /* 날씨api 발급 사이트 : https://home.openweathermap.org/users/sign_in  */
  /* 날씨 정보를 요청받는 URL */
  $.getJSON(
    "https://api.openweathermap.org/data/2.5/weather?lat=37.5665851&lon=126.9782038&appid=828676a8cb191871525d4ba5f1a8879b&units=Metric",
    function (data) {
      var $city = data.name; //도시이름
      var $minTemp = data.main.temp_min; /* 최저온도. temp º도씨표현 */
      var $maxTemp = data.main.temp_max; /* 최고온도 */
      var $cTemp = data.main.temp; /*현재온도  */
      var $humidity = data.main.humidity; /*현재습도  */

      var $wind = data.wind.speed; //바람속도

      var now = new Date(Date.now()); /* 현재날짜 */
      var b = now.getDay();
      switch (b) {
        case 0:
          c = "일";
          break;

        case 1:
          c = "월";
          break;

        case 2:
          c = "화";
          break;

        case 3:
          c = "수";
          break;

        case 4:
          c = "목";
          break;

        case 5:
          c = "금";
          break;

        case 6:
          c = "토";
          break;
      }

      /* 날씨아이콘 참고사이트 : https://showyourself.tistory.com/6 */

      /* 날씨아이콘 데이터 : OpenWeatherMap 오픈 API
- 현재의 날씨 정보가 필요하기 때문에 Current weather data('https://openweathermap.org/current') API를 사용.
- 날씨를 불러오는 방법은 지역이름, 지역ID,위도,경도과 같은 위치 정보등...
- 앞의 코드 2자리 숫자로 날씨를 구분하고 영어 소문자 'n'과 'd'로 낮과 밤을 구분.
- 폰트어썸 이미지이용하여 각 아이콘 코드의 숫자에 따라 폰트어썸에서 제공한 각 날씨의 아이콘 스크립트를 저장한 객체 weatherIcon을 생성.
- 아이콘 코드의 앞 두자리 숫자만 필요하므로 .substr(0, 2)을 이용하여 변수 $Icon에 저장.
- 원래의 아이콘 출력 url대신 '<i class="' + weatherIcon[$Icon] + '"></i>'에 출력

*/

      let weatherIcon = {
        //스코프의 범위를 가지는 지역 변수
        "01": "wi wi-day-sunny",
        "02": "wi wi-day-cloudy",
        "03": "wi wi-cloud",
        "04": "wi wi-cloudy",
        "09": "wi wi-day-rain-mix",
        10: "wi wi-showers",
        11: "wi wi-thunderstorm",
        13: "wi wi-snowflake-cold",
        50: "wi wi-smog",
      };

      var month = now.getMonth() + 1;
      var $cDate =
        now.getFullYear() +
        "년 " +
        month +
        "월 " +
        now.getDate() +
        "일 " +
        c +
        "요일 "/*  +
        now.getHours() +
        "시 " +
        now.getMinutes() +
        "분 "; */

      //자바스크립트에서 문자열을 자르기 위해서는 substr(), substring(), slice() 함수를 사용.
      //substr("시작(start) 위치", "길이(length)") 또는 substr("시작 위치")
      var $wIcon = data.weather[0].icon.substr(0, 2);

      $(".clowtemp").append($minTemp + "℃"); // ㄹ+한자
      $(".chightemp").append($maxTemp + "℃"); //.append()는 선택한 요소의 내용의 끝에 콘텐트를 추가 배열
      $(".ctemp").append($cTemp + "℃");
      $(".cicon").append('<i class="' + weatherIcon[$wIcon] + '"></i>');
      $(".date").prepend($cDate); //.prepend()는 선택한 요소의 내용의 앞에 콘텐트를 추가 배열
      $(".cname").append($city);
      $(".humidity").append($humidity);
      $(".wind").append($wind);
    }
  );

  /* 	$.getJSON('https://smartcity.gimhae.go.kr/smart_tour/dashboard/api/publicData/dustSensor', function(data2){
		var $dev_id = data2.coordy; 
		$('.dev_id').append($dev_id);
	});
 */

  /* 
   .append()선택된 요소의 마지막에 새로운 요소나 콘텐츠를 추가한다..prepend()선택된 요소의 첫번째에 새로운 요소나 콘텐츠를 추가한다..appendTo()선택된 요소를 해당 요소의 마지막에 추가한다..prependTo()선택된 요소를 해당 요소의 첫번째에 추가한다.
   출처: https://araikuma.tistory.com/609 [프로그램 개발 지식 공유]
   */
});
