let counterValue = 0;
const value = document.querySelector("#value");
value.textContent = counterValue;
const decrement = document.querySelector('button[data-action="decrement"]');
const increment = document.querySelector('button[data-action="increment"]');
decrement.addEventListener("click", () => {
  counterValue -= 1;
   value.textContent = counterValue;
});
increment.addEventListener("click", () => {
  counterValue += 1;
   value.textContent = counterValue;
});
