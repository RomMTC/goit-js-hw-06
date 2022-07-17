function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
// Напиши скрипт, который изменяет цвета фона элемента < body > через инлайн стиль 
// при клике на button.change - color и выводит значение цвета в span.color.
const btnColor = document.querySelector('.change-color');

const onChangeColor = () => {
  const changeColor = getRandomHexColor()
  document.body.style.background = changeColor;

  const spanColor = document.querySelector('.color');
  spanColor.textContent = changeColor;
};
btnColor.addEventListener('click', onChangeColor);
