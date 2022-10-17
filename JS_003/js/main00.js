const form = document.querySelector("form");
const inputNum1 = document.querySelector("#num1");
const inputNum2 = document.querySelector("#num2");
const btnCalc = document.querySelector("#calc");
const result = document.querySelectorAll(".result");

btnCalc.addEventListener("click", () => {
  const intNum1 = Number(inputNum1.value);
  const intNum2 = Number(inputNum2.value);

  if (!intNum1) {
    alert("첫 번째 수를 입력하세요");
    inputNum1.focus();
    return false;
  } else if (!intNum2) {
    alert("두 번째 수를 입력하세요");
    inputNum2.focus();
    return false;
  }

  result[0].innerHTML =
    intNum1 + " ＋ " + intNum2 + " = " + (intNum1 + intNum2);
  result[1].innerHTML =
    intNum1 + " － " + intNum2 + " = " + (intNum1 - intNum2);
  result[2].innerHTML = intNum1 + " × " + intNum2 + " = " + intNum1 * intNum2;
  result[3].innerHTML = intNum1 + " ÷ " + intNum2 + " = " + intNum1 / intNum2;
  inputNum1.value = "";
  inputNum2.value = "";
  inputNum1.focus();
  return false;
});
