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

