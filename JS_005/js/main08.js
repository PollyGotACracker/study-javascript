/**
 * input box 에 이름, 주소, 전화번호를 입력하면
 * 화면의 span tag 의 해당 위치에 확인 값을 출력하기
 */

const inputs = document.querySelectorAll("input");
const spans = document.querySelectorAll("span");
const btnOk = document.querySelector("button.btn_ok");

const index = {
  name: 0,
  addr: 1,
  tel: 2,
};

btnOk?.addEventListener("click", () => {
  // spans[0].innerText = inputs[0].value;
  spans[index.name].innerText = inputs[index.name].value;

  // index 객체의 name 속성 값이 얼마냐
  // index 객체의 name 속성에 저장된 값이 얼마냐
  console.log(index.name); // 0
  console.log("name", index["name"]); // name 0

  // index 객체의 addr 속성 값이 얼마냐
  console.log("addr", index["addr"]); // addr 1

  // input box 0 번(첫 번째) tag 의 name 변수 이름을 가져오기
  // input tag의 name 속성의 값은 name, index 객체의 프로퍼티 이름이 name -> name의 값 0 출력
  const txtName = inputs[0].name;
  console.log(txtName); // name
  console.log(index[txtName]); // 0

  // input box 의 name 변수 이름으로 index 객체로부터 위치값을 찾고
  // 그 위치값으로 각각 요소를 매칭한다
  spans[index[txtName]].innerText = inputs[index[txtName]].value;

  // for() 반복문을 이용하여 input 전체 내용을 span 에 모두 보여주기
  for (let i = 0; i < inputs.length; i++) {
    const txtName = inputs[i].name;
    spans[index[txtName]].innerText = inputs[index[txtName]].value;
  }
});
