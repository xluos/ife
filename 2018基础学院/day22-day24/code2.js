function put(str) {
  $('result').innerText = str;
}
function getCheckedTextarea() {
  let n = getChecked('"str-obj"')[0].value;
  return $(`str-${n}`);
}
$('btn2-1').addEventListener('click', () => {
  put(getCheckedTextarea().value.length);
})
$('btn2-2').addEventListener('click', () => {
  put(getCheckedTextarea().value[2]);
})
$('btn2-3').addEventListener('click', () => {
  put($('str-a').value + $('str-b').value);
})
$('btn2-4').addEventListener('click', () => {
  put($('str-a').value.indexOf($('str-b').value));
})
$('btn2-5').addEventListener('click', () => {
  put($('str-b').value.lastIndexOf($('str-a').value));
})
$('btn2-6').addEventListener('click', () => {
  put(getCheckedTextarea().value.slice(parseInt($('num-a2').value), parseInt($('num-b2').value)));
})
$('btn2-7').addEventListener('click', () => {
  put(Math.floor(getCheckedTextarea().value.length/20)+1);
})
$('btn2-8').addEventListener('click', () => {
  put(getCheckedTextarea().value.substr(parseInt($('num-a2').value), parseInt($('num-b2').value)));
})
$('btn2-9').addEventListener('click', ()=>{
  let str = getCheckedTextarea().value.toUpperCase();
  getCheckedTextarea().value = str;
  put(str);
})
$('btn2-10').addEventListener('click', ()=>{
  let str = getCheckedTextarea().value.toLowerCase();
  getCheckedTextarea().value = str;
  put(str);
})
$('btn2-11').addEventListener('click', ()=>{
  let str = getCheckedTextarea().value.split('');
  str = str.filter(x=>x!==' ').join('');
  getCheckedTextarea().value = str;
  put(str);
})
