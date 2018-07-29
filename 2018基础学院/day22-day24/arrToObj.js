var menuArr = [
  [1, "Area1", -1],
  [2, "Area2", -1],
  [3, "Area1-1", 1],
  [4, "Area1-2", 1],
  [5, "Area2-1", 2],
  [6, "Area2-2", 2],
  [7, "Area1-2-3", 4],
  [8, "Area2-2-1", 6],
];
function getMap(arr) {
  let mp = new Map();
  let len = arr.length,it;
  
  for(let i=0; i<len;i++) {
      it = arr[i];
      if(mp.has(it[2])) {
          mp.set(it[2],[...mp.get(it[2]),{id:it[0], name:it[1]}]);
      } else {
          mp.set(it[2],[{id:it[0], name:it[1]}]);
      }
  }
  return mp;
}
function ArrToObj (arr, mp) {
  console.log(arr);
  
  let obj = {},it;
  let len = arr.length;
  for(let i = 0; i < len;  i++) {
      it = arr[i];
      obj[it.id] = {
          name: it.name,
      }
      if(mp.has(it.id)) {
        obj[it.id].subMenu = ArrToObj(mp.get(it.id), mp);
      }
  }
  return obj;
}

let mp = getMap(menuArr);

console.log(ArrToObj(mp.get(-1), mp));