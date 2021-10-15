const refs = {
    control: document.querySelector('#font-size-control'),
    text: document.querySelector('#text'),
}

refs.control.addEventListener('input', (e) => {
    refs.text.style.fontSize = e.currentTarget.value + 'px';
});