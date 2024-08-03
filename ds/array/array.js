// const array = [];

// var a = [1, 2, 3, 4, 5];
// console.log({ a });
// var a = [1, 2, 3, 4, "5"];
// console.log({ a });

// var a = [1, 2, 3, 4, 5, { key: "value" }];
// console.log({ a });

// var a = [1, 2, 3, 4, 5, null, undefined, "", {}, NaN, Infinity, , 10];
// console.log({ a });

// // map, reduce, filter, length

// for (let i = 0; i < a.length; i += 1) {
//     console.log(a[i]);
// }

// // map
// var b = a.map((value) => value * 2);
// console.log({ a, b });

// // filter
// var integers = a.filter((value) => Number.isInteger(value));
// console.log({ integers });

// var notIntegers = a.filter((value) => !Number.isInteger(value));
// console.log({ notIntegers });

// // reduce
// var sumOfIntegers = integers.reduce((acc, value) => acc + value, 0);
// console.log({ integers, sumOfIntegers });

// // Data structures

// /* Traversal
//  * --->
//  * <---
//  * |     <--->     |
//  * |-->         <--|
//  */

// function generateRandomNumbers(count = 10) {
//     return Array(count)
//         .fill(0)
//         .map((_) => Math.floor(Math.random() * 100));
// }

// // console.log(generateRandomNumbers(10));

// const firstRandoms = generateRandomNumbers(10);
// console.log({ firstRandoms });

// // traversal -->
// for (let i = 0; i < firstRandoms.length; i += 1) {
//     console.log(firstRandoms[i]);
// }

// // traversal <--
// for (let i = firstRandoms.length - 1; i >= 0; i -= 1) {
//     console.log(firstRandoms[i]);
// }

// function indexOf(array, value) {
//     let index = -1;
//     // traversal -->
//     for (let i = 0; i < array.length; i += 1) {
//         if (array[i] === value) {
//             index = i;
//             return index;
//         }
//     }
//     return index;
// }

const first10 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(indexOf(first10, 6));
// console.log(indexOf(first10, 60));

// function indexOfAfter(array, value, afterThisIndex = 0) {
//     let index = -1;
//     for (let i = afterThisIndex + 1; i < array.length; i += 1) {
//         if (value === array[i]) {
//             return i;
//         }
//     }
//     return index;
// }

// console.log(indexOfAfter([...first10, 6], 6, 3));
// console.log(indexOfAfter([...first10, 6], 6, 8));
// console.log(indexOfAfter([...first10, 6], 6, 20));

// console.log(indexOfAfter(first10, 6));

function lastIndexOf(array, value, before = Infinity) {
    let index = -1;
    before = before === Infinity ? array.length : before;
    // traversal <--
    for (let i = before - 1; i >= 0; i -= 1) {
        if (value === array[i]) {
            return i;
        }
    }
    return index;
}

console.log(lastIndexOf(first10, 9));
console.log(lastIndexOf([9, 9, 9], 9));
console.log(lastIndexOf([9, 9, 9], 9, 2));
console.log(lastIndexOf([9, 9, 9], 9, 1));
