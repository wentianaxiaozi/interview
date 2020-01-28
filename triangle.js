function triangle(m,n) {
    if(n == 1) {
        return 1
    }else if(m == n) {
        return 1
    }else if(m >= n) {
        return triangle(m-1, n-1) + triangle(m-1, n)
    }
}

let result = triangle(7,5)
console.log(result)


// function combination(m,n){
//     if(n == 0) return 1;//第一个数为1
//     else if(m == n) return 1; //最后一个数为1
//     else return combination(m-1,n-1)+combination(m-1,n);//中间的数为前一行的两个数相加
// }
// // function Print(n){ 
// //     for( var i = 0 ; i < n ; i++ ){ 
// //         let arr=[];//用来放第i行的数
// //         for ( var j = 0 ; j <= i ; j++ ) {
// //             arr.push(combination(i,j));
// //         }
// //             console.log(arr.join(' '));//字符串形式输出
// //         }
// // }

// // Print(4)

// let result = combination(4,2)
// console.log(result)
