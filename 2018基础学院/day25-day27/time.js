const time = document.getElementById('time');



function Day() {
  function weekFilter(n) {    
    return ["星期日", "星期一",
            "星期二", "星期三",
            "星期四", "星期五",
            "星期六"][n];
  }
  function format(n) {
    if(n<10) return '0' + n;
    return n;
  }
  this.date = new Date();
  this.YYYY = this.date.getFullYear();
  this.MM = format(this.date.getMonth()+1)
  this.DD = format(this.date.getDate())
  this.HH = format(this.date.getHours())
  this.mm = format(this.date.getMinutes())
  this.ss = format(this.date.getSeconds())
  this.day = weekFilter(this.date.getDay())
  // console.log(`${YYYY}年${MM}月${DD}日-${HH}时${mm}分${ss}秒  ${day}`);
}
setInterval(function () {
  const { YYYY,MM,DD,day,HH,mm,ss } = {...new Day()};
  time.innerText = `${YYYY}年${MM}月${DD}日 ${day} ${HH}:${mm}:${ss}`
},1000);