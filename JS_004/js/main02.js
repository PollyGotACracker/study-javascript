const divBox = document.querySelector("#divBox");
const btnBox = document.querySelector("#btnBox");

// 이벤트 전파(이벤트 버블링) 이용

btnBox?.addEventListener("click", (tag) => {
  // 최초로 클릭된 tag의 정보를 보관
  const target = tag.target;
  // 최초로 클릭된 tag 가 button 이면(대문자로 표시)
  if (target.tagName === "BUTTON") {
    const text = target.innerText;
    if (text === "Red") {
      divBox.style.backgroundColor = "red";
    }
    if (text === "Blue") {
      divBox.style.backgroundColor = "blue";
    }
    if (text === "Yellow") {
      divBox.style.backgroundColor = "yellow";
    }
  }
});
