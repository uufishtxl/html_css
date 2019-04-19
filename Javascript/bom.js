//获取DOM树的节点，这时候还在JS脚本阶段，DOM树中还没生成这两个节点，所以都是null。
// var n = document.getElementById("div1");
// console.log(n);
// n = document.getElementById("div2");
// console.log(n);


// DOM BOM
// window 对象 -> 全局对象，全局的方法
// window 可以省略
// console.log(window.cc);
// var cc =100;
// console.log(window.cc);


// BOM
// 弹窗 -> 浏览器的弹窗
// 弹窗是由浏览器定义的
//同步的：会阻断进程
// alert("alert弹窗");
//当然也可以写成window.alert("alert弹窗");

// var bcf = confirm("confirm 弹窗");
// console.log("点击了：" + bcf);
//就可以根据用户的反馈进行判断，如果是true，怎么样，如果是false，怎么样。


// var strpt = prompt("prompt 输入", "默认是朱一龙");
// console.log("填写了" + strpt);

//获取浏览器的导航信息
//window.location对象
//刷新页面的功能 location.reload
//打开新页面的功能 location.replace("http://www.baidu.com")

// var bcf = confirm("confirm 弹窗")
// if( bcf ) {
//     location.replace("http://www.baidu.com")
// }
// else location.reload();


//浏览器的历史：前进 后退
// history.back()
// history.forward()
// history.go()

//浏览器的信息：版本 厂家
// navigator

// 获取浏览器的分辨率
// screen

// 计时器
// 循环执行：var sil = setInterval(函数名,时间); > 每隔一定时间执行函数
    // 停掉：   clearInterval(sil)；
// 执行一次：var sil =setTimeout(函数名,时间) > 等待到这个时间后，执行这个函数
// 强制停掉  clearTimeout(sil);

var num = 0;
function add(){
    console.log("num = " + ++num);
}
var sil = setInterval(add,1000);

function end(){
    clearInterval(sil);
}

setTimeout(end,10000);