// var playPause = anime({
//     targets: 'div.box',
//     translateY: [
//       { value: 200, duration: 500 },
//       { value: 0, duration: 800 }
//     ],
//     rotate:{
//       value: '1turn',
//       easing: 'easeInOutSine'
//     },
//     delay: function(el, i, l){ return i * 1000},
//     autoplay:false,
//     loop:true
//   });
  
//   document.querySelector('#boxes .play').onclick = playPause.play;
//   document.querySelector('#boxes .pause').onclick = playPause.pause;

// IE cannot apply CSS transforms on SVG elements. (See https://connect.microsoft.com/IE/feedback/details/811744/ie11-bug-with-implementation-of-css-transforms-in-svg)

var path = anime.path('#motionPath path');

var motionPath = anime({
  targets: '#motionPath .el',
  translateX: path('x'),
  translateY: path('y'),
  rotate: path('angle'),
  easing: 'linear',
  duration: 2000,
  loop: true
});


// use anchors to follow the draw line.
// SVG <path> lineto
// motion path from animejs