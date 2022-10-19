/**
 * input box 에 이름, 주소, 전화번호를 입력하면
 * 화면의 span tag 의 해당 위치에 확인 값을 출력하기
 */

const inputs = document.querySelectorAll("input");
const spans = document.querySelectorAll("span");
const btnOk = document.querySelector("button.btn_ok");

const index = {
  name: 0,
  addr: 1,
  tel: 2,
};

const getValue = {
  name: () => {
    const nameVal = inputs[index.name].value;
    spans[index.name].innerText = nameVal;
  },
  addr: () => {
    const addVal = inputs[index.addr].value;
    spans[index.addr].innerText = addVal;
  },
  tel: () => {
    const telVal = inputs[index.tel].value;
    spans[index.tel].innerText = telVal;
  },
};

btnOk?.addEventListener("click", () => {
  getValue.name();
  getValue.addr();
  getValue.tel();
});
