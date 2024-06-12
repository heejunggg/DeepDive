> ## 🧐 String

- 표준 빌트인 객체인 String객체는 생성자 함수 객체다.
- new 연산자와 함께 호출하여 String인스턴스를 생성할 수 있따.
- String 생성자 함수에 인수를 전달하지 않고 new연산자와 함께 호출하면 [[StringData]] 내부 슬롯에 문자열을 할당한 String 래퍼 객체를 생성한다.

```
const strObj = new String("Lee");
console.log(strObj);// [String:'Lee']
console.log(strObj[0]); // L

strObj[0] = "S"; // S로 수정해도 바뀌지 않는다.
console.log(strObj); // [String:'Lee']

```

--> String 생성자 함수의 인수로 문자열이 아닌 값을 전달하면
인수를 문자열로 강제 변환한 후 [StringData] 내부 슬롯에 변환된 문자열을 할당한 String 래퍼 객체를 생성한다.

```
// 숫자타입 => 문자타입
let strObj1 = new String(123);
console.log(strObj1); // [String:'123']
```

> ## String.prototype.indexOf

- indexOf 메서드는 대상 문자열(메서드를 호출한 문자열)에서
  인수로 전달받은 문자열을 검색하여 첫번쨰 인덱스를 반환한다.
- 실패하면 -1을 반환한다.

```javascript
const str = "Hello World";

// 문자열 str에서 'l'(영어 엘)을 검색하여 첫 번째 인덱스를 반환한다.
str.indexOf("1"); // 2

//문자열 str에서 'or'을 검색하여 첫 번째 인덱스를 반환한다.
str.indexOf("or"); // 7

// indexOf 메서드의 2번째 인수로 검색을 시작할 인덱스를 전달할 수 있다
// 문자열 str의 인덱스 3부터 'l'(영어 엘)을 검색하여 첫 번째 인덱스를 반환한다.
str.indexOf("l", 3); // 3
```

> ## String.prototype.includes

- 인수로 전달받은 문자열이 포함되어 있는지 확인하여 그 결과를 true 또는 false로 반환한다.

```javascript
// indexOf 메서드의 2번째 인수로 검색을 시작할 인덱스를 전달할 수 있다
// 문자열 str의 인덱스 ** 3부터 'l'(영어 엘)을 검색하여 첫 번째 인덱스를 반환한다.
str.indexOf("l", 3); // 3

// inclueds
str.includes("w", 3); // true
str.includes("H", 3); // false
```

> ## String.prototype.charAt

- 대상 문자열에서 인수로 전달받은 인덱스에 위치한 문자를 검색하고 반환한다.

```javascript
const str1 = "Hello";

for (let i = 0; i < str1.length; i++) {
  console.log(str1.charAt(i)); // H e l l o
}
// 인덱스가 문자열의 범위(0~str1.length-1)을 벗어난 경우 빈 문자열을 반환한다.
str1.charAt(5); // ->  ' '
```

> ## String.prototype.substring

- 대상 문자열에서 첫 번째 인수로 전달받은 인덱스에 위치하는 문자부터 두 번쨰 전달받은 인덱스에 위치하는 문자의 바로 이전 문자까지의 부분 문자열을 반환한다.
- 두번쨰 인수는 생략가능하지만. 마지막 문자까지 문자열을 반환한다.

```javascript
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
```

> ## String.prototype.slice

- substring 메서드와 동일하고 동작한다. 단, slice메서드에는 음수인
  인수를 전달할 수 있다. 음수인 인수를 전달하면 대상 문자열의 가장 뒤에서부터 시작하여 문자열을 잘라내어 반홚나다.
- 원본배열에서 건드리지 않는다.

```javascript
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
```

> ## String.prototype.trim

- 대상 문자열 앞뒤에 공백문자가 있을 경우 이를 제거한 문자열을 반환한다.

```javascript
// *** trim ***
const str4 = "  foo  ";
console.log("trim=>", str4.trim()); //foo
console.log(str4);
```

> ## String.prototype.repeat
>
> -대상 문자열을 인수로 전달받은 정수만큼 반복해 연결한 새로운 문자열을 반환한다.

- 인수로 전달받은 정수가 0이면 빈 문자열을 반환하고, 음수이면 RangError를 발생, 인수를 생략하면 기본값 0 이 설정된다.

```javascript
// *** repeat ***
const str5 = "abc";
console.log("repeat=>", str5.repeat());
console.log("repeat=>", str5.repeat(5));
```

> ## String.prototype.replace

- 대상 문자열에서 첫 번째 인수로 전달받은 문자열 또는 정규표현식을 검색하여 두 번째 인수로 전달한 문자열로 치환한 문자열을 반환한다.
- 검색된 문자열이 여럿 존재할 경우, 첫 번째 검색된 문자열만 치환한다.

```javascript
// *** replace ***
const str6 = "Hello World";
console.log("replace=> ", str6.replace("World", "park"));
// 검색된 문자열이 여럿 존재할 경우 첫 번째로 검색된 문자열만 치환한다.
const str7 = "Hello world world";
console.log("replace=>", str7.replace("world", "park"));
```

> ## String.prototype.split

- 첫 번째 인수로 전달한 문자열 또는 정규 표현식을 검색하여 문자열을 구분한 후 분리된 각 문자열로 이루어진 배열을 반환한다.

```javascript
// *** split ***
const str8 = "How are you doing?";

// 공백으로 구분(단어로 구분)하여 **배열로** 반환한다.
console.log("split=>", str8.split(" ")); // [ 'How', 'are', 'you', 'doing?' ]
console.log(str8);
// 인수를 생략하면 대상 문자열 전체를 단일 요소로 하는 배열을 반환.
console.log("splt=>", str8.split()); // ['How are you?]
// 두 번째 인수로 배열의 길이를 지정할 수 있다.
console.log("split=>", str8.split(" ", 2)); // ['how', 'are']
```
