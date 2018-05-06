# s-transition基本使用
官网给的例子很简单：
```js
//在元素上通过 s-transition 指令，可以声明过渡动画控制器。

<button s-transition="opacityTransition">click</button>

//我们通常把 s-transition 和条件或循环指令一起使用。

<button s-transition="opacityTransition" s-if="allowEdit">Edit</button>
<b s-transition="opacityTransition" s-else>Edit not allow</b>

```

s-transition的值是一个动画控制器，过渡动画控制器是一个包含 `enter` 和 `leave` 方法的对象。

> `enter` 和 `leave` 方法的签名为 `function({HTMLElement}el, {Function}done)`。san 会把要过渡的元素传给过渡动画控制器，控制器在完成动画后调用 done 回调函数。

*元素出现（添加）时会调用`enter`方法，隐藏（删除）时会调用`leave`方法*

也就是说，`enter` 和 `leave` 方法有两个参数，第一个参数是使用`s-transition`指令绑定当前**动画控制**器的元素，也就是需要过渡的元素，第二个元素是**done回调函数**，关于这个done函数，我们不需要关心他的实现，只需要记得在结束动画时调用这个函数就可以继续执行动画触发前的操作，比如原本`s-if`指令为`false`的时候会在页面删除这个元素，如果添加了`s-transition`指令就会先”拦截“`s-if`删除元素的操作，在执行完过渡之后再调用`done()`函数进行之前被“拦截”的操作。所以官网指南上会这样介绍它的用法:

> san 把动画控制器留给应用方实现，框架本身不内置动画控制效果。应用方可以：
> 
> + 使用 css 动画，在 `transitionend` 或 `animationend` 事件监听中回调 `done`
> + 使用 `requestAnimationFrame` 控制动画，完成后回调 `done`
> + 在老旧浏览器使用 `setTimeout` / `setInterval` 控制动画，完成后回调 `done`
> + 发挥想象力

# 使用JavaScript制作过渡效果
官方给的Demo就是这种方式，下面解释一下
```js
san.defineComponent({
    //模版无需多说
    template: `
        <div>
            <button on-click="toggle">toggle</button>
            <button s-if="isShow" s-transition="opacityTrans">Hello San!</button>
            <button s-else s-transition="opacityTrans">Hello ER!</button>
        </div>
    `,
    //点击事件，控制过渡元素的隐藏和显示
    toggle: function () {
        this.data.set('isShow', !this.data.get('isShow'));
    },
    //重点！！动画控制器
    opacityTrans: {
        // 出现时效果
        enter: function (el, done) {
            // 动画分多少段
            var steps = 20;
            var currentStep = 0;

            function goStep() {
                // 当透明度达到1时停止动画
                if (currentStep >= steps) {
                    el.style.opacity = 1;
                    // 调用done()继续之前被s-transition”拦截“的操作
                    done();
                    return;
                }
                // 使用requestAnimationFrame控制，递归逐步增加透明度
                el.style.opacity = 1 / steps * currentStep++;
                requestAnimationFrame(goStep);
            }
            // 调用动画函数
            goStep();
        },
        // 消失时的动画
        leave: function (el, done) {
            // 动画分多少段
            var steps = 20;
            var currentStep = 0;

            function goStep() {
                // 当透明度小于等于0时停止动画
                if (currentStep >= steps) {
                    el.style.opacity = 0;
                    // 调用done()继续之前被s-transition”拦截“的操作，比如`s-if`的删掉这个元素
                    done();
                    return;
                }
                // 使用requestAnimationFrame控制，递归逐步减少透明度
                el.style.opacity = 1 - 1 / steps * currentStep++;
                requestAnimationFrame(goStep);
            }
            // 调用动画函数
            goStep();
        }
    }
});
```

# 使用CSS动画
使用CSS动画，无非就是在**恰当**的时机添加上，`transition`属性，最后在动画结束时再删掉（删不删视情况而定，一般都是删掉了）。最后就是文档中提到了两种方式来调用`done()`，要么利用`transitionend` 或 `animationend` 事件，要么利用`setTimeout`进行恰当的延时来处理，下面介绍一下这两种方法：

