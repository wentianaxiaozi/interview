var that;
class Tab {
    constructor(id) {
        that = this
        //获取元素  
        this.main = document.querySelector(id)
        
        this.add = this.main.querySelector('.tabadd')
        //li的副元素
        this.ul = this.main.querySelector('.fisrstnav ul:first-child')
        this.fsection = this.main.querySelector('.tabscon')
        this.init()
    }
    updateNode() {
        this.lis = this.main.querySelectorAll('li')
        this.sections = this.main.querySelectorAll('section')
        this.remove = this.main.querySelectorAll('.icon-guanbi')

    }
    init() {
        this.updateNode()
        console.log(this.remove)
        // 初始化操作，让相关元素绑定事件
        this.add.onclick = this.addTab;
        for(var i = 0; i < this.lis.length; i++) {
            this.lis[i].index = i
            this.lis[i].onclick = this.toggleTab
            this.remove[i].onclick = this.removeTab
        }
    }
    //1. 切换功能
    toggleTab() {
        that.clearClass()
        // console.log(this.index);
        this.className = 'liactive'
        that.sections[this.index].className = 'conactive'
    }
    clearClass() {
        for(var i = 0; i < this.lis.length; i++) {
            this.lis[i].className = ''
            this.sections[i].className = ''
        }
    }
    //2. 添加功能
    addTab() {
        that.clearClass()
        //创建li元素
        var random = Math.random()
        var li = '<li class="liactive"><span>新选项卡 </span><span class="iconfont icon-guanbi"></span></li>'
        var section = '<section class="conactive">测试 '+random+'</section>'

        //将元素添加到相应的父元素
        that.ul.insertAdjacentHTML('beforeend', li)
        that.fsection.insertAdjacentHTML('beforeend', section)
        that.init()
    }
    //3. 删除功能
    removeTab(e) {
        e.stopPropagation() //阻止冒泡
        var index = this.parentNode.index
        console.log(index);
        that.lis[index].remove()
        that.sections[index].remove()
        that.init()
        if(document.querySelector('.liactive')) {
            return
        }
        //删除选定状态的li时，前一个li处于选中状态
        index--
        //手动调用点击事件
        that.lis[index] && that.lis[index].click()
        
    }
    //4. 修改功能
    editTab() {}
}

new Tab('#tab')