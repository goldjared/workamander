import "./style.css";
class Clock {
  constructor() {
    this.min = 0;
    this.hour = 0;
  }
  tester() {
    console.log('********************', this.min, this.hour, 'this is tester, min/hour')
  }
  start() {
    let start = Date.now();

    setInterval(() => {
      const elapsedTime = Date.now() - start;
      let currentTime = (elapsedTime / 1000).toFixed(1);
      console.log(currentTime);
      if (currentTime >= 60) {
        this.min++;
        start = Date.now();
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
    console.log("fuck!");
  }
}
let clockX = new Clock();
clockX.start();
// setTimeout(() => {
//   clockX.stop();
// }, 5000);
setTimeout(() => {
  clockX.tester();
}, 3000);

// setTimeout(() => {
//   clockX.start();
// }, 7000);
setTimeout(() => {
 clockX.tester(); 
}, 4000);