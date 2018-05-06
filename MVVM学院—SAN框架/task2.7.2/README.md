# san-transition的源码解读
# 前言
做了2.7.1的任务之后感觉san的过渡用着确实麻烦，不能自动应用上可用的css还要自己去实现，到了这一节发现只是把这个功能给独立了出来，使用方法很简单，用着确实方便很多。使用方法看API文档就行了。[在这里](https://ecomfe.github.io/san-transition/)，但是我们不能只追求会用是吧？尝试看了一下它的实现发现，`san-transition`的实现并不麻烦，代码量比较少，还是容易研究一下的，下面就来分析一下他的源码。

# 开始阅读
首先把代码clone下来：
```
git clone https://github.com/ecomfe/san-transition.git
```
看`src`目录下的文件结构，很简单
```
.
├── capability.js
├── index.js
├── stage.js
├── transition.js
└── util.js
```
很容易看出来主文件是`index.js`和`transition.js`查看以后发现`index.js`只是引入了`transition.js`，所以打开`transition.js`

## transition.js

代码很简单，只暴露了一个接口，是一个**动画控制器 Creator**，它有两个参数`name`, `stagger`。`name`很显然是控制器名字，`stagger`不知道啥意思，查一下翻译看他的初值默认为0，**暂定为**延时的意思吧，随后看后面的代码再来分析他的作用

```js
/**
 * @file Transition object generator
 */

import { getTimeout, addHook, removeHook } from './util'
import stage from './stage'
import capability from './capability'

export default (name = 'san', stagger = 0) => {
  const hooks = {
    beforeEnter: `${name}-before-enter`,
    enter: `${name}-enter`,
    beforeLeave: `${name}-before-leave`,
    leave: `${name}-leave`
  }
  // 通过这个return可以看出来，这是一个  **动画控制器 Creator**，上一篇文章不知道怎么用，在这里就知道了
  return {
    enter (el, done) {
      /* istanbul ignore if */
      if (!capability) {
        return done()
      }
      addHook(el, hooks.beforeEnter)
      const transitionHandler = () => {
        removeHook(el, hooks.beforeEnter)
        addHook(el, hooks.enter)
        setTimeout(() => {
          removeHook(el, hooks.enter)
          done()
        }, getTimeout(el))
      }
      stage(el, stagger, transitionHandler)
    },
    leave (el, done) {
      /* istanbul ignore if */
      if (!capability) {
        return done()
      }
      addHook(el, hooks.beforeLeave)
      const transitionHandler = () => {
        removeHook(el, hooks.beforeLeave)
        addHook(el, hooks.leave)
        setTimeout(done, getTimeout(el))
      }
      stage(el, stagger, transitionHandler)
    }
  }
}

```
看一下发现这个就是一个**动画控制器 Creator**，通过传入的`name`绑定不同的CSShooks，但是有一堆自定义的函数，`addHook`、`removeHook`，`getTimeout`看名字就可以看出来是绑定钩子，解绑钩子和获取时间用的，但是还是要看一下它的实现，达到**心里有数**，打开`util`

## util.js

都是一些工具函数

```js
/**
 * @file Util functions
 */

// 大概是返回所有（延迟+持续时间）中的最大值
const getTime = (duration, delay) => Math.max.apply(this, duration.map((str, i) => getFloat(str) + parseFloat(delay[i])))

// 字符串转为浮点数，将时间转为毫秒数
const getFloat = str => (parseFloat(str) || 0) * 1000

// 获取元素中transition和animation两个持续事件较长的
export const getTimeout = el => {
  const style = getComputedStyle(el)
  const transDuration = style.transitionDuration.split(',')
  const transDelay = style.transitionDelay.split(',')
  const aniDuration = style.animationDuration.split(',')
  const aniDelay = style.animationDelay.split(',')
  return Math.max(getTime(transDuration, transDelay), getTime(aniDuration, aniDelay))
}

// 下一帧动画执行传入的函数
export const afterNextFrame = fn => requestAnimationFrame(() => requestAnimationFrame(fn))

// 添加在Class属性中添加hook
export const addHook = (el, hook) => el.classList.add(hook)
// 添加在Class属性中删除hook
export const removeHook = (el, hook) => el.classList.remove(hook)

```
## capability.js
“能力检测函数”，源码很简单，就是检查当前环境是否存在`requestAnimationFrame`，`getComputedStyle`，`classList`这三个属性

```js
/**
 * @file Runtime capability testing
 */

const capability = ({
  raf: global.requestAnimationFrame,
  getComputedStyle: global.getComputedStyle,
  classList: document.createElement('a').classList
})

/* istanbul ignore if */
if (!capability.getComputedStyle) {
  console.warn('`san-transition` will not to work because `getComputedStyle` API or polyfill is required.')
}

/* istanbul ignore if */
if (!capability.raf) {
  console.warn('`san-transition` will not to work because `requestAnimationFrame` API or polyfill is required.')
}

/* istanbul ignore if */
if (!capability.classList) {
  console.warn('`san-transition` will not to work because `Element.prototype.classList` API or polyfill is required.')
}

export default capability.raf && capability.classList

```
从主代码中可以看出如果返回值为`false`也就是不存在这几个属性（方法），不执行动画，直接回调`done`

```js
/* istanbul ignore if */
if (!capability) {
    return done()
}
```

好了现在再看`transition.js`发现就只剩下一个`stage`函数不知道了，打开`stage.js`文件

```js
/**
 * @file Staged transition handler
 */

import asap from 'asap'
import { afterNextFrame } from './util'

const stacks = {}
export default function (el, stagger, transitionHandler) {
  // 如果设置了交错时间，进行下面的设置，否则在下一帧直接执行transitionHandler函数
  if (stagger) {
    // 获得元素的父元素
    const parentEl = el.parentElement
    // 父元素不存在就，警告并且返回transitionHandler()
    if (!parentEl) {
      //看到这句警告瞬间明白了stagger的含义，我是在看到这句后才明白的，这个是多个元素过渡时，交错过渡错开的时间
      console.warn('Transition with stagger needs a parent element.')
      return transitionHandler()
    }
    // 如果父元素没有id则使用当前时间做后缀设置一个id
    if (!parentEl.id) {
      parentEl.id = `__san_transition_${Date.parse(new Date())}`
    }
    const parentId = parentEl.id
    // 交错过渡的第一个元素时stacks[parentId]不存在，使用||运算符返回一个空数组赋值给stacks[parentId]
    stacks[parentId] = stacks[parentId] || []
    // 将当前过渡元素id放到它父元素交错数组中，如果一个页面中有多个交错过渡的元素，就会有不同的stacks[parentId]数组
    stacks[parentId].push(el.id)
    // 这个还不是太明白为什么要这么做，尽快在重绘前安排事件发生，不明白为什么要在这里重置stacks[parentId]
    // 看到后面明白了，页面重绘后，再次触发时就不能用原来的数组，依然要从零开始，因为延迟的时间是按照数组的长度算的
    asap(() => { stacks[parentId] = [] })
    // 这是一个自执行箭头函数，写的太精简了看了半天才看出来，下面我展开一下
    ;(step => setTimeout(() => afterNextFrame(transitionHandler), stagger * step))(stacks[parentId].length - 1)

    // 把上面那个精简的写开来就是这样，也就是当有多个子元素同时过渡，
    // 如果设置了stagger参数就依次延时那么久。因为每个子元素s-transition的触发
    // 不会同时发生，但是每个元素都往stacks[parentId]push了自己的id，后面的元素触发动画时，stacks[parentId]的长度就是第几个触发动画的元素
    (function (step) {
      setTimeout(()=>{
        return afterNextFrame(transitionHandler)
      }, stagger * step)
    })(stacks[parentId].length - 1)

  } else {
    // 下一帧执行transitionHandler函数，afterNextFrame函数上面读码的时候就知道了作用
    afterNextFrame(transitionHandler)
  }
}
```

**好了现在再来看`transition.js`思路就很清晰了**

`transition.js`暴露的接口是一个**动画控制器 Creator**，有两个参数
+ `name`，需要绑定的过渡类名。默认值为`san`
+ `stagger`，多个子元素需要交错过渡（依次过渡）的时候间隔的延时毫秒数。默认为0
**返回值**为一个动画控制器对象

```js
/**
 * @file Transition object generator
 */

import { getTimeout, addHook, removeHook } from './util'
import stage from './stage'
import capability from './capability'

export default (name = 'san', stagger = 0) => {
  // 根据name设置钩子名
  const hooks = {
    beforeEnter: `${name}-before-enter`,
    enter: `${name}-enter`,
    beforeLeave: `${name}-before-leave`,
    leave: `${name}-leave`
  }
  // 通过这个return可以看出来，这是一个  **动画控制器 Creator**，上一篇文章不知道怎么用，在这里就知道了
  return {
    enter (el, done) {
      /* istanbul ignore if */
      // 如果不存在需要的接口直接调用done()回调退出
      if (!capability) {
        return done()
      }
      // 添加开始前的CSS name
      addHook(el, hooks.beforeEnter)
      
      // 定义动画管理器，因为事件循环的原因不能直接连续的添加css，并且交错过渡时需要其他处理，所以定义一个后续操作的函数
      const transitionHandler = () => {
        // 删除beforeEnter css
        removeHook(el, hooks.beforeEnter)
        // 添加enter css
        addHook(el, hooks.enter)

        // 获得过渡动画持续事件，在过渡结束后调用
        setTimeout(() => {
          // 移出过渡样式
          removeHook(el, hooks.enter)
          // 过渡结束调用done
          done()
        }, getTimeout(el))
      }
      // 根据传入的stagger来设置是否需要额外延时进行交错过渡的效果
      stage(el, stagger, transitionHandler)
    },
    // 和enter相同不再细写
    leave (el, done) {
      /* istanbul ignore if */
      // 如果不存在需要的接口直接调用done()回调退出
      if (!capability) {
        return done()
      }
      addHook(el, hooks.beforeLeave)
      const transitionHandler = () => {
        removeHook(el, hooks.beforeLeave)
        addHook(el, hooks.leave)
        setTimeout(done, getTimeout(el))
      }
      stage(el, stagger, transitionHandler)
    }
  }
}
```

# 最后
本来以为自己已经看懂了`san-transition`的代码，写了一遍后发现有好多之前没注意到的细节问题。写博客总结果然是个好习惯，每次总结都有新的收获。第一次读源码，写关于读源码的东西，也不知道自己写的清不清楚，反正我经过这一次总结，理解的更加深入了。如果你也有阅读源码的意向希望能帮到你。

个人总结如有不妥之处欢迎指出，放上[GitHub](https://github.com/xluos/ife/tree/gh-pages/MVVM%E5%AD%A6%E9%99%A2%E2%80%94SAN%E6%A1%86%E6%9E%B6/task2.7.2)欢迎Star～
