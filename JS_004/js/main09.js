// username, password, re_password input box 변수에 보관
// 변수에 보관

// cf) input box 의 값이 submit 되려면 name 속성은 필수이다.
const username = document.querySelector("input[name='username']");
const password = document.querySelector("input[name='password']");
const re_password = document.querySelector("input[name='re_password']");
const btnSubmit = document.querySelector("button.btn_submit");

btnSubmit?.addEventListener("click", () => {
  const txtRePassword = rePassword.value;

  if (!username.value) {
    alert("아이디를 입력하세요");
    username.focus();
    return false;
  }
  if (!password.value) {
    alert("비밀번호를 입력하세요");
    password.focus();
    return false;
  }
  if (!txtRePassword) {
    alert("비밀번호 확인을 입력하세요");
    rePassword.focus();
    return false;
  }

  // 비밀번호와 비밀번호 확인 값(데이터)이 다르면
  // cf) alert 창에 \n 을 넣으면 br 과 같은 역할
  if (password.value !== txtRePassword) {
    alert("비밀번호와 확인 값이 다릅니다 \n다시 확인해주세요");
    password.value = "";
    rePassword.value = "";
    password.focus();
    return false;
  }
  // 서버로 데이터 전송하기
});
