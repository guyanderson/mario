




$(document).ready(function(){
  // $("#play").click(function(){
  //   $("#launch").css({
  //     "width": "0%",
  //     "height": "0%"});
  //   $("#launch").html("");
  // });
  $("#learn").click(function(){
    $("#arrows").slideUp( 300 ).delay( 300 ).fadeIn( 1000 );
    $("#moves").slideUp( 300 ).delay( 900 ).fadeIn( 1000 );
    $("#goals").slideUp( 300 ).delay( 1500 ).fadeIn( 1000 );
  });
  $("#play").click(function(){
    $("#screenshot").fadeOut();
    $(".options").fadeOut();
    $("#moves").fadeOut();
    $("#arrows").fadeOut();
    $("#goals").fadeOut();
    $("form#formOne").fadeIn(3000);
  });
  $("#bio").click(function(){
    $(".groupbio").css({"height" : "100%"});
  });
});
