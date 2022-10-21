/**
 * DOM : Document Object Model, html 화면에 있는 모든 요소(tag)
 * DOMContent : 화면에 보이는 모든 것
 * DOMContentLoaded : 화면에 모든 요소가 다 그려지면...
 */
document.addEventListener("DOMContentLoaded", () => {
  const btnRe = document.querySelector("div.btn_re");
  // span 의 개수가 많아서, class 를 모두 붙이기가 번거롭다
  // 부모 div 에 class 를 지정하고 div span 형식으로
  // span tag 를 가져온다
  const spanNumbs = document.querySelectorAll("div.number span");
  const divToday = document.querySelector("div.today");

  btnRe?.addEventListener("click", () => {
    const nums = []; // 빈(blank) 배열 선언

    // blank nums 배열을 45개 만들면서
    // 0 ~ 44까지 요소에 1 ~ 45 까지 숫자 채우기
    for (let i = 0; i < 45; i++) {
      // 구식 방법: nums.push(i + 1)
      nums[i] = i + 1;
    }
    //test 하기 위한 코드
    /**
     * Math.random() 함수는
     * 0.0000 ~ 0.9999... 까지 범위에서
     * 임의 숫자 1개를 만들어내는 기능
     *
     * 생성된 숫자에 10을 곱하면
     * 0 ~ 9.9999... 범위의 수가 만들어진다
     *
     * 이 숫자를 Math.floor() 함수에게 전달하면
     * 0 ~ 9까지 범위의 정수를 만들어서 return 한다
     */
    // const rndNum = Math.floor(Math.random() * 10);
    // console.log(rndNum);

    // const nums1 = [1, 2, 3, 4, 5];
    // for (let i = 0; i < 10; i++) {
    //   const index1 = Math.floor(Math.random() * 5);
    //   const index2 = Math.floor(Math.random() * 5);

    //   // index1 과 index2 의 랜덤 인덱스 값으로 num1 배열의 순서를 바꿈
    //   // 실행할 때마다 이전 배열 순서를 바꾸게 됨
    //   let tnum = nums1[index1];
    //   nums1[index1] = nums1[index2];
    //   nums1[index2] = tnum;
    //   console.log(nums1, index1, index2);
    // }
    // //test end

    /**
     * 1 ~ 45까지 숫자가 저장된 nums 배열을 shuffle 해보자
     */
    for (let i = 0; i < 1000; i++) {
      const index1 = Math.floor(Math.random() * 45);
      const index2 = Math.floor(Math.random() * 45);
      // cf) 변수명 앞에 underbar를 붙이면 임시변수라는 뜻이다
      const _temp = nums[index1];
      nums[index1] = nums[index2];
      nums[index2] = _temp;
    }
    console.log(nums);

    for (let i = 0; i < spanNumbs.length; i++) {
      spanNumbs[i].textContent = nums[i];
    }
  });
});

/**
 * 0 ~ 0.9999...
 * 0 ~ 9.9999...  -> * 10
 * 0 ~ 44.9999...  -> * 45
 */
