/**
 * 根据数据创建Tbody的HTML代码
 *
 * @param {*} data
 * @returns 创建完成的代码
 */
function createTbody(data) {
  let tableHtml = ''
    , tableRow = ''
    , len = data.length;
  for(let i = 0; i < len; i++) {
    tableRow = `<td>${data[i].region}</td><td>${data[i].product}</td>`
    for(let j = 0; j < 12; j++) {
      tableRow += `<td>${data[i].sale[j]}</td>`
    }
    tableHtml += `<tr>${tableRow}</tr>`
  }
  return `<caption>数据表</caption><tbody>${tableHtml}</tbody>`
}

/**
 * 插入创建完成的表格
 *
 * @param {*} node 要插入的节点
 * @param {*} data 数据
 */
function insertTable(node,data) {
  node.innerHTML = `<table><thead><td>地区</td><td>分类</td><td colspan=12>12月数据</td></thead>${createTbody(data)}</table>`
}