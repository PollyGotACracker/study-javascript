const tbody = document.querySelector("tbody.addr");
const btnAdd = document.querySelector("button");
const inputs = document.querySelectorAll("input");
const index = {
    name: 0,
    addr: 1,
    tel: 2,
}

btnAdd?.addEventListener("click", () => {
    const alertTxt = {
        name: "이름을 ",
        addr: "주소를 ",
        tel: "전화번호를 ",
    }

    const value = {
        valChk: (index) => {
            if (!inputs[index].value) {
                alert(alertTxt[inputs[index].name] + " 입력하세요");
                inputs[index].focus();
                return false;
            }
            const val = value.addTd(inputs[index].value);
            return val;
        },
        addTd: (val) => {
            const td = document.createElement("TD");
            td.innerText = val;
            tr.appendChild(td);
        }
    }

    const tr = document.createElement("TR");

    value.valChk(index.name);
    value.valChk(index.addr);
    value.valChk(index.tel);

    tbody.appendChild(tr);
});

/**
 * 문제 1: 입력값이 2개 이상 없으면 alert 창이 연달아 뜸
 * 문제 2: alert 창이 뜬 후에도 tr이 추가됨
 * 문제 3: td 값이 차례로 들어감
 */