# Day 1: JavaScript Drum Kit

## Ready to work

* We have HTML (index.html) and CSS file (style.css), also with sounds folder.
* HTML
  1. data-key attribute: data-* is a HTML Global Attributes (like id or class, ...), used to store custome data private to the page. At this case, data-key attribute of div tag and audio tag is store key code corresponds of button.
  2. kbd tag is a phrase tag, defines keyboard input
  3. audio: if you want audio display in page, just add controls attribute in the same place with src attribute
      ```html
      <audio controls src="source-url"></audio>.
      ```
* CSS
  1. playing class is defined with some rules in css file, but it isn't used at the first time when browser load the page, it will be added to class attribute of correct element base on keyDown event (for showing user that what button they've press and playing now,  after the sound is play, playing class is removed from element.
      ```css
      .playing {
        transform: scale(1.1);
        border-color: #ffc600;
        box-shadow: 0 0 1rem #ffc600;
      }
      ```

## Step by step JavaScript guide

* Step 1: assign handler function to onload property of window object, it named init (feel free to name you own function).

  ```javascript
  window.addEventListener('load', init);
  ```

  or

  ```javascript
  window.onload = init;
  ```

* Step 2: in init function, there are two main steps we need to do

  1. tell the browser know when the correct key is pressed and how to handle this event  with *playSound* function

      ``` javascript
      window.addEventListener('keydown', playSound);
      ```

  2. tell the browser know when the transition event of div element is end with *removeTransition* function.
      * We have 9 div element corresponds with 9 sounds in sounds folder  we need all of this have this handle

        ```javascript
        const divs = Array.from(document.querySelectorAll('.key')); // select elements which have class="key"
        ```

      * notice: querySelectorAll is different with querySelector (return first element that matches a specified CSS selector)
        ```javascript
        divs.forEach(function(div) {
          div.addEventListener('transitionend', removeTransition);
        }) // for each div element of divs array, we add the transitionend event with removeTransition handler function
        ```
      * you can use arrow function like that:
        ```javascript
        divs.forEach(div => {
          div.addEventListener('transitionend', removeTransition);
        });
        ```

* Step 3: declare helper functions

  1. *playSound* function:

     ```javascript
     function playSound(event) { // event parameter: let the function know what the event object is called when event happend
       const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
       if(!audio) {
         return;
       }
       const div = document.querySelector(`div[data-key="${event.keyCode}"]`);
       div.classList.add('playing');
       audio.currentTime = 0; // make sure no time for delay! you can comment this line and try press key continuously to see the difference
       audio.play();
     }
     ```

  2. *removeTransition* function:

     ```javascript
     function removeTransition(event) {
       if(event.propertyName !== "transform") {
         return;
       }
       event.target.classList.remove('playing');//classList is property of element object, store all class of element in HTML.
     }
     ```

## Putting it all together

```javascript
window.addEventListener('load', init);

function init() {
  window.addEventListener('keydown', playSound);
  
  const divs = Array.from(document.querySelectorAll('.key'));
  divs.forEach(function(div) {
    div.addEventListener('transitionend', removeTransition);
  });

}

function playSound(event) {
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  if (!audio) {
    return;
  }
  const div = document.querySelector(`div[data-key="${event.keyCode}"]`);
  div.classList.add('playing');
  audio.currentTime = 0;
  audio.play();
}

function removeTransition(event) {
  if (event.propertyName !== "transform") {
    return;
  }
  event.target.classList.remove('playing');
}
```

## Something cool in the future

* New great sound: guitar, piano, the music sheet, ...

### Yes, it's done. Congratulations!! You've finished the first day of challenge :D