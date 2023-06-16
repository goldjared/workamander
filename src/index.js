import "./style.css";
class Clock {
  constructor() {
    this.second = 0;
    this.min = 0;
    this.hour = 0;
  }
  tester() {
    console.log('********************',this.second, this.min, this.hour, 'this is tester, min/hour')
  }
  start() {
    let start = Date.now();

    setInterval(() => {
      const elapsedTime = Date.now() - start;
      this.second = (elapsedTime / 1000).toFixed(1);
      console.log(this.second);
      if (this.second >= 60) {
        this.min++;
        this.second = 0;
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