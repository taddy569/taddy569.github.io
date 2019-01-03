# Day 22: Follow along links

## Step by step JavaScript guide

1. We add an even: *load" for window object with handle function named *init*

   ```javascript
   window.addEventListener('load', init);

   function init(){
     //coming soon...
   }
   ```

2. Inside init function, we declare variable for these elements

   ```javascript
   const triggers = document.querySelectorAll('a');
   const highlight = document.createElement('span');
   ```

3. we add class to element and add it body element

   ```javascript
   highlight.classList.add('highlight');
   document.body.appendChild(highlight);
   ```

4. we declare function for control highlight link

   ```javascript
   function hightLightLink() {
     const linkCoords = this.getBoundingClientRect();
     const coords = {
       width: linkCoords.width,
       height: linkCoords.height,
       top: linkCoords.top + window.scrollY,
       left: linkCoords.left + window.scrollX
     };

     highlight.style.width = `${coords.width}px`;
     highlight.style.height = `${coords.height}px`;
     highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
   }
   ```

5. we add event 'mouseenter' for each `<a>` element

  ```javascript
  triggers.forEach(a => a.addEventListener('mouseenter', hightLightLink));
  ```

## Putting it all together

```javascript
window.addEventListener('load', init);

function init() {
  const triggers = document.querySelectorAll('a');
  const highlight = document.createElement('span');
  highlight.classList.add('highlight');
  document.body.appendChild(highlight);

  function hightLightLink() {
    const linkCoords = this.getBoundingClientRect();
    const coords = {
      width: linkCoords.width,
      height: linkCoords.height,
      top: linkCoords.top + window.scrollY,
      left: linkCoords.left + window.scrollX
    };

    highlight.style.width = `${coords.width}px`;
    highlight.style.height = `${coords.height}px`;
    highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
  }

  triggers.forEach(a => a.addEventListener('mouseenter', hightLightLink));
}
```