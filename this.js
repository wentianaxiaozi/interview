// let controller = {
// 	makeRequest: function() {
// 		let that = this
// 		setTimeout(function() {
// 			console.log(that.a)
// 		}, 1000)
// 	},
// 	a: 10
// }

// controller.makeRequest()

// let controller= {
// 	makeRequest: function() {
// 		setTimeout(()=>{
// 			console.log(this.a)
// 		},2000)
// 	},
// 	a: 9
// }
// controller.makeRequest()
// var a = {
// 	name: 'wentian',
// 	age: 24
// }

// for(let i in a) {
// 	if(a.hasOwnProperty(i)) {
// 		console.log(a[i])
// 	}
// }

function createData(deep, breadth) {
	var data = {}
	var temp = data

	for(let i = 0; i < deep; i++) {
		temp = temp['data'] = {}
		for(let j = 0; j < breadth; j++) {
			temp[j] = j
		}
	}
	return data

}
let obj = createData(2,3)
console.log(obj)