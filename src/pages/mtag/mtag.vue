<script setup>
</script>
<template>
	<view v-for="(item,index) in 10" :key="index" class="icon-count">
        <view class="icon-comment">
            <image lazy-load src="https://img.yzcdn.cn/vant/cat.jpeg" />
        </view>
        <view class="iconfont">
            组件默认宽度 320px、高度 240px；app-nvue平台，暂时默认为屏幕宽度、高度 240px；h5平台，暂时默认为屏幕宽度、高度 240px
        </view>
	</view>
</template>



<style lang="scss" scoped>
@import "~@/static/style/pub.scss";
.icon-count{
  padding: 30rpx;
}
uni-image{
  width: 300rpx;
}
.iconfont{
 padding: 20rpx;
}
</style>
