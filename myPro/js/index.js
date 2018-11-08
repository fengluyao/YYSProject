$("#close").on("click",function(e){
    e.preventDefault();
    var close = $(this);
    close.css("display","none");
    $(".load").css("right","-198px");
    $("#open").css("display","block");
})
$("#open").on("click",function(e){
    e.preventDefault();
    var open = $(this);
    open.css("display","none");
    $(".load").css("right","0px");
    $("#close").css("display","block");
})

// 轮播板块

var lunbo = 1;
function next(){
    switch(lunbo){
            case 1: $("#img1").addClass("img_item4").removeClass("img_item1").css("zIndex", "2");
                    $("#img2").addClass("img_item1").removeClass("img_item2").css("zIndex", "3");
                    $("#img3").addClass("img_item2").removeClass("img_item3").css("zIndex", "2");
                    $("#img4").addClass("img_item3").removeClass("img_item4").css("zIndex", "1");
                    lunbo++;
                    break;
            case 2: $("#img1").addClass("img_item3").removeClass("img_item4").css("zIndex", "1");
                    $("#img2").addClass("img_item4").removeClass("img_item1").css("zIndex", "2");
                    $("#img3").addClass("img_item1").removeClass("img_item2").css("zIndex", "3");
                    $("#img4").addClass("img_item2").removeClass("img_item3").css("zIndex", "2");
                    lunbo++;
                    break;
            case 3: $("#img1").addClass("img_item2").removeClass("img_item3").css("zIndex", "2");
                    $("#img2").addClass("img_item3").removeClass("img_item4").css("zIndex", "1");
                    $("#img3").addClass("img_item4").removeClass("img_item1").css("zIndex", "2");
                    $("#img4").addClass("img_item1").removeClass("img_item2").css("zIndex", "3");
                    lunbo++;
                    break;
            case 4: $("#img1").addClass("img_item1").removeClass("img_item2").css("zIndex", "3");
                    $("#img2").addClass("img_item2").removeClass("img_item3").css("zIndex", "2");
                    $("#img3").addClass("img_item3").removeClass("img_item4").css("zIndex", "1");
                    $("#img4").addClass("img_item4").removeClass("img_item1").css("zIndex", "2");
                    lunbo = 1;
        }
}
// function prev(){
//         switch(lunbo){
//                 case 1: $("#img1").addClass("img_item2").removeClass("img_item1").css("zIndex", "2");
//                         $("#img2").addClass("img_item3").removeClass("img_item2").css("zIndex", "1");
//                         $("#img3").addClass("img_item4").removeClass("img_item3").css("zIndex", "2");
//                         $("#img4").addClass("img_item1").removeClass("img_item4").css("zIndex", "3");
//                         lunbo++;
//                         break;
//                 case 2: $("#img1").addClass("img_item3").removeClass("img_item2").css("zIndex", "2");
//                         $("#img2").addClass("img_item4").removeClass("img_item3").css("zIndex", "1");
//                         $("#img3").addClass("img_item1").removeClass("img_item4").css("zIndex", "3");
//                         $("#img4").addClass("img_item2").removeClass("img_item1").css("zIndex", "2");
//                         lunbo++;
//                         break;
//                 case 3: $("#img1").addClass("img_item4").removeClass("img_item3").css("zIndex", "1");
//                         $("#img2").addClass("img_item1").removeClass("img_item4").css("zIndex", "3");
//                         $("#img3").addClass("img_item2").removeClass("img_item1").css("zIndex", "2");
//                         $("#img4").addClass("img_item3").removeClass("img_item2").css("zIndex", "2");
//                         lunbo++;
//                         break;
//                 case 4: $("#img1").addClass("img_item1").removeClass("img_item4").css("zIndex", "3");
//                         $("#img2").addClass("img_item2").removeClass("img_item1").css("zIndex", "2");
//                         $("#img3").addClass("img_item3").removeClass("img_item2").css("zIndex", "1");
//                         $("#img4").addClass("img_item4").removeClass("img_item3").css("zIndex", "2");
//                         lunbo = 1;
//             }
//     }
// var lunbo=1
//         function next(){
//             var imgs= document.getElementsByClassName("images");
//             console.log(imgs[0]);
//             switch (lunbo){
//                 case 1 :imgs[0].className="img_item4";
//                         imgs[1].className="img_item1";
//                         imgs[2].className="img_item2";
//                         imgs[3].className="img_item3";
//                         lunbo++;
//                         break;
//                 case 2 :imgs[0].className="img_item1";
//                         imgs[1].className="img_item2";
//                         imgs[2].className="img_item3";
//                         imgs[3].className="img_item4";
//                         lunbo++;
//                         break;
//                 case 3 :imgs[0].className="img_item2";
//                         imgs[1].className="img_item3";
//                         imgs[2].className="img_item4";
//                         imgs[3].className="img_item1";
//                         lunbo++;
//                         break;
//                 case 4 :imgs[0].className="img_item3";
//                         imgs[1].className="img_item4";
//                         imgs[2].className="img_item1";
//                         imgs[3].className="img_item2";
//                         lunbo=1;
//                         break;
//             }
//         }