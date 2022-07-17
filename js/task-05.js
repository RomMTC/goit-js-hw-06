// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input),
//  подставляет его текущее значение в span#name - output.
//  Если инпут пустой, в спане должна отображаться строка "Anonymous".
const input = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

// const handleInput = (event) => {
//     if (input.value === '') {
//     nameOutput.textContent = 'Anonymous';
//     } else {
//         nameOutput.textContent = event.target.value;
//     }
// };

// input.addEventListener('input', handleInput);


input.addEventListener('input', () => {
    nameOutput.textContent = input.value === '' ? 'Anonymous' : input.value;
});