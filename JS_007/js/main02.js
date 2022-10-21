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

  for (i = 0; i < list.length; i++) {
    let listObjVals = Object.values(list[i]);
    const tr = document.createElement("TR");

    for (j = 0; j < listObjVals.length; j++) {
      td = document.createElement("TD");
      td.textContent = listObjVals[j];
      tr.appendChild(td);
    }

    tbody.appendChild(tr);
  } // array.prototype.map을 이용해볼 것
};
listAdd();

const chkList = () => {
  for (i = 0; i < inputs.length; i++) {
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
  let sum =
    Number(inputs[2].value) + Number(inputs[3].value) + Number(inputs[4].value);
  let avr = Math.round(sum / 3);

  let value = {
    num: inputs[0].value,
    name: inputs[1].value,
    kor: inputs[2].value,
    eng: inputs[3].value,
    math: inputs[4].value,
    sum: sum,
    avr: avr,
  };

  list.push(value);
  localStorage.setItem("myList", JSON.stringify(list));

  let arrList = Object.values(value);

  const tr = document.createElement("TR");

  for (i = 0; i < Object.keys(value).length; i++) {
    const td = document.createElement("TD");
    td.textContent = arrList[i];
    tr.appendChild(td);
  }
  tbody.appendChild(tr);
};

btnAdd?.addEventListener("click", () => {
  if (chkList()) {
    addList();
  }
});
