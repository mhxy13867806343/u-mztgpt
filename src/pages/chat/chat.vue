<script setup>
const showPopover=ref(false)
const actionsPopList=ref([
	{
		text: '查看你当前所使用的key',
		icon: 'icon-liulan',
		isLook:true
	},
	{
		text: '切换key',
		icon: 'icon-key',
		isToggle:true
	},
	{
		text: '保存key聊天记录到本地',
		icon: 'icon-xiazai',
		isDown:true
	},
	{
		text:'删除key和聊天记录',
		icon:'icon-shanchu',
		isel:true
	},
	{
		text:'查看您当前的等级',
		icon:'icon-dengji',
		url:'/pages/level/level',
		isUrl:true
	}
])
</script>

<template>
	<van-nav-bar  placeholder fixed>
		<template #right>
			<van-popover
				placement="left-start"
				v-model:show="showPopover" theme="dark">
				<template #reference>
					<text class="iconfont icon-menu"></text>
				</template>
				<van-cell
					:title-style="{paddingLeft:'20rpx'}"
					center :title="item.text"  v-for="(item,index) in actionsPopList" :key="index">
					<template #icon>
						<text class="iconfont" :class="item.icon"></text>
					</template>
				</van-cell>
			
			</van-popover>
	
		</template>
	</van-nav-bar>
	<view>
		chat
	</view>
</template>


<style lang="scss" scoped>
.van-cell--center {
	background: #1c1c1e;
	color: #fff;
}
</style>
