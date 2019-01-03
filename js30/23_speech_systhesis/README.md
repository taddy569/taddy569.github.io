# Day 23:  Speech synthesis

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
   const msg = new SpeechSynthesisUtterance();
   let voices = [];
   const voicesDropdown = document.querySelector('[name="voice"]');
   const options = document.querySelectorAll('[type="range"], [name="text"]');
   const speakButton = document.querySelector('#speak');
   const stopButton = document.querySelector('#stop');
   msg.text = document.querySelector('[name="text"]').value;
   ```

3. we add class to element and add it body element

   ```javascript
   highlight.classList.add('highlight');
   document.body.appendChild(highlight);
   ```

4. we declare function for control populate voice

   ```javascript
   function populateVoices() {
    voices = this.getVoices();
    voicesDropdown.innerHTML = voices
      .filter(voice => voice.lang.includes('en'))
      .map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`)
      .join('');
   }
   ```

5. we declare function for control set voice

   ```javascript
   function setVoice() {
     msg.voice = voices.find(voice => voice.name === this.value);
     toggle();
   }
   ```

6. we declare function for control play/stop

   ```javascript
   function toggle(startOver = true) {
     speechSynthesis.cancel();
     if (startOver) {
       speechSynthesis.speak(msg);
     }
   }
   ```

7. we declare function for control option rate and pitch

   ```javascript
   function setOption() {
     console.log(this.name, this.value);
     msg[this.name] = this.value;
     toggle();
   }
   ```

8. we add event

  ```javascript
  speechSynthesis.addEventListener('voiceschanged', populateVoices);
  voicesDropdown.addEventListener('change', setVoice);
  options.forEach(option => option.addEventListener('change', setOption));
  speakButton.addEventListener('click', toggle);
  stopButton.addEventListener('click', () => toggle(false));
  ```

## Putting it all together

```javascript
window.addEventListener('load', init);

function init() {
  const msg = new SpeechSynthesisUtterance();
  let voices = [];
  const voicesDropdown = document.querySelector('[name="voice"]');
  const options = document.querySelectorAll('[type="range"], [name="text"]');
  const speakButton = document.querySelector('#speak');
  const stopButton = document.querySelector('#stop');
  msg.text = document.querySelector('[name="text"]').value;
  function populateVoices() {
    voices = this.getVoices();
    voicesDropdown.innerHTML = voices
      .filter(voice => voice.lang.includes('en'))
      .map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`)
      .join('');
  }
  function setVoice() {
    msg.voice = voices.find(voice => voice.name === this.value);
    toggle();
  }
  function toggle(startOver = true) {
    speechSynthesis.cancel();
    if (startOver) {
      speechSynthesis.speak(msg);
    }
  }
  function setOption() {
    console.log(this.name, this.value);
    msg[this.name] = this.value;
    toggle();
  }
  speechSynthesis.addEventListener('voiceschanged', populateVoices);
  voicesDropdown.addEventListener('change', setVoice);
  options.forEach(option => option.addEventListener('change', setOption));
  speakButton.addEventListener('click', toggle);
  stopButton.addEventListener('click', () => toggle(false));
}
```