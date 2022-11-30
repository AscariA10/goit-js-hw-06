const inputRef = document.querySelector('input');
const gallery = document.querySelector('#controls');
const galleryPlace = document.querySelector('#boxes');
const createButtonRef = document.querySelector('[data-create]');
const destroyButtonRef = document.querySelector('[data-destroy]');

const quantityArray = [];

createButtonRef.addEventListener('click', creationOfCollection);
destroyButtonRef.addEventListener('click', () => {
   galleryPlace.innerHTML = '';
   inputRef.value = '';
   quantityArray.splice(0,quantityArray.length);
   console.log(quantityArray)
});

function creationOfCollection() {
   const elementsQuantity = inputRef.value;

   for (let i = 0; i < elementsQuantity; i += 1) {
      let galleryIcon = document.createElement('div');
      galleryIcon.style.width = `${30 + i * 10}px`;
      galleryIcon.style.height = `${30 + i * 10}px`;
      galleryIcon.style.backgroundColor = getRandomHexColor();
      quantityArray.push(galleryIcon);
      
   }
   console.log(quantityArray)
   galleryPlace.append(...quantityArray);
}

function getRandomHexColor() {
   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
