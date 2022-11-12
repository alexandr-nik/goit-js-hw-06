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
  createBoxes(amount);
});

destroyEl.addEventListener("click", () => {
  destroyBoxes();
});

function createBoxes() {
  let divWidth = 30;
  let divHeight = 30;
  for (let i = 1; i <= amount; i += 1) {
    const inputDiv = document.createElement("div");
    inputDiv.style.width = `${divWidth}px`;
    console.log(inputDiv.style.width);
    inputDiv.style.height = `${divHeight}px`;
    inputDiv.style.backgroundColor = getRandomHexColor();
    divBoxes.appendChild(inputDiv);
    divHeight += 10;
    divWidth += 10;
  }
}

function destroyBoxes() {
  divBoxes.innerHTML = "";
}
