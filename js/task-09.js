function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
// Напиши скрипт, который изменяет цвета фона элемента < body > через инлайн стиль 
// при клике на button.change - color и выводит значение цвета в span.color.
const btnColor = document.querySelector('.change-color');
const spanColor = document.querySelector('.color');

const onChangeColor = () => {
  document.body.style.background = getRandomHexColor();
  spanColor.textContent = document.body.style.background;
};
btnColor.addEventListener('click', onChangeColor);
