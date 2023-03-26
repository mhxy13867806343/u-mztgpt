
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
			<view class="comment-item">
				<view class="comment-item-left">
					<img src="https://img.yzcdn.cn/vant/cat.jpeg">
				</view>
				<view class="comment-item-right">
					<view class="comment-item-right-top">
						<view class="comment-item-auth">
							<text>作者信息</text>
							<text>回复</text>
						</view>
						<view class="comment-item-cb">这里我们也需要给她加上安全距离，加上上面的.savepadding</view>
						<view>共10条评论 &gt;</view>
					</view>
					<view class="comment-item-right-bot">
						<view class="comment-item-right-avater">
							<img src="https://img.yzcdn.cn/vant/cat.jpeg">
						</view>
						<view class="comment-item-auth">
							<text>作者信息</text>
							<text>回复</text>
						</view>
						<view class="comment-item-cb">这里我们也需要给她加上安全距离，加上上面的.savepadding</view>
					</view>
					
				</view>
			</view>
		</view>
	</view>
</template>

<style lang="scss">
</style>
