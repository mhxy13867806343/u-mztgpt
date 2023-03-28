<script setup>
</script>

<template>
	<view class="level">
		<view class="level-home icon-count">
			<image lazy-load src="https://img.yzcdn.cn/vant/cat.jpeg" />
			<view class="auth">作者xxxxx <view>lv <text class="num">3</text>共<text class="start">1110</text>/<text class="end">3000</text></view></view>
		</view>
	</view>
</template>


<style lang="scss" scoped>
.level{
	margin: 5% 0;
	padding: 0 32rpx;
	.icon-count{
		justify-content: flex-start;
		align-items: center;
		
		.auth{
			font-size: 24rpx;
			color: #9f9f9f;
			padding-left: 21rpx;
			uni-view{
				font-size: 20rpx;
				color: #9f9f9f;
				.num{
					font-size: 30rpx;
					color: #000000;
					padding-right: 8rpx;
				}
				.start{
					color: #9f9f9f;
				}
				.end{
					color: #f33434;
				}
				.end,.start{
			
					font-size: 24rpx;
				}
			}
		}
	}
}
uni-image{
	width: 70rpx;
	height:70rpx;
}
</style>
