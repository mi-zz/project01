$(document).ready(function() {
		
    $('#calendar').fullCalendar({ //함수명 fullCalendar

        //header표시할 영역
        header: {
            left: ' prev,next,today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        },
        //defaultDate: '2022-06-01', //디폴트 날짜 
        selectable: true, // 달력 일자 드래그 설정가능
        selectHelper: true,
        height: "500px",  //달력 높이에 따라 다르게
        select: function(start, end) { // 캘린더에서 드래그로 이벤트를 생성할 수 있다.
            var title = prompt('Event Title:'); //입력창
            var eventData;
            if (title) {
                eventData = { 
                    title: title,
                    start: start,
                    end: end
                };
                $('#calendar').fullCalendar('renderEvent', eventData, true); // stick? = true
            }
            $('#calendar').fullCalendar('unselect');
        },
        editable: true, //수정가능
        eventLimit: true, // 이벤트가 너무 많은경우 추가 링크 허용
    });
    
});