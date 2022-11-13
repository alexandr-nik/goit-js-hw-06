const body = document.body;

const elements = body.firstElementChild;
const categories = elements.nextElementSibling;

console.log(`Number of categories: ${categories.children.length}`);

for (let i = 0; i < categories.children.length; i += 1) {
  const firstChild = categories.children[i].firstElementChild;
  const nextChild = firstChild.nextElementSibling;
  console.log(`Category: ${firstChild.textContent}`);
  console.log(`Elements: ${nextChild.children.length}`);
}
