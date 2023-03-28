// 변수, 상수
let myVariable = 123;
const myConstant = "Hello, world!";

console.log(myVariable);
console.log(myConstant);

// 데이터 타입
let myNumber = 123;
let myString = "Hello, world!";
let myBoolean = true;
let myNull = null;
let myUndefined = undefined;
let myObject = { name : "John", age : 30 };
let mySymbol = Symbol("mySymbol");

console.log(typeof myNumber);
console.log(typeof myString);
console.log(typeof myBoolean);
console.log(typeof myNull);
console.log(typeof myUndefined);
console.log(typeof myObject);
console.log(typeof mySymbol);


//연산자
let x = 10;
let y = 5;
console.log(x+y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);

console.log(x > y);
console.log(x < y);
console.log(x >= y);
console.log(x <= y);
console.log(x === y);
console.log(x !== y);


let a = true;
let b = false;

console.log(a && b);
console.log(a || b);
console.log(!a);


//조건문
let age = 20;

if (age >= 18) {
    console.log("You are an adult.");
} else if (age >= 13) {
    console.log("You are a teenager.");
} else {
    console.log("You are a child.");
}

//switch문
let fruit = "banana";

switch (fruit) {
    case "apple":
        console.log("This is an apple.");
        break;
    case "banana":
        console.log("This is a banana.");
    case "orange":
        console.log("This is an orange.");
        break;
    default:
        console.log("Unknown fruit.");
}


//for문
for (let i = 0; i < 5; i++) {
    console.log(i);
}


//while문
let i = 0;

while (i < 5) {
    console.log(i);
    i++;
}


//배열 순회
const arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

arr.forEach(function (element) {
    console.log(element);
});

//함수
function add(a, b) {
    return a + b;
}

let result = add(1, 2);

console.log(result);

//객체

let myObject2 = {
    name : "John",
    age : 30,
    isMarried : false,
};

console.log(myObject2.name);
console.log(myObject2.age);
console.log(myObject2.isMarried);


//배열
let myArray = ["apple", "banana", "orange"];

console.log(myArray[0]);
console.log(myArray[1]);
console.log(myArray[2]);