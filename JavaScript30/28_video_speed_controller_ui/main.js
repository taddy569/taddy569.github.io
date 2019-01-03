window.addEventListener('load', init);

function init() {
  const video = document.querySelector('.flex');
  const speed = document.querySelector('.speed');
  const speedBar = document.querySelector('.speed-bar');

  speed.addEventListener('mousemove', handleMove);

  function handleMove(e) {
    const y = e.pageY - this.offsetTop;
    const speedHeight = speed.offsetHeight;
    const percent = y / speedHeight;
    const min = 0.4;
    const max = 4;
    const height = Math.round(percent * 100) + '%';
    const playbackRate = percent * (max - min) + min;
    speedBar.style.height = height;
    speedBar.textContent = playbackRate.toFixed(2) + 'x';
    video.playbackRate = playbackRate;
  }
}