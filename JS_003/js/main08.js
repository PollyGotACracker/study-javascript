// 빈(blank) 배열을 선언하기
const nums = [];
const nums1 = [];

// 배열 요소에 숫자 1 ~ 10 까지 저장하기
for (let i = 0; i < 20; i++) {
  nums.push(i + 1);
  nums1[i] = i + 1;
}
console.log(nums);
console.log("");
console.log("");

// nums 배열에 담긴 요소들의 데이터 중에서
// 짝수인 숫자만 console 에 출력
// 짝수인 숫자 2로 나누어서 나머지가 0인 숫자

for (let i = 0; i < nums.length; i++) {
  if (nums[i] % 2 === 0) {
    console.log(nums[i]);
  }
}
console.log("");
console.log("");

// 배열 전체 요소 중에 짝수들을 찾아서
// 짝수들의 합을 구하시오

let sum = 0;
for (let i = 0; i < nums.length; i++) {
  if (nums[i] % 2 === 0) {
    sum += nums[i];
  }
}
console.log("합계 : ", sum);
