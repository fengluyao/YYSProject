var banner = document.getElementById("banner");
 function $(id){
     return document.getElementById(id);
 }
var lunbo=1;
function next(){
    if(lunbo==1){
        $("img_box").style.animation="change1 1s";
        var timer = setTimeout(()=>{
            $("img_box").style.transform="translateX(-360px)";
            $("t1").style.backgroundColor = "rgba(0,0,0,0)";
            $("t2").style.backgroundColor = "#e37b63";
            $("t3").style.backgroundColor = "rgba(0,0,0,0)";
            $("t4").style.backgroundColor = "rgba(0,0,0,0)";
            $("t5").style.backgroundColor = "rgba(0,0,0,0)";
            $("t6").style.backgroundColor = "rgba(0,0,0,0)";
            $("t7").style.backgroundColor = "rgba(0,0,0,0)";
            $("t8").style.backgroundColor = "rgba(0,0,0,0)";
        },990)
    }else if(lunbo==2){
        $("img_box").style.animation="change2 1s";
        var timer = setTimeout(()=>{
            $("img_box").style.transform="translateX(-720px)"
            $("t1").style.backgroundColor = "rgba(0,0,0,0)";
            $("t2").style.backgroundColor = "rgba(0,0,0,0)";
            $("t3").style.backgroundColor = "#e37b63";
            $("t4").style.backgroundColor = "rgba(0,0,0,0)";
            $("t5").style.backgroundColor = "rgba(0,0,0,0)";
            $("t6").style.backgroundColor = "rgba(0,0,0,0)";
            $("t7").style.backgroundColor = "rgba(0,0,0,0)";
            $("t8").style.backgroundColor = "rgba(0,0,0,0)";
        },990)
    }else if(lunbo==3){
        $("img_box").style.animation="change3 1s";
        var timer = setTimeout(()=>{
            $("img_box").style.transform="translateX(-1080px)"
            $("t1").style.backgroundColor = "rgba(0,0,0,0)";
            $("t2").style.backgroundColor = "rgba(0,0,0,0)";
            $("t3").style.backgroundColor = "rgba(0,0,0,0)";
            $("t4").style.backgroundColor = "#e37b63";
            $("t5").style.backgroundColor = "rgba(0,0,0,0)";
            $("t6").style.backgroundColor = "rgba(0,0,0,0)";
            $("t7").style.backgroundColor = "rgba(0,0,0,0)";
            $("t8").style.backgroundColor = "rgba(0,0,0,0)";
        },990)
    }else if(lunbo==4){
        $("img_box").style.animation="change4 1s";
        var timer = setTimeout(()=>{
            $("img_box").style.transform="translateX(-1440px)";
            $("t1").style.backgroundColor = "rgba(0,0,0,0)";
            $("t2").style.backgroundColor = "rgba(0,0,0,0)";
            $("t3").style.backgroundColor = "rgba(0,0,0,0)";
            $("t4").style.backgroundColor = "rgba(0,0,0,0)";
            $("t5").style.backgroundColor = "#e37b63";
            $("t6").style.backgroundColor = "rgba(0,0,0,0)";
            $("t7").style.backgroundColor = "rgba(0,0,0,0)";
            $("t8").style.backgroundColor = "rgba(0,0,0,0)";
        },990)
    }else if(lunbo==5){
        $("img_box").style.animation="change5 1s";
        var timer = setTimeout(()=>{
            $("img_box").style.transform="translateX(-1800px)";
            $("t1").style.backgroundColor = "rgba(0,0,0,0)";
            $("t2").style.backgroundColor = "rgba(0,0,0,0)";
            $("t3").style.backgroundColor = "rgba(0,0,0,0)";
            $("t4").style.backgroundColor = "rgba(0,0,0,0)";
            $("t5").style.backgroundColor = "rgba(0,0,0,0)";
            $("t6").style.backgroundColor = "#e37b63";
            $("t7").style.backgroundColor = "rgba(0,0,0,0)";
            $("t8").style.backgroundColor = "rgba(0,0,0,0)";
        },990)
    }else if(lunbo==6){
        $("img_box").style.animation="change6 1s";
        var timer = setTimeout(()=>{
            $("img_box").style.transform="translateX(-2160px)";
            $("t1").style.backgroundColor = "rgba(0,0,0,0)";
            $("t2").style.backgroundColor = "rgba(0,0,0,0)";
            $("t3").style.backgroundColor = "rgba(0,0,0,0)";
            $("t4").style.backgroundColor = "rgba(0,0,0,0)";
            $("t5").style.backgroundColor = "rgba(0,0,0,0)";
            $("t6").style.backgroundColor = "rgba(0,0,0,0)";
            $("t7").style.backgroundColor = "#e37b63";
            $("t8").style.backgroundColor = "rgba(0,0,0,0)";
        },990)
    }else if(lunbo==7){
        $("img_box").style.animation="change7 1s";
        var timer = setTimeout(()=>{
            $("img_box").style.transform="translateX(-2520px)";
            $("t1").style.backgroundColor = "rgba(0,0,0,0)";
            $("t2").style.backgroundColor = "rgba(0,0,0,0)";
            $("t3").style.backgroundColor = "rgba(0,0,0,0)";
            $("t4").style.backgroundColor = "rgba(0,0,0,0)";
            $("t5").style.backgroundColor = "rgba(0,0,0,0)";
            $("t6").style.backgroundColor = "rgba(0,0,0,0)";
            $("t7").style.backgroundColor = "rgba(0,0,0,0)";
            $("t8").style.backgroundColor = "#e37b63";
        },990)
    }else if(lunbo==8){
        $("img_box").style.animation="change8 1s";
        var timer = setTimeout(()=>{
            $("img_box").style.transform="translateX(0)";
            $("t1").style.backgroundColor = "#e37b63";
            $("t2").style.backgroundColor = "rgba(0,0,0,0)";
            $("t3").style.backgroundColor = "rgba(0,0,0,0)";
            $("t4").style.backgroundColor = "rgba(0,0,0,0)";
            $("t5").style.backgroundColor = "rgba(0,0,0,0)";
            $("t6").style.backgroundColor = "rgba(0,0,0,0)";
            $("t7").style.backgroundColor = "rgba(0,0,0,0)";
            $("t8").style.backgroundColor = "rgba(0,0,0,0)";
        },990)
    }
    if(lunbo==8){
        lunbo=0;
    }
    lunbo++;
}
var timer = setInterval(next,3000);
function turn1(){
    $("img_box").style.transform="translateX(0)";
    lunbo=1;
}
function turn2(){
    $("img_box").style.transform="translateX(-360px)";
    lunbo=2;
}
function turn3(){
    $("img_box").style.transform="translateX(-720px)";
    lunbo=3;
}
function turn4(){
    $("img_box").style.transform="translateX(-1080px)";
    lunbo=4;
}
function turn5(){
    $("img_box").style.transform="translateX(-1440px)";
    lunbo=5;
}
function turn6(){
    $("img_box").style.transform="translateX(-1800px)";
    lunbo=6;
}
function turn7(){
    $("img_box").style.transform="translateX(-2160px)";
    lunbo=7;
}
function turn8(){
    $("img_box").style.transform="translateX(-2520px)";
    lunbo=8;
}


