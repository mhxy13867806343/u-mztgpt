<script setup>
defineProps({
	data:{
		type:Array,
		default:()=>[]
	}
})
const emit=defineEmits(['change'])
const checked=ref('1')
const onClickRadio=item=>{
	checked.value=item
	emit('change',item)
}
defineExpose({
	onClickRadio
})
</script>
<template>
	<view class="chat">
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
</style>
