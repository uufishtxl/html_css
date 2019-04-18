# JavaScript 的基础

- 编程的基础语法；
- 函数及作用域；
- 对象的概念；
- 浏览器原理和BOM；
- DOM操作；
- 事件的原理。

# 第一个JS命令：alert() 弹窗

```
alert("这是什么大宝贝！");
```

数字可以不用引号：
```
alert(123);
```

## document.write()

弹窗在页面上面，和页面本身没关系。而`document.write()`会写内容到页面上。

## console.log() 

将内容写到控制台。可以用来调试代码，藏一些提供给编程人员看的信息。

# 变量

## 定义变量的方法

创建一个空的变量（容器）。

```
var x;
```

## 变量的赋值 | Assignment

```
var x = 1;
```

### 值的种类

- 数字
  ```
  var x = 1;
  ```
- 字符串（用引号包围）
  ```
  var y = "朱一龙"
  ```
- 布林/布尔值
  ```
  var z = true
  ```

- 字典/映射/哈希
  ```
  var t = { color: "red" }
  ```
## 变量可以给其它变量赋值

# 运算符

## 赋值（等号）运算符

把右边的值赋值给左边的变量。

## 加减乘除

## 取模运算符 %

4 / 2 = 2  
5 /2 = 2 * 2 + 1 -> 1  
5 % 2 = 1

```
var x;
x = 5 % 2;
```
级别和乘除同级。

## 特殊的加号

字符串的加号可以实现字符串的拼接，比如：
```
var x = "abc";
var abc = "def";
var def = "ghi";
var alphabet = x + abc + def 
document.write(alphabet)
```

结果就是：
```
abcdefghi
```
注意：字符串只能用加号来做运算，不能使用其他运算法。

如果是字符串加上数字，会将数字视作字符串，得到`字符串 数字`的结果（中间有空格）。
比如：
```
var x = "abc";
var y = "abc" + 1;
document.write(y)
```
出来的结果会是“`abc 1`”

## 自增1 `++`

- `++a`：先自增
- `a++`：后自增

后自增，是说先做别的，再做自增，所以顺序是 var a = 1 > var b = a + 5 =6 > 最后做自增 a = a + 1，所以等于2
```
var a = 1;
var b = a++ + 5;
```

### 一元运算符和二元运算符

- `a++`这种就是一元运算符，只操作一个元素；
- `a + b` 二元运算符

一元运算符优先级高于二元运算符。


# if 判断语句

```
var money = 101;
if (money > 100); {
document.write("环游世界");
document.write("换个老公");
}
```
## 条件的种类

- 等于，==
- 小于，<
- 大于，>
- 不等于，!=
- 大于等于，>=
- 小于等于，<=

## 条件的叠加

### `&&`表示并且：
```
var money = 100;
if (money >= 100 && age <= 30) {
document.write("环游世界");
document.write("换个老公");
}
```

### `||`表示或者：
```
var money = 100;
age = 31;
if (money >= 100 || age <= 30) {
document.write("环游世界");
}
```

### 多个if语句

各自独立执行自身的逻辑：
```
var money = 201;
if (money > 100) {
    document.write("环游世界");
}
if (money > 200) {
    document.write("置换房子");
```

### if...else...

```
var money = 99;
if (money > 100) {
document.write("吃两顿大餐");

}else {
document.write("吃一顿大餐");
        }
```

### if...else if...else

```
var money = 61;
if (money > 100) {
document.write("吃两顿大餐");

}else if (money > 50) {
document.write("吃一顿大餐");

}else {
document.write("叫个外卖");
}
```

## True 和 False

在做if判断的时候，程序会判断给到的值是否符合条件（true/false），进而执行结果，相当于：
```
var b = true;
if (b) {
    document.write("Truth");
}
```

## 用 if 判断 + prompt(,)来做一个弹窗小游戏

```
var x = prompt("你比较喜欢湖人还是快船？", "湖人");
if (x == "湖人") {
    document.write("这么巧，我老公也最喜欢" + x );
} else if (x == "快船") {
    document.write( x  + "的确也还不错啦！");
} else document.write("我对" + x + "一般般啦！");
```

# if 的表妹：三元运算符

