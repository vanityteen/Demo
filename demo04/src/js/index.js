class Send {
    constructor() {
        this.container = document.getElementsByClassName('container')[0]
        this.input = document.querySelector('input')
        this.btn_biu = document.getElementById('btn_biu')
        this.btn_clr = document.getElementById('btn_clr')
        this.containerHeight = this.container.clientHeight
        this.containerWidth = this.container.clientWidth
        this.show()
        this.clear()
        this.biu()
    }
    show() {
        console.log(this.container, this.btn_clr, this.input, this.container,this.containerWidth)
    }
    clear() {//清除所有弹幕
        this.btn_clr.addEventListener('click', () => {
            this.container.innerHTML = "" //将container里所有子元素移除
        })
    }
    biu() {
        this.btn_biu.addEventListener('click', () => {
            var span = document.createElement('span')
            //随机颜色
            var r = Math.floor(Math.random() * 256)
            var g = Math.floor(Math.random() * 256)
            var b = Math.floor(Math.random() * 256)
            //固定都从最右侧位置移动
            var _top = Math.floor(Math.random() * this.containerHeight)
            var _left = this.containerWidth

            //随机字体大小
            var _size = Math.floor(Math.random() * 48 + 12)
            span.style.color = "rgb(" + r + "," + g + "," + b + ")"
            span.style.position = "absolute"

            //限定弹幕只能出现在此范围之内
            if (_top - span.offsetHeight <= 0) {
                span.style.top = 0
            } else {
                span.style.top = "" + _top - span.offsetHeight + "" + "px"
            }

            span.style.left = "" + _left + "" + "px"


            span.style.fontSize = "" + _size + "" + "px"
            //不能发送 为空 的弹幕
            if (this.input.value !== "") {
                span.innerHTML = this.input.value
            } else {
                return
            }
            this.input.value = ""
            this.container.appendChild(span)
            this.move(span)
        })
    }

    move(span) {
        var speed = Math.floor(Math.random() * 10)
        var offset_left
        var target
        var timer = setInterval(()=>{
            offset_left = span.offsetLeft
            target = offset_left - speed
            if(offset_left<=0){
                clearInterval(timer)
                this.container.removeChild(span)
            }
            span.style.left = target+'px'
            // console.log(offset_left);
        },30)
    }
}