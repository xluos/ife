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