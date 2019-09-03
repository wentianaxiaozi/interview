class Product {
	constructor(name) {
		this.name = name
	}
	init() {
		console.log('good')
	}
}

class Factor {
	create(name) {
		return new Product(name)
	}
}

let a = new Factor()
let p = a.create('tian')
p.init()