<script setup>
import {showToast,showNotify} from "vant";

defineProps({
	data:{
		type:Array,
		default:()=>[]
	}
})
const emit=defineEmits(['change'])
const checked=ref('')
const onClickRadio=item=>{
	checked.value=item
	emit('change',item)
}
const onClickSelect=()=>{
	if(!checked.value){
		showNotify({
			message: '请选择一个key',
			color: '#ad0000',
			background: '#ffe1e1',
		});
		return
	}
	emit('change',checked.value)
}
defineExpose({
	onClickRadio
})
</script>
<template>
	<view class="chat">
		<view class="text-right o-select">
			<van-button type="primary" size="mini" @click="onClickSelect">选择</van-button>
		</view>
		<van-radio-group v-model="checked">
		<van-cell-group inset :title="`共${data.length}条记录`">
			<scroll-view  scroll-y="true" class="scroll-Y">
				<van-cell class="van-cell--clickable-radio" clickable center :value="`${item+1}1111111111111111111111123123231212123121321231212`"
				          v-for="(item,index) in 10" :key="index"
				          @click="onClickRadio(item)"
				>
					<template #icon>
						<van-radio shape="square" checked-color="#ee0a24" :name="item" icon-size="30rpx"/>
					</template>
				</van-cell>
			
			</scroll-view>
		</van-cell-group>
		</van-radio-group>
	</view>
</template>

<style scoped lang="scss">
@import "../chat.scss";
.o-select{
	padding-right: 30rpx;
}
</style>
