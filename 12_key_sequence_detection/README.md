# Day 9: Key Sequence Detection

## Javascript step by step

  1. we have a variable hold secret value and an array to store key that we pressed

     ```javascript
     const pressed = [];
     const secretCode = 'js30';
     ```

  2. we add event *keyup* for windown object with handle function

     ```javascript
     window.addEventListener('keyup', (e) => {
       // ...
     })
     ```

  3. inside this handle function, we push the key to array

     ```javascript
     pressed.push(e.key);
     ```

  4. always make sure that array only have length equal with secretCode length

     ```javascript
     pressed.splice(0, pressed.length - secretCode.length);
     ```

  5. check the rest of array, put the result into console

     ```javascript
     if (pressed.join('').includes(secretCode)) {
       console.log('...');
     }
     ```

## Putting it all together

```javascript
const pressed = [];
const secretCode = 'js30';

window.addEventListener('keyup', (e) => {
  pressed.push(e.key);
  pressed.splice(0, pressed.length - secretCode.length);
  if (pressed.join('').includes(secretCode)) {
    console.log('Welcome to Javascript 30!');
  }
});
```
