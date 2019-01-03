# Day 16: CSS text shadow mouse move effect

## Step by step JavaScript guide

   1. we add 'load' event to window object with handle function named init

      ```javascript
      window.addEventListener('load', init);

      function init() {
        // ...
      }
      ```

   2. inside *init* function

      we declare variables

      ```javascript
      const hero = document.querySelector('.hero');
      const text = document.querySelector('h1');
      const walk = 100; //100px
      ```

      we add events to 'hero' element

      ```javascript
      hero.addEventListener('mousemove', shadow);
      ```

   3. and declare helper function 'shadow'

      - handle for add an item into list
        ```javascript
        function shadow(e) {
          const {offsetWidth: width, offsetHeight: height } = hero;
          let { offsetX: x, offsetY: y} = e;

          if (this !== e.target) {
            x = x + e.target.offsetLeft;
            y = y + e.target.offsetTop;
          }

          const xWalk = Math.round((x / width * walk) - (walk / 2));
          const yWalk = Math.round((y / height * walk) - (walk / 2));

          text.style.textShadow = `
            ${xWalk}px ${yWalk}px 0 rgba(255,0,255,0.7),
            ${xWalk * -1}px ${yWalk}px 0 rgba(0,255,255,0.7),
            ${yWalk}px ${xWalk * -1}px 0 rgba(0,255,0,0.7),
            ${yWalk * -1}px ${xWalk}px 0 rgba(0,0,255,0.7)
          `;
        }
        ```

## Putting it all together

```javascript
window.addEventListener('load', init);

function init() {
  const hero = document.querySelector('.hero');
  const text = document.querySelector('h1');
  const walk = 100; //100px

  hero.addEventListener('mousemove', shadow);

  function shadow(e) {
    const {offsetWidth: width, offsetHeight: height } = hero;
    let { offsetX: x, offsetY: y} = e;

    if (this !== e.target) {
      x = x + e.target.offsetLeft;
      y = y + e.target.offsetTop;
    }

    const xWalk = Math.round((x / width * walk) - (walk / 2));
    const yWalk = Math.round((y / height * walk) - (walk / 2));

    text.style.textShadow = `
      ${xWalk}px ${yWalk}px 0 rgba(255,0,255,0.7),
      ${xWalk * -1}px ${yWalk}px 0 rgba(0,255,255,0.7),
      ${yWalk}px ${xWalk * -1}px 0 rgba(0,255,0,0.7),
      ${yWalk * -1}px ${xWalk}px 0 rgba(0,0,255,0.7)
    `;
  }
}
```
