/**
 * input box 에 숫자를 입력하고 확인 버튼 클릭
 * 1. 입력 값이 없으면 alert("값을 입력하세요")
 * 2. 입력 값이 0 이하이면 alert("0 이상을 입력하세요")
 * 3. 입력 값이 0 보다 크고, 100 이하이면
 *      값을 제곱하여 alert
 * 4. 입력 값이 100 보다 크고, 200 이하이면
 *      입력 값 + 100 을 실행하여 alert
 * 5. 입력 값이 200 보다 크면
 *      입력 값을 그대로 alert
 */

const inputNum = document.querySelector("#num");
const btnOk = document.querySelector("#btn");

btnOk.addEventListener("click", () => {
  const numVal = Number(inputNum.value);

  //   if (!numVal) {
  //     alert("값을 입력하세요");
  //   } else if (numVal <= 0) {
  //     alert("0 이상을 입력하세요");
  //   } else if (numVal > 0 && numVal <= 100) {
  //     alert(numVal ** 2);
  //   } else if (numVal > 100 && numVal <= 200) {
  //     alert(numVal + 100);
  //   } else if (numVal > 200) {
  //     alert(numVal);
  //   }

  // cf) 부등호 비교연산은 문자값도 숫자로 변환하여 연산함
  if (!numVal) {
    alert("값을 입력하세요");
  } else if (numVal <= 0) {
    alert("0 이상을 입력하세요");
  } else if (numVal <= 100) {
    alert(numVal ** 2);
  } else if (numVal <= 200) {
    alert(numVal + 100);
  } else {
    alert(numVal);
  }
});
