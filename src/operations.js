function pausePlay(clockName) {
  let cooldown = false;

  function pausePlayOps(e) {
    if(cooldown === true) {
      console.log('cooldown, 2 seconds');
      return;
    }

    cooldown = true;
    setTimeout(() => {
      cooldown = false;
    }, 300)
    
    if (clockName.isPaused === false) {
      clockName.isPaused = true;
      clockName.stop();
      console.log("STOPPER");
    } else {
      clockName.isPaused = false;
      clockName.start();
      console.log(
        "STARTER, clockispaused:",
        clockName.isPaused,
        "should be false"
      );
    }
  }
  const pPBtn = document.querySelector(".pause-play");
  pPBtn.addEventListener("click", pausePlayOps);
  document.addEventListener("keydown", (e) => {
    if (e.code === "Space") {
      console.log(e, "fired, pausePops called");
      pausePlayOps();
    }
  });
};
/*
breaks
  breaks will notify with sound

call pausePlay to stop timer
*/
function timeEvent(intervalTimeMinutes) {
  let intervalTime = intervalTimeMinutes;

  function engageEvent(timeMinutes) {
    if(timeMinutes === intervalTime) {
      alert('fuck!')
    }

  }
}

function soundEvent(sound) {

  return { name, breakTime, sound, timeStoppage}
}
export { pausePlay, timeEvent }