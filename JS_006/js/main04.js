const tbody = document.querySelector("tbody");
const inputs = document.querySelectorAll("input");
const btnAdd = document.querySelector(".btn_add");

const valChk = () => {
  const tr = document.createElement("TR");

  for (i = 0; i < inputs.length; i++) {
    const input = inputs[i];
    let value = input.value;
    const placeholder = input.placeholder;

    if (!value) {
      alert(`${placeholder}를(을) 입력하세요`);
    } else {
      let td = document.createElement("TD");
      td.textContent = value;
      tr.appendChild(td);

      continue;
    }

    value = "";
    input.focus();
    return false;
  }

  tbody.appendChild(tr);
  return true;
};

btnAdd?.addEventListener("click", valChk);
