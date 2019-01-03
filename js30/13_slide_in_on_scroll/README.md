# Day 13: Slide in on Scroll

## Step by step JavaScript guide

   1. we add 'load' event to window object with handle function named init

      ```javascript
      window.addEventListener('load', init);

      function init() {
        // ...
      }
      ```

   2. inside *init* function

      we declare a variable and two functions

      ```javascript
      const sliderImages = document.querySelectorAll('.slide-in');

      function debounce() {
        // ...
      }

      function checkSlide() {
        // ...
      }
      ```

      we add 'scroll' event to window object with handel function 'debounce' above

      ```javascript
      window.addEventListener('scroll', debounce(checkSlide));
      ```

      *debounce* function is used to decide when we call *checkSlide* function, for decrease the function call times when we 'scroll' page. In this exercise, we're going to focus in checkSlide function

   3. for each image of images we get above, we assign these variables

      ```javascript
      sliderImage.forEach(sliderImage => {
        const slideInAt = window.scroolY + window.innerHeight - sliderImage.height / 2; // get distance when scroll (window.scrollY is distance from top of page, window.innerHeight is height of current window)
        const imageBottom = sliderImage.offsetTop + sliderImage.height; // get distance from the top of page to bottom of image
        const isHalfShow = slideInAt > sliderImage.offsetX;
        const isNotScrollPast = imageBottom > window.scrollY;
        if ( isHalfShow && isNotScrollPast ) { // add active class to sliderImage
          sliderImage.classList.add('active');
        } else {
          sliderImage.classList.remove('active');
        }
      })
      ```

## Putting it all together

```javascript
window.addEventListener('load', init);

function init() {
  const sliderImages = document.querySelectorAll('.slide-in');

  function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

  function checkSlide() {
    sliderImages.forEach(sliderImage => {
      const slideInAt = window.scrollY + window.innerHeight - sliderImage.height / 2;
      const imageBottom = sliderImage.offsetTop + sliderImage.height;
      const isHalfShow = slideInAt > sliderImage.offsetTop;
      const isNotScrollPast = imageBottom > window.scrollY;
      if ( isHalfShow && isNotScrollPast ) {
        sliderImage.classList.add('active');
      } else {
        sliderImage.classList.remove('active');
      }
    });
  }
  window.addEventListener('scroll', debounce(checkSlide));
}
```
