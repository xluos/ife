(function () {
    const name = document.getElementById('name');
    const hint = document.getElementById('hint');
    function getlength(str) {
        var l = str.length;
        var blen = 0;
        for (i = 0; i < l; i++) {
            if ((str.charCodeAt(i) & 0xff00) != 0) {
                blen++;
            }
            blen++;
        }
        return blen;
    }
    function error(text) {
        name.style['border-color'] = '#DE0012';
        name.style['box-shadow'] = '0 0 17px -5px #DE0012';
        hint.style.color = '#DE0012';
        hint.innerText = text;
    }

    function pass(text) {
        name.style['border-color'] = '#5EBA46';
        name.style['box-shadow'] = '0 0 17px -5px #5EBA46';
        hint.style.color = '#5EBA46';
        hint.innerText = text;
    }
    function verify() {
        // 为空
        if (name.value.length === 0) {
            error("姓名不能为空");
        }
        // 过长或过短
        if (getlength(name.value) > 16 || getlength(name.value) < 4) {
           error("长度不符合要求！当前长度："+ getlength(name.value));
        }
        else {
           pass('名称格式正确！');
        }

    }
    document.getElementsByTagName('button')[0].addEventListener('click', verify);
    name.addEventListener('input', verify);
})();

