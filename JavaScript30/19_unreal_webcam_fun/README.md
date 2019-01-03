# Day 19: Unreal webcam fun

## Step by step JavaScript guide

1. We add an even: *load" for window object with handle function named *init*

   ```javascript
   window.addEventListener('load', init);

   function init(){
     //coming soon...
   }
   ```

2. Inside init function, we declare variables for these elements

   ```javascript
   const video = document.querySelector(".player");
   const canvas = document.querySelector(".photo");
   const ctx = canvas.getContext("2d");
   const strip = document.querySelector(".strip");
   const snap = document.querySelector(".snap");
   ```

3. We declare `getVideo` function asking permission for enable webcam in browser and show it to user

   ```javascript
   function getVideo() {
     navigator.mediaDevices
       .getUserMedia({ video: true, audio: false })
       .then(localMediaStream => {
         video.srcObject = localMediaStream;
         video.play();
       })
       .catch(err => {
         console.error(`OH NO!!! ${err}`);
       });
   };
   ```

4. We declare `paintToCanvas` for showing the effect

   ```javascript
   function paintToCanvas() {
     const width = video.videoWidth;
     const height = video.videoHeight;

     canvas.width = width;
     canvas.height = height;

     return setInterval(() => {
       ctx.drawImage(video, 0, 0, width, height);

       let pixels = ctx.getImageData(0, 0, width, height);

       pixels = greenScreen(pixels);

       ctx.putImageData(pixels, 0, 0);
     }, 16);
   };
   ```

5. We need `greenScreen` function to change the pixels depend on user

   ```javascript
   function greenScreen(pixels) {
     const levels = {};

     document.querySelectorAll(".rgb input").forEach(input => {
       levels[input.name] = input.value;
     });

     for (i = 0; i < pixels.data.length; i += 4) {
       red = pixels.data[i + 0];
       green = pixels.data[i + 1];
       blue = pixels.data[i + 2];
       alpha = pixels.data[i + 3];

       if (
         red >= levels.rmin &&
         green >= levels.gmin &&
         blue >= levels.bmin &&
         red <= levels.rmax &&
         green <= levels.gmax &&
         blue <= levels.bmax
       ) {
         pixels.data[i + 3] = 0;
       }
     }
     return pixels;
   };
   ```

6. We declare `takePhoto` function for handle event when user want to save the moment

   ```javascript
   function takePhoto() {
     snap.currentTime = 0;
     snap.play();

     const data = canvas.toDataURL("image/jpeg");
     const link = document.createElement("a");

     link.href = data;
     link.setAttribute("download", "handsome");
     link.innerHTML = `<img src="${data}" alt="Handsome Man" />`;
     strip.insertBefore(link, strip.firsChild);
   };
   ```

7. Finally, add event handle for element and call `getVideo` when page is loaded

   ```javascript
   video.addEventListener("canplay", paintToCanvas);
   document.querySelector(".takePhoto").addEventListener("click", takePhoto);

   getVideo();
   ```

## Putting it all together

```javascript
window.addEventListener('load', init);

function init() {
  const video = document.querySelector(".player");
  const canvas = document.querySelector(".photo");
  const ctx = canvas.getContext("2d");
  const strip = document.querySelector(".strip");
  const snap = document.querySelector(".snap");

  function getVideo() {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: false })
      .then(localMediaStream => {
        video.srcObject = localMediaStream;
        video.play();
      })
      .catch(err => {
        console.error(`OH NO!!! ${err}`);
      });
  };

  function paintToCanvas() {
    const width = video.videoWidth;
    const height = video.videoHeight;

    canvas.width = width;
    canvas.height = height;

    return setInterval(() => {
      ctx.drawImage(video, 0, 0, width, height);

      let pixels = ctx.getImageData(0, 0, width, height);

      pixels = greenScreen(pixels);

      ctx.putImageData(pixels, 0, 0);
    }, 16);
  };

  function takePhoto() {
    snap.currentTime = 0;
    snap.play();

    const data = canvas.toDataURL("image/jpeg");
    const link = document.createElement("a");

    link.href = data;
    link.setAttribute("download", "handsome");
    link.innerHTML = `<img src="${data}" alt="Handsome Man" />`;
    strip.insertBefore(link, strip.firsChild);
  };

  function greenScreen(pixels) {
    const levels = {};

    document.querySelectorAll(".rgb input").forEach(input => {
      levels[input.name] = input.value;
    });

    for (i = 0; i < pixels.data.length; i += 4) {
      red = pixels.data[i + 0];
      green = pixels.data[i + 1];
      blue = pixels.data[i + 2];
      alpha = pixels.data[i + 3];

      if (
        red >= levels.rmin &&
        green >= levels.gmin &&
        blue >= levels.bmin &&
        red <= levels.rmax &&
        green <= levels.gmax &&
        blue <= levels.bmax
      ) {
        pixels.data[i + 3] = 0;
      }
    }
    return pixels;
  };

  video.addEventListener("canplay", paintToCanvas);
  document.querySelector(".takePhoto").addEventListener("click", takePhoto);

  getVideo();
}
```