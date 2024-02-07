//ES6 导入语法
import $ from "jquery";
//导入li自定义样式
import "./css/index.css"
//导入 ul li自定义less样式
import "./css/index.less"
//导入 图片
import edge from "./images/edge.png"
$('.box').attr('src',edge)


$(function(){
    $('li:odd').css('background-color','green')
    $('li:even').css('background-color','pink')
})

//js 高级语法
//定义一个方法装饰器 并内部属性赋值
function info(target){
    target.info = 'person info'
}

//定义类中加载使用info装饰器
@info
class person{}

//打印输出类内部属性值
console.log(person.info)