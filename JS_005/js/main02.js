const inputSearch = document.querySelector("input[name='search']");
const btnSearch = document.querySelector("button.search");

btnSearch?.addEventListener("click", () => {
  const txtSearch = inputSearch.value;

  if (!txtSearch) {
    alert("검색어를 입력해주세요");
    inputSearch.focus();
    return false;
  }

  const googleURL = "https://google.com/search";
  const naverURL = "https://search.naver.com/search.naver";
  const daumURL = "https://search.daum.net/search";

  // googleURL + "?=q" + txtSearch 이렇게 만들 것을
  // backtit(`) 을 이용하여 자연스럽게 생성. `문자열${변수명}문자열`
  // 문자열(String) Template 라고 한다

  const popup = window.open(`${googleURL}?q=${txtSearch}`, "_blank");

  //   // 브라우저의 popup 이 차단되었는지 확인하기
  //   // screenLeft 속성은 크롬 브라우저 호환을 위함
  //   // popup == null 은 !popup 과 같음
  //   if (popup == null || popup.screenLeft == 0) {
  //     alert("팝업이 차단되었습니다\n팝업 차단을 해제해주세요");
  //     return false;
  //   }

  window.open(`${naverURL}?query=${txtSearch}`, "_blank");
  window.open(`${daumURL}?q=${txtSearch}`, "_blank");
});
