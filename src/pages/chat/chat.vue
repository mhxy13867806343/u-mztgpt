<script setup>
const showPopover=ref(false)
const showCenter=ref(false)
const typePopValue=ref(-1)
const actionsPopList=ref([
	{
		text: '查看你当前所使用的key',
		icon: 'icon-liulan',
		isLook:true,
		value:1,
	},
	{
		text: '切换key',
		icon: 'icon-key',
		isToggle:true,
		value:2
	},
	{
		text: '保存key聊天记录到本地',
		icon: 'icon-xiazai',
		isDown:true,
		value:3
	},
	{
		text:'删除key和聊天记录',
		icon:'icon-shanchu',
		isel:true,
		value:4
	},
	{
		text:'查看您当前的等级',
		icon:'icon-dengji',
		url:'/pages/level/level',
		isUrl:true,
		value:5
	}
])
const onClickPop=item=>{
	
	typePopValue.value=item.value
	showCenter.value=true
	showPopover.value=false
}
</script>

<template>
	<van-nav-bar  placeholder fixed title="透视">
		<template #right>
			<van-popover
				placement="left-start"
				v-model:show="showPopover" theme="dark">
				<template #reference>
					<text class="iconfont icon-menu"></text>
				</template>
				<van-cell
					:title-style="{paddingLeft:'20rpx'}"
					center :title="item.text"  v-for="(item,index) in actionsPopList" :key="index"
				@click="onClickPop(item)"
				>
					<template #icon>
						<text class="iconfont" :class="item.icon"></text>
					</template>
				</van-cell>
			
			</van-popover>
	
		</template>
	</van-nav-bar>
	<van-popup teleport="#app"  v-model:show="showCenter" round :style="{ width:'91%' }">
		<view class="tel-pop">
			<look v-if="typePopValue===1"/>
			<toggle v-if="typePopValue===2"/>
			<save v-if="typePopValue===3"/>
			<dels v-if="typePopValue===4"/>
			<levels v-if="typePopValue===5"/>
		</view>
	</van-popup>
	
	<view>
		chat
	</view>
</template>


<style lang="scss" scoped>
.van-cell--center {
	background: #1c1c1e;
	color: #fff;
}
.tel-pop{
	height:auto;
	background: #fff;
}
</style>
