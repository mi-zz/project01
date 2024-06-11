
$(function () {

    //  nav
    $('nav').hover(function () {
        $(this).children('ul').addClass('active')
        $(this).next('.sub_shadow').addClass('active')
    }, function () {
        $(this).children('ul').removeClass('active')
        $(this).next('.sub_shadow').removeClass('active')

    })


    $('nav>ul>li').mouseenter(function () {
        $(this).find('li').addClass('active')
    })
    $('nav>ul>li').mouseleave(function () {
        $(this).find('li').removeClass('active')
    })






    // 공지배너 1번째
    var visual = $('#brandVisual>ul>li') //슬라이드이미지
    var button = $('#buttonList>li') //동그라미버튼
    var leftBtn = $('.btnImg .prev') //이전버튼
    var rightBtn = $('.btnImg .next') //다음버튼

    var current = 0;

    var setIntervalId;

    timer();

    function timer() {
        setIntervalId = setInterval(function () {
            var prev = visual.eq(current)
            var pn = button.eq(current)
            move(prev, 0, '-100%')
            pn.removeClass('on')

            current++

            if (current == visual.size()) { current = 0 }

            var next = visual.eq(current)
            var pnn = button.eq(current)
            move(next, '100%', 0)
            pnn.addClass('on')
        }, 3000)
    }

    function move(tg, start, end) {
        tg.css('left', start).stop().animate({ left: end }, { duration: 500, ease: 'easeOutCubic' })
    }

    button.on({
        click: function () {
            var tg = $(this)
            var i = tg.index()

            button.removeClass('on')
            tg.addClass('on')

            move1(i)

        }
    })

    function move1(i) {
        if (current == i) return //현재 보이는 이미지가 i *인덱스 랑 같다면 종료 

        var currentEl = visual.eq(current)
        var nextEl = visual.eq(i)

        currentEl.css({ left: 0 }).stop().animate({ left: '-100%' }, 500)
        nextEl.css({ left: '100%' }).stop().animate({ left: 0 }, 500)
        current = i

    };

    $('#infoBn').on({
        mouseover: function () {
            clearInterval(setIntervalId)
        }, mouseout: function () {
            timer()
        }
    })

    rightBtn.click(function () {
        var prev = visual.eq(current)
        var pn = button.eq(current)

        move(prev, 0, '-100%')
        pn.removeClass('on')

        current++;

        if (current == visual.size()) { current = 0 }

        var next = visual.eq(current)
        var pnn = button.eq(current)

        move(next, '100%', 0)
        pnn.addClass('on')
        return
    })

    leftBtn.click(function () {
        var prev = visual.eq(current)
        var pn = button.eq(current)

        move(prev, 0, '100%')
        pn.removeClass('on')

        current--;

        if (current == -visual.size()) { current = 0 }

        var next = visual.eq(current)
        var pnn = button.eq(current)

        move(next, '-100%', 0)
        pnn.addClass('on')
        return
    })







    // 공지배너 2번째// 공지배너 2번째// 공지배너 2번째// 공지배너 2번째// 공지배너 2번째// 공지배너 2번째

    var noticePop = $('#noticePopupImg>ul>li') //슬라이드이미지
    var leftBtn2 = $('.btnImg .pre') //이전버튼
    var rightBtn2 = $('.btnImg .nex') //다음버튼

    var current2 = 0;

    var setIntervalId2;

    timer2();

    function timer2() {
        setIntervalId2 = setInterval(function () {
            var pre = noticePop.eq(current2)
            var pn = button.eq(current2)
            move2(pre, 0, '-100%')
            pn.removeClass('on')

            current2++

            if (current2 == noticePop.size()) { current2 = 0 }

            var nex = noticePop.eq(current2)
            var pnn = button.eq(current2)
            move2(nex, '100%', 0)
            pnn.addClass('on')
        }, 3000)
    }

    function move2(tg, start, end) {
        tg.css('left', start).stop().animate({ left: end }, { duration: 500, ease: 'easeOutCubic' })
    }

    button.on({
        click: function () {
            var tg = $(this)
            var i = tg.index()

            button.removeClass('on')
            tg.addClass('on')

            move3(i)

        }
    })

    function move3(i) {
        if (current2 == i) return //현재 보이는 이미지가 i *인덱스 랑 같다면 종료 

        var current2El = noticePop.eq(current2)
        var nexEl = noticePop.eq(i)

        current2El.css({ left: 0 }).stop().animate({ left: '-100%' }, 500)
        nexEl.css({ left: '100%' }).stop().animate({ left: 0 }, 500)
        current2 = i

    };

    $('#noticePopupImg').on({
        mouseover: function () {
            clearInterval(setIntervalId2)
        }, mouseout: function () {
            timer2()
        }
    })

    rightBtn2.click(function () {
        var pre = noticePop.eq(current2)
        var pn = button.eq(current2)

        move2(pre, 0, '-100%')
        pn.removeClass('on')

        current2++;

        if (current2 == noticePop.size()) { current2 = 0 }

        var nex = noticePop.eq(current2)
        var pnn = button.eq(current2)

        move2(nex, '100%', 0)
        pnn.addClass('on')
        return
    })

    leftBtn2.click(function () {
        var pre = noticePop.eq(current2)
        var pn = button.eq(current2)

        move2(pre, 0, '100%')
        pn.removeClass('on')

        current2--;

        if (current2 == -noticePop.size()) { current2 = 0 }

        var nex = noticePop.eq(current2)
        var pnn = button.eq(current2)

        move2(nex, '-100%', 0)
        pnn.addClass('on')
        return
    })






});




