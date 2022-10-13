const inputNum1 = document.querySelector("#num1");
const inputNum2 = document.querySelector("#num2");
const spanSum = document.querySelector("#sum");

const btnCacl = document.querySelector("button");

btnCacl?.addEventListener("click", () => {
  const val1 = parseInt(inputNum1.value);
  const val2 = parseInt(inputNum2.value);

  spanSum.innerText = val1 + val2;
});
