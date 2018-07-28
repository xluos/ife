let test = [1,8,23,6,4,2]
function swap(arr,a,b) {
  [arr[a],arr[b]] = [arr[b],arr[a]]
}

function qsort(arr,start,end,cmp) {
  if(start === end) return;
  // let mid = Math.floor((start+end)/2);
  let l = start + 1 , r = end;
  do {
    while(!cmp(arr[l],arr[start])) l++;
    while(!cmp(arr[start],arr[r])) r--;
    swap(arr,l,r);
  } while(l<r)
  swap(arr,start,r)
  qsort(arr,start,r,cmp);
  qsort(arr,r+1,end,cmp);
  console.log(start,end);
  console.log(arr);
}

function quickSort(arr,cmp) {
  qsort(arr,0,arr.length-1,cmp);
}

quickSort(test,(a,b)=>a<b);

console.log(test);
