const arr = [1, 2];
let result = arr.unshift(3, 4);
console.log(arr);

// ES6 스프레드 문법

const newArr = [3, ...arr];
console.log(arr);
