var krabbyPatty = $(".krabbyPatty");
var counter = 0;

for(var i=0; i<10; i++){
  var krabbyPattyCopy = krabbyPatty.clone();

  krabbyPattyCopy.appendTo("body");

  krabbypatty = krabbyPattyCopy.find(".krabbypatty");

  krabbypatty_width = Math.max(20, Math.floor(Math.random() * 90) + 1);
  krabbypatty_height = 1.2 * krabbypatty_width;

  krabbyPatty.css({
    height: krabbypatty_height,
    width: krabbypatty_width,
    "border-radius": krabbypatty_width + "px / " + krabbypatty_height + "px"
  });

  krabbyPattyCopy.css({
    left: '50%', bottom: 0
  });

  krabbyPattyCopy.click(function(){
    // chomp.play();
    $(this).remove();
    counter = counter + 100 - krabbypatty_width;
    $(".counter").html(counter);
  });

  var xdiff = Math.floor(Math.random() * 100);
      krabbyPattyCopy.show();
      krabbyPattyCopy.animate({bottom: '100%', left: xdiff + "%"}, (8000 - krabbypatty_width*10));

};
krabbyPatty.remove();

// function preloadChomp(){
//   var audio = new Audio("chomp.wav");
//   audio.preload = "auto";
//   $(audio).on("loadeddata", start);
//   return audio;
// };
//
// var chomp = preloadChomp();