function getOver1(){
    document.getElementById("e1").style.opacity = "1";
    document.getElementById("e2").style.opacity = "0";
    document.getElementById("e3").style.opacity = "0";
    document.getElementById("e4").style.opacity = "0";
    document.getElementById("e5").style.opacity = "0";
    document.getElementById("ul").style.left = "0px";
}
function getOver2(){
    document.getElementById("e1").style.opacity = "0";
    document.getElementById("e2").style.opacity = "1";
    document.getElementById("e3").style.opacity = "0";
    document.getElementById("e4").style.opacity = "0";
    document.getElementById("e5").style.opacity = "0";
    document.getElementById("ul").style.left = "-500px";
}
function getOver3(){
    document.getElementById("e1").style.opacity = "0";
    document.getElementById("e2").style.opacity = "0";
    document.getElementById("e3").style.opacity = "1";
    document.getElementById("e4").style.opacity = "0";
    document.getElementById("e5").style.opacity = "0";
    document.getElementById("ul").style.left = "-1000px";
}
function getOver4(){
    document.getElementById("e1").style.opacity = "0";
    document.getElementById("e2").style.opacity = "0";
    document.getElementById("e3").style.opacity = "0";
    document.getElementById("e4").style.opacity = "1";
    document.getElementById("e5").style.opacity = "0";
    document.getElementById("ul").style.left = "-1500px";
}
function getOver5(){
    document.getElementById("e1").style.opacity = "0";
    document.getElementById("e2").style.opacity = "0";
    document.getElementById("e3").style.opacity = "0";
    document.getElementById("e4").style.opacity = "0";
    document.getElementById("e5").style.opacity = "1";
    document.getElementById("ul").style.left = "-2000px";
}



