// We use a Map to keep track of which player belongs to which element
const playerMap = new Map();

// 1. YouTube API calls this automatically
window.onYouTubeIframeAPIReady = function () {
  document.querySelectorAll(".yt-player").forEach((el, index) => {
    const vId = el.getAttribute("data-video-id");
    const endTime = el.getAttribute("data-end");

    const player = new YT.Player(el, {
      height: "100%",
      width: "100%",
      videoId: vId,
      playerVars: {
        rel: 0,
        end: endTime,
        enablejsapi: 1,
        origin: window.location.origin,
      },
      events: {
        onStateChange: (event) => {
          // 0 means ENDED
          if (event.data === 0) {
            const iframe = event.target.getIframe();
            const parent = iframe.closest(".video-container");
            const overlay = parent.querySelector(".custom-overlay");

            iframe.style.display = "none";
            overlay.style.display = "flex";
          }
        },
      },
    });

    // Store the player instance so we can restart it later
    playerMap.set(el, player);
  });
};

// 2. Restart function used by the buttons
window.restartVideo = function (btn) {
  const parent = btn.closest(".video-container");
  const overlay = parent.querySelector(".custom-overlay");
  const iframe = parent.querySelector("iframe");

  // Find the player instance from our map
  // Note: the API replaces the .yt-player div with an <iframe>
  const player = [...playerMap.values()].find((p) => p.getIframe() === iframe);

  if (player) {
    overlay.style.display = "none";
    iframe.style.display = "block";
    player.seekTo(0);
    player.playVideo();
  }
};

// 3. Load the API script
const tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
