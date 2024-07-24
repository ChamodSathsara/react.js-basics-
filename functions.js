// Arrow Functions ........................................====================

// normal function
function green(name) {
  console.log("My name is ", name);
}
green("chamod");

// arrow function
let greenly = (name) => {
  console.log("My name is ", name);
};
greenly("imal");

// using return keyword
const add = (a, b) => {
  return a + b;
};
console.log(add(10, 15));

// missing return keyword
const add2 = (a, b) => a + b;
console.log(add2(25, 10));

// get a argument trought a normal function
function add3(a, b, c) {
  return arguments;
}
console.log(add3(10, 20, 30));
// meka arrow function ekka krnna baha

// this ketword
let name = "kamal";
let student = {
  name: "chamod",
  normalFunction: function () {
    console.log(this.name);
  },
  arrowFunction: () => {
    console.log(this.name);
  },
};

student.normalFunction();
student.arrowFunction();
