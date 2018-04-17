(function () {
    console.log("Hello VF!");
    const HINT = {
        name: {
            info: "名称在4-16字符以内",
            error: "名称不合法"
        },
        password: {
            info: "密码在8-16位之间,包含英文和数字",
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
    var check = {
        getlength: function (str) {
            var l = str.length;
            var blen = 0;
            for (i = 0; i < l; i++) {
                if ((str.charCodeAt(i) & 0xff00) != 0) {
                    blen++;
                }
                blen++;
            }
            return blen;
        },
        checkLength: function (MAX, MIN, str) {
            if (this.getlength(str) > MAX || this.getlength(str) < MIN) {
                return false;
            }
            return true;
        },
        name: function (str) {
            // 过长或过短
            return this.checkLength(16, 4, str);
        },
        password: function (str) {
            let regNumber = /\d+/;
            let regString = /[a-zA-Z]+/;
            return this.checkLength(16, 8, str) && regNumber.test(str) && regString.test(str);
        },
        confirm: function (str1, str2) {
            // console.log(str1, str2);

            return str1 === str2;
        },
        email: function (mail) {
            let regEmail = /^[A-Za-zd]+([-_.][A-Za-zd]+)*@([A-Za-zd]+[-.])+[A-Za-zd]{2,5}$/g;
            return regEmail.test(mail);
        },
        mobile: function (tel) {
            let regMobile = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9])|(17[\d]))\d{8}$/g;

            return regMobile.test(tel);
        }
    };
    var vf = {
        verifyAll: function (node) {
            let nodelist = node.getElementsByTagName('input');
            for (let i = 0; i < nodelist.length; i++) {
                if (!this.verifyOne(nodelist[i])) {
                    return false;
                }
            }
            return true;
        },
        verifyOne: function (node) {
            if (node.getAttribute('vf-type')) {
                let type = node.getAttribute('vf-type');
                let val = node.value;
                if (type === 'confirm') {
                    return check[type](document.getElementById('password').value, val);
                }
                return check[type](val);
            }
        },
        showError: function (node) {
            node.style['border-color'] = '#DE0012';
            node.style['box-shadow'] = '0 0 17px -5px #DE0012';
            node.nextElementSibling.style['color'] = '#DE0012';
            let type = node.getAttribute('vf-type');
            let text = HINT[type].error;
            // console.log(text);
            node.nextElementSibling.innerText = text;
        },
        hideError: function (node) {
            node.style['border-color'] = '';
            node.style['box-shadow'] = '';
            node.nextElementSibling.style['color'] = '';
        },
        showHint: function (node) {
            if (node.getAttribute('vf-type')) {
                let type = node.getAttribute('vf-type');
                let text = HINT[type].info;
                node.nextElementSibling.innerText = text;
            }
        },
        hideHint: function (node) {
            if (node.getAttribute('vf-type')) {
                node.nextElementSibling.innerText = '';
            }
        }
    };
    window.vf = vf;
})()