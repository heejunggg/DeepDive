// var template = `<ul>\n\t<li><a href="#">Home</a></li>\n<ul>`;

// console.log(template);

// var first = "ung-mo";
// var last = "lee";
// console.log(`myname : ${first} ${last}`);
/*
let globaName = "global name";
{
  let name = "heejung";
  name = "hello";
  console.log(name); //heejung출력
}
console.log(name); //콘솔창에 안나온다.--지역변수
console.log(globaName); //globaName 출력된다.

{
  age = 40; //할당
  var age; //선언
}
console.log(age);
*/

// 12. 콜백함수

/* 첫번쨰 
function add(num1, num2) {
  return num1 + num2;
}

//add가 가리키는 그 함수의 코드블럭을 실행한다. 즉 복사되어 
doSomething에 레버펀스가 복사되어진다. 즉, add와 doSomething은 같은
같은 함수를 가리키고 있다. 

const doSomething = add;
const result = doSomething(2, 3);
console.log(result);

const result2 = add(30, 20);
console.log(result2);
*/

// 두번째
/*
function add(num1, num2) {
  return num1 + num2;
}

function surprise(operator) {
  let result = operator(10, 100);
  console.log(result);
}
surprise(add);
*/

// 세번쨰.
/*
function add(num1, num2) {
  return num1 + num2;
}
function divide(num1, num2) {
  return num1 / num2;
}

function surprise(operator) {
  let result = operator(100, 2);
  console.log(result);
}
// surprise(add);
surprise(divide);
*/

// 스코프
/*
function foo() {
  console.log("global function foo");
}

function bar() {
  function foo() {
    console.log("local function foo");
  }
  foo();
}

bar();
*/

/*
let c = 7;
{
  let c = 3;
  let b = 5;
  console.log(c, b); // 3 5
  {
    let c = 3;
    let d = 2;
    console.log(c, b, d); // 3 5 2
  }
  console.log(b); // 5
}
// 지역변수가 전역변수보다 더 높다.

let A = 7; //A가 7에서 4로 바뀐다.
function f() {
  let B = 5;
  console.log(A, B); // 7 5
  A = 4;

  function fb() {
    let C = 5;
    let A = 3;
    console.log(A, B, c); // 3 5 5
    A = 5; //지역변수
  }

  fb();
  console.log(A); // 4
}
f();
*/

// 16강 --------------------------------------------------------
/*

let obj = { a: 5 };

Object.defineProperty(obj, 'a', {
  writable: false
});

obj.a = 10; // 'a' 프로퍼티는 이제 변경 불가능합니다.
console.log(obj.a); // 5

*/

let obj = { a: 5 };
Object.defineProperty(obj, "a", {
  writable: false,
});

obj.a = 10; // 'a' 프로퍼티는 이제 젼경이 불가능하다.
console.log(obj.a); // 5
