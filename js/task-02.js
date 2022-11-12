const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientsList = document.querySelector("#ingredients");

const createElement = (elem) => {
  const element = document.createElement("li");
  element.className = "item";
  element.textContent = elem;
  ingredientsList.append(element);
};

ingredients.forEach((elem) => createElement(elem));


