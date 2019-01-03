# Day 21: Geolocation based speedometer and compass

## Step by step JavaScript guide

1. We add an even: *load" for window object with handle function named *init*

   ```javascript
   window.addEventListener('load', init);

   function init(){
     //coming soon...
   }
   ```

2. Inside init function, we declare variable for these elements

   ```javascript
   const arrow = document.querySelector('.arrow');
   const speed = document.querySelector('.speed-value');
   ```

3. setup for geolocation and show it result

   ```javascript
   navigator.geolocation.watchPosition((data) => {
     speed.textContent = data.coords.speed;
     arrow.style.transform = `rotate(${data.coords.heading}deg)`;
   }, (error) => {
     console.error(error);
   });
   ```

## Putting it all together

```javascript
wwindow.addEventListener('load', init);

function init() {
  const arrow = document.querySelector('.arrow');
  const speed = document.querySelector('.speed-value');

  navigator.geolocation.watchPosition((data) => {
    speed.textContent = data.coords.speed;
    arrow.style.transform = `rotate(${data.coords.heading}deg)`;
  }, (error) => {
    console.error(error);
  });
}
```