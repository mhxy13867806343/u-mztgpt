<script setup>
const show=ref(false)
const actions=ref([
	{ name: '清空的内容', color: '#ee0a24',value:1 },
])
const onClickSelect=(action)=>{
	if(action.value===1){
		console.log('清空的内容')
	}
}
</script>

<template>
	<MList :list="[]" />
	<van-back-top :bottom="80"/>
	<van-divider>仅展示近24小时内容</van-divider>
	<view class="clear text-center" @click="show=true">清空已查看的内容</view>
	<van-action-sheet
		v-model:show="show"
		:actions="actions"
		cancel-text="取消"
		close-on-click-action
		@select="onClickSelect"
		@cancel="show=false"
	/>
</template>


<style lang="scss" scoped>
.clear{
	font-size: 24rpx;
	color: #75b7ff;
	padding-bottom: 20rpx;
	display: block;
}
</style>
