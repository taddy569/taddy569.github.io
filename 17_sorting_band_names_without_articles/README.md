# Day 17: Sorting band names without articles

## Ready to work

1. **HTML**: We have an un order list empty, ready for show sort array.

2. **SCC**: some rules for list and its item.

## Step by step JavaScript guide

1. We add an even: *load" for window object with handle function named *init*

   ```javascript
   window.addEventListener('load', init);

   function init(){
     //coming soon...
   }
   ```

2. Inside init function, we want to sort the array first base on element's articles. We need a function for doing this

   ```javascript
   function strip (band) {
     return band.replace(/^(a |an |the )/i,'').trim();
   }
   ```

3. We sort array base on strip condition

   ```javascript
   const sortBands = bands.sort((a, b) => strip(a) > strip(b) ? 1 : -1);
   ```

4. And we show sort array

   ```javascript
   document.GetElementById('bands').innerHTML = sortBands.map(band => `<li>${band}</li>`).join(');
   ```

## Putting it all together

   ```javascript
   window.addEventListener('load', init);

   function init() {
     const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
  
     function strip (band) {
       return band.replace(/^(a |an |the )/i, '').trim();
     }

     const sortBands = bands.sort((a, b) => strip(a) > strip(b) ? 1 : -1);

     document.getElementById('bands').innerHTML = sortBands.map(band => `<li>${band}</li>`).join('');  
   }
   ```