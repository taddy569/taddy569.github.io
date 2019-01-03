# Day 2: JS and CSS Clock

## Ready to work

* We have HTML and CSS file
* HTML: we have 3 divs which correspond hour - minute - second hand on the clock.

  ```html
  <div class="hand hour-hand"></div>
  <div class="hand min-hand"></div>
  <div class="hand second-hand"></div>
  ```

* CSS:
1. *clock* class: make rectangle div element turn into circle with

   ```css
   border-radius: 50%;
   ```

2. *hand* class: the hour - minute - second hand use this class.

   *transform* property: you can read more [here](https://www.w3schools.com/cssref/css3_pr_transform.asp).

   *transform-origin* property: default value is 50%, set this property to 100% mean shift the point of origin for the transformation to the furthest point on the x-abis of div element.

   *transition* and *transition-timing-function* property: you can open *Chrome DevTools* and change value of these for testing.

## Step by step JavaScript guide

* The most difficult of this exercise is two things:
  1. you need to understand the *transform* and *transition* property in CSS.
  2. you need to know the formula for convert hour, minute and second into degree using JavaScript.

* With JavaScript:
  1. tell browser what to do when it finish loading the page
     ```javascript
     window.addEventListener('load', init);
     ```
  2. we declare a handle function: *init*
     ```javascript
     function init() {

     }
     ```
  3. the clock is run every second, so we need to make the browser        change the degree of three divs element, we use *setInterval*        function, it tell browser do something after period of time
     ```javascript
     setInterval(handle, n);
     ```
  4. we'll set n - the second parameter in *setInterval* is 1000 (miliseconds) = 1s, for make browser execute the code in handle function. We named "makeClock" for it.

  5. after we call *setInterval* function, we invoke *makeClock* function for the first time  when the page finished loading.

  6. inside *makeClock* function
     ```javascript
     function makeClock() {
       // declare three variable for storing object element of hour - minute and second div.
       const secondHand = document.querySelector('.second-hand');
       const minuteHand = document.querySelector('.min-hand');
       const hourHand = document.querySelector('.hour-hand');

       const now = new Date(); // declare and assign the value of date object at the time code is running

       const seconds = now.getSeconds();
       const secondsDegrees = ((seconds / 60) * 360) + 90;
       secondHand.style.transform = `rotate(${secondsDegrees}deg)`; // assign the value of transform property for secondHand, the div of second element will be rotate every second!

       const minutes = now.getMinutes();
       const minutesDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
       minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

       const hours = now.getHours();
       const hoursDegrees = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90;
       hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
     }
     ```
  7. small notice about "object_element.style.transform":
  
     you'll see that in index.html file, each div for hour - minute - second hand also have *hand* class, and in style.css file, you find that transform property is assign to "rotate(90deg)", and now in JS code, we change that value every second, so what value should be chosen, is *external style sheet* way or *inline* way (object_element.style.transform will add style attribute into div element).
  
     you can read [here](https://www.w3schools.com/css/css_howto.asp) for more information.

## Putting it all together

```javascript
window.addEventListener('load', init);

function init() {
  setInterval(makeClock, 1000);
  makeClock();
}

function makeClock() {
  const secondHand = document.querySelector('.second-hand');
  const minuteHand = document.querySelector('.min-hand');
  const hourHand = document.querySelector('.hour-hand');

  const now = new Date(); // declare and assign the value of date object at the time code is running

  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`; // assign the value of transform property for secondHand, the div of second element will be rotate every second!

  const minutes = now.getMinutes();
  const minutesDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

  const hours = now.getHours();
  const hoursDegrees = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}
```

## Something cool in the future

* The div for hour hand should be the shortest, the div for second hand will be the longest and thinnest.

* We can make a digital clock or many clocks that correspond many places in the world: NewYork, LA, London, Berlin, Tokyo, ...