# Day 26:  Stripe follow along dropdown

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
   const triggers = document.querySelectorAll('.cool > li');
   const background = document.querySelector('.dropdownBackground');
   const nav = document.querySelector('.top');
   ```

3. we add event for these elements

   ```javascript
   triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
   triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));
   ```

4. and declare helper function

  ```javascript
  function handleEnter() {
    this.classList.add('trigger-enter');
    setTimeout(() => this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active'),150);
    background.classList.add('open');

    const dropdown = this.querySelector('.dropdown');
    const dropdownCoords = dropdown.getBoundingClientRect();
    const navCoords = nav.getBoundingClientRect();

    const coords = {
      height: dropdownCoords.height,
      width: dropdownCoords.width,
      top: dropdownCoords.top - navCoords.top,
      left: dropdownCoords.left - navCoords.left,
    };

    background.style.setProperty('width', `${coords.width}px`);
    background.style.setProperty('height', `${coords.height}px`);
    background.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px)`);
  }

  function handleLeave() {
    this.classList.remove('trigger-enter', 'trigger-enter-acitve');
    background.classList.remove('open');
  }
  ```

## Putting it all together

```javascript
window.addEventListener('load', init);

function init() {
  const triggers = document.querySelectorAll('.cool > li');
  const background = document.querySelector('.dropdownBackground');
  const nav = document.querySelector('.top');

  triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
  triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));

  function handleEnter() {
    this.classList.add('trigger-enter');
    setTimeout(() => this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active'),150);
    background.classList.add('open');

    const dropdown = this.querySelector('.dropdown');
    const dropdownCoords = dropdown.getBoundingClientRect();
    const navCoords = nav.getBoundingClientRect();
    
    const coords = {
      height: dropdownCoords.height,
      width: dropdownCoords.width,
      top: dropdownCoords.top - navCoords.top,
      left: dropdownCoords.left - navCoords.left,
    };

    background.style.setProperty('width', `${coords.width}px`);
    background.style.setProperty('height', `${coords.height}px`);
    background.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px)`);
  }

  function handleLeave() {
    this.classList.remove('trigger-enter', 'trigger-enter-acitve');
    background.classList.remove('open');
  }
}
```