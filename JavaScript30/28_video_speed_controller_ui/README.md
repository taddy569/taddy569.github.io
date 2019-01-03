# Day 28:  Video Speed Controller UI

## Step by step guide JavaScirpt

1. We add an even: *load" for window object with handle function named *init*

   ```javascript
   window.addEventListener('load', init);

   function init(){
     //coming soon...
   }
   ```

2. Inside init function, we declare variable for these elements

   ```javascript
   const video = document.querySelector('.flex');
   const speed = document.querySelector('.speed');
   const speedBar = document.querySelector('.speed-bar');
   ```

3. we add event for these elements

   ```javascript
   speed.addEventListener('mousemove', handleMove);
   ```

4. and declare helper function

   ```javascript
   function handleMove(e) {
     const y = e.pageY - this.offsetTop;
     const speedHeight = speed.offsetHeight;
     const percent = y / speedHeight;
     const min = 0.4;
     const max = 4;
     const playbackRate = percent * (max - min) + min;
     const height = Math.round(percent * 100) + '%';
     speedBar.style.height = height;
     speedBar.textContent = playbackRate.toFixed(2) + 'x';
     video.playbackRate = playbackRate; 
   }

## Putting it all together

```javascript
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
```