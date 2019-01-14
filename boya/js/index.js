// 轮播图js  原理是图片运用背景图片切换  按钮切换
// 获取元素
var lunbo = document.querySelectorAll(".lunbo-img");
var lunboImg = document.querySelectorAll(".lunbo-img ul li");
var lunboBtn = document.querySelectorAll(".lunbo-btn button");
// console.log(lunboBtn)
// 定义变量存下标
var index = 0;
//鼠标点击单个按钮实现的切换效果
for(let i = 0; i < lunboBtn.length; i++){
    lunboBtn[i].onclick =function(){
        changeImg(i);
    }
}
// 封装切换图片的函数
function changeImg(currentIndex){
     //获取当前下标
     index = currentIndex;
     // 检测是否到达最右边的图片
     if( index >= lunboImg.length){
         index = 0;
     }
     // 检测是否到达最左边的图片
     if( index < 0){
         index = lunboImg.length-1;
     }
     // 清除元素所有样式
   for(let j=0;j<lunboImg.length;j++){
        lunboImg[j].style.opacity="0";
        lunboBtn[j].style.opacity="0.5";
    }
    // 当前需要显示的图片
    lunboImg[index].style.opacity="1";
    lunboBtn[index].style.opacity="1";
  }
   // 封装函数实现自动播放
    function autoPlay(){
        timer = setInterval(function(){
            index++;
            changeImg(index);
        },3000)
    }
    autoPlay();
    lunbo.onmouseover = function(){
        clearInterval(timer);
    }
