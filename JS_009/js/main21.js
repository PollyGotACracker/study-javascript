const div = document.querySelector("div");
const btnRefresh = document.querySelector("button.btn_refresh");
let arr = [];

const rndArr = () => {
  for (let i = 0; i < 10; i++) {
    let num = Math.floor(Math.random() * 100 + 1);
    //arr[i] = Math.floor(Math.random() * 100 + 1); 하면 배열 초기화 안해도 된다!!
    arr.push(num);
  }
  console.log(arr);

  arr.forEach((e) => {
    let spans = document.createElement("span");
    spans.textContent = e + " ";
    div.appendChild(spans);
  });
};
rndArr();

const refreshArr = () => {
  div.textContent = "";
  arr = [];
  rndArr();
};

btnRefresh?.addEventListener("click", refreshArr);
