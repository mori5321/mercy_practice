
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    videoId: 'lFcSrYw-ARY',
    playerVars: {
      loop: 1,
      playlist: 'lFcSrYw-ARY',
      controls: 0,
      autoplay: 1,
      showinfo: 0
    },
    events: {
      'onReady': onPlayerReady,
    }
  });
}

function onPlayerReady(event) {
  event.target.playVideo();
  event.target.mute();
}

var sentence = document.getElementById('sentence')

setTimeout(function() {
  sentence.classList.toggle('opacity')
}, 4000)






// 'bC751h-IVEE'

// console.log('')

// function onYoutubeIframeApiReady() {
//   ytPlayer = new YT.Player(
//     'background',
//     {
//       videoId: 'bC751h-IVEE',
//       playerVars: {
//         loop: 1,
//         playlist: 'bC751h-IVEE',
//         controls: 0,
//         autoplay: 1,
//         showinfo: 0
//       },
//       events: {
//         'onReady': onPlayerReady
//       }
//     }
//   );
// }

// function onPlayerReady(event) {
//   event.target.playVideo();
//   event.target.mute();
// }