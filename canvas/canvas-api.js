// canvas
<canvas id="myCanvas" width="300" height="300">你的浏览器不支持canvas,请升级你的浏览器</canvas>
// HTML5 <canvas> 标签用于绘制图像(通过脚本，通常是 JavaScript);
// canvas 元素本身并没有绘制能力(它仅仅是图形的容器);
// getContext() 方法可返回一个对象，该对象提供了用于在画布上绘图的方法和属性;

// fill -> 填充
var c=document.getElementById("myCanvas"); // 获取画布
var ctx=c.getContext("2d"); // 获取画笔
ctx.fillStyle="#0000ff"; // 填充颜色
ctx.fillRect(20,20,150,100); // 画矩形

// stroke -> 描边
var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
ctx.strokeStyle="#0000ff";
ctx.strokeRect(20,20,150,100);

//
context.rect(x,y,width,height); // 矩形左上角的 x 坐标,y 坐标  width: 矩形的宽度,height: 矩形的高度
// fill()	填充当前绘图（路径）
// stroke()	绘制已定义的路径
// beginPath()	起始一条路径，或重置当前路径
// moveTo()	把路径移动到画布中的指定点，不创建线条
// closePath()	创建从当前点回到起始点的路径
// lineTo()	添加一个新点，然后在画布中创建从该点到最后指定点的线条
// clip()	从原始画布剪切任意形状和尺寸的区域
// quadraticCurveTo()	创建二次贝塞尔曲线
// bezierCurveTo()	创建三次方贝塞尔曲线
// arc()	创建弧/曲线（用于创建圆形或部分圆）
// arcTo()	创建两切线之间的弧/曲线
// isPointInPath()	如果指定的点位于当前路径中，则返回 true，否则返回 false
// drawImage(img,x,y,w,h) 在img.onload 之后才能生效
