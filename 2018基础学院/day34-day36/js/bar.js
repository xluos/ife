Bar.prototype = {
  strokewidth: 1,
  color: '#666',
  fillColor: '#456',
  HTML: '',
  barWidth: 0,
  barOffset: 0,
  createLine: function (x1,y1,x2,y2) {
    return `<line x1=${x1} y1=${y1} x2=${x2} y2=${y2}
    style="stroke:${this.color};stroke-width:${this.strokewidth}"/>`
  },
  createRect: function (x,y,h) {
    return `<rect x=${x} y=${y} width=${this.fillWidth} height=${h}
    style="fill:${this.fillColor};"/>`
  },
  createText: function (x,y,text) {
    return `<text x=${x} y=${y} fill="${this.color}" style="text-anchor: middle;font-size:12px">${text}</text>`
  },
  getTextX: function (i) {
    return this.barOffset+i*this.barWidth
  },
  getBarX: function (i) {
    return this.barOffset+i*this.barWidth-this.fillWidth/2
  },
  init: function () {
    this.texts = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];
    this.HTML += this.createRect(0,0,1,0);
    this.barWidth = this.contentWidth/12;
    this.barOffset = this.barWidth/2 + this.offset;
    this.fillWidth = this.barWidth * 0.7;
  },
  drow: function (data) {
    this.HTML = '';
    // 绘制坐标轴
    this.HTML += this.createLine(this.offset,this.contentHeight,this.width,this.contentHeight);
    this.HTML += this.createLine(this.offset,0,this.offset,this.contentHeight);
    for(let i = 0; i < 12; i++) {
      // 绘制文字
      this.HTML += this.createText(this.getTextX(i),this.height,this.texts[i]);
      // 绘制柱子
      this.HTML += this.createRect(this.getBarX(i),this.contentHeight-100,100);
    }
    this.Node.innerHTML = this.HTML;
  }
}
function Bar(node) {
  this.Node = node;
  this.width = node.width.animVal.value;
  this.height = node.height.animVal.value;
  this.offset = 15;
  this.contentWidth = this.width - this.offset;
  this.contentHeight = this.height - this.offset;
  this.init();
}

const bar = new Bar(BARBOX);
bar.drow();






