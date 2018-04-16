(function() {
    console.log("Hello VF!");
    
    var check = {

    };
    const HINT = {
        name: {
            info: "名称在4-16字符以内",
            error: "名称不合法"
        },
        password: {
            info: "密码在8-16位之间",
            error: "密码不合法"
        },
        confirm: {
            info: "请保证与上面密码相同",
            error: "两次输入密码不一致"
        },
        email: {
            info: "合法邮箱",
            error: "邮箱格式不合法"
        },
        mobile: {
            info: "请输入11位手机号",
            error: "手机号格式不合法"
        }
    };
    var vf = {
        verifyAll: function (node) {
            if(node.getAttribute('vf-type')) {

            }
        },
        showHint: function (event) {
            if(event.getAttribute('vf-type')) {
                let type = event.getAttribute('vf-type');
                let text = HINT[type].info;
                event.nextElementSibling.innerText = text;
            }
        },
        hideHint: function (event) {
            if(event.getAttribute('vf-type')) {
                event.nextElementSibling.innerText = '';
            }
        }
    };
    window.vf = vf;
})()