// Array.prototype.sum = function() {
//     var sum = 0
//     for(var i = 0; i < this.length; i++) {
//         sum += this[i]
//     }
//     return sum
// }
// var that = this

// Array.prototype = {
//     sum: function() {
//         var sum = 0
//         for(var i = 0; i < that.length; i++) {
//             sum += that[i]
//         }
//         return sum
//     }
// }
// var arr = [1,3,4]
// console.log(arr.sum());

// function father() {
//     console.log('我在这里啊');
//     console.log(this);
    
// }
// var o = {
//     name: 'wentian'
// }

// father.call(o)


//子构造函数继承父构造函数
   
//父构造函数
// function Father(uname, age) {
//     this.uname = uname
//     this.age = age
// } 
// //子构造函数
// function Son(uname, age) {
//     Father.call(this, uname,age)
// }

// Son.prototype.exam = function() {
//     console.log('kaoshi');
    
// }
// var son = new Son('刘德华',18)
// console.log(Son.prototype);
// console.log(Father.prototype)

// var arr = [1,33,44,66,22]
// // var res = Math.max(...arr)
// var res = Math.max.apply(null,arr)
// console.log(res);

// function fn() {
//     var num = 10
//     return function() {
//         console.log(num);
//     }
// }
// var res = fn()()

// var car = (function() {
//     var start = 10
//     var total = 0
//     return {
//         price: function(n) {
//             if(n < 3) {
//                 total = start
//             }else {
//                 total = start + (n - 3) * 5
//             }
//             return total
//         }
//     }
// })()

// console.log(car.price(8));

// var name = 'the window'
// var object = {
//     name: 'my object',
//     getNameFunc: function() {
//         return function() {
//             return this.name
//         }
//     }
// }
// console.log(object.getNameFunc()())
//前拷贝

// var obj = {
//     name: 'tianxia',
//     age: 18,
//     msg: {
//         age: 20
//     }
// }
// var res = {}

// // Object.assign(res, obj)
// // obj.msg.age = 22

// // console.log(res);

// // console.log(obj);

// //深拷贝
// function deepCopy(newObj, oldObj) {
//     for(var k in oldObj) {
//         console.log(oldObj[k]);
//         //判断属性属于哪种数据类型
//         //1. 判断值是否为数组
//         if(oldObj[k] instanceof Array) {
//             newObj[k] = []
//             deepCopy(newObj[k], oldObj[k])
//         }else if(oldObj[k] instanceof Object) {
//         //2. 判断值是否为对像
//             newObj[k] = {}
//             deepCopy(newObj[k], oldObj[k])
//         }else {
//         //3. 属于简单数据类型
//             newObj[k] = oldObj[k]
//         }
//     }
// }

// deepCopy(res, obj)

// console.log(res);

// let a = 'Hello World!';

// function first() {
//   console.log('Inside first function');
//   second();
//   console.log('Again inside first function');
// }

// function second() {
//   console.log('Inside second function');
// }

// first();
// console.log('Inside Global Execution Context')

let arr = [2,4,6,7,8,9]
let num = 6

let res = arr.forEach(function(el) {

  
  if(el !== 6) {
    return 'ninad'
  }
})

console.log(res);

