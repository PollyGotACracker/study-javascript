const inputNum1 = document.querySelector("#num1");
const inputNum2 = document.querySelector("#num2");
const spanSum = document.querySelector("#sum");

const btnCacl = document.querySelector("button");

/**
 * cf)
 * Number(): 정수 O, 실수 O, 숫자+문자 X, 문자+숫자 X
 * parseInt(): 정수 O, 실수 X, 숫자+문자 O, 문자+숫자 X
 * parseFloat(): 정수 O, 실수 O, 숫자+문자 O, 문자+숫자 X
 *
 *  빈 문자열은 Number()는 0, parseInt()와 parseFloat()은 NaN
 *  Number()는 boolean 이나 Date 객체 등도 숫자로 변환
 *  Number()는 16진수, 8진수, 2진수 문자열을 숫자로 변환,
 *  parseInt()는 radix 인수가 없으면 16진수만 변환,
 *  parseFloat()은 전부 0으로 변환
 *
 * >> 최근에는 Number()를 사용할 것을 권장
 */

btnCacl?.addEventListener("click", () => {
  const val1 = parseInt(inputNum1.value);
  const val2 = parseInt(inputNum2.value);

  /**
   * cf)
   * ES6 Optional Chaining 연산자
   * 변수명?.
   * 변수가 참조 누락 가능성이 있을 때 사용
   * 에러 대신 undefined를 return한다
   */


  // if (isNaN(val1) || isNaN(val2)) {
  //   spanSum.innerText = "숫자를 입력하세요";
  // } else {
  //   spanSum.innerText = val1 + val2;
  // }
});
