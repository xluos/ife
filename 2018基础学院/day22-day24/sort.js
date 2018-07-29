let test = [1,8,23,6,6,4,2]
// let test = [1,2]
// let test = [0,0,1,0,0]

function quickSort(arr,cmp) {
  function swap(arr,a,b) {
    if(a===b) return;
    [arr[a],arr[b]] = [arr[b],arr[a]]
  }
  
  function qsort(arr,start,end,cmp) {
    if(start >= end) return;
    let l = start + 1 , r = end-1;
    while(l<=r) {
      while(l<end&&cmp(arr[l],arr[start])<=0) l++;
      while(r>start&&cmp(arr[start],arr[r])<=0) r--;
      if(l<r) swap(arr,l,r);
    }
    swap(arr,start,r)
    qsort(arr,start,r,cmp);
    qsort(arr,r+1,end,cmp);
  }
  qsort(arr,0,arr.length,cmp); 
}

quickSort(test,(a,b)=>a-b);

console.log(test);
