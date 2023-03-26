<script setup>
const onClickDetlis = (item) => {
	uni.navigateTo({
		url: `/pages/mmDetails/mmDetails?id=${item}`
	})
}
</script>
<template>
	<view class="mm waterfall-content tabber-content-list">
		<view v-for="(item,index) in 200" :key="index" class="waterfall-content-list" @click="onClickDetlis(item)">
			<view class="icon-comment">
				<text class="iconfont icon-pinglun1"><text class="icon-count-num">10</text></text>
				<image lazy-load src="https://img.yzcdn.cn/vant/cat.jpeg" />
			</view>
			<view class="list-text van-ellipsis waterfall-content-list-text list-text-gress">
				组件默认宽度 320px、高度 240px；app-nvue平台，暂时默认为屏幕宽度、高度 240px；h5平台，暂时默认为屏幕宽度、高度 240px
			</view>
			<view class="icon-count">
				<text class="iconfont icon-liulan"><text class="icon-count-num">10</text></text>
				<text class="iconfont icon-shoucang"><text class="icon-count-num">10</text></text>
			</view>
		</view>
	</view>
</template>



<style lang="scss" scoped>
@import "~@/static/style/pub.scss";
.iconfont{
	font-size: 28rpx;
}
.icon-pinglun1{
	position: absolute;
	top:0;
	right: 0;
	z-index: 12;
	color: #fff;
}
</style>
