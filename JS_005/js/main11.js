/**
 * 1. 이름, 주소, 전화번호를 입력한 후 추가 버튼을 클릭하면
 * 입력된 이름, 주소, 전화번호를 table 에 추가
 * 2. 화면의 UI를 각자 디자인
 */

const tableBody = document.querySelector("tbody.addr");
const btnSubmit = document.querySelector("button");

const input = {
  name: document.querySelector("input[name='name']"),
  addr: document.querySelector("input[name='addr']"),
  tel: document.querySelector("input[name='tel']"),
};

btnSubmit?.addEventListener("click", () => {
  const value = {
    name: input.name.value,
    chkName: () => {
      if (!value.name) {
        alert("이름을 입력하세요");
        input.name.focus();
        return false;
      }
    },
    addr: input.addr.value,
    chkAddr: () => {
      if (!value.addr) {
        alert("주소를 입력하세요");
        input.addr.focus();
        return false;
      }
    },
    tel: input.tel.value,
    chkTel: () => {
      if (!value.tel) {
        alert("전화번호를 입력하세요");
        input.tel.focus();
        return false;
      }
    },
  };

  value.chkName();
  value.chkAddr();
  value.chkTel();

  const tr = document.createElement("TR");

  let tdName = document.createElement("TD");
  tdName.innerText = value.name;
  tr.appendChild(tdName);

  tdAddr = document.createElement("TD");
  tdAddr.innerText = value.addr;
  tr.appendChild(tdAddr);

  tdTel = document.createElement("TD");
  tdTel.innerText = value.tel;
  tr.appendChild(tdTel);

  tableBody.appendChild(tr);
});
