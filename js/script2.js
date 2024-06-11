$(document).ready(function () {

    var $panel = $(".slidebanner").find("ul");

    var itemWidth = $panel.children().outerWidth(); // 아이템 가로 길이
    var itemLength = $panel.children().length;      // 아이템 수

    // Auto 롤링 아이디
    var rollingId;

    auto();

    // 배너 마우스 오버 이벤트
    $panel.mouseover(function () {
        clearInterval(rollingId);
    });

    // 배너 마우스 아웃 이벤트
    $panel.mouseout(function () {
        auto();
    });

    // 이전 이벤트
    $("#prevv").on("click", prevv);

    $("#prevv").mouseover(function (e) {
        clearInterval(rollingId);
    });

    $("#prevv").mouseout(auto);

    // 다음 이벤트
    $("#nextt").on("click", nextt);

    $("#nextt").mouseover(function (e) {
        clearInterval(rollingId);
    });

    $("#nextt").mouseout(auto);

    function auto() {

        // 2초마다 start 호출
        rollingId = setInterval(function () {
            start();
        }, 2000);
    }

    function start() {
        $panel.css("width", itemWidth * itemLength);
        $panel.animate({ "left": - itemWidth + "px" }, function () {

            // 첫번째 아이템을 마지막에 추가하기
            $(this).append("<li>" + $(this).find("li:first").html() + "</li>");

            // 첫번째 아이템을 삭제하기
            $(this).find("li:first").remove();

            // 좌측 패널 수치 초기화
            $(this).css("left", 0);
        });
    }

    // 이전 이벤트 실행
    function prevv(e) {
        $panel.css("left", - itemWidth);
        $panel.prepend("<li>" + $panel.find("li:last").html() + "</li>");
        $panel.animate({ "left": "0px" }, function () {
            $(this).find("li:last").remove();
        });
    }

    // 다음 이벤트 실행
    function nextt(e) {
        $panel.animate({ "left": - itemWidth + "px" }, function () {
            $(this).append("<li>" + $(this).find("li:first").html() + "</li>");
            $(this).find("li:first").remove();
            $(this).css("left", 0);
        });
    }
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////// 

// $(document).ready(function () {

//     var $panel = $(".bookGallerys").find(".bookGallery");

//     var itemWidth = $panel.children().outerWidth(); // 아이템 가로 길이
//     var itemLength = $panel.children().length;      // 아이템 수

//     // Auto 롤링 아이디
//     var rollingId;

//     auto();

//     // 배너 마우스 오버 이벤트
//     $panel.mouseover(function () {
//         clearInterval(rollingId);
//     });

//     // 배너 마우스 아웃 이벤트
//     $panel.mouseout(function () {
//         auto();
//     });

//     // 이전 이벤트
//     $(".prev1_2").on("click", prevv);

//     $(".prev1_2").mouseover(function (e) {
//         clearInterval(rollingId);
//     });

//     $(".prev1_2").mouseout(auto);

//     // 다음 이벤트
//     $(".next1_2").on("click", nextt);

//     $(".next1_2").mouseover(function (e) {
//         clearInterval(rollingId);
//     });

//     $(".next1_2").mouseout(auto);

//     function auto() {

//         // 2초마다 start 호출
//         rollingId = setInterval(function () {
//             start();
//         }, 2000);
//     }

//     function start() {
//         $panel.css("width", itemWidth * itemLength);
//         $panel.stop().animate({ "left": - itemWidth + "px" }, function () {

//             // 첫번째 아이템을 마지막에 추가하기
//             $(this).append("<ul>" + $(this).find("ul:first").html() + "</ul>");
//             // 좌측 패널 수치 초기화
//             $(this).css("left", 0);
//             // 첫번째 아이템을 삭제하기
//             $(this).find("ul:first").remove();


//         });
//     }

//     // 이전 이벤트 실행
//     function prevv(e) {
//         $panel.css("left", - itemWidth);
//         $panel.prepend("<ul>" + $panel.find("ul:last").html() + "</ul>");
//         $panel.stop().animate({ "left": "0px" }, function () {
//             $(this).find("ul:last").remove();
//         });
//     }

//     // 다음 이벤트 실행
//     function nextt(e) {
//         $panel.stop().animate({ "left": - itemWidth + "px" }, function () {
//             $(this).append("<ul>" + $(this).find("ul:first").html() + "</ul>");
//             $(this).css("left", 0);
//             $(this).find("ul:first").remove();

//         });
//     }
// });

const signup = document.getElementById("sign-up");
signin = document.getElementById("sign-in");
loginin = document.getElementById("login-in");
loginup = document.getElementById("login-up");

signup.addEventListener("click", () => {
    loginin.classList.remove("block");
    loginup.classList.remove("none");

    loginin.classList.add("none");
    loginup.classList.add("block");
})

signin.addEventListener("click", () => {
    loginin.classList.remove("none");
    loginup.classList.remove("block");

    loginin.classList.add("block");
    loginup.classList.add("none");
})