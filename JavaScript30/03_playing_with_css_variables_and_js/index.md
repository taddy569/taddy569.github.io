# Day 3: Playing with CSS Variables and JS

## Ready to work

1. HTML:

   - We have an h2 element holding a span element for coloring text "JS".
   - A div element hold input and its label, 2 inputs have "range" type and another have "color" type, All of these have "name" attribute which'll be named as a property of CSS variable.

     ```html
     <input type="range" name="spacing" data-sizing="px" ...>
     <input type="range" name="blur" data-sizing="px" ...>
     <input type="color" name="base" ...>
     ```

   - A random image have source, you can also choose your favorite image for this exercise.

2. CSS:

   - [What's about CSS variables](https://www.w3schools.com/css/css3_variables.asp)

   - We declare on top of .css file 3 variables:
     ```css
     :root {
       --base: #ffc600;
       --spacing: 10px;
       --blur: 10px;
     }
     ```
   - The variable name must begin with "--" and case sensitive.

   - Image element have 3 property
     ```css
     img {
       padding: var(--spacing);
       background: var(--base);
       filter: blur(var(--blur));
     }
     ```

## Step by step JavaScript guide

1. Like two exercises before, I assign "load" property to window object by a handle function, named it "init"

   ```javascript
   window.addEventListener('load', init);
   ```

2. Inside "init" function, we get object element of 3 input elements an assign some event for these, in this case: *change* and *mousemove* event

   ```javascript
   const inputs = document.querySelectorAll('.controls input');
   ```

   "inputs" is a NodeList, we'll use *forEach* method for add event for each input element

   ```javascript
   inputs.forEach(input => {
     input.addEventListener('change', handleUpdate);
     input.addEventListener('mousemove', handleUpdate);
   });
   ```

3. We will declare handleUpdate function, tell browser do what we want

   ```javascript
   function handleUpdate() {
     const suffix = this.dataset.sizing || '';
     document.documentElement.style.setProperty(`${this.name}`, `${this.value}${suffix}`);
   } 
   ```

   I'll explain something new:

   - [What is **this** ?](https://www.w3schools.com/js/js_this.asp), in our case, this is "input" object which is added event by us.
   - "this.dataset": *dataset* is a property of element object for storing value of data-* attribute what we declare at html file. You still remember:

     ```html
     <input ... data-sizing="px" ...>
     ```
     and "this.dataset.sizing" will get the value of *data-sizing* attribute! If it's not, assign suffix variable equal with ''.

   - ... style.setProperty(): you can also do this

     ```javascript
     style.background
     style.font-size
     ...
     ```
     but we don't know exactly property here, so we use *setProperty* with two param: property name and its value

   - you can see that the "this.name" of object element is same with css variables, so when you change the value of each element in "controls" div, you'll change the value of css variable change also, and the image element have three prperties correspond with 3 variables!

## Putting it all together

  ```javascript
  window.addEventListener('load', init);

  function init() {
    const inputs = document.querySelectorAll('.controls input');
    inputs.forEach(input => {
      input.addEventListener('change', handleUpdate);
      input.addEventListener('mousemove', handleUpdate);
    });
  }

  function handleUpdate() {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`${this.name}`, `${this.value}${suffix}`);
  }
  ```

## Something cool in the future

- I have no idea now, how about you? Please let me know if you find some problems (typo, wrong explanation, ...). You're welcome. Thanks for reading :D