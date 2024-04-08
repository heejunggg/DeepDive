// if ("str") {
//   console.log("4");
// }

// if (0) {
//   console.log("3"); //거짓이므로 안나온다.
// }

// ********** 10강 ******************

// let person = {
//   name: "jee",
// };
// console.log(person.name);
// console.log(person["name"]);

// let person = {
//   name: "hee",
// };
// persion.name = "park";
// console.log(person);

// let persion = {
//   lesson: "coding",
// };
// person.lesson = "design";
// console.log(person);

// let person2 = {
//   favorite: "coffee",
// };
// person2.favorite = "vagetable";

// delete person2.favorite;
// console.log(person2);

/*
let obj = {
  name: "lee",
  sayHi: function () {
    console.log(`hi` + this.name);
  },
};
obj.sayHi(); // hilee

let obj1 = {
  name: "park",
  sayHi() {
    console.log(`HI` + this.name);
  },
};
obj1.sayHi();
*/

// ******** 11강 ************
/*
let score = 80;
let copy = score;

console.log(score);
console.log(copy);

score = 100;

console.log(score);
console.log(copy);
*/

// *********** 12강 ******************
/*
function add(x, y) {
  return x + y;
}

console.log(add(2, 5));
*/

//
/*
x=1;
y=2;
result = 3이 나오게 하려면..
*/

// 입력 : x와 y가 변수, 결과를 닮을 변수
//수식 : x+y
//출력 consoloe.log(`${result}는 3입니다.')

/* 내가 작성한 코드 NaN이라는 결과가나옴..

let x; // 선언
let y; // 선언
let result = x + y;

function addxy(x, y) {
  return result;
}
addxy(1, 2);
console.log(`결과는 ${result}입니다.`);

의문 : 선언을 하지않고 함수내부에서 써도되나
--> 
javascript에서는 변수를 명시적으로 선언하지 않고 값을 할당하면,
자동으로 전역변수로 처리된다. 암묵적전역이라한다.
result 는 전역변수로 작동되고, 함수외부에서도 접근이 가능하다.

의문2 : result를 함수외부에서 x + y를 했으니, 전역변수이니,
함수 내부에서 retrun result; 를 해줘도 되지않나..
--> x도 값이 없고, y도 값이 없어서  x+y도 값이 없다...근데 
그래서 인수로 1,2를 주었는데?..아~~이해가 안간다....

*/
/*  내가 다시 수정

let x; // 선언
let y; // 선언

function addxy(x, y) {
  let result = x + y;
  console.log(`결과는 ${result}입니다.`);
}
addxy(1, 2);
*/

/*선언문*/
// function add(x, y) {
//   return x + y;
// }

// console.log(add(1, 2));

// (function bar() {
//   console.log("bar");
// });
// bar();

// 표현식으로 바꿔보기
/*
let add = function (x, y) {
  return x + y;
};
console.log(add(1, 2));
*/

const sayGoodbye = function goodbye() {
  console.log("안녕히 가세요");
};

sayGoodbye(); // 출력: 안녕히 가세요
// goodbye(); // Error: goodbye is not defined

//표현식
// 정상적인 코드
const ab = function (x, y) {
  return x + y;
};
console.log(ab(1, 2)); // 3으로 출력

/*함수호이스팅 vs 변수호이스팅*/

// 함수 선언문 --함수 호이스팅
// --> 함수 선언문은 이전에 함수를 참조할수 있고, 호출할수도 있따.
// console.log(ab(1, 2)); // 3으로 출력, 정의하기전에 호출해도 된다.

/*
function ab(x, y) {
  return x + y;
}
*/

//함수 표현식
// console.log(be(3, 4)); //error 변수 호이스팅을 따른다. 정의하기전에 호출을 하면 안된다.아래로 내려야한다.
// let be = function (x, y) {
//   return x + y;
// };

// 화살표 함수
// const abc = (x, y) => x + y;
// console.log(abc(1, 3));

// 매개변수
function add(x, y) {
  console.log(10, 30);
  return x + y;
}
add(10, 30);
console.log(add(10, 30));
