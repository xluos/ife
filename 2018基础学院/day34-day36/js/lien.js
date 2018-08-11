Line.prototype = {
  strokewidth: 1,
  colors: ['#3fb1e3', '#6be6c1', '#626c91', '#a0a7e6', '#c4ebad', '#96dee8', '#fc97af', '#f7f494', '#87f7cf', '#f7c5a0'],
  color: '#666',
  fillColor: '#456',
  valueMax: -Infinity,
  /**起点x坐标
   * 创建一条线段
   *
   * @param {*} x1 起点x坐标
   * @param {*} y1 起点y坐标
   * @param {*} x2 终点x坐标
   * @param {*} y2 终点y坐标
   * 
   */
  createLine: function (x1, y1, x2, y2) {
    this.CTX.lineWidth = 1;
    this.CTX.beginPath();
    this.CTX.moveTo(x1 + 0.5, y1 + 0.5);
    this.CTX.lineTo(x2 + 0.5, y2 + 0.5);
    this.CTX.stroke();
  },
  /**
   * 根据坐标点绘制路径
   *
   * @param {*} path 坐标数组
   */
  createPath: function (path) {
    this.CTX.beginPath();
    this.CTX.moveTo(path[0][0], path[0][1]);
    for (let i = 1; i < path.length; i++) {
      this.CTX.lineTo(path[i][0], path[i][1])
    }
    this.CTX.stroke();
    for(let i = 0; i < path.length; i++) {
      this.CTX.beginPath();
      this.CTX.arc(path[i][0], path[i][1], 3.5, 0, Math.PI * 2)
      this.CTX.fill();
    }
    
  },
  /**
   *绘制一段文字
   *
   * @param {*} x 中点X轴坐标
   * @param {*} y 中点Y轴坐标
   * @param {*} text 文字内容
   */
  createText: function (x, y, text) {
    this.CTX.textAlign = "center";
    this.CTX.fillText(text, x, y + 0.5);
  },
  /**
   * 计算文字X轴坐标
   *
   * @param {*} i 第几个
   * @returns 坐标值
   */
  getTextX: function (i) {
    return this.lineOffset + i * this.lineWidth
  },
  /**
   * 计算点的X坐标
   *
   * @param {*} i 第几个
   * @returns 坐标值
   */
  getlineX: function (i) {
    return this.lineOffset + i * this.lineWidth
  },
  /**
   * 计算线的Y坐标
   *
   * @param {*} val 数值
   * @returns 坐标值
   */
  getlineY: function (val) {
    return this.contentHeight - this.getlineHeight(val) - this.offset;
  },
  /**
   * 根据传入数值获取在点的高度
   *
   * @param {*} val 数值
   * @returns 高度
   */
  getlineHeight: function (val) {
    return (val / this.valueMax) * (this.contentHeight - this.offset * 2);
  },
  /**
   * 绘制一组折线
   *
   * @param {*} data 数据
   */
  drowline: function (data) {
    let path = data.map((val, i) => {
      return [this.getlineX(i), this.getlineY(val)]
    })
    this.CTX.strokeStyle = this.fillColor;
    this.CTX.fillStyle = this.fillColor;
    this.createPath(path);
  },
  /**
   * 绘制所有的折现
   *
   * @param {*} data 数据
   */
  drowlines: function (data) {
    if (Array.isArray(data[0])) {
      let line = ''
      this.itemWidth = this.fillWidth / data.length;
      data.forEach((element, index) => {
        this.fillColor = this.colors[index];
        line += this.drowline(element, index);
      });
      return line;
    } else {
      this.itemWidth = this.fillWidth;
      return this.drowline(data, 0);
    }
  },
  /**
   * 根据数据绘制折线图
   *
   * @param {*} data 折线图数据
   */
  drow: function (data) {
    this.CTX.clearRect(0,0,this.width,this.height);
    this.valueMax = this.getMax(data.data);
    this.fillColor = this.colors[0];
    this.CTX.fillStyle = '#000'
    this.CTX.strokeStyle = '#666'
    // 绘制坐标轴
    this.createLine(this.offset + this.offset, this.contentHeight - this.offset, this.width - this.offset, this.contentHeight - this.offset);
    this.createLine(this.offset + this.offset, 0 + this.offset, this.offset + this.offset, this.contentHeight - this.offset);
    for (let i = 0; i < 12; i++) {
      // 绘制文字
      this.createText(this.getTextX(i), this.height - this.offset, data.text[i]);
    }
    
    this.createText(0 + this.offset, 10 + this.offset, this.valueMax)
    this.createText(0 + this.offset, this.contentHeight - this.offset, 0)
    this.drowlines(data.data)
  },
  /**
   * 初始化
   *
   */
  init: function () {
    this.lineWidth = (this.contentWidth - this.offset * 2) / 12;
    this.lineOffset = this.lineWidth / 2 + this.offset * 2;
    this.fillWidth = this.lineWidth * 0.7;
  },
  /**
   * 工具函数，获取数组或二维数组的最大值
   *
   * @param {*} arr 数组
   * @returns 最大值
   */
  getMax: function (arr) {
    let max = -Infinity;
    if (Array.isArray(arr[0])) {
      arr.forEach(element => {
        element.forEach(ele => {
          max = max > ele ? max : ele;
        });
      });

    } else {
      // console.log(arr);

      arr.forEach(ele => {
        max = max > ele ? max : ele;
      });
    }
    return max;
  }
}
/**
 * 折线图的构造函数
 *
 * @param {*} node 绘制元素所在的Canvas节点
 */
function Line(node) {
  this.CTX = node.getContext('2d');
  this.width = node.width;
  this.height = node.height;
  this.offset = 15;
  this.contentWidth = this.width - this.offset;
  this.contentHeight = this.height - this.offset;
  this.init();
}

const line = new Line(LINEBOX);


