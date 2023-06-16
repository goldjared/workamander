import "./style.css";
// also i was thinking, could my timer just do the min, and sec? and every interval it will also call the display
// func, which will output HOUR:MINUTE:SEC? just some ideas
// function timer() {
//   const starter = () => {
//     let start = Date.now();
//     let minutes = 0;
//     let hours = 0;

//     setInterval(() => {
//       const elapsedTime = Date.now() - start;
//       let currentTime = (elapsedTime / 1000).toFixed(1);
//       console.log(currentTime);
//       if (currentTime >= 60) {
//         minutes++;
//         start = Date.now();
//         console.log("this is min", minutes);
//       }
//       if (minutes === 60) {
//         minutes = 0;
//         hours++;
//         console.log("this is min after reset", minutes);
//         console.log("this is hour after +", hours);
//       }
//     }, 100);
//   };

//   function stop() {
//     clearInterval(2);
//     console.log("fuck!");
//   }

//   return { stop, starter };
// }

/* lets say interval is 1, and alarm is cl ("fucl!")
 there is the main timer running. every 5 min
it should fire something. with the minutes and hours.
this something will then work. 
*/

// function eventFactory(interval, alarm) {

// }

// timer().starter();
// setTimeout(() => {
//   timer().stop();
// }, 5000);
// // timer().stop();
// setTimeout(() => {
//   timer().starter();
// }, 6000);

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