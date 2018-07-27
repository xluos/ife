function is3(n) {
  return n%3==0 || n.toString().indexOf('3') !== -1;
}
let put = [];

for(let i = 1;i<101;i++) {
  if(is3(i)) {
    put.push('PA');
  } else {
    put.push(i);
  }
}
console.log('3的小游戏');
console.log(put.join(' , '));