下面这种运算中，是对两个元素进行运算：
```
var x = 1 + 2;
```
当然，元素的范畴很广，也可以是下面这种情况：
```
var x = a + b;
```
那么以此类推，三元运算符是对三个元素的运算，通常会用下面的形式来表达：
```
var y = criteria ? Result_A : Result_B
```
注意其中的符号：
- 等号“=”：左边是定义变量的名称，最紧邻右边的是条件式；
- 问号“？”：问号表示对条件式的提问，？左边的条件有没有符合？
- 冒号“：”：如果成立，将冒号左边的结果赋值给变量，否则将冒号右边的结果赋值给变量。

让我们用公允地来决定谁来做家务！
```
var daysperweek = 7;
        var worker = daysperweek > 7 ? "汤晓莉" : "金长龙";
        document.write("今天谁来拖地，当然是" + worker);
```

# 数据类型和转换

js是一种弱类型的语言。所谓弱类型，是指你定义变量的时候，并不知道它是什么类型。  
相对的，强类型（比如C++）里，`int a = 1`，定义的时候已经给出了数据类型。  

 数据类型：  
- 原始类型：数字 Number、字符串 String、布尔值 Boolean、undefined。
- 对象 Object：把原始值进行多重组合。还有一个特殊的对象，`var a = null`，表示这是一个空的对象。
  - 系统自带的对象：数组、函数
  - 自定义 {}

## 数组

把原始类型数据按顺序排列好。
比如说，有三门课，考了60 61 62分。（把原始类型用逗号隔开）
```
var a = [60,61,62];
```
利用“下标”来访问数组里的值
```
a [0]
```
用自增的方式去访问数值，所以`a[0]`就是60 `a[1]`就是61 `a[2]`就是62。  
数组里面可以是任何类型的数据，包括字符串、布林值和对象。
```
var a = [0,"string",false]
```

## 自定义对象

```
var a1 = 60;
var a2 = 61;
var a3 = 62;
```
可以写成自定义对象的形式：
```
var a = {"a1":60, "a2":61, "a3":62}
```
这种情况需要这样访问：`a.a1` 就是60，以此类推。

```
var a = {0:60, 1:61, 2:62};
```
上面的情况怎么访问呢？和数组一样，用下标，`a[0]`。所以，数组其实是对象的一种简写。

## 查看对象类型

`typeof()`

## 数据的转换

字符串可以转换成数字，可以用`Number()`，比如
```
var a = "1111"
undefined
var b = Number(a);
undefined
b
1111
typeof(b)
"number"
```

数字转换为字符串：
```
a = 1
1
b = String(a);
"1"
typeof(b)
"string"
```

# 流程控制 Control Flow

- 条件判断 if
- 选择 switch
- 循环： for / while 循环

## if 
if (表达式/条件为真) 
{
    语句
}

```
var score = 79;
if (score >= 90) {
    console.log("奖励小猪佩奇");
}
else if (score >= 80){
    console.log("好好做暑假作业")
}
else {
    console.log("暑假上补习班");
}
```

## switch

`break` 跳转语句  
switch(表达式的值)  
```
{
    case 1: //如果值是1
        a = 1;
        b++;
        break; //跳出
    case 2: // 如果值是2
        a = 2 
        break;
    default: //如果值不是给出的任何一种，执行默认的结果
        a++;
        break;
}
```

```
var day = 2;
switch(day)
{
    case 1:
        console.log("星期一");
        break;
    case 2:
        console.log("星期二");
        break;
    case 3:
        console.log("星期三");
        break;
    default:
        console.log("放假，别上班了！")
        break;
}
```
如果 `day = 1`，而恰巧`case 1`后面没有加上`break`会怎么样呢？console log中会显示星期一和星期二。

## 循环

重复多次做一件事情。  


### for 循环

说10遍“我要100块”。  

```
for(var a = 1; a <= 10; a++)
{
    console.log(a + "我要100块钱！")
}
```

也可以将初始化`var a = 1`放到最上面，记得仍然要保留`for()`中的分号：
```
var a = 1;
for(; a <= 10; a = a + 1)
{
    console.log(a + "我要100块钱！")
}
```
也可以这么写：
```
var a = 1;
        for(; a <= 10; )
        {
            console.log(a + "我要100块钱！");
            a = a + 1;
        }
```
但是这两种写法就体现不出for循环写法的简便了。

