const btnSave = document.querySelector("#save");
const inputName = document.querySelector("#name");
const inputTel = document.querySelector("#tel");
/*
함수(function) 만들기
진행되는 코드들을 하나의 묶음으로 만들어두고
한 개의 키워드를 사용하여 실행하기
*/
const saveClickHandler = () => {
  const txtName = inputName.value;
  const txtTel = inputTel.value;

  const alertText = "이름 : " + txtName + "\n" + "전화번호 : " + txtTel;
  alert(alertText);
};

// save button을 클릭했을 때 할 일 지정
btnSave.addEventListener("click", saveClickHandler);
