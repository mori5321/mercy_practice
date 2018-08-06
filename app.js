

var getDevice = (function(){
    var ua = navigator.userAgent;
    if(ua.indexOf('iPhone') > 0 || ua.indexOf('iPod') > 0 || ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0){
        return 'sp';
    }else if(ua.indexOf('iPad') > 0 || ua.indexOf('Android') > 0){
        return 'tab';
    }else{
        return 'other';
    }
})();


if (!(getDevice === 'other')) {
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
} else {

  var sentence = document.getElementById('sentence')
  sentence.classList.toggle('opacity-2')
}






// // 'bC751h-IVEE'

// // console.log('')

// // function onYoutubeIframeApiReady() {
// //   ytPlayer = new YT.Player(
// //     'background',
// //     {
// //       videoId: 'bC751h-IVEE',
// //       playerVars: {
// //         loop: 1,
// //         playlist: 'bC751h-IVEE',
// //         controls: 0,
// //         autoplay: 1,
// //         showinfo: 0
// //       },
// //       events: {
// //         'onReady': onPlayerReady
// //       }
// //     }
// //   );
// // }

// // function onPlayerReady(event) {
// //   event.target.playVideo();
// //   event.target.mute();
// // }