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

// charAt
// 인수로 전달받은 인덱스에 해당하는 문자를 검색해서 반환한다.

const str1 = "Hello";

for (let i = 0; i < str1.length; i++) {
  console.log(str1.charAt(i));
}

str1.charAt(5); // ->  ' '

// ***** subString ***
const str2 = "Hello World";
console.log(str2.substring(1, 4)); // ell
console.log(str2.substring(1)); // ello World

// 2. 첫번재 인수 > 두번쨰 인수 => 두 인수는 교환된다.
console.log(str2.substring(4, 1)); // ell

// 3. 인수 < 0 또는 NaN인 경우 0으로 취급된다.
console.log(str2.substring(-2)); // Hello World

// 4. 인수 > 문자열의 길이인 경우 인수는 문자열의 길이로 취급된다.
console.log(str2.substring(1, 100)); // ello World
console.log(str2.substring(20)); // ' '

// *** subString과 indexOf조합 ****
// 스페이스를 기준으로 앞에 있는 부분 문자열 취득
console.log(str2.substring(0, str2.indexOf(" "))); // Hello

// 스페이스를 기주능로 뒤에 있는 부분 문자열 취득
console.log(str2.substring(str2.indexOf(" ") + 1, str2.length)); // world

// **** slice ****

const str3 = "Hello World";

console.log("slice에서는 ", str3.slice(0, 5));
console.log(str3); // 원본배열 그대로다.

//1. substring과 비교
console.log("substring에서는->", str3.substring(0, 3));
console.log("slice에서는->", str3.slice(0, 3));

//2. 인수 < 0 또는 NaN인 경우 0으로 취급된다.
console.log("substring(-3)에서는->", str3.substring(-3)); // Hello World
console.log("slice(-3)에서는->", str3.slice(-3)); // rld

// *** trim ***
const str4 = "  foo  ";
console.log("trim=>", str4.trim()); //foo
console.log(str4);

// *** repeat ***
const str5 = "abc";
console.log("repeat=>", str5.repeat());
console.log("repeat=>", str5.repeat(5));

// *** replace ***
const str6 = "Hello World";
console.log("replace=> ", str6.replace("World", "park"));
// 검색된 문자열이 여럿 존재할 경우 첫 번째로 검색된 문자열만 치환한다.
const str7 = "Hello world world";
console.log("replace=>", str7.replace("world", "park"));

// *** split ***
const str8 = "How are you doing?";

// 공백으로 구분(단어로 구분)하여 **배열로** 반환한다.
console.log("split=>", str8.split(" ")); // [ 'How', 'are', 'you', 'doing?' ]
console.log(str8);
// 인수를 생략하면 대상 문자열 전체를 단일 요소로 하는 배열을 반환.
console.log("splt=>", str8.split()); // ['How are you?]
// 두 번째 인수로 배열의 길이를 지정할 수 있다.
console.log("split=>", str8.split(" ", 2)); // ['how', 'are']
