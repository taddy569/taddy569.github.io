# Day 11: Custom HTML5 Video Player

## Ready to work

we have a div hold video section and controls section inside controls div section, we have: progess bar, button play/pause, volume control, speed control, skip control


## Step by step JavaScript guide

1. we add event 'load' of window object for handle function named init

   ```javascript
   window.addEventListener('load', init);

   function init() {
     //...
   }
   ```

2. inside init function, we assign these elements to variables for usin later

   ```javascript
   const player = document.querySelector('.player');
   const video = document.querySelector('.viewer');
   const progress = document.querySelector('.progress');
   const progressBar = document.querySelector('.progress__filled');
   const toggle = document.querySelector('.toggle');
   const muteToggle = document.querySelector('.mute');
   const ranges = document.querySelectorAll('.player__slider');
   const skipButtons = document.querySelectorAll('[data-skip]');
   const fullScreenToggle = document.querySelector('.full');
   ```

3. we add event for these elements, make the browser know what we want to do:

   when user click on video, it 'play' or 'pause' base on its current status

   ```javascript
   video.addEventListener('click', togglePlay);
   ```

   toggle button 'play/pause' will update icon when video is played or paused

   ```javascript
   video.addEventListener('play', updateToggleButton);
   video.addEventListener('pause', updateToggleButton);
   ```

   when video is played, the progress bar will run, let user know the current time video

   ```javascript
   video.addEventListener('timeupdate', handleProgress);
   ```

   when click on toggle button on/off, the icon of button will change

   ```javascript
   toggle.addEventListener('click', togglePlay);
   ```

   when change value of range bar(volume and speed), the volume and speed of video will change

   ```javascript
   ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
   ```

   when press skip button, the video will play at the x duration, x base on what skip button we press ( -10s or +25s)

   ```javascript
   skipButtons.forEach(skipButton => skipButton.addEventListener('click', skip));
   ```

   **optional**: I've updated something for this exercise

   we tell browser what to do when video is ended

   ```javascript
   skipButtons.forEach(skipButton => skipButton.addEventListener('click', skip));
   ```

   we want mute video

   ```javascript
   muteToggle.addEventListener('click', muteHandle);
   ```

   we want watch the video in full screen mode

   ```javascript
   fullScreenToggle.addEventListener('click', handleFullScreen);
   ```

   like youtube, when press spacebar key, the video will play or pause

   ```javascript
   window.addEventListener('keydown', handleKey);
   ```

   We will work with helper function in the next section.

## Putting it all together

```javascript
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
```

## Something cool in the future

- We can choose different resolution 144p, 240p, 360p, 480p and so on.
- ...