const BLOCK = document.getElementById('block');
const SIGN = document.getElementById('sign');
const INSTRUCTION = document.getElementById('instruction')
const MAX = 9;
const MIN = 0;
var block = {
    x: 0,   //格子的偏移量
    y: 0,
    top_px: 0, //左上角第一个格子相对于页面左上角的偏移量
    left_px: 0,
    oriented: 0,  // 当前朝向有四个值0,1,2,3分别对应顺时针的上，右，下，左
    excursion: 50,  //偏移量，也就是格子的宽度
    deg: 0,    //旋转角度
    dir: [[-1, 0], [0, 1], [1, 0], [0, -1]],  //移动方向
    init: function () {
        let bounDing = SIGN.getBoundingClientRect();  //获取初始相对位置
        BLOCK.style.top = bounDing.top + 'px';
        BLOCK.style.left = bounDing.left + 'px';
        BLOCK.style.transition = 'all 0.3s';
        this.top_px = bounDing.top;
        this.left_px = bounDing.left;
    },
    go: function (oriented) {
        if (this.check(oriented)) {      //判断下一步是否越界
            let n = typeof(oriented) === "undefined" ? this.oriented:oriented;
            this.x += this.dir[n][0];    // x,y 偏移值
            this.y += this.dir[n][1];
            BLOCK.style.top = this.top_px + this.x * this.excursion + 'px';  //计算偏移像素并重新赋值
            BLOCK.style.left = this.left_px + this.y * this.excursion + 'px';
        } else {
            alert('不能走了！');
        }
    },
    rotate: function (n) { //n的绝对值代表旋转的度数 1个刻度代表90度 正值顺时针，负值逆时针
        this.deg += n * 90;
        this.oriented = this.mod(this.oriented + n, 4);
        BLOCK.style.transform = `rotate(${this.deg}deg)`;
    },
    mod: function (n, mod) {  // 对负方向取余相反
        return (n + mod) % mod;
    },
    check: function (oriented) {
        let n = typeof(oriented) === "undefined" ? this.oriented:oriented;
        if (this.x + this.dir[n][0] >= MIN && this.x + this.dir[n][0] <= MAX
            && this.y + this.dir[n][1] >= MIN && this.y + this.dir[n][1] <= MAX) {
            return true;
        }
        return false;
    },
    resize: function () {
        let bounDing = SIGN.getBoundingClientRect();  //窗口大小改变时，重新获取相对位置偏移量
        this.top_px = bounDing.top;
        this.left_px = bounDing.left;
        BLOCK.style.top = this.top_px + this.x * this.excursion + 'px';  //计算偏移像素并重新赋值
        BLOCK.style.left = this.left_px + this.y * this.excursion + 'px';
    }
}
var instruction = {
    "GO": () => block.go(),
    "TUN LEF": () => block.rotate(-1),
    "TUN RIG": () => block.rotate(1),
    "TUN BAC": () => block.rotate(2),
    "TRA LEF": ()=>{
        block.go(3);
    },
    "TRA TOP": ()=>{
        block.go(0);
    },
    "TRA RIG": ()=>{
        block.go(1);
    },
    "TRA BOT": ()=>{
        block.go(2);
    },
    "MOV LEF": ()=>{
        block.rotate(3 - block.oriented);
        block.go();
    },
    "MOV TOP": ()=>{
        block.rotate(0 - block.oriented);
        block.go();
    },
    "MOV RIG": ()=>{
        block.rotate(1 - block.oriented);
        block.go();
    },
    "MOV BOT": ()=>{
        block.rotate(2 - block.oriented);
        block.go();
    }
}

function goInstruction() {
    let key = INSTRUCTION.value;
    if (instruction[key]) {
        instruction[key]();
    } else {
        alert('非法指令！');
    }
}
setTimeout(block.init(),1000);


// 函数节流  防止窗口改变事件触发太频繁
var timer = false;
window.onresize = ()=>{
    if(timer) {
        return;
    }
    timer = true;
    timer = setTimeout(function(){
        timer = false;
        block.resize();
    }, 100);
};

