const divBox = document.querySelector("#divBox");
const btnBox = document.querySelector("#btnBox");

// 이벤트 전파(이벤트 버블링) 이용

/**
 * cf)
 * 부모 요소에 addEventListener를 사용
 * 매개변수로 event를 받음
 * event.target을 사용하여 이벤트가 발생한 요소를 저장
 */

btnBox?.addEventListener("click", (tag) => {
  // 최초로 클릭된 tag의 정보를 보관
  const target = tag.target;
  // 최초로 클릭된 tag 가 button 이면(대문자로 표시)
  if (target.tagName === "BUTTON") {
    const text = target.innerText;
    divBox.style.backgroundColor = text;
  }
});
