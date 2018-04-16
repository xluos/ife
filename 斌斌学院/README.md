![课程配图](https://gss0.baidu.com/9rkZbzqaKgQUohGko9WTAnF6hhy/mms-res/fed/ife/ife_tutor/js.f2c13892b01f749f.jpg)

# 课程介绍
这个学院有九个任务，分为三个系列。主要是以JavaScript的DOM操作为主，再加上一些数据结构上的知识（主要是树的三种遍历）。科班出身学过数据结构并且有语言基础，再去熟悉一下DOM操作，很快就能上手写完。

源码:[GitHUb](https://github.com/xluos/ife/tree/gh-pages/%E6%96%8C%E6%96%8C%E5%AD%A6%E9%99%A2)
# 任务介绍

## 任务一：零基础JavaScript编码（一）
### 任务效果（[传送门](http://ife.baidu.com/course/detail/id/93)|[Demo](https://xluos.github.io/ife/%E6%96%8C%E6%96%8C%E5%AD%A6%E9%99%A2/2-1.html)）
![](http://www.xluos.com/usr/uploads/2018/04/1992310508.png)
### 知识点
+ 如何获取input的值
+ 修改页面元素的文本
### 主体思路
原任务页面已经给出了大部分代码点击传送门过去。很容易，给按钮绑定点击事件，点击事件发生时就**获取input输入框中的值，然后赋值给要显示的元素就好了**。
## 任务二：零基础JavaScript编码（二）
### 任务效果（[传送门](http://ife.baidu.com/course/detail/id/91)|[Demo](https://xluos.github.io/ife/%E6%96%8C%E6%96%8C%E5%AD%A6%E9%99%A2/2-2.html)）
![](http://www.xluos.com/usr/uploads/2018/04/2094176551.png)
### 知识点
+ 如何创建元素
+ 如何插入元素
+ 数组的filter方法如何使用
+ JS中的Sort方法如何自定义排序规则
### 主体思路
同样大部分框架代码已经给出，点击传送门进入。先学会如何创建和插入元素节点之后就很容易了。只需要遍历list判断污染致大于60就创建一个节点插入到页面中。
## 任务三：零基础JavaScript编码（三）
### 任务效果（[传送门](http://ife.baidu.com/course/detail/id/98)|[Demo](https://xluos.github.io/ife/%E6%96%8C%E6%96%8C%E5%AD%A6%E9%99%A2/2-3.html)）

![](http://www.xluos.com/usr/uploads/2018/04/652267627.png)

### 知识点
+ 字符串分割
### 主体思路
同样前三个任务都给的有整体代码框架。算是第二个的升级版，不过这一次需要自己获取数据，其他的跟上一个都一样

## 任务四：基础JavaScript练习（一）
### 任务效果（[传送门](http://ife.baidu.com/course/detail/id/103)|[Demo](https://xluos.github.io/ife/%E6%96%8C%E6%96%8C%E5%AD%A6%E9%99%A2/2-4.html)）
![](http://www.xluos.com/usr/uploads/2018/04/2606494116.png)
### 知识点
+ 栈的特点
+ childNodes属性
+ insertBefore()方法和appendChild()方法
+ removeChild()方法
+ 事件委托
### 主体思路
获取input中的值，创建节点。不同的按钮分别插入方法。删除时只用指定删除元素即可。点击元素删除利用事件委托，只绑定一次就可以对所有的元素有效。（为了调试方便可以自己添加批量添加的按钮）
## 任务五：基础JavaScript练习（二）
### 任务效果（[传送门](http://ife.baidu.com/course/detail/id/105)|[Demo](https://xluos.github.io/ife/%E6%96%8C%E6%96%8C%E5%AD%A6%E9%99%A2/2-5.html)）
![](http://www.xluos.com/usr/uploads/2018/04/1646626795.png)
### 知识点
+ 排序算法
+ setTimeout()方法
### 主体思路
在上一个上面稍加改造，创建节点时更改高度，再利用Flexbox布局底边对齐就可以了。排序时利用setTimeout()方法，延时交换效果来达到可视化的排序过程的效果。限制输入和数量主要在添加的时候加个判断
## 任务六：基础JavaScript练习（三）
### 任务效果（[传送门](http://ife.baidu.com/course/detail/id/107)|[Demo](https://xluos.github.io/ife/%E6%96%8C%E6%96%8C%E5%AD%A6%E9%99%A2/2-6.html)）
![](http://www.xluos.com/usr/uploads/2018/04/961592865.png)
### 知识点
+ 利用split()和正则分词
+ filter()去除空白
+ 利用indexOf()查询
### 主体思路
获取到输入的一堆字符串后，利用split()加正则表达式分词如：`split(/[\n\t\r,，、 　]/)`。获取到分词的数组，然后很有可能会有连续的逗号或空格就会导致分词出空白项，然后用filter()方法去除空白项得到新的数组，遍历数组创建节点插入到页面中就好了。查询的时候利用字符串的indexOf()方法来查询，如果匹配到就添加一个表示匹配的CSS样式，为什么不用正则方法匹配呢？利用正则的话.之类的正则符号就无法正确匹配，或者要对输入的数据再进行一次转义增加程序的复杂度，就这个任务的需求来说，我认为indexOf是比正则更适合的方式。
## 任务七：JavaScript和树（一）
### 任务效果（[传送门](http://ife.baidu.com/course/detail/id/108)|[Demo](https://xluos.github.io/ife/%E6%96%8C%E6%96%8C%E5%AD%A6%E9%99%A2/2-7.html)）
![](http://www.xluos.com/usr/uploads/2018/04/1357479528.png)
### 知识点
+ 树的概念
+ 树的三种遍历
### 主体思路
做完前面六个之后后面三个其实也没什么难度，只要明白树的概念，知道三种遍历怎么遍历其实是跟前面的几个大差不差。三种遍历方法都是利用了递归，同样的遍历到那个元素就利用setTimeout()方法延时显示遍历效果。最终达到可视化遍历的效果。
## 任务八：JavaScript和树（二）
### 任务效果（[传送门](http://ife.baidu.com/course/detail/id/110)|[Demo](https://xluos.github.io/ife/%E6%96%8C%E6%96%8C%E5%AD%A6%E9%99%A2/2-8.html)）
![](http://www.xluos.com/usr/uploads/2018/04/1760749796.png)
### 知识点
+ nodeValue属性获取当前元素的内容（不包括子元素）
+ trim()方法去除空白字符
### 主体思路
总体跟任务七一样，只不过递归的时候使用循环遍历所有的子元素，然后获取内容和查找的值对比，如果匹配就添加选中样式。
## 任务九：JavaScript和树（三）
### 任务效果（[传送门](http://ife.baidu.com/course/detail/id/111)|[Demo](https://xluos.github.io/ife/%E6%96%8C%E6%96%8C%E5%AD%A6%E9%99%A2/2-9.html)）
![](http://www.xluos.com/usr/uploads/2018/04/2211211589.png)
### 知识点
+ 无新知识点
### 主体思路
算是一个小综合性的任务，需要实现的效果前面都实现过，只要整合一下稍加改动就可以完成，利用事件委托实现点击选中元素。添加元素和删除在任务4~6中已经实现过了，代码都是一样的。不过选中的效果要进行互斥操作，就是同时只能选中一个元素，我的解决方案是选中时先清除一次，在选中达到互斥效果。

