//实现一个 sleep 函数，比如 sleep(1000) 意味着等待1000毫秒，可从 Promise、Generator、Async/Await 等角度实现

// Promise
// const sleep = (time)=>{
//     return new Promise(res=>{
//         setTimeout(res, time)
//     })
// }

// sleep(2000).then(()=>{
//     console.log('Promise 实现sleep函数')
// })


// Generator
// function* sleepGenerator(time){
//     yield new Promise(res=>{
//         setTimeout(res, time)
//     })
// }
// sleepGenerator(1000).next().value.then(()=>{
//     console.log('Generator 函数实现sleep')
// })

// async await 实心sleep函数

// function sleep(time){
//     return new Promise(res=>{
//         setTimeout(res, time)
//     })
// }

// async function outPut() {
//     let out = await sleep(1000)
//     console.log('async 实现sleep函数')
//     return out
// }

// outPut()

// es5实现sleep函数
// function sleep(callback, time) {
//     if(typeof callback == 'function') {
//         setTimeout(callback, time)
//     }
// }

// function outPut() {
//     console.log('使用es5实现sleep')
// }
// sleep(outPut, 1000)