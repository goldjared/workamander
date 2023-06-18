import "./style.css";
import { clockDisplay, clockUpdate, pausePlayBtn } from "./display";
import { pausePlay } from "./operations";
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
// class Clock {
//   constructor() {
//     this.timer;
//     this.second = 0;
//     this.min = 0;
//     this.hour = 0;
//     this.startDate = 0;
//     this.pauseTime = 0;
//     this.isPaused = true;
//   }
//   start() {
//     if (this.pauseTime != 0) {
//       this.startDate += Date.now() - this.pauseTime;
//       this.pauseTime = 0;
//     } else {
//       this.startDate = Date.now();
//     }

//     this.timer = setInterval(() => {
//       const elapsedTime = Date.now() - this.startDate;
//       this.second = (elapsedTime / 1000).toFixed(1);
//       console.log(this.second);
//       if (this.second >= 60) {
//         this.min++;
//         this.second = 0;
//         this.startDate = Date.now();
//       }
//       if (this.min === 60) {
//         this.min = 0;
//         this.hour++;
//       }
//       clockUpdate(this.hour, this.min, this.second);
//     }, 100);
//   }
//   stop() {
//     this.pauseTime = Date.now();
//     clearInterval(this.timer);

//     console.log("Stop function fired!");
//   }
// }
// let clockX = new Clock();
let clockX = clock();
pausePlay(clockX)