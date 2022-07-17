// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

let counterValue = 0;

const btnIncrement = document.querySelector(
    "#counter button[data-action='increment']",);

const btnDecrement = document.querySelector(
    "#counter button[data-action='decrement']",);

const counter = document.querySelector('#counter #value');

counterValue = +counter.textContent;

btnDecrement.addEventListener('click', () => {
    counterValue -= 1;
    counter.textContent = counterValue;
});

btnIncrement.addEventListener('click', () => {
    counterValue += 1;
    counter.textContent = counterValue;
});









// const counter = document.querySelector('#counter')
// counter.addEventListener("click", OnClick);

// function OnClick(evt) {
//     if (evt.target.nodeName !== 'BUTTON') {
//         // console.log(evt.target.nodeName);
//         return;
//     } else
//         console.log(evt.target.textContent);
//         if (evt.target === button.dataset.decrement) {
//             counterValue -= 1;
//             counter.textContent = counterValue;;
//         }
// }

