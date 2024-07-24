//================================ spred Operator=====================================

// Use cases==============================
// 2.combine array or Object
// 3.argument denna function ekkta
// 4.coppy kranna , thawath obj or array ekkta

//2.combine array or Object
let arr = [1, 2, 3];
let arr2 = ["x", "y", "z"];

let arr3 = [...arr, ...arr2];

//3.argument denna function ekkta
function sum(a, b, c) {
  return a + b + c;
}

console.log(sum(...arr));
console.log(arr3);

// 4.coppy kranna , thawath obj or array ekkta
let arr4 = [...arr];
arr[1] = 10;
console.log(arr);
console.log(arr4);

let human = { first: 10, second: 20 };

let human2 = { ...human };
human.second = 200;

console.log(human);
console.log(human2);

// ==============================Rest operator============================
//1. handling argument of function
function sumAll(...args) {
  let sum = 0;
  for (let arg of args) {
    sum += arg;
  }
  console.log(sum);
}

sumAll(...arr);

// argument restiong

let arr5 = [1, 2, 3, 4, 5, 6, 7, 8];

let [first, second, third, ...rest_args] = arr5;

console.log(first);
console.log(second);
console.log(third);
console.log(rest_args);
