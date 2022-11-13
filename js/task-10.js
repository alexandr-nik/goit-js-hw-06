function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const input = document.querySelector("#controls input");
const createEl = document.querySelector("button[data-create]");
const destroyEl = document.querySelector("button[data-destroy]");
const divBoxes = document.querySelector("#boxes");
divBoxes.style.display = "Flex";
divBoxes.style.justifyContent = "center";
divBoxes.style.alignItems = "center";
divBoxes.style.gap = "10px";

let amount = 0;

input.addEventListener("input", (event) => {
  amount = event.currentTarget.value;
});

createEl.addEventListener("click", () => {
  createBoxes();
});

destroyEl.addEventListener("click", () => {
  destroyBoxes();
});

function createBoxes() {
  const inputDivEl = [];
  let divWidth = 30;
  let divHeight = 30;
  for (let i = 1; i <= amount; i += 1) {
    const inputDiv = document.createElement("div");
    inputDiv.style.width = `${divWidth}px`;
    inputDiv.style.height = `${divHeight}px`;
    inputDiv.style.border = "1px solid black";
    inputDiv.style.backgroundColor = getRandomHexColor();
    inputDivEl.push(inputDiv);
    divHeight += 10;
    divWidth += 10;
  }
  divBoxes.append(...inputDivEl);
}

function destroyBoxes() {
  divBoxes.innerHTML = "";
}