var prev = document.getElementById("prev");
var next = document.getElementById("next");
var now = 1;
next.onclick = function(){
    var list = document.getElementById("shishen_list");
    switch(now){
        case 1:
            list.style.left = "-828px";
            prev.style.display = "block";
            next.style.display = "block";
            now++;
            break;
        case 2:
            list.style.left = "-1656px";
            prev.style.display = "block";
            next.style.display = "block";
            now++;
            break;
        case 3:
            list.style.left = "-2484px";
            prev.style.display = "block";
            next.style.display = "block";
            now++;
            break;
        case 4:
            list.style.left = "-3312px";
            prev.style.display = "block";
            next.style.display = "block";
            now++;
            break;
        case 5:
            list.style.left = "-4140px";
            prev.style.display = "block";
            next.style.display = "block";
            now++;
            break;
        case 6:
            list.style.left = "-4968px";
            prev.style.display = "block";
            next.style.display = "block";
            now++;
            break;
        case 7:
            list.style.left = "-5796px";
            prev.style.display = "block";
            next.style.display = "block";
            now++;
            break;
        case 8:
            list.style.left = "-6624px";
            prev.style.display = "block";
            next.style.display = "block";
            now++;
            break;
        case 9:
            list.style.left = "-7452px";
            prev.style.display = "block";
            next.style.display = "block";
            now++;
            break;
        case 10:
            list.style.left = "-8280px";
            prev.style.display = "block";
            next.style.display = "none";
            now++;
            break;
    }
}
prev.onclick = function(){
    var list = document.getElementById("shishen_list");
    switch(now){
        case 11:
            list.style.left = "-7452px";
            prev.style.display = "block";
            next.style.display = "block";
            now--;
            break;
        case 10:
            list.style.left = "-6624px";
            prev.style.display = "block";
            next.style.display = "block";
            now--;
            break;
        case 9:
            list.style.left = "-5796px";
            prev.style.display = "block";
            next.style.display = "block";
            now--;
            break;
        case 8:
            list.style.left = "-4968px";
            prev.style.display = "block";
            next.style.display = "block";
            now--;
            break;
        case 7:
            list.style.left = "-4140px";
            prev.style.display = "block";
            next.style.display = "block";
            now--;
            break;
        case 6:
            list.style.left = "-3312px";
            prev.style.display = "block";
            next.style.display = "block";
            now--;
            break;
        case 5:
            list.style.left = "-2484px";
            prev.style.display = "block";
            next.style.display = "block";
            now--;
            break;
        case 4:
            list.style.left = "-1656px";
            prev.style.display = "block";
            next.style.display = "block";
            now--;
            break;
        case 3:
            list.style.left = "-828px";
            prev.style.display = "block";
            next.style.display = "block";
            now--;
            break;
        case 2:
            list.style.left = "0px";
            prev.style.display = "none";
            next.style.display = "block";
            now--;
            break;
    }
}
var as = document.querySelectorAll(".shishen_tabs>a");
console.log(as);
for(var a of as){
    a.onclick = function(event){
        var a = event.target;
        event.preventDefault();
        a.className = "acolor";
    }
}
// 寮问题的悬浮切换
function getNext1(){
    document.getElementById("em1").style.opacity = "1";
    document.getElementById("em2").style.opacity = "0";
    document.getElementById("em3").style.opacity = "0";
    document.getElementById("em4").style.opacity = "0";
    document.getElementById("em5").style.opacity = "0";
    document.getElementById("ul1").style.left = "0px";
}
function getNext2(){
    document.getElementById("em1").style.opacity = "1";
    document.getElementById("em2").style.opacity = "1";
    document.getElementById("em3").style.opacity = "0";
    document.getElementById("em4").style.opacity = "0";
    document.getElementById("em5").style.opacity = "0";
    document.getElementById("ul1").style.left = "-790px";
}
function getNext3(){
    document.getElementById("em1").style.opacity = "1";
    document.getElementById("em2").style.opacity = "0";
    document.getElementById("em3").style.opacity = "1";
    document.getElementById("em4").style.opacity = "0";
    document.getElementById("em5").style.opacity = "0";
    document.getElementById("ul1").style.left = "-1580px";
}
function getNext4(){
    document.getElementById("em1").style.opacity = "1";
    document.getElementById("em2").style.opacity = "0";
    document.getElementById("em3").style.opacity = "0";
    document.getElementById("em4").style.opacity = "1";
    document.getElementById("em5").style.opacity = "0";
    document.getElementById("ul1").style.left = "-2370px";
}
function getNext5(){
    document.getElementById("em1").style.opacity = "1";
    document.getElementById("em2").style.opacity = "0";
    document.getElementById("em3").style.opacity = "0";
    document.getElementById("em4").style.opacity = "0";
    document.getElementById("em5").style.opacity = "1";
    document.getElementById("ul1").style.left = "-3160px";
}

