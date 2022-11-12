const validationInputEl = document.querySelector("#validation-input");
const validationInput = validationInputEl.getAttribute("data-length");

let validationInputCurrent = 0;

validationInputEl.addEventListener("input", (event) => {
  validationInputCurrent = event.currentTarget.value.length;
});

validationInputEl.addEventListener("blur", () => {
 validationInputCurrent >= validationInput ? validationInputEl.className = "valid":  validationInputEl.className = "invalid";
  });
