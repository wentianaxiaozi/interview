let corp = {}
corp.list = []
//去订阅事件

corp.on = function(fn) {
	this.list.push(fn)
}

corp.emit = function() {
	this.list.forEach(cb => {
		cb.apply(this, arguments)
	})
}

corp.on(function(position, salary){
	console.log('薪水是'+salary)
	console.log('职位是'+position)
})

corp.on(function(skill, hobby) {
	console.log('技能是'+skill)
	console.log('爱好是'+hobby)
})

corp.emit('前端',8000)
corp.emit('js', '骑行')