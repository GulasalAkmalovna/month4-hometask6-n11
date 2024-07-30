// 104 - task
// function sumObjectValues(obj) {
//     let res = 0;
//     for (let key in obj) {
//        if (typeof obj[key] === "object") {
//           res += sumObjectValues(obj[key]);
//        } else {
//           res += obj[key];
//        }
//     }
//     return res;
//  }

// // Test case
//  const obj = {
//     a: 1,
//     b: {
//        c: 2,
//        d: {
//           e: 3,
//        },
//     },
//  };
//  console.log(sumObjectValues(obj));
// Output: 6

// 105 - task
//  function rotateArrayLeft(arr, n) {
//     return arr.slice(n).concat(arr.slice(0, n));
//  }

//  // Test case
//  console.log(rotateArrayLeft([1, 2, 3, 4, 5], 2));
//  // Output: [3, 4, 5, 1, 2]

// 106 - task
//  function removeDigits(str) {
//     let newStr =  str.replaceAll(/[0-9]/g, "");
//     return newStr
//  }

//  // Test case
//  console.log(removeDigits("abc123def456"));
//  // Output: "abcdef"

// 107 - task
//  function oddIndexedElements(arr) {
//     let newArr =  arr.filter((item, index) => index % 2 !== 0);
//     return newArr
//  }

//  // Test case
//  console.log(oddIndexedElements([1, 2, 3, 4, 5, 6]));
//  // Output: [2, 4, 6]

// 108 - task
//  function doubleValues(obj) {
//     let obj2 = {};
//     for (let key in obj) {
//        if (typeof obj[key] === "number") {
//           obj2[key] = obj[key] * 2;
//        } else {
//           obj2[key] = obj[key];
//        }
//     }
//     return obj2;
//  }

//  const obj = {
//     a: 1,
//     b: {
//        c: 2,
//        d: {
//           e: 3,
//        },
//     },
//  };
//  console.log(doubleValues(obj));
//  // Output: { a: 2, b: { c: 4, d: { e: 6 } } }

// // 109 - task
// function objectToArray(obj) {
//     let res = []
//     for (const key in obj) {
//         let row = []
//         row.push(key, obj[key])
//         res.push(row)
//     }
//     return res
// }

// //  Test case
// const obj = {
//     a: 1,
//     b: 2,
//     c: 3,
// };
// console.log(objectToArray(obj));
// // Output: [["a", 1], ["b", 2], ["c", 3]]

// // 110 - task
// function sortKeysByValue(obj) {

// }

// // Test case
// const obj = {
//    a: 3,
//    b: 1,
//    c: 2,
// };
// console.log(sortKeysByValue(obj));
// // Output: { b: 1, c: 2, a: 3 }