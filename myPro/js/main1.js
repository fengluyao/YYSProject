$(document).on("mousewheel",function(event, delta){
     console.log(event)
    if($(window).scrollTop()>=50){
      $(".top_bar").addClass("fix")
      $(".top_bar>ul>li>a").css("color","#000");
      $(".top_bar>ul>li>.line").addClass("back");
    }else if($(window).scrollTop()<50){
      $(".top_bar").removeClass("fix");
      $(".top_bar>ul>li>a").css("color","#fff");
      $(".top_bar>ul>li>.line").removeClass("back");
    }
  });
// jQuery(document).ready(function($){
//   $(".scroll").click(function(e){
//     e.preventDefault();
//     $("html,body").animation({scrollTop:$(this.hash).offset().top},1000);
//   })
// })