// 同人的悬浮切换
function changed1(){
    document.getElementById("ee1").style.bottom = "-18px";
    document.getElementById("ee2").style.bottom = "-75px";
    document.getElementById("ee3").style.bottom = "-75px";
    document.getElementById("ee4").style.bottom = "-75px";
    document.getElementById("ee5").style.bottom = "-75px";
    document.getElementById("ee6").style.bottom = "-75px";
    document.getElementById("tongren").style.left = "0";
}
function changed2(){
    document.getElementById("ee1").style.bottom = "-75px";
    document.getElementById("ee2").style.bottom = "-18px";
    document.getElementById("ee3").style.bottom = "-75px";
    document.getElementById("ee4").style.bottom = "-75px";
    document.getElementById("ee5").style.bottom = "-75px";
    document.getElementById("ee6").style.bottom = "-75px";
    document.getElementById("tongren").style.left = "-1220px";
}
function changed3(){
    document.getElementById("ee1").style.bottom = "-75px";
    document.getElementById("ee2").style.bottom = "-75px";
    document.getElementById("ee3").style.bottom = "-18px";
    document.getElementById("ee4").style.bottom = "-75px";
    document.getElementById("ee5").style.bottom = "-75px";
    document.getElementById("ee6").style.bottom = "-75px";
    document.getElementById("tongren").style.left = "-2440px";
}
function changed4(){
    document.getElementById("ee1").style.bottom = "-75px";
    document.getElementById("ee2").style.bottom = "-75px";
    document.getElementById("ee3").style.bottom = "-75px";
    document.getElementById("ee4").style.bottom = "-18px";
    document.getElementById("ee5").style.bottom = "-75px";
    document.getElementById("ee6").style.bottom = "-75px";
    document.getElementById("tongren").style.left = "-3660px";
}
function changed5(){
    document.getElementById("ee1").style.bottom = "-75px";
    document.getElementById("ee2").style.bottom = "-75px";
    document.getElementById("ee3").style.bottom = "-75px";
    document.getElementById("ee4").style.bottom = "-75px";
    document.getElementById("ee5").style.bottom = "-18px";
    document.getElementById("ee6").style.bottom = "-75px";
    document.getElementById("tongren").style.left = "-4880px";
}
function changed6(){
    document.getElementById("ee1").style.bottom = "-75px";
    document.getElementById("ee2").style.bottom = "-75px";
    document.getElementById("ee3").style.bottom = "-75px";
    document.getElementById("ee4").style.bottom = "-75px";
    document.getElementById("ee5").style.bottom = "-75px";
    document.getElementById("ee6").style.bottom = "-18px";
    document.getElementById("tongren").style.left = "-6100px";
}


