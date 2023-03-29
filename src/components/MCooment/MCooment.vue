
<script setup>
defineProps({
	list: {
		type: Array,
		default: () => []
	},
})
const onClickDetails=(id)=>{
	uni.navigateTo({
		url: `/pages/mmDetailsMore/mmDetailsMore?id=${id}`
	})
}
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
						<view class="comment-text-count-num" @click="onClickDetails(1)">共10条评论 &gt;</view>
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
@import "~@/static/style/comment.scss";
</style>
