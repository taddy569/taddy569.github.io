# Day 6: Type Ahead

## Ready to work

1. **HTML**: We have a search-from, include:

   - Input tag let user type keyword
   - Unordered list tag for show suggestion for user

2. **SCC** file:

   - "nth-child" (even) or (odd): show you how to style suggestions alternately.

## Step by step JavaScript guide

1. We add an even: *load" for window object with handle function named *init*

   ```javascript
   window.addEventListener('load', init);
   function init(){
     //coming soon...
   }
   ```

2. Inside init function, firstly we fetch data from the Internet and assign it to *places* variable

   ```javascript
   const places = [];
   window.fetch(endpoint).then(blobl => blob.json()).then(data => places.push(...data));
   ```

   *push(...data)* : you can read more [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) to understand why can we do that.

3. We assign two element object for 2 variables

   ```javascript
   const searchInput = document.querySelector('.search');
   const suggestions = document.querySelector('.suggestions');
   ```

   and add a *keyup* event for searchInput element with handle function named *showMatches*

   ```javascript
   searchInput.addEventListener('keyup', showMatches);
   ```

4. Inside *init* function, we declare *showMatches* function for telling browser what need to do

   ```javascript
   const findMatchResult = findMatches(this.value); // we need to receive text input by user, we will search it in places variable by calling another function findMatches with parameter is text input.
   ```

5. We declare *findMatches* function inside *init* function

   ```javascript
   function findMatches(textInput) {
     const regExp = new RegExp(textInput, 'gi');
     return places.filter(place => {
       return place.city.match(regExp) || place.state.match(regExp);
     });
   }
   ```

6. Back to *showMatches* function

   ```javascript
   const html = findMatchResult.map(fmr => {
     return `<li>
               <span>${fmr.city} ${fmr.state}</span>
               <span>${fmr.population}</span>
             </li>`;  
   }).join('');
   /* and assign this variable to innerHTML propety of suggestions element */
   suggestions.innerHTML = html;
   ```

7. We want the text that user enter is highlighted in suggestion and the population number is display with dot

   ```javascript
   const html = findMatchResult.map(fmr => {
     const regExp = new RegExp(this.value, 'gi')
     const cityName = fmr.city.replace(regExp, `<span class="hl">${cityName}</span>`);
     const stateName = fmr.state.replace(regExp, `<span class="hl">${stateName}</span>`);
     return `<li>
               <span>${cityName} ${stateName}</span>
               <span>${numberToString(fmr.population)}</span>
             </li>`;  
   }).join('');
   ```

8. We declare *numberToString* function

   ```javascript
   function numberToString (number) {
     return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
   }
   ```

## Putting it all together

   ```javascript
   window.addEventListener('load', init);

   function init() {
     // retrieve data
     const places = [];
     fetch(endpoint).then(blob => blob.json()).then(data => places.push(...data));

     const searchInput = document.querySelector('.search');
     const suggestions = document.querySelector('.suggestions');

     searchInput.addEventListener('keyup', showMatches);

     function showMatches () {
       const findMatchesResult = findMatches(this.value);
       const html = findMatchesResult.map(fmr => {
         const regExp = new RegExp(this.value, 'gi');
         const cityName = fmr.city.replace(regExp, `<span class="hl">${this.value}</span>`);
         const stateName = fmr.state.replace(regExp, `<span class="hl">${this.value}</span>`); 
         return `<li>
                   <span>${cityName} ${stateName}</span>
                   <span class="population">${numberToString(fmr.population)}</span>
                 </li>`;
       }).join('');
       suggestions.innerHTML = html;
     }

     function findMatches (textInput) {
       const regExp = new RegExp(textInput, 'gi');
       return places.filter(place => {
         return place.city.match(regExp) || place.state.match(regExp);
       })
     }

     function numberToString (number) {
       return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
     }
   }
   ```

## Something cool in the future

- When user click on an item in suggestion, start getting data and show more information of this city.
