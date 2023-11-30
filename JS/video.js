let player;
const playerCont = $('.video__player-container');

let eventInit = () =>{
    $('.video__start').click(e =>{
        e.preventDefault();

        const btn = $(e.currentTarget);

        if (playerCont.hasClass("video__player-container--active")) {
            playerCont.removeClass("video__player-container--active");
            player.pauseVideo();
          } else {
            playerCont.addClass("video__player-container--active");
            player.playVideo();
          }

    });
}

const onPlayerReady = () => {
    let interval;
    const durationSec = player.getDuration();
    
    $(".player__duration-estimate").text(formatTime(durationSec));
    
    if (typeof interval !== "undefined") {
      clearInterval(interval);
    }

    interval = setInterval(() => {
        const completedSec = player.getCurrentTime();
        const completedPercent = (completedSec / durationSec) * 100;
      
        $(".player__playback-button").css({
          left: `${completedPercent}%`
        });
       
        $(".player__duration-completed").text(formatTime(completedSec));
      }, 1000);
    
   };


function onYouTubeIframeAPIReady() {
  player = new YT.Player("video-player", {
    height: '405',
    width: '660',
    videoId: 'LXb3EKWsInQ',
    events: {
    'onReady': onPlayerReady,
    // 'onStateChange': onPlayerStateChange
    },
    playerVars: {
        controls: 0,
        disablekb: 1,
        showinfo: 0,
        rel: 0,
        autoplay: 0,
        modestbranding: 0
      }
  });
}

eventInit();