const divs = document.querySelectorAll("div");
const btnRefresh = document.querySelector("button");
let arr = [];

const rndArr = () => {
  for (let i = 0; i < 10; i++) {
    arr[i] = Math.floor(Math.random() * 100 + 1);
  }
  console.log(arr);
};

const initArr = () => {
  divs.forEach((e) => {
    e.textContent = "";
  });
};

const showArr = () => {
  arr.forEach((e) => {
    let spans = document.createElement("SPAN");
    spans.textContent = e;
    divs[0].appendChild(spans);
  });

  arr.forEach((e) => {
    if (e % 2 === 1) {
      let spans = document.createElement("SPAN");
      spans.textContent = e;
      divs[1].appendChild(spans);
    }
  });

  arr.forEach((e) => {
    if (e % 2 === 0) {
      let spans = document.createElement("SPAN");
      spans.textContent = e;
      divs[2].appendChild(spans);
    }
  });
};

rndArr();
showArr();

btnRefresh?.addEventListener("click", () => {
  initArr();
  rndArr();
  showArr();
});
