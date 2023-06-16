function clockDisplay() {
  const container = document.querySelector('.clock');
  const hourDisplay = document.createElement('div')
  const minDisplay = document.createElement('div')
  const secDisplay = document.createElement('div')
  hourDisplay.classList.add('hour')
  minDisplay.classList.add('min')
  secDisplay.classList.add('sec')
  container.append(hourDisplay, minDisplay, secDisplay)
}

function clockUpdate(hour, min, sec) {
  const hourDisplay = document.querySelector('.hour')
  const minDisplay = document.querySelector('.min')
  const secDisplay = document.querySelector('.sec')
  hourDisplay.textContent = hour;
  minDisplay.textContent = min;
  secDisplay.textContent = sec;
}

export { clockDisplay, clockUpdate }