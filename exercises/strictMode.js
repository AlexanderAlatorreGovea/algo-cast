"use strict";

var a = function add(num) {};

function a() {
  return {
    b() {},
    c() {},
  };
}

function notClosure() {
  let counter = 0;

  counter++;

  return counter;
}
console.log(notClosure()); // 1
console.log(notClosure()); // 1

var closure = (function () {
  let counter = 0;

  return function () {
    return counter++;
  };
})();

const counter = (function () {
  let privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }

  return {
    increment() {
      changeBy(1);
    },

    decrement() {
      changeBy(-1);
    },

    value() {
      return privateCounter;
    },
  };
})();

counter.increment();
counter.increment();
console.log(counter.value()); // 2.

console.log(closure(1));
console.log(closure(1));
console.log(closure(1));

function popArray(arr) {
  while (arr.length) {
    arr.pop();
  }

  return arr;
}

console.log(popArray([1, 2, 3]));
const arr = [1, 3, 23];
arr.length = 0;
console.log(arr);
let newArr = [1, 3, 4];
newArr = [];
console.log(newArr);

function mul(x) {
  return (y) => {
    return (z) => {
      return x + y + z;
    };
  };
}

console.log(mul(5)(5)(5));

const array = [];
const newArray = new Array();
console.log(newArray);

console.log(0.2 + 0.1);

function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
const auto = new Car("Honda", "Accord", 1998);

console.log(auto instanceof Car);
// expected output: true
console.log(auto instanceof Object);
// expected output: true

// before es6
const obj = {
  name: "alex",
};
console.log(obj.name);
const ar22r = [1, 2, 3];

console.log(ar22r[0]);

// es5
const [first, second, third] = [1, 2, 3];

console.log(first);

const { name } = obj;
console.log(name);

function x(...args) {
  console.log(args);
}

x(1, 2, 3, 4);

const arr222 = [1, 2, 3];
const arr2222 = [...arr222];
arr2222.push(2);

console.log(arr222);
console.log(arr2222);

function d(a) {
  console.log(arguments);
}

d(22);
