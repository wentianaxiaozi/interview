// 冒泡排序

// const bubbleSort1 =  arr => {
//     console.time('改进冒泡排序耗时')
//     const length = arr.length
//     for(let i = 0; i<length-1; i++) {
//         for(let j = 0; j<length-1-i; j++) {
//             if(arr[j] > arr[j+1]) {
//                 [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
//             }
//         }
//     }
//     console.log(`改进前的arr是${arr}`);
//     console.timeEnd('改进冒泡排序的耗时')
    
// }

// bubbleSort1([9,3,5,2,1,8,6])

// 冒泡排序优化系列
// const bubbleSort2 = arr => {
//     const length =  arr.length
//     if(length < 1) {
//         return
//     }
//     let hasChange = false
//     for(let i = 0; i < length - 1; i++) {
//         for(let j = 0; j < length-i-1; j++) {
//             if(arr[j] > arr[j+1]) {
//                 [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
//                 hasChange = true
//             }
//         }
//         if(!hasChange) {
//             break
//         }
//     }

//     console.log('完成了');
//     return arr
// }

// let tian = bubbleSort2([9,8,2,4,6,1,3,7])
// console.log(tian);


// 插入排序
// const insertionSort = arr => {
//     const len = arr.length
//     if(len < 1) {
//         return
//     }
//     let preIndex, current
//     for(let i = 0; i< len; i++) {
//         preIndex = i - 1
//         current = arr[i]
//         while(preIndex >= 0 && arr[preIndex] > current) {
//             // 将大的元素后移一位
//             arr[preIndex + 1] = arr[preIndex]
//             preIndex--
//         }
//         if(preIndex + 1 != i) {
//             arr[preIndex + 1] = current
//             console.log(arr);
            
//         }
//     }
//     return arr
// }

// insertionSort([8,2,4,1,7])

//  x >> 1 是位运算符，表示右移一位，相当于 x 除以 2 取整   Math.floor(x/2)

