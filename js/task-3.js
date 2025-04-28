const input = document.querySelector('#name-input');
const span = document.querySelector('#name-output');

input.addEventListener('input', function (event) {
    const cleanedInput = input.value.trim(); 
    span.textContent = cleanedInput === '' ? 'Anonymous' : cleanedInput; 
  });