// 탭메뉴// 탭메뉴// 탭메뉴// 탭메뉴// 탭메뉴// 탭메뉴// 탭메뉴// 탭메뉴// 탭메뉴// 탭메뉴// 탭메뉴// 탭메뉴// 탭메뉴// 탭메뉴// 탭메뉴// 탭메뉴// 탭메뉴// 탭메뉴// 탭메뉴// 탭메뉴// 탭메뉴// 탭메뉴// 탭메뉴// 탭메뉴// 탭메뉴// 탭메뉴// 탭메뉴// 탭메뉴// 탭메뉴// 탭메뉴// 탭메뉴// 탭메뉴// 탭메뉴// 탭메뉴// 탭메뉴// 탭메뉴// 탭메뉴// 탭메뉴// 탭메뉴// 탭메뉴// 탭메뉴// 탭메뉴// 탭메뉴// 탭메뉴// 탭메뉴// 탭메뉴// 탭메뉴// 탭메뉴// 탭메뉴// 탭메뉴// 탭메뉴// 탭메뉴// 탭메뉴// 탭메뉴// 탭메뉴// 탭메뉴// 탭메뉴// 탭메뉴

jQuery(document).ready(function () {

    $('#bannerWrap').each(function () {

        var topDiv = $(this)
        var anchors = topDiv.find('.bookMenu>li>a') //타이틀
        var pannelDivs = topDiv.find('div.frame') //설명

        var lastAnchor;
        var lastPanel;

        anchors.show();

        lastAnchor = anchors.filter('.on');

        lastPanel = $(lastAnchor.attr('href'));

        pannelDivs.hide(); //모든 설명부분 닫아(숨김)
        lastPanel.show(); //on 걸려있는 부분 열어(보임)

        anchors.click(function (event) {
            event.preventDefault(); //원래의 링크 속성 없애기

            var currentAnchor = $(this);//활성화 될 자기 자신만을 선택하여
            var currnetPannel = $(currentAnchor.attr('href'));

            if (currentAnchor.get(0) === lastAnchor.get(0)) {
                return
            }

            lastPanel.show(200, function () {
                lastAnchor.removeClass('on')
                currentAnchor.addClass('on')
                // currnetPannel.slideDown(200)
                lastPanel.hide()
                currnetPannel.show(200)
                lastAnchor = currentAnchor
                lastPanel = currnetPannel

            })


        })

    })



});



// 자주찾는 메뉴// 자주찾는 메뉴// 자주찾는 메뉴// 자주찾는 메뉴// 자주찾는 메뉴// 자주찾는 메뉴// 자주찾는 메뉴// 자주찾는 메뉴// 자주찾는 메뉴// 자주찾는 메뉴// 자주찾는 메뉴// 자주찾는 메뉴// 자주찾는 메뉴// 자주찾는 메뉴// 자주찾는 메뉴// 자주찾는 메뉴// 자주찾는 메뉴// 자주찾는 메뉴// 자주찾는 메뉴// 자주찾는 메뉴// 자주찾는 메뉴// 자주찾는 메뉴// 자주찾는 메뉴// 자주찾는 메뉴// 자주찾는 메뉴// 자주찾는 메뉴// 자주찾는 메뉴// 자주찾는 메뉴// 자주찾는 메뉴// 자주찾는 메뉴
$(function () {


    var slide1 = $('#menuWrap>ul');

    //슬라이드 배너 리스트 영역의 너비
    var slideListWidth1 = $('#menuWrap>ul>li').width()

    //오른쪽버튼 클릭했을 때 배너가 오른쪽에서 왼쪽으로 이동

    function next1_1() {
        slide1.stop().animate({ left: -slideListWidth1 }, function () {
            $('#menuWrap>ul>li:first').insertAfter('#menuWrap>ul>li:last')
            slide1.css('left', 0)
            slide1.animate({ left: -slideListWidth1 })
        })
    }

    $('.next1_1').click(function () {
        next1_1();
    })

    //왼쪽버튼 클릭했을 때 배너가 왼쪽에서 오른쪽으로 이동
    function prev1_1() {
        slide1.stop().animate({ left: 0 }, function () {
            $('#menuWrap>ul>li:last').insertBefore('#menuWrap>ul>li:first')
            slide1.css('left', -slideListWidth1)
            slide1.animate({ left: 0 })
        })

    }

    $('.prev1_1').click(function () {
        prev1_1();
    })

})
// 자주찾는 메뉴// 자주찾는 메뉴// 자주찾는 메뉴// 자주찾는 메뉴// 자주찾는 메뉴// 자주찾는 메뉴// 자주찾는 메뉴// 자주찾는 메뉴// 자주찾는 메뉴// 자주찾는 메뉴// 자주찾는 메뉴// 자주찾는 메뉴// 자주찾는 메뉴// 자주찾는 메뉴// 자주찾는 메뉴// 자주찾는 메뉴// 자주찾는 메뉴// 자주찾는 메뉴// 자주찾는 메뉴// 자주찾는 메뉴// 자주찾는 메뉴// 자주찾는 메뉴// 자주찾는 메뉴// 자주찾는 메뉴// 자주찾는 메뉴// 자주찾는 메뉴// 자주찾는 메뉴// 자주찾는 메뉴// 자주찾는 메뉴// 자주찾는 메뉴// 자주찾는 메뉴// 자주찾는 메뉴// 자주찾는 메뉴// 자주찾는 메


