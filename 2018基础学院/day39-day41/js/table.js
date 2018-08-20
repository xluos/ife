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
  for (let i = 0; i < len; i++) {
    tableRow = ``
    for (let j = 0; j < 14; j++) {
      if (j === 0) {
        if (indexText === -1 || data[i][j].value !== data[indexText][0].value) {
          tableHtml = tableHtml.replace(`rowspan${indexText}`, indexCount);
          indexText = i;
          indexCount = 1;
          tableRow += `<td rowspan=rowspan${indexText}>${data[i][j].value}</td>`
        } else {
          indexCount++
        }
      } else {
        tableRow += `<td edit=${data[i][j].edit} data-x=${data[i][j].x} data-y=${data[i][j].y}>${data[i][j].value}${data[i][j].edit ? '<i>✎</i>' : ''}</td>`
      }
    }
    tableHtml += `<tr>${tableRow}</tr>`
  }
  tableHtml = tableHtml.replace(`rowspan${indexText}`, indexCount);
  return `<tbody>${tableHtml}</tbody>`
}

/**
 * 插入创建完成的表格
 *
 * @param {*} node 要插入的节点
 * @param {*} data 数据
 */
function insertTable(node, data) {
  node.innerHTML = `<table><thead><th>${data.head[0]}</th><th>${data.head[1]}</th><th colspan=12>12月数据</th></thead>${createTbody(data.data)}</table>`
}


// 编辑单元格相关

/**
 * 编辑单元格构造函数
 *
 */
function Edit() {
  this.createNode();
  this.oldValue = ''
  this.eparent = null;
  this.init();
}

Edit.prototype = {
  /**
   * 创建编辑节点
   *
   */
  createNode: function () {
    this.node = document.createElement('div');
    this.input = document.createElement('input');
    this.input.id = 'edit';
    this.okBtn = document.createElement('button');
    this.okBtn.appendChild(document.createTextNode('完成'))
    this.onBtn = document.createElement('button');
    this.onBtn.appendChild(document.createTextNode('取消'))

    this.node.appendChild(this.input);
    let div = document.createElement('div');
    div.appendChild(this.onBtn);
    div.appendChild(this.okBtn);
    this.node.appendChild(div);
  },
  /**
   * 初始化按键事件等
   *
   */
  init: function () {
    this.onBtn.addEventListener('click', () => {
      this.reset();
      this.del();
    })
    this.okBtn.addEventListener('click', () => {
      this.reset(this.input.value);
      setData(this.eparent.dataset.x, this.eparent.dataset.y, this.input.value);
      this.del();
    })
    document.addEventListener('keydown',(e)=>{
      // console.log(e.keyCode);
      // Enter键
      if(e.keyCode === 13) {
        this.reset(this.input.value);
        setData(this.eparent.dataset.x, this.eparent.dataset.y, this.input.value);
        this.del();
        // ESC按键
      } else if(e.keyCode === 27) {
        this.reset();
        this.del();
      }
      
    })
  },

  /**
   * 设置单元格的状态
   *
   */
  reset: function (val) {
    // 恢复单元格状态
    if (this.eparent) {
      // 检查输入合法性
      if (val && isNaN(val)) {
        alert("输入非法！")
        return
      }
      let value = val || this.oldValue;
      this.eparent.setAttribute('edit', true);
      this.eparent.insertBefore(document.createTextNode(value), this.eparent.firstChild);
    }
  },

  /**
   * 设置单元格为编辑状态
   *
   * @param {*} parent 需要设置的td节点
   */
  setEdit: function (parent) {
    this.eparent = parent;
    parent.setAttribute('edit', false);
    let textNode = parent.childNodes[0];
    this.oldValue = textNode.nodeValue;
    this.input.value = textNode.nodeValue;
    textNode.nodeValue = '';
    parent.appendChild(this.node);
    this.input.focus();
  },
  /**
   * 移出当前节点
   *
   */
  del: function () {
    if (this.eparent) {
      this.eparent.removeChild(this.node);
      this.eparent = null;
    }
  }
}

const EDIT = new Edit();