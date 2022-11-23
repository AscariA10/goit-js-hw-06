const counterNode = document.querySelector('#counter');

const valueDisplay = document.querySelector('#value');

let countOfClicks = 0;

const incrementButtonRef = document.querySelector('[data-action="increment"]');

const decrementButtonRef = document.querySelector('[data-action="decrement"]');

const increment = incrementButtonRef.addEventListener('click', event => {
   countOfClicks += 1;
   valueDisplay.textContent = `${countOfClicks}`;
});

const decrement = decrementButtonRef.addEventListener('click', event => {
   countOfClicks -= 1;
   valueDisplay.textContent = `${countOfClicks}`;
});

// console.log(valueDisplay)
