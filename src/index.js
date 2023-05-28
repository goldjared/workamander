import './style.css';

function timer() {
  let start = Date.now();
  let minutes = 0;
  let hours = 0;
  setInterval(function() {
  const elapsedTime = Date.now() - start;
  let currentTime = (elapsedTime / 1000).toFixed(1);
  console.log(currentTime);
  if(currentTime >= 60) {
    minutes++;
    start = Date.now()
    console.log('this is min', minutes)
  }
  if(minutes === 60) {
    minutes = 0;
    hours++;
    console.log('this is min after reset', minutes);
    console.log('this is hour after +', hours);
  }

}, 100);


}
  console.log(timer());