const spans = document.querySelectorAll("span");
const btnRefresh = document.querySelector("button");

btnRefresh?.addEventListener("click", () => {
  const num = {
    span: 6,
    valMin: 1,
    valMax: 45,
  };
  let list = new Set();
  let i = 0;

  while (list.size < num.span) {
    let value = Math.floor(
      Math.random() * (num.valMax - num.valMin) + num.valMin
    );
    list.add(value);
  }

  while (i < num.span + 1) {
    let listVal = Array.from(list);
    spans[i].textContent = listVal[i];
    i++;
  }
});
