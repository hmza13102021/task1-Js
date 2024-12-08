let btn = document.querySelector('button');
btn.addEventListener('click', () => {
    let widthInput = document.getElementById('widthInput');
    let heightInput = document.getElementById('heightInput');
    let colorInput = document.getElementById('colorInput');
    let shape = document.querySelector('.shape');

    if (widthInput.value < window.screen.width) {
        shape.style.width = widthInput.value + 'px';
        shape.style.height = heightInput.value + 'px';
        shape.style.backgroundColor = colorInput.value;
    } else {
        alert("Please enter a width less than " + window.screen.width);
    }
});
btn.addEventListener('click', () => {
    let inputs = document.getElementsByTagName('input');
    inputs[0].value = '';
    inputs[1].value = '';
    inputs[2].value = '';
})