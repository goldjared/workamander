import "./style.css";
class Clock {
  constructor() {
    this.second = 0;
    this.min = 0;
    this.hour = 0;
    this.startDate = 0;
    this.pauseTime = 0;
  }
  tester() {
    console.log('********************',this.second, this.min, this.hour, 'this is tester, min/hour')
  }
  start() {
    if(this.pauseTime != 0) {
      // console.log(((Date.now() - this.pauseTime) / 1000).toFixed(1), 'here ptime');
      // change the startdate to be updated with the amount of time we paused for.
      // in other words, date.now - pausetime. add this value to this.startdate?
      this.startDate += (Date.now() - this.pauseTime);
      this.pauseTime = 0;

    } else {

    this.startDate = Date.now();
    }

    setInterval(() => {
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
    }, 100);
  }
  stop() {
        clearInterval(2);
        this.pauseTime = Date.now();
    console.log("fuck!");
  }
}
let clockX = new Clock();
clockX.start();
setTimeout(() => {
  clockX.stop();
}, 5000);
setTimeout(() => {
  clockX.tester();
}, 6000);
setTimeout(() => {
  clockX.start();
}, 7000);
setTimeout(() => {
  clockX.tester();
}, 8000);



// setTimeout(() => {
//   clockX.start();
// }, 7000);
// setTimeout(() => {
//  clockX.tester(); 
// }, 4000);