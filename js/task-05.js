const inputRef = document.querySelector('#name-input');

let outputRef = document.querySelector('#name-output');

inputRef.addEventListener('input', event => {
   if (inputRef !=='') {
    outputRef.textContent = event.currentTarget.value;
    console.log(event.currentTarget.value);
   } 
   if (outputRef.textContent === ''){
    outputRef.textContent = 'Anonymous'
   }
});

