let counterValue = 0;

const refs = {
    decrement: document.querySelector('[data-action="decrement"]'),
    increment: document.querySelector('[data-action="increment"]'),
    value: document.querySelector('#value')
};

refs.decrement.addEventListener('click', decreaseCounterValue);
refs.increment.addEventListener('click', increaseCounterValue);

function increaseCounterValue() {
    counterValue += 1;
    refs.value.textContent = counterValue;
}
function decreaseCounterValue() {
    counterValue -= 1;
    refs.value.textContent = counterValue;
}