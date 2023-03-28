<script setup>
import {showConfirmDialog, showFailToast, showSuccessToast,showNotify} from 'vant';
defineProps({
	data:{
		type:Array,
		default:()=>[]
	}
})
const emit=defineEmits(['click'])
//共用的配置
const dataNotify = {
	duration: 1000,
	color:'#fff',
}
const onClickBefore=(item)=>{
	showConfirmDialog({
		width:'85%',
		title: '提示',
		message: '确定删除此token key？',
		theme: 'round-button',
		beforeClose: (action) =>
			new Promise((resolve) => {
				setTimeout(() => {
					if (action === 'confirm') {
						resolve(true);
					} else {
						// 拦截取消操作
						resolve(false);
						showNotify({ ...dataNotify,type: 'warning', message: '已取消删除',background:'var(--van-warning-color)' });
						
					}
				}, 1000);
			}),
	}) .then(() => {
		showNotify({ ...dataNotify,type: 'success', message: '删除成功',  background: 'var(--van-success-color)', });
		emit('click',item)
	}).catch(() => {
		showNotify({ ...dataNotify,type: 'warning', message: '已取消删除',background:'var(--van-warning-color)' });
	});
}
</script>
<template>
	<view class="chat">
		<van-cell-group inset :title="`共${data.length}条记录`">
			<van-swipe-cell   v-for="(item,index) in 10" :key="index">
				<van-cell class="van-cell--clickable-radio" clickable center :value="`${item+1}1111111111111111111111123123231212123121321231212`"
				
				>
				</van-cell>
				<template #right>
					<van-button square type="danger" text="删除"  @click="onClickBefore(item)"/>
				</template>
			</van-swipe-cell>
		</van-cell-group>
	
	</view>
</template>

<style scoped lang="scss">
@import "../chat.scss";
</style>
