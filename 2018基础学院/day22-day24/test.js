console.log(diyTrim(' a f b    ') + '****'); // ->a f b
console.log(diyTrim('    ffdaf    ') + '****'); // ->ffdaf
console.log(diyTrim('1    ') + '****'); // ->1
console.log(diyTrim('　　f') + '****'); // ->f
console.log(diyTrim('  　  a f b 　　 ') + '****'); // ->a f b
console.log(diyTrim(' ') + '****'); // ->
console.log(diyTrim('　') + '****'); // ->
console.log(diyTrim('') + '****'); // ->
console.log(diyTrim('a') + '****'); // ->
console.log(diyTrim('4') + '****'); // ->



console.log(isNum(456));
console.log(isNum('  12 '));
console.log(isNum('12.54'));
console.log(isNum('asd'));
console.log(isNum("  a"));
console.log(isNum('  '));
console.log(isNum(''));
console.log(isNum('12.54aa'));
console.log(isNum('456asd'));


// 测试用例
console.log(removeRepetition("aaa")); // ->a
console.log(removeRepetition("abbba")); // ->aba
console.log(removeRepetition("aabbaabb")); // ->abab
console.log(removeRepetition("")); // ->
console.log(removeRepetition("abc")); // ->abc


let arr1 = [43, 54, 4, -4, 84, 100, 58, 27, 140];
quickSort(arr1,(a,b)=>a-b)
console.log(arr1);
quickSort(arr1,(a,b)=>b-a)
console.log(arr1);

let arr2 = ['apple', 'dog', 'cat', 'car', 'zoo', 'orange', 'airplane'];
quickSort(arr2,(a,b)=>{
  return a<b?-1:1
})
console.log(arr2);
quickSort(arr2,(a,b)=>{
  return a<b?1:-1
})
console.log(arr2);

let arr3 = [[10, 14], [16, 60], [7, 44], [26, 35], [22, 63]];
quickSort(arr3,(a,b)=>{
  return a[1]<b[1]?1:-1
})
console.log(arr3);

let arr4 = [
  {
    id: 1,
    name: 'candy',
    value: 40
  }, {
    id: 2,
    name: 'Simon',
    value: 50
  }, {
    id: 3,
    name: 'Tony',
    value: 45
  }, {
    id: 4,
    name: 'Annie',
    value: 60
  }
];
quickSort(arr4,(a,b)=>{
  return a.value>b.value?1:-1
})
console.log(arr4);