## 1、在`transitionend`事件中调用`done()`
同样是这个例子，我们对动画控制器稍加改造
加上下面的CSS样式：
```html
<style>
    .enter,
    .leave {
        transition: all .5s;
    }

    .before-enter,
    .leave {
        opacity: 0;
    }

    .enter,
    .before-leave {
        opacity: 1;
    }
</style>
```
对动画控制器进行修改，完整代码如下：
```js
san.defineComponent({
    //模版无需多说
    template: `
        <div>
            <button on-click="toggle">toggle</button>
            <button s-if="isShow" s-transition="opacityTrans">Hello San!</button>
            <button s-else s-transition="opacityTrans">Hello ER!</button>
        </div>
    `,
    //点击事件，控制过渡元素的隐藏和显示
    toggle: function () {
        this.data.set('isShow', !this.data.get('isShow'));
    },
    //重点！！动画控制器
    opacityTrans: {
        enter(el, done) {
            // 定义transitionend事件回调函数
            function listener(){
                // 删除enter类
                el.classList.remove('enter');
                // 取消绑定的事件
                el.removeEventListener('transitionend', listener);
                // 动画结束调用done()
                done();
            }
            // 绑定transitionend事件执行的函数，在过渡效果完成后触发listener
            el.addEventListener("transitionend", listener);
            // 添加开始前效果
            el.classList.add('before-enter');
            // 通过事件循环（Event Loop），延时操作
            setTimeout(() => {
                // 删除开始前效果
                el.classList.remove('before-enter');
                // 添加开始效果
                el.classList.add('enter');
            }, 0);
        },
        // 和上一个方法差不多就不一一写注释了
        leave(el, done) {
            function listener(){
                el.classList.remove('leave');
                done();
            }
            el.addEventListener('transitionend', listener);
            el.classList.add('before-leave');
            setTimeout(() => {
                el.classList.remove('before-leave');
                el.classList.add('leave');
            }, 0);

        }
    }
});
```
**注意：**因为事件循环的存在，如果不把变化的效果添加进`setTimeout()`中延时一下，无论怎样分开添加`before-enter`和`enter`，浏览器都会在下一次访问任务队列的时候一起把两个class都添加上，这样就没有了属性变化的过程，就不会触发`transition`效果，关于事件循环(Event Loop)可以参考我的这个笔记：[浅谈事件循环](http://ife.baidu.com/note/detail/id/1323)

## 2、使用`setTimeout`动画完成后回调 `done`
和使用`transitioned`事件回调一样，只不过使用`setTimeout`的情况下需要自己写上动画结束的时间，就不细说了直接上动画控制器的代码：
```js
opacityTrans: {
    enter(el, done) {
        el.classList.add("before-enter");
        setTimeout(() => {
            el.classList.remove("before-enter");
            el.classList.add("enter");
            setTimeout(() => {
                el.classList.remove("enter");
                done();
            }, 500);
        }, 0);
    },
    leave(el, done) {
        el.classList.add("before-leave");
        setTimeout(() => {
            el.classList.remove("before-leave");
            el.classList.add("leave");
            setTimeout(done, 500);
        }, 0);
    }
}
```

# 动画控制器 Creator
就是动画控制器的生成器。官方是这样解释的：
> s-transition 指令声明对应的对象如果是一个 function，san 将把它当成 过渡动画控制器 Creator。
> 每次触发过渡动画前，san 会调用过渡动画控制器 Creator，用其返回的对象作为过渡动画控制器。

支持传入参数，就是根据参数来创建不同的动画生成器，达到根据不同条件变化动画的效果。

# 最后
初学`s-transition`的时候我也对各种东西不能理解各种疑惑，最后总算是有了一些自己的认识。这篇总结，希望能对你有点儿帮助。以上仅为个人这几天对`s-transition`使用的一点儿理解，如有不妥之处欢迎指出。