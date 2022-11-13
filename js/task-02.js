const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientsList = document.querySelector("#ingredients");
const list = [];

const createElement = (elem) => {
  // list += `<li class ="item">${elem}</li>`;
  const element = document.createElement("li");
  element.className = "item";
  element.textContent = elem;
  list.push(element);
};

ingredients.forEach((elem) => createElement(elem));
// ingredientsList.insertAdjacentElement("afterbegin", list)
// console.log(list);
// ingredientsList.innerHTML = list;
// ingredientsList.insertAdjacentHTML("afterbegin", list);
// console.log(list);
ingredientsList.append(...list);
