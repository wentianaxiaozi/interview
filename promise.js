let p = new Promise((res,rej) => {
	setTimeout(function() {
		let a = Math.random()
		if(a > 0.5) {
			res(a)
		}else {
			rej(a)
		}
	}, 1000)
})

p.then(function(num) {
	console.log('大于5的数子是'+num)
}, function(num) {
	console.log('小于5的数字是'+ num)
})