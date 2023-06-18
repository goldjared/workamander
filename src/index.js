import "./style.css";
import { clockDisplay, clockUpdate, pausePlayBtn } from "./display";
import { pausePlay } from "./operations";
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
      }
      if (this.min === 60) {
        this.min = 0;
        this.hour++;
      }
      clockUpdate(this.hour, this.min, this.second);
    }, 100);
  }
  stop() {
    clearInterval(this.timer);
    this.pauseTime = Date.now();
    clearInterval(this.timer);

    console.log("Stop function fired!");
  }
}
let clockX = new Clock();
pausePlay(clockX)
