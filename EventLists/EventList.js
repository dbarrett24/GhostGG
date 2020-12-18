// Please use event listeners to run functions.
document.addEventListener('onLoad', function(obj) {
	// obj will be empty for event list
	// this will fire only once when the widget loads
  console.log("onLoad", obj);
  $("li").css("")

});

document.addEventListener('onEventReceived', function(obj) {
  	// obj will contain information about the event
  console.log("onEventReceived", obj);
  $("li").first().addClass("newest");
  $("li").first().removeClass("newest");
 
  var bits = obj.detail.tag.split(" ")[0];
  console.log(bits);
  if(bits < 100){
    $("li div").first().addClass("bit10");
  } else if(bits < 1000){
  	$("li div").first().addClass("bit100");
  } else if(bits < 5000){
  	$("li div").first().addClass("bit1000");
  } else if(bits < 10000){
  	$("li div").first().addClass("bit5000");
  } else if(bits < 25000){
  	$("li div").first().addClass("bit10000");
  } else if(bits < 100000){
  	$("li div").first().addClass("bit25000");
  } else if(bits >= 100000){
  $("li div").first().addClass("bit100000");
  }
});