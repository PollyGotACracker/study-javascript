const divBox = document.querySelector("#divBox");
const btnRed = document.querySelector("#btnRed");
const btnBlue = document.querySelector("#btnBlue");
const btnYellow = document.querySelector("#btnYellow");

/** cf) 
 * addEventListener의 두 번째 매개변수는 콜백 함수로, 
 * 함수 이름만 사용하며 인수를 전달할 수 없다.
 * 인수를 넣어야 할 경우 화살표 함수로 해당 함수를 wrapping 해준다.
 */

const colors = ["red", "blue", "yellow"];
const colorChange = (index) => {
  divBox.style.backgroundColor = colors[index];
};

btnRed.addEventListener("click", () => {
  colorChange(0);
});
btnBlue.addEventListener("click", () => {
  colorChange(1);
});
btnYellow.addEventListener("click", () => {
  colorChange(2);
});

/**
 * cf) 용어 정리!!
 * 
 * 일급 함수: 다른 변수와 동일하게 다뤄지는 함수
 * ('콜백 함수' 로 통용되나 엄밀히 따지면 같지 않음)
 *   - 함수를 다른 함수에 인수로 제공
 *   - 함수가 함수를 반환
 *   - 변수 할당
 * 
 * 고차 함수: 함수를 반환(return)하는 함수
 *   - 직접 호출할 시, 반환된 함수를 호출하지 않고
 *     함수 자체를 반환하므로
 *     반환된 함수를 다른 변수에 저장하여 사용한다
 * 
 * const sayHello = function() {
 *    return function() {
 *        console.log("Hello!");
 *    }
 * }
 * const myFunc = sayHello();
 * myFunc();
 */