window.addEventListener('load', init);

function init() {
  const paragraph = document.querySelector('p');
  const timeNodes = Array.from(document.querySelectorAll('[data-time]'));
  
  const seconds = timeNodes.map(node => node.dataset.time).map(time => {
    const [mins, secs] = time.split(':').map(parseFloat);
    return ((mins * 60) + secs);
  }).reduce((total, element) => total += element);

  console.log(seconds);

  let secondsLeft = seconds;

  const hours = Math.floor(secondsLeft / 3600);
  secondsLeft = secondsLeft % 3600;

  const minutes = Math.floor(secondsLeft / 60);
  secondsLeft = secondsLeft % 60;

  paragraph.innerHTML += `${hours} hours ${minutes} minutes ${secondsLeft} seconds`;
}