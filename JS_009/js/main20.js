document.addEventListener("DOMContentLoaded", () => {
  const h1 = document.querySelector("h1");
  const arr = [];

  for (let i = 0; i < 10; i++) {
    let num = Math.floor(Math.random() * 100 + 1);
    arr.push(num);
  }

  console.log(arr);

  arr.forEach((e) => {
    let spans = document.createElement("span");
    spans.textContent = e + " ";
    h1.appendChild(spans);
  });
});
