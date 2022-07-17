// Напиши скрипт, который реагирует на изменение значения input#font - size - control(событие input)
//  и изменяет инлайн - стиль span#text обновляя свойство font - size.
//  В результате при перетаскивании ползунка будет меняться размер текста.

// 0) Потрібно достукатися до нашого інпута
// 1) Навішати подію інпут на тег інпут
// 2) Кожен раз при події маємо считувати данні з інпута (value)
// 3) Отримати доступ до span
// 4) записати значення інпута в стилі нашого тега span (span.styles.fontSize = value)

const input = document.querySelector('#font-size-control');
const span = document.querySelector('#text');

// const valueInput = (e) => {
//     span.style.fontSize = e.target.value + 'px';
// };
// input.addEventListener('input', valueInput);

input.addEventListener('input', (e) => {
     span.style.fontSize = e.target.value + 'px';
});