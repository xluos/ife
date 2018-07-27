function Calculate(func) {
  return () => {
    let num = func(parseFloat(num1.value), parseFloat(num2.value));
    if(Number.isNaN(num)) console.error("错误");
    $('result').innerText = ('运算结果:' + num)
  }
}

let num1 = $('first-number');
let num2 = $('second-number');

$('add-btn').addEventListener('click', Calculate((a, b) => a + b))
$('minus-btn').addEventListener('click', Calculate((a, b) => a - b))
$('times-btn').addEventListener('click', Calculate((a, b) => a * b))
$('divide-btn').addEventListener('click', Calculate((a, b) => a / b))