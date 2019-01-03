# Day 25:  Event capture, propagation, bubbling and once

## Step by step

1. We add an even: *load" for window object with handle function named *init*

   ```javascript
   window.addEventListener('load', init);

   function init(){
     //coming soon...
   }
   ```

2. Inside init function, we declare variable for these elements

   ```javascript
   const divs = document.querySelectorAll('div');
   const button = document.querySelector('button');
   ```

3. we add event for these elements

   ```javascript
   divs.forEach(div => div.addEventListener('click', logText, {
     capture: false,
     once: true
   }));

   button.addEventListener('click', () => {
     console.log('Click!!!');
   }, {
     once: true
   })
   ```

4. and declare helper function

  ```javascript
  function logText(e) {
    console.log(this.classList.value);
  }
  ```

## Putting it all together

```javascript
window.addEventListener('load', init);

function init() {
  const divs = document.querySelectorAll('div');
  const button = document.querySelector('button');

  divs.forEach(div => div.addEventListener('click', logText, {
    capture: false,
    once: true
  }));

  button.addEventListener('click', () => {
    console.log('Click!!!');
  }, {
    once: true
  })

  function logText(e) {
    console.log(this.classList.value);
  }
}
```