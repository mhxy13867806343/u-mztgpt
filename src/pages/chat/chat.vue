<script setup>
import useForm from '@/hooks/useForm'
const {token,isLoginShow}=useForm()
import adds from '@/components/Chat/adds/adds'
import look from '@/components/Chat/look/look'
import toggle from '@/components/Chat/toggle/toggle'
import save from '@/components/Chat/save/save'
import dels from '@/components/Chat/dels/dels'
import levels from '@/components/Chat/levels/levels'
import {showNotify} from "vant";
const showPopover=ref(false)
const showCenter=ref(false)
const typePopValue=ref(-1)//0添加key,1查看key,2切换key,3保存聊天记录,4删除key和聊天记录,5查看等级
const qinput=ref('');//
const isDisabled=ref(false)
const actionsPopList=ref([
	{
		text:'添加key',
		icon:'icon-tianjia',
		isAdd:true,
		value:0,
		component:adds,
		isDisabled:false
	},
	{
		text: '查看你当前所使用的key',
		icon: 'icon-liulan',
		isLook:true,
		value:1,
		component:look,
		isDisabled:true
	},
	{
		text: '切换key',
		icon: 'icon-key',
		isToggle:true,
		value:2,
		component:toggle,
		isDisabled:true
	},
	{
		text: '保存key聊天记录到本地',
		icon: 'icon-xiazai',
		isDown:true,
		value:3,
		component:save,
		isDisabled:true
	},
	{
		text:'删除key和聊天记录',
		icon:'icon-shanchu',
		isel:true,
		value:4,
		component:dels,
		isDisabled:true
	},
	{
		text:'查看您当前的等级',
		icon:'icon-dengji',
		url:'/pages/level/level',
		isUrl:true,
		value:5,
		component:levels
	}
])
const onClickPop=item=>{
	if(item.isDisabled){
		showNotify({
			message: `请先添加key,暂无法使用此功能`,
			color: '#fff',
			background: 'var(--van-notify-danger-background)',
			duration: 1500,
		})
		return
	}
	typePopValue.value=item.value
	showCenter.value=true
	showPopover.value=false
}
</script>

<template>
	<van-nav-bar  placeholder fixed title="透视">
		<template #right v-if="token">
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
    <m-login :show="isLoginShow" />
	<van-popup teleport="#app"  v-model:show="showCenter" round :style="{ width:'91%' }">
		<view class="tel-pop">
			<component :is="actionsPopList[typePopValue].component"
			@click-levels="showCenter=false"
			></component>
		</view>
	</van-popup>
	
	<view class="chat-home">
		<view class="chat-q-input icon-count flex-start">
			<view>
				<image src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"></image>
			</view>
			<view class="chat-q-content">
				vue3 嵌套el-table拖拽解决 使用sortablejs处理的
			</view>
		</view>
		<view class="chat-q icon-count flex-start">
			<view>
				<image src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"></image>
			</view>
			<view class="chat-q-content">
				vue3 嵌套el-table拖拽解决 使用sortablejs处理的
				vue3 嵌套el-table拖拽解决 使用sortablejs处理的
				vue3 嵌套el-table拖拽解决 使用sortablejs处理的
				vue3 嵌套el-table拖拽解决 使用sortablejs处理的
				vue3 嵌套el-table拖拽解决 使用sortablejs处理的
				vue3 嵌套el-table拖拽解决 使用sortablejs处理的
				vue3 嵌套el-table拖拽解决 使用sortablejs处理的
				vue3 嵌套el-table拖拽解决 使用sortablejs处理的
				vue3 嵌套el-table拖拽解决 使用sortablejs处理的
			</view>
		</view>
	</view>
	<view class="filed-bot tabber-content-list">
		<van-field clearable v-model="qinput" :disabled="isDisabled" placeholder="请输入你想要问的内容吧">
			<template #button v-if="qinput.length">
				<van-icon name="guide-o" />
			</template>
		</van-field>
	</view>
	<van-back-top />

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
.chat-home{
	padding:0 20rpx;
	uni-image{
		width: 50rpx;
		height: 50rpx;
	}
	.chat-q-input{
		margin-bottom: 20rpx;
		padding:12rpx;
	}
	.chat-q{
		background-color: rgb(230 230 230);
		padding:12rpx;
		
		
	}
	.chat-q-content{
		padding-left: 20rpx;
		font-size: 28rpx;
	}
}
.filed-bot{
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
}
</style>
