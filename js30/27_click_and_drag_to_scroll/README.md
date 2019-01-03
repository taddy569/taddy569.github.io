# Day 27:  Click and Drag to Scroll

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
   const slider = document.querySelector('.items');
   let isDown = false;
   let startX;
   let scrollLeft;
   ```

3. we add event for these elements

   ```javascript
   slider.addEventListener('mousedown', (e) => {
     isDown = true;
     slider.classList.add('active');
     startX = e.pageX - slider.offsetLeft;
     scrollLeft = slider.scrollLeft;
   });

   slider.addEventListener('mouseleave', () => {
     isDown = false;
     slider.classList.remove('active');
   });

   slider.addEventListener('mouseup', () => {
     isDown = false;
     slider.classList.remove('active');
   });

   slider.addEventListener('mousemove', (e) => {
     if (!isDown) return;
     e.preventDefault();
     const x = e.pageX - slider.offsetLeft;
     const walk = (x - startX) * 3;
     slider.scrollLeft = scrollLeft - walk;;
   });
   ```

## Putting it all together

```javascript
window.addEventListener('load', init);

function init() {
  const slider = document.querySelector('.items');
  let isDown = false;
  let startX;
  let scrollLeft;

  slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });

  slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
  });

  slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
  });

  slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 3;
    slider.scrollLeft = scrollLeft - walk;;
  });
}
```