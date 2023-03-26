<script setup>
const list=ref([
	{
		url: 'https://img.yzcdn.cn/vant/cat.jpeg',
	},
	{
		url: 'https://img.yzcdn.cn/vant/cat.jpeg',
	},
	{
		url: 'https://img.yzcdn.cn/vant/cat.jpeg',
	},
	{
		url: 'https://img.yzcdn.cn/vant/cat.jpeg',
	},
	{
		url: 'https://img.yzcdn.cn/vant/cat.jpeg',
	},
	{
		url: 'https://img.yzcdn.cn/vant/cat.jpeg',
	},
	{
		url: 'https://img.yzcdn.cn/vant/cat.jpeg',
	},
	{
		url: 'https://img.yzcdn.cn/vant/cat.jpeg',
	}
])//列表数据
const current=ref(0)//当前索引
const contentDetailsRef=ref(null)//内容详情
const scrollYRef=ref(null)//内容详情
const activeName=ref(0)//tabber切换
const stickyRef=ref(0)//粘性布局
const stickyRefNum=ref(0)//粘性布局
const isT=ref(false)//是否接触到了
const popMenuShow=ref(true)//是否显示弹出菜单
const showShare=ref(false)//是否显示分享
const optionsShare=ref([
	{ name: '微信', icon: 'wechat' },
	{ name: '微博', icon: 'weibo' },
	{ name: '复制链接', icon: 'link' },
	{ name: '分享海报', icon: 'poster' },
	{ name: '二维码', icon: 'qrcode' },
])//分享选项
const fabContentList=ref([
	{
		iconPath: '/static/bgs/shoucang.png',
		selectedIconPath: '/static/bgs/shoucang-copy.png',
		text: '收藏',
		active: false
	},
	{
		iconPath: '/static/bgs/fenxiang.png',
		selectedIconPath: '/static/bgs/fenxiang-copy.png',
		text: '分享',
		active: false
	}
])

onMounted(()=>{
	const _contentDetailsRef=contentDetailsRef.value
	stickyRef.value=_contentDetailsRef.$el.clientHeight
	uni.getSystemInfo({
		success:res=>{
			const vanSticky=document.querySelector('.van-tabs__nav')
			stickyRefNum.value=res.windowHeight-vanSticky.clientHeight
		}
	});
})
onPageScroll(e=>{
	if(e.scrollTop>=stickyRef.value){
		isT.value=true
	}
	if(e.scrollTop===0){
		isT.value=false
	}
})
// 下载图片
const onClickDown=url=>{
	console.log(url)
}
const onClickTrigger=({index,item})=> {
	console.log(index,item)

	const list =fabContentList.value
	list[index].active = !list[index].active
	if(index===0){
		item.text = item.active ? '已收藏' : '收藏'
	}if(index==1){
		showShare.value = true
		popMenuShow.value=false
	}
	

}
const onClickClose=()=>{
	showShare.value = false;
	popMenuShow.value=true
}
// 分享
const onClickSelect = (option) => {
	console.log(option)
	showShare.value = false;
	popMenuShow.value=true
};
</script>
<template>
	<view class="content-details" ref="contentDetailsRef">
	
		<view class="content-details-scroll">
			<swiper class="swiper" circular indicator-dots autoplay
			        :current="current"
			        :current-item-id="`#item-${current}`"
			        indicator-active-color="#fff"
			        :display-multiple-items="1"
			        :duration="1000" :interval="5000">
				<swiper-item v-for="(item,index) in list" :key="index">
					<text class="iconfont icon-yunxiazai_o" @click.stop="onClickDown(item.url)"></text>
					<image :src="item.url" />
				</swiper-item>
			</swiper>
		</view>
		<van-divider>详情内容</van-divider>
		<view class="list-text waterfall-content-list-text list-text-gress">
			组件默认宽度 320px、高度 240px；app-nvue平台，暂时默认为屏幕宽度、高度 240px；h5平台，暂时默认为屏幕宽度、高度 240px
		</view>
		<van-divider>详情结束</van-divider>
	</view>
	<van-sticky>
		<view class="v-comment-top">
			<van-tabs v-model:active="activeName" shrink animated swipeable>
				<van-tab>
					<template #title>
						<view class="icon-count icon-tabs">
							<view class="icon-comment">
								<text>评论<text class="icon-count-num1">10</text></text>
							</view>
						</view>
					</template>
					<scroll-view  scroll-y  class="scroll-Y"
					              ref="scrollYRef"
					              :style="{height:isT?(stickyRefNum+'px'):'auto'}"
					
					>
<!--						<MCooment :list="[]"/>-->
						<van-empty image-size="40" description="暂无评论" />
					</scroll-view>
				</van-tab>
			</van-tabs>
			<view class="v-comments" v-if="activeName===0">写评论</view>
		</view>
	</van-sticky>
	<uni-fab ref="fab"  :content="fabContentList" horizontal="right" vertical="bottom"
	         @trigger="onClickTrigger" :popMenu="popMenuShow" />
	<van-share-sheet
		v-model:show="showShare"
		title="立即分享给好友"
		:options="optionsShare"
		@select="onClickSelect"
		@close="onClickClose"
		@cancel="onClickClose"
	/>
</template>



<style lang="scss" scoped>
@import "~@/static/style/pub.scss";
.content-details{
	.list-text{
		padding: 0 30rpx;
	}
	.swiper{
		position: relative;
		.icon-yunxiazai_o{
			position: absolute;
			right: 10rpx;
			top:10rpx;
			z-index: 12;
			color: #fff;
		}
	}
}
.v-comment-top{
	position: relative;
	.v-comments{
		position: absolute;
		right: 20rpx;
		font-size: 24rpx;
		top: 10%;
		transform: translate(0, 10%);
	}
}

</style>
