# Day 7: Array Cardio Day 2

## Ready to work

- In this exercise, we don't need CSS file for styling the page, just simple paragrahp for let us know where we need to work with

- Open your console window by press (**Ctrl + Shift + J**) for Chrome or (**Ctrl + Shift + K**) for Firefox.

- Check for these information:
  
  1. [***some***](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some) : return **true** if the callback function return a truthy value for any array element, otherwise, **false**

  2. [***every***](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every) : return **true**
  if the callback function return a truthy value for every array element, otherwise, **false**

  3. [***find***](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find) : return the value of first element in the array that satisfies the provided testing function, otherwise, **undefined** is return

  4. [***findIndex***](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex): retrun an index in the array if an element passes the test, otherwise, return -1

  5. [***spread operator***](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

     *notice* : in exercise, we can see these lines of code

     ```javascript
     const newComments = [
       ...comments.slice(0, index),
       ...comments.slice(index + 1)
     ];
     ```

     if we don't put these dots before array, newComments will be come

     ```javascript
     newComments = [[], []]
     ```