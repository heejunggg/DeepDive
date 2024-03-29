var kind; //선언
var num = 2;
/*
if문
if (num > 0) {
  var kind = "양수";
}
console.log(kind); // "양수"
*/
/*
if else문
if (num > 0) {
  kind = "양수";
} else {
  kind = "음수";
}
console.log(kind);
*/

/*
if..else if문
if (num > 0) {
  kind = "양수";
} else if (num < 0) {
  kind = "음수";
} else {
  kind = "영";
}
console.log(kind);
*/

//삼항조건식으로 변환 (두개의 조건)
// var kind = num > 0 ? kind="양수" : kind="음수" ;

//삼항조건식으로 변환 (세개의 조건)
//var kind = num ? (num > 0 ? (kind = "양수") : (kind = "음수")) : "영";

//-------------------------------------------------------
//switch문
// var month = 11;
// var monthName;

// switch (month) {
//   case 1:
//     monthName = "Jaunary";
//     break;

//   case 2:
//     monthName = "february";
//     break;

//   case 11:
//     monthName = "November;";
//     break;

//   case 12:
//     monthName = "september";
//     break;

//   default:
//     monthName = "Invalid month";
// }
// console.log(month);
//---------------------------------
//for
// ex. 문제 1.
//0에서 10까지 모두 출력
// for (var i = 0; i < 10; i++) {
//   console.log(i);
// }

// ex. 문제 2.
/*
0 부터 10까지 짝수만 출력
for (var i = 0; i < 11; i = i + 2) {
  console.log(i);
}

// 엘리해답
for (let i = 0; i < 11; i++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(`q1. ${i}`);
}
*/
//********  while   ******************* */
/*
var count = 0;
//count가 3보다 작을떄까지 코드블록을 계속 반복 실행한다.
while (count < 3) {
  console.log(count);
  count++;
} //0 1 2 가 출력된다.
*/
// ****** do..while *******
/*스벅 크롬이 안되네..이 코드 실행 어떻게 되는지 보기
// 엘리해답---내가봤을때는 짝숙 아니라 홀수가 출력되는데??*/
/*
for (let i = 0; i < 11; i++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(`q1. ${i}`); //홀수만 출력
}
*/

//0이 출력되게---얘도 확인할것.
// let count = 1;
// do {
//   console.log(count);
//   count--;
// } while (count < 3);

/*var count = 5;

do {
  console.log(`do while: ${count}`);
  i--;
} while (count > 0); 
*/

//***** break와 countiune 차이
// 리튼에 나와있음.
// for (let i = 0; i < 10; i++) {
//   if (i % 2 == 0) {
//     continue;
//   }
//   console.log(i);
// }

//break를 이용해서 0123이 나오게할것.
//내가 푼 1번
for (let i = 0; i < 4; i++) {
  console.log(i);
  if (i === 4) break;
} // 0 1 2 3

//책에 나온 2번쨰
for (let i = 0; i < 4; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}
