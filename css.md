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