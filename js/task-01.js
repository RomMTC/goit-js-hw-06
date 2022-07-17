const itemEl = document.querySelector('ul#categories');
const quantityСategories = itemEl.children;
console.log(`Number of categories: ${quantityСategories.length}`);
 [...quantityСategories].forEach(item => { 
        console.log(`Category: ${item.querySelector('h2').textContent}`);
        console.log(`Elements: ${item.querySelectorAll('li').length}`);
    });
