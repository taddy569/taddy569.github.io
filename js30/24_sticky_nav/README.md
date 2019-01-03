# Day 24:  Sticky Nav

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
   const nav = document.querySelector('#main');
   const topOfNav = nav.offsetTop;
   ```

3. we declare function for control populate voice

   ```javascript
   function fixNav() {
    if (window.scrollY > topOfNav) {
      document.body.style.paddingTop = nav.offsetHeight + 'px';
      document.body.classList.add('fixed-nav');
    } else {
      document.body.style.paddingTop = '0px';
      document.body.classList.remove('fixed-nav');
    }
   }
   ```

   and some css

   ```css
   .fixed-nav .site-wrap {
     transform: scale(1);
   }

   .fixed-nav nav {
     position: fixed;
     box-shadow: 0 5px rgba(0, 0, 0, 0.1);
   }

   .fixed-nav li.logo {
     max-width: 500px;
   }
   ```

4. we add event

  ```javascript
  window.addEventListener('scroll', fixNav);
  ```

## Putting it all together

```javascript
window.addEventListener('load', init);

function init() {
  const nav = document.querySelector('#main');
  const topOfNav = nav.offsetTop;

  function fixNav() {
    if (window.scrollY > topOfNav) {
      document.body.style.paddingTop = nav.offsetHeight + 'px';
      document.body.classList.add('fixed-nav');
    } else {
      document.body.style.paddingTop = '0px';
      document.body.classList.remove('fixed-nav');
    }
  }

  window.addEventListener('scroll', fixNav);
}
```