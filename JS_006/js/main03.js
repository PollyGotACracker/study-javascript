const inputs = document.querySelectorAll("input");
const tbodyScore = document.querySelector("tbody.score");
const btnAdd = document.querySelector("button.add");

/**
 * 국어, 영어, 수학 점수가 0 ~ 100 점 범위를 벗어나면
 * 점수가 잘못 입력되었다는 alert 을 띄우고
 * 다시 점수를 입력받기
 */

const scoreCheck = () => {
  let sum = 0;

  for (i = 2; i < inputs.length; i++) {
    const input = inputs[i];
    const value = input.value;
    const holderTxt = input.placeholder;

    if (!value) {
      alert(`${holderTxt} 점수를 입력하세요`);
    } else if (Number(value) < 0 || Number(value) > 100) {
      alert(`${holderTxt} 점수는 0 ~ 100 까지 범위에서 입력하세요`);
    } else if (!Number(value)) {
      alert(`${holderTxt} 점수는 숫자로만 입력하세요`);
    } else {
      // 다시 for() 다음번 코드를 실행하라
      // i 가 0 이었으면 i가 1인 경우의 코드를 실행하라
      // 여기에서 return 을 하면 첫번째 요소가 정상이면
      // 나머지는 검사를 하지 않는다
      // sum += Number(input.value);
      continue;
    }
    input.value = "";
    input.focus();
    /**
     * cf)
     * 함수 내 반복문에서...
     * return false: false를 반환하고 함수 실행 종료
     * break: 반복문만 실행 종료
     * continue: 현재 반복 중단하고 증감식 수행, 반복문 처음으로 되돌아감
     */
    return false;
  }

  // let td = document.createElement("TD");
  // td.textContent = sum;
  // tr.appendChild(td);

  // tbodyScore.appendChild(tr);

  return true;
};

// btnAdd?.addEventListener("click", scoreInput)
btnAdd?.addEventListener("click", () => {
  // scoreCheck() 함수를 실행하여 return 값이 true 인 경우
  // scoreInput() 함수를 실행하여 데이터를 추가하라
  if (scoreCheck()) {
    scoreInput();
  }
});
