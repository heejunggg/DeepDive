const strObj = new String("Lee");
console.log(strObj); // [String:'Lee']
console.log(strObj[0]); // L

strObj[0] = "S"; // S로 수정해도 바뀌지않는다.
console.log(strObj); // [String:'Lee']

// 숫자타입 => 문자타입
let strObj1 = new String(123);
console.log(strObj1); // [String:'123']

//--- string.prototype.indexOf

const str = "Hello World";

// 문자열 str에서 'l'(영어 엘)을 검색하여 첫 번째 인덱스를 반환한다.
str.indexOf("1"); // 2

//문자열 str에서 'or'을 검색하여 첫 번째 인덱스를 반환한다.
str.indexOf("or"); // 7

// indexOf 메서드의 2번째 인수로 검색을 시작할 인덱스를 전달할 수 있다
// 문자열 str의 인덱스 3부터 'l'(영어 엘)을 검색하여 첫 번째 인덱스를 반환한다.
str.indexOf("l", 3); // 3

// inclueds
str.includes("w", 3); // true
str.includes("H", 3); // false
