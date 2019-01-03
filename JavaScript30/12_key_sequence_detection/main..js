const pressed = [];
const secretCode = 'js30';

window.addEventListener('keyup', (e) => {
  pressed.push(e.key);
  pressed.splice(0, pressed.length - secretCode.length);
  if (pressed.join('').includes(secretCode)) {
    console.log('Welcome to Javascript 30!');
  }
});