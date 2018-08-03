/**
 *创建checkbox列表
 *
 * @param {*} Node 父元素
 * @param {*} checkBoxTextList checkbox选项
 */
function createCheckBox(Node, checkBoxTextList) {
  let listHtml = `<label for="all-${Node.id}"><input type="checkbox" all=true id="all-${Node.id}">全选</label>`
  checkBoxTextList.forEach((element,index) => {
    listHtml += `<label for="${element}"><input type="checkbox" ${index===0?'checked':''} id="${element}" value="${element}">${element}</label>`
  });
  Node.innerHTML = listHtml;

  Node.addEventListener('change', (e) => {

    if (e.target.tagName === 'INPUT') {
      let checkedList = getCheckBox(e.path[2], "input[type='checkbox']:checked")
        , checkBoxList = getCheckBox(e.path[2], "input[type='checkbox']");
      // console.log(e);
      // 判断是否是全选按钮
      if (e.target.getAttribute('all')) {
        if (e.target.checked) {
          checkBoxList.forEach(x => { x.checked = true })
        } else {
          e.target.checked = true;
          // 取消这个功能以免全部取消时，筛选数据出错
          // checkBoxList.forEach(x => { x.checked = null })
        }
      } else {
        // 点击的按钮未选中时
        if (e.target.checked) {
          // 如果是最后一个全选按钮设置成选中状态
          if (checkedList.length === checkBoxTextList.length) {
            checkBoxList[0].checked = true;
          }

        } else {
          // 如果是取消非全选状态，去掉全选的选中状态
          if (checkedList.length === checkBoxTextList.length) {
            checkBoxList[0].checked = null;
            // 最后一个禁止选中
          } else if (checkedList.length === 0) {
            e.target.checked = true;
          }
        }
      }
      console.log(getFilterData(sourceData));
      
      insertTable(TABLE,getFilterData(sourceData));
    }
  })
}

createCheckBox(REGION, getRegion(sourceData))
createCheckBox(PRODUCT, getProduct(sourceData))

insertTable(TABLE,getFilterData(sourceData));