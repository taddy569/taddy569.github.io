# Day 20: Native speech recognition

## Step by step JavaScript guide

1. We add an even: *load" for window object with handle function named *init*

   ```javascript
   window.addEventListener('load', init);

   function init(){
     //coming soon...
   }
   ```

2. Inside init function, we declare variable for 'div' element

   ```javascript
   const words = document.querySelector('.words');
   ```

3. setup for speech recognition

   ```javascript
   window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
   const recognition = new SpeechRecognition();
   recognition.interimResults = true;
   recognition.lang = 'en-US';
   ```

4. 'p' element for holding what we speak

   ```javascript
   let p = document.createElement('p');
   words.appendChild(p);
   ```

5. We add `result` event to recognition object

   ```javascript
   recognition.addEventListener('result', e => {
    const transcript = Array.from(e.results)
      .map(result => result[0])
      .map(result => result.transcript)
      .join('');
      const poopScript = transcript.replace(/poop|poo|shit|dump/gi, '💩');
      p.textContent = poopScript;
      if (e.results[0].isFinal) {
        p = document.createElement('p');
        words.appendChild(p);
      }
   });
   ```

6. Make sure that browser will record what we speak again

   ```javascript
   recognition.addEventListener('end', recognition.start);
   ```

7. Start listening

   ```javascript
   recognition.start();
   ```

## Putting it all together

```javascript
window.addEventListener('load', init);

function init() {
  const words = document.querySelector('.words');

  window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();
  recognition.interimResults = true;
  recognition.lang = 'en-US';

  let p = document.createElement('p');
  words.appendChild(p);

  recognition.addEventListener('result', e => {
    const transcript = Array.from(e.results)
      .map(result => result[0])
      .map(result => result.transcript)
      .join('');
      const poopScript = transcript.replace(/poop|poo|shit|dump/gi, '💩');
      p.textContent = poopScript;
      if (e.results[0].isFinal) {
        p = document.createElement('p');
        words.appendChild(p);
      }
  });
  recognition.addEventListener('end', recognition.start);
  recognition.start();
}
```