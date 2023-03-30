<script setup>
import useForm from '@/hooks/useForm'
const {isLoginShow}=useForm()
import useComment from '@/hooks/useComment'
const { contentDetailsRef,commentInput,
	sendText,
	sendTextLen,
	isCommentShow,
	onInputBoxClear,placeholder}=useComment()
</script>
<template>
    <m-login :show="isLoginShow" />
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
						</view>
						<view class="comment-item-cb">这里我们也需要给她加上安全距离，加上上面的.savepadding</view>
                        <view class="list-text iconfont icon-shijian"><text class="icon-count-num">2023-1-2</text></view>
					</view>
				
				</view>
			</view>
		</view>
	</view>
	<van-divider />
	<view class="comment-w-main">
		<view class="comment-count-num">
			<text class="comment-count-num-text">共10条评论</text>
			<text class="comment-count-num-text">10个赞</text>
		
		</view>
		<view class="comment-list">
			<view class="comment-list-item icon-count">
				<view class="comment-item-left">
					<image src="https://img.yzcdn.cn/vant/cat.jpeg"  class="avater-comment"/>
				</view>
				<view class="comment-item-right">
					<view class="comment-item-right-top">
						<view class="comment-item-auth icon-count">
							<text class="comment-item-auth-nick">作者信息</text>
							<text class="comment-item-auth-reply" >
								<text @click="isCommentShow=true">回复</text>
								  <text class="iconfont icon-dianzan"></text>10</text>
						</view>
						<view class="comment-item-cb">这里我们也需要给她加上安全距离，加上上面的.savepadding</view>
                        <view class="list-text iconfont icon-shijian"><text class="icon-count-num">2023-1-2</text></view>
					</view>
				</view>
			</view>
		</view>
	</view>
	<view class="comment-bot-fixed">
		<van-field
			v-model="commentInput"
			readonly
			@click="isCommentShow=true"
			center
			clearable :placeholder="placeholder"/>
	</view>
	<van-popup
		v-model:show="isCommentShow"
		position="bottom"
	
	>
		<view class="edit-input-comment">
			<Emoji  v-model:inputBox="sendText" v-model:inputLen="sendTextLen"
			        @clear="onInputBoxClear"
			
			
			/>
		</view>
	</van-popup>
</template>



<style lang="scss" scoped>
@import "~@/static/style/comment.scss";
.comment-list{
  padding: 20rpx 0;
}
</style>
