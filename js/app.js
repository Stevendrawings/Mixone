
$(function(){
var fond = $(".fond-header");
fond.addClass("tonalite");
$(window).scroll(function() {
var minScroll = $(window).width();
var heightScroll = $(window).scrollTop();
if ( heightScroll > 310 ){
      $("#closedRightOver").hide();
      $(".right-overlay").addClass("pin-overlay")
} else if( minScroll > 990){
      $(".closedRightOver").show();
  $(".right-overay").toggleClass("pin-overlay")
  $(".right-overlay").addClass("pin-overlay").removeClass("pin-overlay")
}}),$(window).resize(function(){
  var width = $(window).width();
  if(width < 990){
    $("#closedRightOver").css("display", "none");
    console.log("Responsive detected");
$(".right-overlay").addClass("pin-overlay").hasClass("pin-overay");
  } else if(width > 990){
    console.log("Responsive non detected");
    $(".right-overlay").toggleClass("pin-overlay")
  }}), $(".closed-overlay, #closedRightOver").click(function(){
if ($(".right-overlay").attr("class") == "col-md-6 right-overlay") {
  $("#closedRightOver").hide();
  $(".right-overlay").toggleClass("pin-overlay");
  } else if($(".right-overlay").attr("class") == "col-md-6 right-overlay pin-overlay") {
  $("#closedRightOver").show();
  $(".right-overlay").toggleClass("pin-overlay");
  }}), $("#popUpMixone").click(function(){
      var selPop = $(".popupmixone");
      selPop.animate({ top:"120px", opacity:"1" }).fadeIn("slow"), $(".overfull").fadeIn("400");
  }), $(".closedpop, .closedplay").on("click", function(){
      $(".right-overlay").css({ "z-index": "1" });
      $(".playvideo-header, .overfull-two").hide()
      $(".overfull").hide(), $(".popupmixone").animate({ top:"-500px", opacity: "0" }).fadeIn();
  }), $("#onPlay").click(function(){
      var selPlay = $(".playvideo-header"), playFull = $(".overfull-two"), closePlay = $(".closedplay"), cacher = $(".right-overlay");
      closePlay.show("slow");
      cacher.css({ "z-index": "-1" });
      playFull.show();
      selPlay.fadeIn("slow");
      // personaliser la video mixone

      // function rem(){
      //   console.log("code")
      //   if()
      // }
      // function getRun(){
      //   console.log("error")
      // }
  });
});
