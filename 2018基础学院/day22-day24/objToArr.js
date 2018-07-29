var scoreObject = {
  "Tony": {
      "Math": 95,
      "English": 79,
      "Music": 68
  }, 
  "Simon": {
      "Math": 100,
      "English": 95,
      "Music": 98
  }, 
  "Annie": {
      "Math": 54,
      "English": 65,
      "Music": 88
  }
}

function objToArr(obj) {
  let arr = [],item;
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      item = [key];
      const element = obj[key];
      for (const val in element) {
        if (element.hasOwnProperty(val)) {
          const value = element[val];
          item.push(value);
        }
      }
      arr.push(item);
    }
  }
  return arr;
}
console.log(objToArr(scoreObject));