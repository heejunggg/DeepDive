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
const sum = [1, 2, 3, 4].reduce(
  (accumulator, currentValue, index, array) => accumulator + currentValue,
  0
);
console.log(sum); // 10
