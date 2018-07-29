
function randomArr(n) {
  let arr = [];
  while(n--) {
    arr.push(Math.floor(Math.random()*100))
  }
  return arr;
}

function dd(arr1,arr2) {
  for(let i = arr1.length-1;i>=0;i--) {
    if(arr1[i] !== arr2[i]) return false;
  }
  return true;
}

function testSort(n) {
  let arr,arr2,count=0;
  console.log("测试了",n,"组数据");
  
  while(n--) {
    arr = randomArr(100);
    arr1 = [...arr];
    arr2 = [...arr];
    quickSort(arr1,(a,b)=>b-a);
    arr2.sort((a,b)=>b-a);
    if(!dd(arr1,arr2)) {
      console.error('原数组：',arr);
      console.error('mySort：',arr1);
      console.error('sort：',arr2);
      console.error('***************************************************');
    } else {
      count++
    }
  }
  console.log('通过',count,'组');
  
}

testSort(1000);