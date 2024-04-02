// if ("str") {
//   console.log("4");
// }

// if (0) {
//   console.log("3"); //거짓이므로 안나온다.
// }

// 10강

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
