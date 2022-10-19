/**
 * 1. 이름, 주소, 전화번호를 입력한 후 추가 버튼을 클릭하면
 * 입력된 이름, 주소, 전화번호를 table 에 추가
 * 2. 화면의 UI를 각자 디자인
 */

const tbody = document.querySelector("tbody.addr");
const btnAdd = document.querySelector("button");
const input = {
  name: document.querySelector("input[name='name']"),
  addr: document.querySelector("input[name='addr']"),
  tel: document.querySelector("input[name='tel']"),
}

btnAdd?.addEventListener("click", () => {

  const value = {
    name: input.name.value,
    addr: input.addr.value,
    tel: input.tel.value,
  }

  if (!value.name) {
    alert("이름을 입력하세요");
    input.name.focus();
    return false;
  }
  if (!value.addr) {
    alert("주소를 입력하세요");
    input.addr.focus();
    return false;
  }
  if (!value.tel) {
    alert("전화번호를 입력하세요");
    input.tel.focus();
    return false;
  }
  
  const tr = document.createElement("TR");
  const tdName = document.createElement("TD");
  const tdAddr = document.createElement("TD");
  const tdTel = document.createElement("TD");

  tdName.innerText = value.name;
  tdAddr.innerText = value.addr;
  tdTel.innerText = value.tel;

  tr.appendChild(tdName);
  tr.appendChild(tdAddr);
  tr.appendChild(tdTel);

  tbody.appendChild(tr);
});
