import "./style.css";
import { clockDisplay, clockUpdate, pausePlayBtn } from "./display";
clockDisplay();
clockUpdate();
pausePlayBtn();
class Clock {
  constructor() {
    this.timer;
    this.second = 0;
    this.min = 0;
    this.hour = 0;
    this.startDate = 0;
    this.pauseTime = 0;
    this.isPaused = true;
  }
  start() {
    if (this.pauseTime != 0) {
      this.startDate += Date.now() - this.pauseTime;
      this.pauseTime = 0;
    } else {
      this.startDate = Date.now();
    }

    this.timer = setInterval(() => {
      const elapsedTime = Date.now() - this.startDate;
      this.second = (elapsedTime / 1000).toFixed(1);
      console.log(this.second);
      if (this.second >= 60) {
        this.min++;
        this.second = 0;
        this.startDate = Date.now();
        console.log("this is min", this.min);
      }
      if (this.min === 60) {
        this.min = 0;
        this.hour++;
        console.log("this is min after reset", this.min);
        console.log("this is hour after +", this.hour);
      }
      clockUpdate(this.hour, this.min, this.second);
    }, 100);
  }
  stop() {
    clearInterval(this.timer);
    this.pauseTime = Date.now();
    console.log("Stop function fired!");
  }
}
let clockX = new Clock();
(function pausePlay() {
  const pPBtn = document.querySelector(".pause-play");
  pPBtn.addEventListener("click", () => {
    if (clockX.isPaused === false) {
      clockX.isPaused = true;
      clockX.stop();
      console.log("STOPPER");
    } else {
      clockX.isPaused = false;
      clockX.start();
      console.log(
        "STARTER, clockispaused:",
        clockX.isPaused,
        "should be false"
      );
    }
  });
}())
