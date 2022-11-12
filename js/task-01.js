const categories = document.querySelector("#categories");

const categoriesItem = categories.querySelectorAll(".item");

console.log(`Number of categories: ${categoriesItem.length}`);

console.log(
  categoriesItem.forEach((elem) => {
    console.log(`Category: ${elem.querySelector("h2").textContent}`);
    console.log(`Elements: ${elem.querySelectorAll("li").length}`);
  })
);
