$(document).on("mousewheel",function(event, delta){
    // console.log(event)
    var offset = $(".banner").offset().top;
    console.log(offset);
    if($(window).scrollTop()>0){
        $(".nav").css("backgroundColor","#fff");
        $(".nav").css("position","fixed");
        $(".nav-li>a").css("color","#000");
    }//if($(window).scrollTop()=0)
    else{
        $(".nav").css("backgroundColor","rgba(0,0,0,0)");
        $(".nav-li>a").css("color","#fff");
    }
  });