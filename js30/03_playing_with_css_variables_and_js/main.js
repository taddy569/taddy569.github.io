window.addEventListener('load', init);

function init2() {
  const inputs = document.querySelectorAll('.controls input');
  inputs.forEach(function(input){
    input.addEventListener('change', handleUpdate);
    input.addEventListener('mousemove', handleUpdate);
  });
}

function handleUpdate3() {
  const suffix = this.dataset.sizing || ''
  document.documentElement.style.setProperty(`--${this.name}`, `${this.value}${suffix}`);
}

// function handleUpdate2(e) {
//   const suffix = this.dataset.sizing || '';
//   // document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
//   console.log(`value: ${e.target.value}`);
//   const image = document.querySelector("img");
  
//   // image.style.setProperty('filter', `blur(${e.target.value}px)` );
//   // image.style.setProperty('background', `red` );
//   document.documentElement.style.setProperty(`background`, 'red');
  
// }

function init() {
  const inputs = document.querySelectorAll('.controls input');
  inputs.forEach(input => {
    input.addEventListener('change', handleUpdate);
    input.addEventListener('mouseover', handleUpdate);
  }); 
}

function handleUpdate() {
  const suffix = this.dataset.sizing || '';
  console.log(this);
  document.documentElement.style.setProperty(`--${this.name}`, `${this.value}${suffix}`);
}