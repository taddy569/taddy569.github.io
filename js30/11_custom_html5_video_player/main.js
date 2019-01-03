window.addEventListener('load', init);

function init() {
  const player = document.querySelector('.player');
  const video = document.querySelector('.viewer');
  const progress = document.querySelector('.progress');
  const progressBar = document.querySelector('.progress__filled');
  const toggle = document.querySelector('.toggle');
  const muteToggle = document.querySelector('.mute');
  const ranges = document.querySelectorAll('.player__slider');
  const skipButtons = document.querySelectorAll('[data-skip]');
  const fullScreenToggle = document.querySelector('.full');

  video.addEventListener('click', togglePlay);
  video.addEventListener('play', updateToggleButton);
  video.addEventListener('pause', updateToggleButton);
  video.addEventListener('timeupdate', handleProgress);
  //
  video.addEventListener('ended', handleEnd);

  let mousedown = false;
  progress.addEventListener('click', scrub);
  progress.addEventListener('mousemove', (e) =>{
    if (mousedown) {
      scrub(e);
    }
  });
  progress.addEventListener('mousedown', () => mousedown = true);
  progress.addEventListener('mouseup', () => mousedown = false);


  toggle.addEventListener('click', togglePlay);
  //
  muteToggle.addEventListener('click', muteHandle);

  ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));

  skipButtons.forEach(skipButton => skipButton.addEventListener('click', skip));
  //
  fullScreenToggle.addEventListener('click', handleFullScreen);

  //
  window.addEventListener('keydown', handleKey);

  function togglePlay (event) {
    const method = video.paused ? 'play' : 'pause';
    video[method]();
  }

  function muteHandle (event) {
    let isMuted = video.muted;
    video.muted = !isMuted;

    const icon = (video.muted) ? '🔇' : '🔉';
    muteToggle.innerHTML = icon;
  }

  function updateToggleButton (event) {
    const icon = video.paused ? '►' : '❚ ❚';
    toggle.innerHTML = icon;
  }

  function handleProgress (event) {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
  }

  function handleRangeUpdate (event) {
    video[this.name] = this.value;
    console.log(`name: ${this.name} value: ${this.value}`);
  }

  function skip (event) {
    video.currentTime += parseFloat(this.dataset.skip);
  }

  function scrub (event) {
    const scrubTime = (event.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = parseFloat(scrubTime);
  }

  function handleEnd () {
    video.load();
    progressBar.style.flexBasis = `0%`;
  }

  function handleFullScreen () {
    if(document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      player.requestFullscreen();
    }    
  }

  function handleKey (event) {
    if (event.keyCode == 32) {
      const method = (video.paused) ? 'play' : 'pause';
      video[method]();
    }
  }

}