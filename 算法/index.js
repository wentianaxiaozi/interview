// //冒泡排序
// var arr = [13, 10, 11, 35, 4]

// function bubleSort(arr) {
//     var len = arr.length;
//     for (let outer = len ; outer >= 2; outer--) {
//         for(let inner = 0; inner <=outer - 1; inner++) {
//             if(arr[inner] > arr[inner + 1]) {
//                 [arr[inner],arr[inner+1]] = [arr[inner+1],arr[inner]]
//             }
//         }
//     }
//     return arr;
// }
// console.log(bubleSort(arr));


// var foo = {},
//     F = function(){};
// Object.prototype.a = 'value a';
// Function.prototype.b = 'value b';

// console.log(foo.a)   
// console.log(foo.b)    
// console.log(F.a)      
// console.log(F.b)  

let givenArr = [[1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10]
let res = givenArr.toString().split(',').map(item => {
    return item = + item
})
console.log(res);

