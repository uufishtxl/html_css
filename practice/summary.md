# 建立好文件夹结构

- index.html
- css文件夹
  - style.css
- img文件夹
- js文件夹
- favicon.ico: 网站图标

# 设置网站图标

1. 将网站图标放到站点文件夹的根目录中。
2. 在`<head>`中加入相关的`<link>`信息：
   ```
    <link rel="shortcut icon" href="favicon.ico">
    ```
    ![favicon](mdimg/favicon.png)

# 链接CSS样式

```
<link rel="stylesheet" href="css/style.css">
```

# 制作菜单栏

## 分析菜单栏布局

- 菜单栏整体
  - 高度
  - 背景
- 内容整体
  - 左侧的文字
  - 右侧的登录等文字
  - 购物车

  共计5个div，结构是
  - div.topbar
    - div.container
      - div.topbar_nav
      - div.topbar_info
      - div.topbar_cart

# Q&A

1. Q：菜单栏上面有空白间隙，怎么解决？**  
   A：`<body>`本身就有隐藏的`margin`和`padding`属性，因此需要在css中重新设置一下。
   ```
      body {
       margin: 0;
       padding: 0
   }
   ```