### while 循环

```
var a = 1;
while(a <= 10)
{
    console.log(a + "我要500块钱！")
    a = a + 1;
}
```

和break一起使用:  
```
var a = 1;
while( true )
{
    console.log(a + "我要999块钱！");
    a = a + 1;
    if( a > 10)
    {
        break;
    }
}
var end;
```

和continue一起用:  
```
var a = 1;
while( true )
{
    console.log(a + "我要888块钱！");
    a = a + 1;
    if(a <= 10){
        continue;
    }
    break;
}
var end;
```

#### do...while...

先执行，再看条件决定要不要循环：  
```
var a = 1;
do {
    console.log(a + "我要777块钱！");
    a = a + 1;
}while(a <= 10);
```

# 函数及作用域

## 函数是什么？

为了实现代码的复用 (reuse)。把特定功能的语句打包放在一起。
- 形参
- 实参

## 函数的语法

```
function name (0~N个parameters){
    执行的语句
}
```
```
function chant() {
            for( var a = 1; a <= 10; a++){
            console.log(a + "好好学习，天天向上！");
            }
        }
        
        var time = 7;
        chant();

        var time = 12;
        chant();

        var time = 23;
        chant();
```

### 还可以中间更改函数名：

```
function chant() {
for( var a = 1; a <= 10; a++){
console.log(a + "好好学习，多买代言！");
}
}

var time = 7;
chant();

var change = chant;
change();
```

### 加入参数

定义参数后，可以通过参数控制循环的次数：  
```
//喊口号，喊num次。
function chant(num) {//这里是形参
    for( var a = 1; a <= num; a++){
    console.log(a + "好好学习，多买代言！");
    }
}

var time = 7;
//这里定义5次
chant(5); //这里是实参

var time = 7;
//这里定义8次
chant(8);
```

多个参数用逗号隔开。
```
function chant(num,time) {
    for( var a = 1; a <= num; a++){
    console.log(time + "点" + a + "好好学习，多买代言！");
    }
}

var time = 7;
chant(5,time);

var time = 12;
chant(8,time);
```

## 返回值 return

```
function add(x, y) { //函数的定义
    return x + y;
}

var rs = add(1, 2);
console.log("1+2 = " + rs); //函数的调用

var rs = add(3, 4);
console.log("3+4 = " + rs);

```
## 设置参数的默认值

在上面的例子中，可以看到定义函数里，有两个形参。如果后面的实参中其中一个没有指定，就会出现`undefined`。为了解决这个问题，可以为那个实参指定默认值。这样一来，如果是实参，就可以直接传入它，如果没有，就传入设定好的默认值，设定的方法是：
```
time = time || 8;
```
写成代码，就是下面的意思：
```
if(time == undefined)
time = 7;
```
上面的例子中，`||`为或者的意思，左边是说如果指定了参数，那么就是指定的值，否则就使用默认值7。具体应用到上面的例子中，是这样的：
```
function chant(num,time) {
    time = time || 8;
    for (var a = 1; a <= num; a++) {
        console.log(time + "点" + a + "好好学习，多买代言！");
    }
}
var time = 8;
chant (10);
```
## 动态参数

参数可以看做一组叫做“arguments”的数组，
```
var arguments -> [1,2,3,4,5];
x = argument[0];
y = argument[1];
...
```
具体的长度可以写成`argument.lenth`，从数组中取值写成变量就是`argument[i]`。`a+=b`也可以写成`a=a+b`。所以可以看到下面这样写了后，就能一直累加数组里的值，这就是动态参数。
```
function add() {
    var z = 0;
    for(var i = 0; i < arguments.length; i++){
        z += arguments[i];
    }
    return z;
}

var rs = add(1,2,3,4,5);
console.log(rs);
```

# 作用域

可访问变量的集合（包括对象和函数）。定义了一个变量，该变量可以被使用的地方，以及可以使用的范围。

在JS中，以函数来划分，作用域分为：
- 全局作用局，也叫做全局变量，在函数外定义的变量，在所有地方都能被访问到
- 局部作用域，也叫做局部变量，在函数内定义的变量，只能在定义变量的函数里面被访问到

