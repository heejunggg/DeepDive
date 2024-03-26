// var template = `<ul>\n\t<li><a href="#">Home</a></li>\n<ul>`;

// console.log(template);

// var first = "ung-mo";
// var last = "lee";
// console.log(`myname : ${first} ${last}`);

let globaName = "global name";
{
  let name = "heejung";
  name = "hello";
  console.log(name); //heejung출력
}
console.log(name); //콘솔창에 안나온다.
console.log(globaName); //globaName 출력된다.

{
  age = 40; //할당
  var age; //선언
}
console.log(age);

{
  age = 40; //할당
  let age; //선언
}
console.log(age);
