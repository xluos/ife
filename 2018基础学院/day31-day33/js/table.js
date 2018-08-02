/**
 * 根据数据创建Tbody的HTML代码
 *
 * @param {*} data
 * @returns 创建完成的代码
 */
function createTbody(data) {
  let tableHtml = ''
    , tableRow = ''
    , indexText = -1
    , indexCount = 1
    , len = data.length;
  for(let i = 0; i < len; i++) {
    tableRow = ``
    for(let j = 0; j < 14; j++) {
      if(j === 0) {
        if(indexText===-1||data[i][j] !== data[indexText][0]) {
          tableHtml = tableHtml.replace(`rowspan${indexText}`,indexCount);
          indexText = i;
          indexCount = 1;
          tableRow += `<td rowspan=rowspan${indexText}>${data[i][j]}</td>`
        } else {
          indexCount ++
        }
      } else {
        tableRow += `<td>${data[i][j]}</td>`
      }
    }
    tableHtml += `<tr>${tableRow}</tr>`
  }
  tableHtml = tableHtml.replace(`rowspan${indexText}`,indexCount);
  return `<tbody>${tableHtml}</tbody>`
}

/**
 * 插入创建完成的表格
 *
 * @param {*} node 要插入的节点
 * @param {*} data 数据
 */
function insertTable(node,data) {
  node.innerHTML = `<table><thead><th>${data.head[0]}</th><th>${data.head[1]}</th><th colspan=12>12月数据</th></thead>${createTbody(data.data)}</table>`
}