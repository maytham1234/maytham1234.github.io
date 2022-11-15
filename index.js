// document.query

var sound1;
sound1="https://github.com/maytham1234/maytham1234.github.io/blob/main/song/10275_1369687679.mp3"


for (var d=0; d<document.querySelectorAll(".btn").length; d++){

  document.querySelectorAll(".btn")[d].addEventListener("click", function () {

 var x;
 x= new Audio(sound1);
 x.play();



  });
}
