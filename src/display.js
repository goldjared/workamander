function clockDisplay() {
  const container = document.querySelector(".clock");
  const hourDisplay = document.createElement("div");
  const minDisplay = document.createElement("div");
  const secDisplay = document.createElement("div");
  hourDisplay.classList.add("hour");
  minDisplay.classList.add("min");
  secDisplay.classList.add("sec");
  container.append(hourDisplay, minDisplay, secDisplay);
}

function clockUpdate(hour, min, sec) {
  const hourDisplay = document.querySelector(".hour");
  const minDisplay = document.querySelector(".min");
  const secDisplay = document.querySelector(".sec");
  if (hour < 10) {
    hourDisplay.textContent = `0${hour}:`;
  } else {
    hourDisplay.textContent = `${hour}:`;
  }
  if (min < 10) {
    minDisplay.textContent = `0${min}:`;
  } else {
    minDisplay.textContent = `${min}:`;
  }
  if (sec < 10) {
    secDisplay.textContent = `0${sec}`;
  } else {
    secDisplay.textContent = `${sec}`;
  }
}

function pausePlayBtn() {
  const container = document.querySelector('.container')
  const pPBtn = document.createElement('button')
  pPBtn.classList.add('pause-play');
  pPBtn.textContent = '⏯';
  container.append(pPBtn)
}

export { clockDisplay, clockUpdate, pausePlayBtn };
