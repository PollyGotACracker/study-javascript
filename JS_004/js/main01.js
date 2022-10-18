const divBox = document.querySelector("#divBox");
const btnRed = document.querySelector("#btnRed");
const btnBlue = document.querySelector("#btnBlue");
const btnYellow = document.querySelector("#btnYellow");

btnRed?.addEventListener("click", () => {
  divBox.style.backgroundColor = "red";
  divBox.style.color = "white";
});
btnBlue?.addEventListener("click", () => {
  divBox.style.backgroundColor = "blue";
  divBox.style.color = "white";
});
btnYellow?.addEventListener("click", () => {
  divBox.style.backgroundColor = "yellow";
  divBox.style.color = "black";
});
