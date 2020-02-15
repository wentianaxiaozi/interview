// let corp = {}

// corp.list = {}

// //订阅事件
// corp.on = function(key,fn) {
//     //如果对象中没有对应的key值  也就说明没被订阅过
//     if(!this.list[key]) {
//         this.list[key] = []
//     }
//     this.list[key].push(fn)
// }

// //发布事件
// corp.emit = function() {
//     let key = [].shift.call(arguments)
//     fns = this.list[key]
//     //如果缓存列表里没有函数就返回false
//     if(!fns || fns.length == 0) {
//         return false
//     }

//     //遍历key值对应的缓存列表
//     fns.forEach(fn => {
//         fn.apply(this, arguments)
//     })
   
// }

// //测试用例
// corp.on('join', (position, salary) => {
//     console.log('你的职位是：' + position);
//     console.log('期望薪水：' + salary);
// });
// corp.on('other', (skill, hobby) => {
//     console.log('你的技能有： ' + skill);
//     console.log('爱好： ' + hobby);
// });

// corp.emit('join', '前端', 10000);
// corp.emit('join', '后端', 10000);
// corp.emit('other', '端茶和倒水', '足球');

// let res = setTimeout(function() {
    
// })

// console.log(res);

// let res = [1,2,3,4]
// let _res = res.push('pp')
// console.log(res);

let arr = [1,[2,3]]
let _arr = arr.toString().split(',').map((item)=> {
    console.log(item);
    return item  = +item
});

console.log(_arr);

