var banner = document.getElementById("banner");
function $(id){
    return document.getElementById(id);
}
var lunbo=1;
function next(){
    if(lunbo==1){
        $("img_box").style.animation="change1 1s";
        var timer = setTimeout(()=>{
            $("img_box").style.transform="translateX(-360px)"
        },990)
    }else if(lunbo==2){
        $("img_box").style.animation="change2 1s";
        var timer = setTimeout(()=>{
            $("img_box").style.transform="translateX(-720px)"
        },990)
    }else if(lunbo==3){
        $("img_box").style.animation="change3 1s";
        var timer = setTimeout(()=>{
            $("img_box").style.transform="translateX(-1080px)"
        },990)
    }else if(lunbo==4){
        $("img_box").style.animation="change4 1s";
        var timer = setTimeout(()=>{
            $("img_box").style.transform="translateX(-1440px)"
        },990)
    }else if(lunbo==5){
        $("img_box").style.animation="change5 1s";
        var timer = setTimeout(()=>{
            $("img_box").style.transform="translateX(-1800px)"
        },990)
    }else if(lunbo==6){
        $("img_box").style.animation="change6 1s";
        var timer = setTimeout(()=>{
            $("img_box").style.transform="translateX(-2160px)"
        },990)
    }else if(lunbo==7){
        $("img_box").style.animation="change7 1s";
        var timer = setTimeout(()=>{
            $("img_box").style.transform="translateX(-2520px)"
        },990)
    }else if(lunbo==8){
        $("img_box").style.animation="change8 1s";
        var timer = setTimeout(()=>{
            $("img_box").style.transform="translateX(0)"
        },990)
    }
    if(lunbo==8){
        lunbo=0;
    }
    lunbo++;
}
var timer = setInterval(next,5000);
function turn1(){
    $("img_box").style.transform="translateX(0)"
    lunbo=1;
}
function turn2(){
    $("img_box").style.transform="translateX(-360px)"
    lunbo=2;
}
function turn3(){
    $("img_box").style.transform="translateX(-720px)"
    lunbo=3;
}
function turn4(){
    $("img_box").style.transform="translateX(-1080px)"
    lunbo=4;
}
function turn5(){
    $("img_box").style.transform="translateX(-1440px)"
    lunbo=5;
}
function turn6(){
    $("img_box").style.transform="translateX(-1800px)"
    lunbo=6;
}
function turn7(){
    $("img_box").style.transform="translateX(-2160px)"
    lunbo=7;
}
function turn8(){
    $("img_box").style.transform="translateX(-2520px)"
    lunbo=8;
}
