
<script setup>
defineProps({
	list: {
		type: Array,
		default: () => []
	},
})
</script>
<template>
	<view class="comment">
		<view class="comment-list">
			<view class="comment-list-item icon-count">
				<view class="comment-item-left">
					<image src="https://img.yzcdn.cn/vant/cat.jpeg"  class="avater-comment"/>
				</view>
				<view class="comment-item-right">
					<view class="comment-item-right-top">
						<view class="comment-item-auth icon-count">
							<text class="comment-item-auth-nick">作者信息</text>
							<text class="comment-item-auth-reply">回复  <text class="iconfont icon-dianzan"></text>10</text>
						</view>
						<view class="comment-item-cb">这里我们也需要给她加上安全距离，加上上面的.savepadding</view>
						<view class="comment-text-count-num">共10条评论 &gt;</view>
					</view>
					<view class="comment-item-right-bot icon-count">
						<view class="comment-item-right-avater">
							<image src="https://img.yzcdn.cn/vant/cat.jpeg"  class="avater-comment"/>
						</view>
						<view class="comment-item-auth flex-1 icon-count">
							<text class="comment-item-auth-nick">作者信息</text>
							<text class="comment-item-auth-reply">回复
							   <text class="iconfont icon-dianzan"></text>10
							</text>
						</view>
						<view class="comment-item-cb">这里我们也需要给她加上安全距离，加上上面的.savepadding</view>
					</view>
					
				</view>
			</view>
		</view>
	</view>
</template>

<style lang="scss" scoped>
.comment{
	padding-top: 50rpx;
	.comment-list{
		.comment-list-item{
			padding:0 32rpx;
			.comment-item-left{}
			.comment-item-right{
				.comment-item-right-top{
					.comment-item-auth{
					
					}
					.comment-text-count-num{
						font-size: 22rpx;
						color: #999;
					}
				}
				.comment-item-right-bot{
					flex-wrap: wrap;
					justify-content: flex-start;
				}
				.comment-item-right-bot{
					margin: 10px 0;
				}
			}
			.comment-item-auth-nick{
				font-size: 26rpx;
			}
			.comment-item-auth-reply{
				font-size: 24rpx;
				.icon-dianzan{
					font-size: 24rpx;
					padding:0 4rpx 0 10rpx;
				}
			}
			.comment-item-auth-nick,.comment-item-auth-reply{
				color: #666;
			}
			.comment-item-cb{
				color: #777;
				font-size:24rpx;
				
			}
			.comment-text-count-num,.comment-item-cb{
				padding:14rpx 0;
			}
			.avater-comment{
				width: 50rpx;
				height: 50rpx;
				padding-right: 22rpx;
			}
		}
	}
}
</style>
