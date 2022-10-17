const nums = [3, 5, 1, 2, 3, 4, 5, 6, 7, 6];
// num 배열에 담긴 각각 요소의 값을 console 에 출력

// 배열의 개수에 관계없이 전체 요소를 출력하기
for (let i = 0; i < nums.length; i++) {
  console.log(i + 1, " 번째 : ", nums[i]);
}
console.log("");
console.log("");

// nums 배열에 담긴 숫자들의 합을 구하여 출력
let sum = 0;
for (let i = 0; i < nums.length; i++) {
  sum += nums[i];
}
console.log("합계 : ", sum);
