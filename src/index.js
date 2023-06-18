import "./style.css";
import { clockDisplay, clockUpdate, pausePlayBtn } from "./display";
import { pausePlay, timeEvent } from "./operations";
clockDisplay();
clockUpdate();
pausePlayBtn();
function clock() {
  let timer;
  let seconds = 0;
  let minutes = 0;
  let hours = 0;
  let startTime = 0;
  let pauseTime = 0;
  let isPaused = true;

  function start() {
    if (pauseTime != 0) {
      startTime += Date.now() - pauseTime;
      pauseTime = 0;
    } else {
      startTime = Date.now();
    }

    timer = setInterval(() => {
      const elapsedTime = Date.now() - startTime;
      seconds = (elapsedTime / 1000).toFixed(1);
      console.log(seconds);
      if (seconds >= 60) {
        minutes++;
        seconds = 0;
        startTime = Date.now();
      }
      if (minutes === 60) {
        minutes = 0;
        hours++;
      }
      clockUpdate(hours, minutes, seconds);
    }, 100);
  }
    function stop() {
    pauseTime = Date.now();
    clearInterval(timer);

    console.log("Stop function fired!");
    }
  return { isPaused, start, stop }
  
}
let clockX = clock();
pausePlay(clockX)