---
title: CSS Tutorial
---
# CSS

Cascading Style Sheets，层叠样式表

## 样式的设置方法

- 内联方法，直接将样式写到标签里

  ```
  <div style="background-color: red; color: pink; width: 100px; height: 100px"></div>
  ```
- 内部样式表：写到<head>里去

  ```
  <head>
    <style>
    div {
         color: red;
         width: 100px;
         height: 100px;
         background-color: pink
    }
    </style>
  </head>
  <body>
    <div>苹果</div>
  </body>
  ```
- 外部样式表：通过<link>标签引入外部样式表

  ```
  <head>
    <link rel="stylesheet" href="example.css">
  </head>
  ```
  ## 注释

  css中注释的方法：`/*注释*/`

  ## 颜色的设置方法

  用RGB：

  ```
  color: rgb(255, 0, 0)
  ```

  或者：

  ```
  rgb(100%, 0%, 0%);
  ```

  或者可以直接用名称：`color: red`， 点击[这里](http://www.w3school.com.cn/tags/html_ref_colornames.asp)，查看颜色的名称。

  16进制的颜色写法：`color: #FFFFFF`，那么红色就可以写成`#FF0000`，代表R、G、B的两个字符一直的话，可以简写成一个，因此`#FF0000`可以写成`#F00`

  ## 选择器

**作用**：通过选择器可以找到HTML中的元素，并且将选择器后面的样式传递给元素。

包括4个大类：  
- 基本选择器
- 组合
- 属性
- 伪元素

### 基本选择器

- 通配符：
- 标签：`<div>`
- id选择器
- 类型选择器：`<class>` 

#### 通配符

`*` 代表所有的标签

```
* {
    border: 1px solid black;
}
```

#### 标签选择器

```
div {
    border: 1px solid black;
}
```

#### ID选择器

```
<p id="text">para</p>
```
在css中：  
```
#txt {
    font-size: 60pt
}
```
也可以写成：
```
*#txt {
    font-size: 60pt
}
```
两者是一模一样的。后面的可以结合通配符一起理解，也就是说所有id是txt的元素，都可以通用这里的定义。

当然，也可以用具体的标签去取代通配符，限定这个ID使用到的标签，比如：

```
p#txt {
    font-size: 60pt
}
```


编程的思想：id具有唯一性，相当于人的身份证。
1. 每个人有，且只有一个号码；
2. 人和人之间的号码不一样  

- css也继承了一部分ID的思想，坚持了第一条——元素只能有一个ID。  
- 但是第二点并不会坚持。ID可以在不同的元素中不断出现。但是为了契合编程思想，需要人为地进行控制，让同一个ID不要出现在两个元素。

#### `class`选择器

用`.`代表类型。比如`.txt`。

```
.txt {
    font-size: 60pt
}
```

`class`标签和`id`标签的区别，在于`class`标签不具备唯一性。所以一个标签里可以有多个`class`。

和`id`一样，`class`也省略了通配符，也可以限定标签，比如`div.myclass`

```
.txt {
    font-size: 100px;
}

.txt2 {
    color: red;
}
```
```
<p class="txt txt2">我有两个类型</p>
```

现在的主流用法是，css中尽量用`class`去取代`id`，而`id`主要用在js中。

## CS的原理

- 优先原则：后解析的内容会覆盖掉之前解析的内容。
- 继承原则：嵌套里面的标签会继承外部标签的某些样式。也可以说，子元素可以继承父元素的属性。

### 优先原则：针对选择器而言

- 同一个选择器，文件是自上而下执行的。下面的例子中，实际有效的颜色是绿色的，因为绿色在下面。
  ```
  div {
      color: red;
      color: green;
  }
  ```
- 同一类型的选择器：从上往下。
  ```
  div {
      background-color: red;
  }
  div {
      background-color: green;
  }
  ```

  或者
  ```
  .bg1 {
      background-color:blue;
  }
    .bg2 {
      background-color:green;
  }
  ```
  然后在html中，进行这样的定义：
  ```
  <div class="bg1 bg2">背景</div>
  ```
  一定会显示bg2中的定义。这是和css中定义的顺序有关的，和`class="bg1 bg2"`没有任何关系，也就是说，即使写成`class="bg2 bg1"`，仍然会显示bg2中的背景，因为bg2在css中的顺序较后。

- 不同类型的选择器，先解析低优先级的，再解析高优先级的。  
  之前学了`*`选择器、`<div>`选择器、 `class`选择器和 `id`选择器。他们的优先级是由低到高的。比如说：
  ```
  div {
      background-color: red;
  }
  .bg1 {
      background-color: green;
  }
  ```
  html中：
  ```
  <div class="bg1">div1</div>
  ```
  会先去解析低优先级的，也就是`div`，红色背景，然后解析高优先级的，也就是`class`，绿色背景。最终会显示绿色背景。  
- 外部样式和内部样式会合并一起解析。先解析外部样式，再解析内部样式。  
- 外部+内部解析完了之后，才解析内联样式。
- 加了important字段的，最后执行。
  ```
  div {
      background-color: green!important;
  }
  div {
      background-color: yellow;
      font-size: 30px;
  }
  ``` 
  永远都会显示被标注`!important`的属性，因此会使用绿色背景。