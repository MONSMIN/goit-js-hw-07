const input = document.querySelector('input#name-input');
const output = document.querySelector('span#name-output');

input.addEventListener('input', (event) => {
    const currentValue = event.currentTarget.value.trim();
    output.textContent = currentValue || 'Anonymous'; 
});