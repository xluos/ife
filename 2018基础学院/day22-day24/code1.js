// 编码一
function isNum(n) {
  if(typeof n=='string') n = diyTrim(n);
  return n !== null && n !== '' && !isNaN(n);
}
function getChecked(name='math-obj') {
  return document.querySelectorAll(`input[type="radio"][name=${name}]:checked`)
}
function checkedIsNum(){
  let node = getChecked()[0];
  if(typeof node === 'undefined') {
    alert("未选中")
  }
  node = $(`num-${node.value}`)
  if(isNum(node.value)) {
    return node;
  } else {
    alert(node.value + "不是数字")
    return false
  }
}
$('btn1').addEventListener('click',()=>{
  if(checkedIsNum()) alert('是数字');
})
$('btn2').addEventListener('click',()=>{
  if(checkedIsNum()) {
    alert(parseFloat($('num-a').value).toFixed(parseInt($('num-b').value)))
  }
})
$('btn3').addEventListener('click',()=>{
  let numNode = checkedIsNum();
  if(numNode) {
    alert(Math.abs(parseFloat(numNode.value)));
  }
})
$('btn4').addEventListener('click',()=>{
  let numNode = checkedIsNum();
  if(numNode) {
    alert(Math.ceil(parseFloat(numNode.value)));
  }
})
$('btn5').addEventListener('click',()=>{
  let numNode = checkedIsNum();
  if(numNode) {
    alert(Math.floor(parseFloat(numNode.value)));
  }
})
$('btn6').addEventListener('click',()=>{
  let numNode = checkedIsNum();
  if(numNode) {
    alert(parseFloat(numNode.value).toFixed(0));
  }
})
$('btn7').addEventListener('click',()=>{
  let a = $('num-a').value,b = $('num-b').value;
  if(isNum(a)&&isNum(b)) {
    alert(Math.max(parseFloat(a),parseFloat(b)))
  } else {
    alert('规范输入')
  }
})
$('btn8').addEventListener('click',()=>{
  let a = $('num-a').value,b = $('num-b').value;
  if(isNum(a)&&isNum(b)) {
    alert(Math.min(parseFloat(a),parseFloat(b)))
  } else {

    alert('规范输入')
  }
})