// var p1 = document.getElementById("p1");
// console.log(p1);

// 通过标签名称来查找节点，获取到的是一组数组
// var ps = document.getElementsByTagName("p");

// 既然是一组数组，就可以通过下面的命令访问数组里的内容
// var p1 = ps[0];

//通过class来获取节点，无论节点有多少个class，都能找到。
// var ps = document.getElementsByClassName("txt1");
// var p1 = ps[0];

// var div1 = document.getElementById("div1");
// //在标签节点下通过Class查找节点
// var ps = div1.getElementsByClassName("txt1");

// var div1 = document.getElementById("div1");

//创建一个p标签
// var p = document.createElement("p");



//创建文本节点
// var p1txt = document.createTextNode("我是一个段落");

// p.appendChild(p1txt);

// //添加节点
// div1.appendChild(p);

// //删除id为div2

// var div2 = document.getElementById("div2");
// div1.removeChild(div2);

//自己干掉自己
// div2.parentNode.removeChild(div2);

// var img1 = document.getElementById("img1");

//class在js里面是类的关键词，所以不能作为属性进行使用，强制要求将“Class”改成“ClassName”



//获取属性


// var div1 = document.getElementById("div1");

// var p1 = document.getElementById("p1");

num = 0;
function add(){
    console.log("点击： "+ ++num);
}

var div1 = document.getElementById("div1");
div1.onclick = add;
div1.onclick = null;