全局变量和局部变量的名称冲突时，会互不影响。

在js中有一个特例，如果在函数中写了`y=100`，它会直接将y变成一个全局变量。
```
function add(){
    y = 100;
}
```

## 预解析

浏览器获得js文件的时候，不会立刻去执行代码，首先会全篇快速扫描一遍，将变量进行预解析。预解析会将变量的声明提前。函数体中的局部变量也会进行预解析。

***听是听懂了，不过不知道干嘛用***

# 闭包

为了解决变量的私有化问题。

### 全局变量和局部变量的的生命周期

只要页面不关闭，全局变量就会一直处于活跃的状态。  
而局部变量只局限于函数中，函数的大括号一结束，又重新回归到最初状态。

全局变量虽然可以让变量一直处于活跃的状态，但是因为所有人都能访问它、修改它，因此造成了它的不稳定性。这时候，就需要闭包介入到其中，完成私有化的操作。
```
function add(){
    var counter = 0;
    
    plus = function (){ //调用这个plus：
        counter++; // 没有加var，变成全局变量了，这样它就有全局变量的生命周期了
        console.log("counter = " + counter);
    }
}

add(); //counter的初始化

plus();

plus();

plus();
```

简写：
```
function add(){
    var counter = 0;
    
    var plus = function(){ //调用这个plus：
        counter++; 
        console.log("counter = " + counter);
    }
    return plus;
}

var plus = add(); //counter的初始化

plus();

plus();

plus();
```

继续简写：
```
function add(){
    var counter = 0;
    
    return function(){ 
        counter++; 
        console.log("counter = " + counter);
    }
}

var plus = add(); //counter的初始化

plus();

plus();

plus();
```

```
var plus = (function(){
    var counter = 0;
    
    return function(){ //调用这个plus：
        counter++; // 没有加var，变成全局变量了，这样它就有全局变量的生命周期了
        console.log("counter = " + counter);
    }
})();

plus();

plus();

plus();
```

# 对象的概念

函数：一堆语句的集合
对象：一堆变量和一堆函数的集合。
```
var obj1 = {
    x: 0,
    y: 1,
    z: function(){console.log("z fuc");},
    "first name": tang,
}
```
`x: 0,`整个一条叫做属性，格式是`名称: 值,`。属性名称的类型术语字符串，理论上应该写成`"x": 0,`，纯数字字母（不能以数字开始）的属性名称可以不加引号；如果包含了特殊字符，比如空格、连字符等，必须加上引号。比如`"first name": tang,`
对象的直接量

## 万物皆对象

直接量的书写方式：
```
 var person1 = {
    name: "xiaoming",
    sex: "male",
    age: "18",
    slogan: function() {
        for(var i = 0; i < 10; i++){
            console.log("who am i")
        }
    }
}
```
可以用类对写法进行优化，后面会介绍。  
类也分系统自带和自定义的。

## 对象中属性的基本操作

比如人的年龄，每年都会增加。对象的基本操作包括：增删改查。
- 增加
- 删除
- 修改属性的值
- 查：获取属性的值
- 遍历：把所有的属性逐一过一遍。

### 查

查很简单，以上面的例子为例：
- `person1.name`就能获取`xiaoming`
- `person1["name"]`
- 和变量结合使用`var name = person1.name`或者`var name = person1["age"]`。

注意：
如果属性名称本身包含特殊字符，必须用引号表示，那就不能用`.`的形式，比如如果人的属性里有`"first-name"`，那就不能用`person1.first-name`这种方式来获取属性值。

### 改

- `person1["name"] = "xiaoming2"`  
- `person1.name = "xiaoming2"`

### 增加

修改属性的时候，如果对象里面没有这条属性，就会自动增加。

- `person1.height = 170;`

### 删除

使用`delete`

`delete person1.name;`

如果一个对象里包含了对象。当使用`delete`语句后，只会断绝两者的关系，而不会删除信息。  
![删除对象](../images/object_delete.png)

### 遍历

`for( var pN in person1 )`  

```
for(pN in person1){
    console.log("person1的属性名：" + pN);
}
```

甚至能列出所有的值：
```
for(pN in person1){
    console.log("person1的属性名：" + pN + "值：" + person1[pN]);
}
```