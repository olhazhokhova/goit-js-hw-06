const categories = document.querySelectorAll('#categories .item');
console.log(`Number of categories: ${categories.length}`);

categories.forEach(item => {
    console.log(`\nCategory: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.children.length}`);
});
