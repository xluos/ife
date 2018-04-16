const BOX = document.getElementsByClassName('box')[0];


//input元素获取焦点时触发事件
BOX.addEventListener('focusin', function (e) {
    var event = e || window.event;
    var target = event.target || event.srcElement;
    if (target.matches('input')) {
        // console.log(target.getAttribute('vf-type'));
        vf.showHint(target);
    }
}, false)

// 失去焦点时触发的事件
BOX.addEventListener('focusout', function (e) {
    var event = e || window.event;
    var target = event.target || event.srcElement;
    if (target.matches('input')) {
        // console.log(target.getAttribute('vf-type'));
        vf.hideHint(target);
    }
}, false)