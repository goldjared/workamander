import './style.css';

function timer() {
  let start = Date.now();
  let minute = 0;
  setInterval(function() {
  const elapsedTime = Date.now() - start;
  let currentTime = (elapsedTime / 1000).toFixed(1);
  if(currentTime === 60) {
    minute++;
    start = Date.now()
    console.log(minute)

  }
  console.log(currentTime);
}, 100);


}
  console.log(timer());