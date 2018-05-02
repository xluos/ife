# MVVM学院2.5任务

这个任务写两个组件，一个是`input`另一个是`checkbox`。这两个东西写了蛮久的，主要是各种细节上比较麻烦，写的时候部分参考了`san-mui`的文档，最终`input`实现的自己比较满意，`checkbox`不确定状态实现出来了，但是不知道为什么只要存在`value`属性，`checkbox`的双向绑定就会失效，这点儿搞了很久，搞的头疼也没弄出来，最终导致自定义value值没能实现。接下来写一下实现了那些`api`

# input组件

## Api
### 属性
|名称|类型|必须|默认值|描述|
|:--|:--|:--|:--|:--|
|value|string|false|-|input提交的值|
|placeholder|string|false|-|提示信息|
|disabled|boolean|false|false|是否禁用|
|readonly|boolean|false|false|是否只读|
|popoverText|string|false|-|弹出框提示信息|
|hintText|string|false|-|错误提示信息|
|hintDirection|string|false|right|错误信息的方位，具有"top","right","left","bottom"四个值，不区分大小写，当输入错误时使用默认值|
|popoverDirection|string|false|top|弹出框的位置，用法同上|
|type|string|false|-|input的类型用于验证,可选值["name", "password", "email", "mobile"]|

### 事件
|名称|描述|
|:--|:--|
|on-input|输入时触发|
|on-focus|获得焦点时触发|
|on-blur|失去焦点时触发|

### 插槽

无

# CheckBox
## Api
### 属性
|名称|类型|必须|默认值|描述|
|:--|:--|:--|:--|:--|
|name|string|false|-|name的值|
|disabled|boolean|false|false|是否禁用|
|id|string|false|随机|checkbox和lable绑定的id值，不指定则随机一个|
|trueValue|string|false|-|选中时的值|
|falseValue|string|false|-|未选中时的值|
|indeterminate|boolean|false|false|是否是不确定状态|
|canClickToSwitchToIndeterminate|boolean|false|false|不确定状态是否参与点击|

### 事件
|名称|描述|
|:--|:--|
|on-change|触发原生的change事件，通过修改外部的数据改变时不会触发|

### 插槽
lable的值