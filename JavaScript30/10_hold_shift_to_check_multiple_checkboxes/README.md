# Day 10: Hold Shift to Check Multiple Checkboxes

## Step by step JavaScript guide

   1. Description: user click on a specific checkbox, then holding "Shitf" key and continue click to another checkbox, all of checkboxes between two above will be checked.

   2. add an event handle function named *init* will be assigned for onload preperty

      ```javascript
      window.addEventListener('load', init);

      function init() {
        //...
      }
      ```

   3. inside init function, we assigned event *click* for all checkboxes with *handleCheck* function

      ```javascript
      const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
      checkboxes.forEach(checkbox => {
        checkbox.addEventListener('click', handleCheck);
      });
      ```

   4. we declare *handleCheck* function

      ```javascript
      function handleCheck(event) {
        // ,,,
      }
      ```
   5. we need a variable to hold the state of last checkbox checked, before we press the *Shift* key, we'll declare this out side of *handleCheck* function

      ```javascript
      let lastChecked;
      ```

   6. inside *handleCheck* function, we check if when we click on checkbox, "Shift" key is hold

      ```javascript
      if (event.shiftKey && this.checked) {
        // ...
      }
      ```

   7. we will tell browser to iterate all of checkboxes, to know what checkbox is checked and set checked for another checkboxes between its

      ```javascript
      let isBetween = false;
      checkboxes.forEach(checkbox => {
        if (checkbox === this || checkbox === lastChecked) {
          isBetween = !isBetween;
        }
      })
      ```

      * when isBetween is *true*

      ```javascript
      if (isBetween) {
        checkbox.checked = true;
      }
      ```

   8. we save the current checkbox is checked to lastChecked variable

      ```javascript
      lastChecked = this;
      ```

## Putting it all together

```javascript
window.addEventListener('load', init);

function init() {
  const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('click', handleCheck);
  });

  let lastChecked;

  function handleCheck(event) {
    if(event.shiftKey && this.checked === true) {
      let isBetween = false;
      checkboxes.forEach(checkbox => {
        if (checkbox === this || checkbox === lastChecked) {
          isBetween = !isBetween;
        }
        if (isBetween) {
          checkbox.checked = true;
        }
      });
    }
    lastChecked = this;
  }
}
```
