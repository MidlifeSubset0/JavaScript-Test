// var emptyArray = [];
// var fruits = ['Apples', 'Bananas', 'Oranges']
// var favFruit = 'Mango';
// var favCar = 'Gtr';
// var favNum = 5;
// const num = Math.round(Math.random() * 100);
// var favArray = [favCar, favFruit, favNum, num, '55', '69'];

// console.log(favArray.splice(1, 2, 'Apple', '7', 'Sauce'));
// var length = favArray.length;

const numbers = [1, 2, 3, 4, 5];

// map examples
// const double = number => number * 2;
// let square = number => Math.pow(number, 2)
// const half = number => number / 2;

// function double2(number) {
//     return number * 2;
// };
// console.log(numbers.map(double2))

// console.log(numbers.map(half))
// console.log(numbers.map(square))
// console.log(numbers.map(double))
// const triple = number => number * 3;
// console.log(numbers.map(triple))
// const compute = numbers
//     .map(double)
//     .map(n => n.toString())
//     .join(' and ');
// console.log(compute);
// function squareRt(number) {
//     return Math.round(Math.sqrt(number))
// };
// console.log(numbers.map(squareRt))

// // filter examples
// const isEven = n => n%2 === 0
// const isOdd = n => n%2 === 1
// function test21(number) {  
//     return number == (0, 5);
// };
// console.log(numbers.filter(isOdd))
// console.log(numbers.filter(isEven))
// console.log(numbers.filter(test21))
//reduce example
const joinMe = (acc, curr, index) => {
    if(index === 0) {
        return curr
    } else {
        return `${acc} and ${curr}`
    }
}
let res = numbers.reduce(joinMe, '');
console.log('MY REDUCER', res);

const reducer = (acc, curr) =>  acc + curr
console.log(numbers.reduce(reducer))
console.log(numbers)

const reducer2 = (acc, curr) => curr - acc
console.log(numbers.reduce(reducer2))
console.log(5-1-2-3-4-5)

// //forEach
// res = numbers.forEach( n => {
//     console.log(n);
// })
// console.log('MY FOR EACH', res);