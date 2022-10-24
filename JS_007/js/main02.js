const tbody = document.querySelector("tbody");
const inputs = document.querySelectorAll(".input_box input");
const btnAdd = document.querySelector("button");
let list = [];

/**
 * cf)
 * Cannot set properties of null ERROR
 *  - Setting a property on a variable storing a 'null' value.
 *    값이 null 인 변수의 프로퍼티에 접근했을 때
 *  - Setting a property on an element that isn't present in the DOM.
 *    DOM 에 없는 요소의 프로퍼티에 접근했을 때
 *  - Inserting the JS script tag above HTML, where the DOM elements are declared.
 *    DOM 요소가 선언된 HTML의 위쪽에 JS 스크립트를 삽입했을 때
 */
const listAdd = () => {
  const myList = localStorage.getItem("myList");
  list = JSON.parse(myList);

  if (!list) {
    list = [];
    return false;
  }

  // cf) Array.prototype.map을 이용하여
  // 각 객체의 value 를 td 에 넣어서 출력
  list.map((ele) => {
    const tr = document.createElement("TR");
    let listObjVals = Object.values(ele);

    listObjVals.map((ele) => {
      td = document.createElement("TD");
      td.textContent = ele;
      tr.appendChild(td);
    });

    tbody.appendChild(tr);
  });
};

listAdd();

const chkList = () => {
  /**
   * cf)
   * forEach, filter 메소드는 비동기 처리 방식이기 때문에
   * 콜백 함수를 인수로 받지 않으면 순차 처리가 불가능하다
   */
  // 중복되는 학번 체크
  for (let i = 0; i < list.length; i++) {
    if (inputs[0].value === list[i].num) {
      alert(`중복되는 학번은 입력할 수 없습니다.`);
    } else {
      continue;
    }
    inputs[0].value = "";
    inputs[0].focus();
    return false;
  }

  // 빈 값과 성적 값의 범위 체크
  for (let i = 0; i < inputs.length; i++) {
    if (!inputs[i].value) {
      alert(`${inputs[i].placeholder}을(를) 입력하세요.`);
    } else if (i > 1 && (inputs[i].value > 100 || inputs[i].value < 0)) {
      alert(`0 ~ 100 범위의 숫자를 입력하세요.`);
    } else {
      continue;
    }
    inputs[i].value = "";
    inputs[i].focus();
    return false;
  }
  return true;
};

const addList = () => {
  let _sum =
    Number(inputs[2].value) + Number(inputs[3].value) + Number(inputs[4].value);
  let _avr = Math.round(_sum / 3);

  let value = {
    num: inputs[0].value,
    name: inputs[1].value,
    kor: inputs[2].value,
    eng: inputs[3].value,
    math: inputs[4].value,
    sum: _sum,
    avr: _avr,
  };

  list.push(value);
  localStorage.setItem("myList", JSON.stringify(list));
  let objVals = Object.values(value);

  const tr = document.createElement("TR");

  objVals.map((ele) => {
    const td = document.createElement("TD");
    td.textContent = ele;
    tr.appendChild(td);
  });

  tbody.appendChild(tr);

  // 모든 input 값 초기화
  Array.from(inputs).map((e) => {
    e.value = "";
  });
};

btnAdd?.addEventListener("click", () => {
  if (chkList()) {
    addList();
  }
});
