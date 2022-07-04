const itemEl = document.querySelector('ul#categories');
const itemElList = document.querySelector('li.item');

console.log(itemEl);
console.log(itemElList);
console.log('Number of categories:', itemEl.childElementCount);
console.log('Category: ', itemElList.firstElementChild.textContent);  
// console.log('Elements:', itemE.);
// childNodes.h2.textContent li.item
let total = 0;
function name(params) {
    total += 1;
};
// console.log(name(itemEl));
// console.log(total);
console.log('оно', itemEl.childNodes.length);
alert(document.getElementById('mymenu').childNodes.length);

    // способ 2:
    alert(document.getElementById('mymenu').getElementsByTagName('li').length);

