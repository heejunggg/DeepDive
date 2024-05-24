// // Deep책에 나온 예제

// /*
// const arr = [1, 2];
// let result = arr.unshift(3, 4);
// console.log(arr);

// // ES6 스프레드 문법
// const newArr = [3, ...arr];
// console.log(arr); // [1,2,3]
// */

// //concat
// const arr1 = [1, 2];
// const arr2 = [3, 4];
// const result = arr1.concat(arr2);
// console.log(arr1);
// console.log(result);

// // splice
// // return 제거한 요소가 반환!!
// const arr3 = [1, 2, 3, 4];
// const result3 = arr3.splice(1, 2);
// console.log(`splice: ${arr3}`); //[1,4]
// console.log(result3); // [2,3]

// // 삭제해야할 값이 없다면
// const arr4 = [1, 2, 3, 4];
// const result4 = arr4.splice(1, 2, 100, 200);
// console.log(`splice: ${arr4}`); //[1 100 200 4]
// console.log(result4); // [2,3]

// // 제거할 요소의 개수를 생략하면 첫번쨰인수로 전달된 인덱스부터 다 삭제
// const arr5 = [1, 2, 3, 4];
// const result5 = arr5.splice(1);
// console.log(arr5); //[1]
// console.log(result5); // [2,3,4]

const arr6 = [1, 2, 3, 1, 2];

function remove(array, item) {
  const index = array.indexOf(item);
  //item 2 --> 1
  //item 10 -> -1
  console.log(index);

  if (index != -1) array.splice(index, 1);
  //item 2-->index1
  // 1과 -1이 같지 않다면--같지않지 - array.splice(1,1)
  // 1부터 한개 지우면 남는것이 [1 3 1 2]

  // item 10 --> array.indexOf(10)-> index =-1이다.
  // -1과 -1은 거짓이므로 return array --> 위에서 splice는 원본배열에서 삭제되는것이므로
  // 원본 배열은  [1,3,1,2]가 된다.
  // console.log(remove(arr6, 10));에서는 10이 없으므로 원본배열 그대로 출력된다.
  return array;
}
console.log(remove(arr6, 2));
console.log(remove(arr6, 10));

// filter
/*
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const uniqueNumbers = numbers.filter((element) => {
  return element % 2 === 0 && element < 5;
});
console.log(uniqueNumbers);
*/

const numbers = [1, 2, 2, 3, 4, 4, 5];

const um = numbers.filter((element, index, arr) => {
  return arr.indexOf(element) === index;
  // 요소가 1일때 indexOf(1)==0번쨰 이므로  ===index -> 참
  // 요소가 2일떄 indexOf(2)==1이므로 ===index와 같지않다. 거짓.
  // 요소가 2일떄 indexOf(2)==2이므로 === index와 같으므로 -> 참..
});

console.log(um);
console.log(numbers);

// reduce
/*const sum = [1, 2, 3, 4].reduce(
  (accumulator, currentValue, index, array) => accumulator + currentValue,
  0
);
console.log(sum); // 10

// reduce-1예제
// 평균구하기
const values = [1, 2, 3, 4, 5, 6];
const avg = values.reduce((acc, cur, i, { length }) => {
  //합 / lengh =평균
  // return i === (acc + cur) / length
  // 조건 ? 값1 : 값2
  // 마지막 순회가 아니면 누적값을,마지막 순회면 누적값으로 평균을 구해 반환한다.
  return i === length - 1 ? (acc + cur) / length : acc + cur;
}, 0);
console.log(avg);

// reduce-2예제 합
// forEach와 reduce

const nums = [1, 2, 3, 4, 5];
let total = 0;
const sum2 = nums.forEach((num) => {
  return (total = total + num);
});
console.log(sum2); // undefined가 된다. forEach는 결과값이 undefined
console.log(total); // 15

// --> reduce로 했을때

const sum4 = nums.reduce((acc, cur) => {
  return acc + cur;
}, 0);
console.log(sum4); // 15

// --> reduce --> 객체의 프로퍼티합
const products = [
  { id: 1, price: 100 },
  { id: 2, price: 200 },
  { id: 3, price: 300 },
];
const sum5 = products.reduce((accp, crr) => {
  // return accp + products.price
  return accp + crr.price;
}, 0);
console.log(sum5);
*/

// some 예제
// 배열 요소중 하나라도 10보다 큰게 있니?
[5, 10, 15].some((item) => item > 10); // true.

// 빈 배열인 경우 언제나 false
[].some((item) => item > 3); // false

// every 예제
// 배열 요소중 모두 3보다 크니?
[5, 10, 15].every((item) => item > 3);

// 빈 배열인 경우 언제나 true
[].every((item) => item > 3); //true

// find 예제
const users = [
  { id: 1, name: "park" },
  { id: 2, name: "tae" },
  { id: 2, name: "lee" },
  { id: 3, name: "yan" },
];

const userfind = users.find((user) => {
  return user.id === 2;
});
console.log(userfind); //true인 첫번재 요소를 반환, 배열아니다.{ id: 2, name: 'tae' }

// findIndex
const userfindIndex = users.findIndex((user) => {
  return user.id === 2;
});
console.log(`userfindIndex: ${userfindIndex}`);

// findIndex - 2
// name이 park인 인덱스를 구하라
const userfindIndex2 = users.findIndex((user) => user.name === "park");
console.log(`findeIndex.name : ${userfindIndex2}`);

// 비슷한 filter로 써보자.
const userfilter = users.filter((user) => {
  return user.id === 2;
});
console.log(userfilter); // true인 요소만 추출한 새로운 배열을 반환 [ { id: 2, name: 'tae' }, { id: 2, name: 'lee' } ]

// find 다른예제
const find2 = [10, 51, 31, 61].find((item) => item === 51);
console.log(find2); // 51

const filter2 = [10, 51, 31, 61].filter((item) => item === 51);
console.log(filter2); // [51]

// flatMap 예제-1
const arr = ["hello, world"];
// map과 flat을 순차적으로 실행
const result_arr = arr.map((x) => x.split("").flat());
console.log(result_arr);
/* 결과.
[
  'h', 'e', 'l', 'l',
  'o', ',', ' ', 'w',
  'o', 'r', 'l', 'd'
]
*/

const arr1 = ["hello", "world"];
const result_arr1 = arr1
  .map((str, index) => [index, [str, str.length]])
  .flat(2);
console.log(result_arr1); // [ 0, 'hello', 5, 1, 'world', 5 ]
