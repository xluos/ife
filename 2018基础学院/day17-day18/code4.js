put = [];
let table = '',ans
for(let i=1;i<=9;i++) {
  ans = ''
  for(let j=1;j<=i;j++) {
    put.push(`${j} * ${i} = ${i*j} `);
    ans += `<td> ${j} * ${i} = ${i*j} </td>`;
  }
  table += `<tr>${ans}</tr>`
  put.push('\n');
}

console.log(put.join(''));
$('tbody').innerHTML = table;

