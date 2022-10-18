/**
 * 회원가입 버튼을 클릭하면
 * 1. 아이디, 비번, 비번확인을 입력했는지 확인하고
 *      입력하지 않았으면 입력하도록 focus() 지정
 * 2. 비밀번호와 비밀번호 확인 데이터가 다르면
 *      비밀번호부터 다시 입력받도록 하기
 */

const inputUser = document.querySelector("#username");
const inputPw = document.querySelector("#password");
const inputRePw = document.querySelector("#re_password");
const btnSubmit = document.querySelector(".btn_submit");

btnSubmit?.addEventListener("click", () => {
  const userVal = inputUser.value;
  const pwVal = inputPw.value;
  const rePwVal = inputRePw.value;

  if (!userVal) {
    alert("아이디를 입력하세요");
    inputUser.focus();
    return false;
  } else if (!pwVal) {
    alert("비밀번호를 입력하세요");
    inputPw.focus();
    return false;
  } else if (!rePwVal) {
    alert("비밀번호 확인란을 입력하세요");
    inputRePw.focus();
    return false;
  }

  if (pwVal !== rePwVal) {
    alert("비밀번호와 비밀번호 확인 값이 다릅니다");
    inputPw.value = "";
    inputRePw.value = "";
    inputPw.focus();
    return false;
  }
});
