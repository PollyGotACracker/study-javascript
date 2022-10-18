/**
 * nav 의 메뉴를 클릭했을 때
 * 구글, 네이버, 다음을 클릭하면
 * alert("구글"), alert("네이버"), alert("다음") 을 띄우시오
 */

const nav = document.querySelector(".main_nav");

nav?.addEventListener("click", (e) => {
  const target = e.target;
  if (target.tagName === "LI") {
    const text = target.innerText;
    if (text !== "home" && text !== "about") {
      // target.id
      alert(text);
    }
  }
});
