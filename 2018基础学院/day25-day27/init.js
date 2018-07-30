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

function createOption(selectNode, start, len, selected) {
  for (let i = start; i < start + len; i++) {
    const optionNode = new Option(i, i);
    if (i === selected) optionNode.selected = true;
    selectNode.add(optionNode);
  }
}
function getDayNum(year, month) {
  const MM = [31, 30, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if (month !== 2 || !(year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0))) {
    return MM[month - 1];
  }
  return 28;
}
createOption(year, YYYY - 10, 20, YYYY);
createOption(month, 1, 12, parseInt(MM));
createOption(day, 1, getDayNum(YYYY, parseInt(MM)), parseInt(DD));
createOption(hour, 0, 24, HH);
createOption(minite, 0, 60, mm);
createOption(second, 0, 60, ss);

function set2Month() {
  const dayNum = getDayNum(parseInt(year.value), parseInt(month.value))
  if (day.options.length !== dayNum) {
    day.options.length = 0;
    createOption(day, 1, dayNum, 1);
  }
}

year.addEventListener('change', set2Month)
month.addEventListener('change', set2Month)

function getSelectTime() {
  return [year.value, month.value, day.value,
  hour.value, minite.value, second.value]
}

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

setInterval(setTime, 1000)