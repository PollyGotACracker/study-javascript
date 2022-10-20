const inputs = document.querySelectorAll("input");
const tbodyScore = document.querySelector("tbody.score");
const btnAdd = document.querySelector("button.add");

// js의 전통적인 함수를 선언하는(만드는) 방법
function func1() {}

// ES5 이상에서 사용하는 함수 선언하는 방법
// 화살표 함수(Arrow function)
// 변수키워드 변수명 = ... : 함수 표현식

/**
 * cf)
 * 변수의 Scope, Life Cycle :
 * const td 와 let td 의 scope 를 확인
 * const td는 for문 밖을 벗어나면 GC 된다
 * (블록 레벨 스코프)
 * 따라서 이후 let td 선언 가능
 */

/**
 * cf)
 * td.textContent 는 내부 속성 값을 변경하는 것이므로
 * const 변수의 값 자체를 변경하는 것이 아니다
 */
const scoreInput = () => {
  const tr = document.createElement("TR");

  /**
   * cf)
   * sum 변수는 for문 영역 밖에서 선언되었으므로
   * for문 안에서도 사용 가능
   */
  let sum = 0;

  for (let i = 0; i < inputs.length; i++) {
    const td = document.createElement("TD");

    // textContent 는 innerText 와 같은 속성
    // cf) innerText 보다 textContent 사용 권장
    td.textContent = inputs[i].value;
    tr.appendChild(td);
    /**
     * 과목별 총점 구하기
     * input box 에 입력된 데이터를 숫자로 바꾸어
     * sum 변수에 누적하기
     */
    /**
     * 문자열을 Number()를 사용하여 변환(wrapping) 하면
     * NaN(Not a Number) 값이 된다
     * NaN 을 변수에 덧셈하면 최종 결과도 NaN 이 된다
     *
     * if문으로 i의 값을 확인하여
     * 학번과 이름을 제외한 데이터만 덧셈하기
     */
    if (i > 1) {
      sum += Number(inputs[i].value);
    }
  }

  // 총점 추가
  /**
   * cf)
   * createElement를 두 번 사용해야 하므로,
   * td를 변수 선언할 때 const를 쓰면 안된다
   */
  let td = document.createElement("TD");
  td.textContent = sum;
  tr.appendChild(td);

  // 평균 추가
  td = document.createElement("TD");

  // Math: 수학 관련된 함수를 제공하는 도구(클래스)
  // Math.round() : 소수점 첫째 자리에서 반올림하여 정수로
  // Math.floor(값) : 소수점 부분 버리기
  //                  값보다 크거나 같은 정수 중 가장 큰 정수
  // Math.ceil(값) : 소수점 첫째 자리 무조건 올림
  //                 값보다 크거나 같은 정수 중 가장 작은 정수
  td.textContent = Math.round(sum / 3);
  tr.appendChild(td);

  tbodyScore.append(tr);
};

// click event 가 발생하면 미리 선언해둔
// scoreInput 함수를 실행하라
btnAdd?.addEventListener("click", scoreInput);
