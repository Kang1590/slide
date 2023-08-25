$(document).ready(function(){
  setInterval( toLeft, 2500 );
  function toLeft(){
    $("#slide div").stop().animate({left:"-600px"},2000,function(){
      $("#slide div").append($("#slide img").eq(0));
      $("#slide div").css("left", "0")
    });
  }
 
});
