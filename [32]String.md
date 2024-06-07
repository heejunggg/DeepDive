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
// 문자열 str의 인덱스 3부터 'l'(영어 엘)을 검색하여 첫 번째 인덱스를 반환한다.
str.indexOf("l", 3); // 3

// inclueds
str.includes("w", 3); // true
str.includes("H", 3); // false
```
