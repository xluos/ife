// 邮箱后缀List参考
var postfixList = ['163.com', 'gmail.com', '126.com', 'qq.com', '263.net'];

function $(id) {
  return document.getElementById(id);
}
const INPUT = $('email-input')
const SUG = $('email-sug-wrapper')

var CACHE = ''
var INDEX = -1
/**
 *显示DOM元素
 *
 * @param {*} node dom元素
 */
function showDom(node) {
  node.style.display = '';
}
/**
 *隐藏DOM元素
 *
 * @param {*} node dom元素
 */
function hideDom(node) {
  node.style.display = 'none';
}

/**
 *创建提示列表
 *
 * @param {*} val 输入字符
 * @returns 创建的DocumentFragment
 */
function createSug(val) {
  const [before, after] = val.split('@')
  let List;
  if (after) {
    const reg = new RegExp(`^${after}`, 'i')
    List = postfixList.filter(x => reg.test(x)).map(x => `${before}@${x}`);
  } else {
    List = postfixList.map(x => `${before}@${x}`);
  }
  let fragment = document.createDocumentFragment()
    , liNode;
  List.forEach((data) => {
    liNode = document.createElement("li");
    liNode.innerText = data;
    fragment.appendChild(liNode);
  })
  return fragment
}

// input事件
INPUT.addEventListener('input', (e) => {
  const node = e.target;
  const value = node.value.trim();
  if (value === '') {
    hideDom(SUG);
    CACHE = '';
    return;
  }
  if (value.length > 20) {
    console.error("输入过长");
  }
  // 和缓存的数值比较，trim后相同则不更新
  if (CACHE !== value) {
    SUG.innerHTML = null;
    SUG.appendChild(createSug(value));
    showDom(SUG);
    CACHE = value
  }
})

// 按键事件
document.addEventListener('keydown', (e) => {
  let child = SUG.childNodes;
  // 下
  if (e.keyCode === 40) {
    if (INDEX >= 0)
      child[INDEX].classList.remove('select')
    INDEX++
    if (INDEX === child.length) {
      INDEX = 0
    }
    child[INDEX].classList.add('select');
    // 上
  } else if (e.keyCode === 38) {
    child[INDEX].classList.remove('select')
    INDEX--
    if (INDEX < 0) {
      INDEX = child.length - 1;
    }
    child[INDEX].classList.add('select');
    // Enter
  } else if (e.keyCode === 13) {
    INPUT.value = child[INDEX].textContent
    hideDom(SUG);
    // ESC
  } else if (e.keyCode === 27) {
    INPUT.select();
  }
})
// 失去焦点隐藏提示框
INPUT.addEventListener('blur', (e) => {
  hideDom(SUG);
})

// 获取焦点显示提示框
INPUT.addEventListener('focus', () => {
  // showDom(SUG);
})

// 事件委托
SUG.addEventListener('mousedown', (e) => {
  if (e.target.tagName === 'LI') {
    INPUT.value = e.target.textContent
    hideDom(SUG);
    INPUT.focus()
  }
})
