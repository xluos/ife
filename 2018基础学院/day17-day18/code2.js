function dec2bin(decNumber) {
  // 在这里实现你的转化方法，注意需要判断输入必须为一个非负整数
  // 这里是上一个任务的实现
  let arr = [];
  while (decNumber > 0) {
    arr.unshift(decNumber % 2);
    decNumber = Math.floor(decNumber / 2);
  }
  return arr.join('');
}

function format(str, n) {
  let len = str.length;
  while (len < n) {
    str = '0' + str;
    len++;
  }
  return str;
}

$('trans-btn').addEventListener('click', function () {
  $('result2').innerText = "运算结果：" + format(dec2bin(parseInt($("dec-number").value)), parseInt($("bin-bit").value))
})
