<script setup>
defineProps({
	data:{
		type:Array,
		default:()=>[]
	}
})
</script>
<template>
<view class="chat">
	<van-cell-group inset :title="`共${data.length}条记录`">
		<scroll-view  scroll-y="true" class="scroll-Y">
			<van-cell center :value="`${item+1}1111111111111111111111123123231212123121321231212`"
			          v-for="(item,index) in 10" :key="index"
			/>
		
		</scroll-view>
	</van-cell-group>

</view>
</template>

<style scoped lang="scss">
@import "../chat.scss";
</style>