$(function(){
    // <ul id="banner">를 list 변수에 참조
    var list = $("#banner");

    // 프레임의 사진 노출 개수
    var showNum = 4;

    // 이전, 다음 버튼을 클릭할 때마다 증감되는 값
    var num = 0;

    // 총 <li>의 개수 5가 저장된다.
    var total = $(">li", list).size();

    // <li>의 너빗값 250px이 저장된다.
    var liWidth = $("li:first", list).width(); //li요소 중 첫번째 일치하는 요소 찾기(":first"). 

    
    /* 
        <li> 태그 중 인덱스 값이 3보다 작은 <li> 태그만 복제한다.
        그러므로 0,1,2 인덱스에 해당하는 <li> 태그가 복제되어
        <ul id="banner">에 추가한다.
    */

    /* 
     :gt(index)인자로 전달된 index 보다 큰 index를 가진 요소를 모두 가져온다. 
     :lt(index)인자로 전달된 index 보다 작은 index를 가진 요소를 모두 가져온다.      
    */

    var obj = $(">li:lt("+showNum+")", list).clone();
    list.append(obj);
    
    // 다음 버튼을 클릭할 때마다 이벤트 핸들러를 실행한다.
    $(".next1_2").on("click", function(){

        if(num == total){ // num값이 배너의 총갯수 5일 경우 조건문을 실행
            num = 0; // num값 초기화
            list.css("margin-left",num); // 배너가 첫 부분으로 이동
        }
        num++;
        
        list.stop().animate({marginLeft:-liWidth*num+"px"},500);


        return false;
    });
    
    // 이전 버튼을 클릭할 때마다 이벤트 핸들러를 실행한다.
    $(".prev1_2").on("click", function(){
        if(num == 0){    // num값이 0일 경우 조건문을 수행
            num = total; // num값이 5가 된다.
            // 배너가250*5 = 1250px만큼 이동
            list.css("margin-left", -num*liWidth+"px");
        }
        
        num--;
        list.stop().animate({marginLeft:-liWidth*num+"px"},500);
        return false;
    });
});



$(function(){
    // <ul id="banner">를 list 변수에 참조
    var list = $("#banner2");

    // 프레임의 사진 노출 개수
    var showNum = 4;

    // 이전, 다음 버튼을 클릭할 때마다 증감되는 값
    var num = 0;

    // 총 <li>의 개수 5가 저장된다.
    var total = $(">li", list).size();

    // <li>의 너빗값 250px이 저장된다.
    var liWidth = $("li:first", list).width(); //li요소 중 첫번째 일치하는 요소 찾기(":first"). 

    
    /* 
        <li> 태그 중 인덱스 값이 3보다 작은 <li> 태그만 복제한다.
        그러므로 0,1,2 인덱스에 해당하는 <li> 태그가 복제되어
        <ul id="banner">에 추가한다.
    */

    /* 
     :gt(index)인자로 전달된 index 보다 큰 index를 가진 요소를 모두 가져온다. 
     :lt(index)인자로 전달된 index 보다 작은 index를 가진 요소를 모두 가져온다.      
    */

    var obj = $(">li:lt("+showNum+")", list).clone();
    list.append(obj);
    
    // 다음 버튼을 클릭할 때마다 이벤트 핸들러를 실행한다.
    $(".next1_2").on("click", function(){

        if(num == total){ // num값이 배너의 총갯수 5일 경우 조건문을 실행
            num = 0; // num값 초기화
            list.css("margin-left",num); // 배너가 첫 부분으로 이동
        }
        num++;
        
        list.stop().animate({marginLeft:-liWidth*num+"px"},500);


        return false;
    });
    
    // 이전 버튼을 클릭할 때마다 이벤트 핸들러를 실행한다.
    $(".prev1_2").on("click", function(){
        if(num == 0){    // num값이 0일 경우 조건문을 수행
            num = total; // num값이 5가 된다.
            // 배너가250*5 = 1250px만큼 이동
            list.css("margin-left", -num*liWidth+"px");
        }
        
        num--;
        list.stop().animate({marginLeft:-liWidth*num+"px"},500);
        return false;
    });
});