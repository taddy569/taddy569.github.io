window.addEventListener('load', init);

function init() {
  const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('click', handleCheck);
  });
  
  let lastChecked;

  function handleCheck(event) {
    if (event.shiftKey && this.checked === true) {
      let isBetween = false;
      checkboxes.forEach(checkbox => {
        if (checkbox === this || checkbox === lastChecked) {
          isBetween = !isBetween;
        }
        if (isBetween) {
          checkbox.checked = true;
        }
      })
    }

    lastChecked = this;
  }
}