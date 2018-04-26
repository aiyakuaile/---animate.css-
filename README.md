# ---animate.css-
简书地址：https://www.jianshu.com/p/b93b9717b87c

微信有自己开发的专门用来做动画的API，简单点的动画（旋转，平移，缩放）用自带的就可以了，今天我用的是CSS3的一个动画库，
>[animate.css](https://daneden.me/animate/)是一个使用CSS3的[animation](http://www.cnblogs.com/xiaohuochai/p/5391663.html)制作的动画效果的CSS集合，里面预设了很多种常用的动画，且使用非常简单。

稍微动动就可以用的小程序上，简直完美！！！

![效果图.gif](https://upload-images.jianshu.io/upload_images/1482470-22689c2ee96b1857.gif?imageMogr2/auto-orient/strip)

#使用方法：
#1.把`animate.wxss`文件放进工程中，在`app.wxss`中引入
```
@import "文件路径/animate.wxss";
```
#2.需要加动画的标签设置如下
```
<view>
<text class='animated bounce'>微信小程序</text>
</view>
```
>如果需要重复动画效果，只需要加上`infinite`
```
<view>
<text class='animated bounce infinite'>微信小程序</text>
</view>
```
>**解释**：`animated`必须要写，这样才能真正使用， `bounce`是`animate.wxss`的其中一个动画,你可以选择你需要的动画，当然了，你也可以修改动画的参数来满足项目中的需求！！！

#3.可以通过`*.js`中动态改变动画效果
```
//.wxml
<view class='containView'>
<text class='{{animationType}}'>微信小程序</text>
</view>

//.js
/**
   * 页面的初始数据
   */
  data: {
    animationType:"animated bounce" //初始的动画效果
  }

  //按钮点击
  clickBtn:function(){
    // "animated bounce infinite"
      this.setData({
        animationType: "animated " + 动画名称  //别忘了加空格
      })
}
这样就实现了动画改变，是不是很简单呀！！！
```
#5.参考资料
>animate.css官网:https://daneden.me/animate/


