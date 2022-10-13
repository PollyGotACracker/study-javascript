const inputNum1 = document.querySelector("#num1");
const inputNum2 = document.querySelector("#num2");
const spanSum = document.querySelector("#sum");

const btnCacl = document.querySelector("button");

/**
 * Number(): 정수 O, 실수 O, 숫자+문자 X, 문자+숫자 X
 * parseInt(): 정수 O, 실수 X, 숫자+문자 O, 문자+숫자 X
 * parseFloat(): 정수 O, 실수 O, 숫자+문자 O, 문자+숫자 X
 * 
 *  빈 문자열은 Number()는 0, parseInt()와 parseFloat()은 NaN
 *  Number()는 boolean 이나 Date 객체 등도 숫자로 변환
 *  Number()는 16진수, 8진수, 2진수 문자열을 숫자로 변환, 
 *  parseInt()는 radix 인수가 없으면 16진수만 변환,
 *  parseFloat()은 전부 0으로 변환
 * */ 

btnCacl?.addEventListener("click", () => {
  const val1 = parseFloat(inputNum1.value);
  const val2 = parseFloat(inputNum2.value);

  if (isNaN(val1) || isNaN(val2)) {
    spanSum.innerText = "숫자를 입력하세요";
  } else {
    spanSum.innerText = val1 + val2;
  };
});