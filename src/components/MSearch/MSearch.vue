
<script setup>
import useList from "@/hooks/useList";
const { list, onSearch, onCancel,search}=useList()
</script>
<template>
	<van-sticky>
	<van-search
		v-model="search"
		:show-action="search.length"
		placeholder="请输入搜索关键词"
		@search="onSearch"
		@cancel="onCancel"
	/>
	</van-sticky>
</template>

<style lang="scss">
</style>
