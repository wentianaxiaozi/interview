// 过滤奇数
// const nums = [1,2,3,4,5,6,7,8,9,10]
// 普通写法
// const odds = nums.filter((num)=>num%2 !== 0)
// console.log(odds)

// 加入函数的写法
// const isOdd = num => num % 2 !== 0
// const _nums = nums.filter(isOdd)
// console.log(_nums)


// 从nums过滤出所有的奇数,并将这些奇数翻倍
// const nums = [1,2,3,4,5,6,7,8,9,10]
// // 奇数判断
// const isOdd = num => num % 2 !== 0
// // 偶数判断
// const double = num => num * 2
// // 求总数
// const sum = (total, num) => total + num

// const result = nums
//                     .filter(isOdd)
//                     .map(double)
//                     .reduce(sum,0)
// console.log(result)



// 使用函数写法  处理大数量的array

const nums = [1,2,3,4,5,6,7,8,9,10]
const isOdd = num => num % 2 !== 0
const double = num => num * 2
const add = (total, num) => total += num

const magic = array => {
    const length = array.length
    let i = 0;
    let total = 0
    for(i; i < length; i++) {
       // 判断数组的第i项是否为奇数
       if(isOdd(nums[i])){
            // 则进行翻倍运算
            let doubled = double(nums[i])
            // 进行求综合
           total = add(total, doubled)
       }
    }

    // 最后,遍历完成返回
    return total
}

console.log(magic(nums))
