
<script setup>
import useList from "@/hooks/useList";
const { list, onSearch, onCancel,search}=useList()
</script>
<template>
	<van-sticky>
	<van-search
		v-model="search"
		:show-action="search.length"
		placeholder="请输入想要搜索的内容"
		@search="onSearch"
		@cancel="onCancel"
	/>
	</van-sticky>
</template>

<style lang="scss">
</style>
