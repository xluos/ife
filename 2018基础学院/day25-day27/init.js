// 获取DOM
function $(id) {
  return document.getElementById(id);
}

const year = $('year-select')
const month = $('month-select')
const day = $('day-select')
const hour = $('hour-select')
const minite = $('minite-select')
const second = $('second-select')
const result = $('result-wrapper')
const { YYYY, MM, DD, dd, HH, mm, ss } = { ...new Day() };

/**
 *创建选项 
 *
 * @param {*} selectNode select元素
 * @param {*} start 选项开始数字
 * @param {*} len 创建数量
 * @param {*} selected 默认选中的数值
 */
function createOption(selectNode, start, len, selected) {
  for (let i = start; i < start + len; i++) {
    const optionNode = new Option(i, i);
    if (i === selected) optionNode.selected = true;
    selectNode.add(optionNode);
  }
}
/**
 *传入年份月份获取天数
 *
 * @param {*} year  年份
 * @param {*} month 月份
 * @returns 该月的天数
 */
function getDayNum(year, month) {
  const MM = [31, 30, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if (month !== 2 || !(year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0))) {
    return MM[month - 1];
  }
  return 28;
}
// 设置默认选项，日期为上下十年，默认选中当前日期
createOption(year, YYYY - 10, 20, YYYY);
createOption(month, 1, 12, parseInt(MM));
createOption(day, 1, getDayNum(YYYY, parseInt(MM)), parseInt(DD));
createOption(hour, 0, 24, HH);
createOption(minite, 0, 60, mm);
createOption(second, 0, 60, ss);

/**
 *设置二月天数
 *
 */
function set2Month() {
  const dayNum = getDayNum(parseInt(year.value), parseInt(month.value))
  if (day.options.length !== dayNum) {
    day.options.length = 0;
    createOption(day, 1, dayNum, 1);
  }
}
// 年份和月份变化时重新检查天数是否要变化
year.addEventListener('change', set2Month)
month.addEventListener('change', set2Month)

/**
 *获取选择日期数组 
 *
 * @returns 选择日期数组 
 */
function getSelectTime() {
  return [year.value, month.value, day.value,
  hour.value, minite.value, second.value]
}
// 设置日期
function setTime() {
  let time = new Day()
    , option = getSelectTime().map(x => parseInt(x))
    , optionTime = new Date(option[0], option[1] - 1, option[2], option[3], option[4], option[5])
    , poor = optionTime - Date.parse(time.date)
    , modifier = poor > 0 ? "还有" : "已经过去了";

  poor = poor > 0 ? poor : -poor;
  let day = Math.floor(poor / (24 * 3600000))
    , hour = Math.floor(poor / (3600000)) % 24
    , minite = Math.floor(poor / (60000)) % 60
    , second = Math.floor(poor / (1000)) % 60
  result.innerText = `现在距离${option[0]}年${option[1]}月${option[2]}日 \
                      星期${optionTime.getDay()} \
                      ${option[3]}:${option[4]}:${option[5]}   \
                      ${modifier}   \
                      ${day} 天 ${hour} 小时 ${minite} 分 ${second} 秒`
}
// 每秒设置一次 
setInterval(setTime, 1000)