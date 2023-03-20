<script setup>
const navList=ref([
	{
		list:[
			{
				icon: 'icon-shoucang',
				text: '收藏',
				path: '/pages/collection/collection'
			},
			{
				icon: 'icon-liulan',
				text: '浏览',
				path: '/pages/browse/browse'
			},
			{
				icon: 'icon-pinglun',
				text: '评论',
				path: '/pages/comments/comments'
			},
		]
	}
])
</script>

<template>
	<van-cell-group inset v-for="(item,index) in navList" :key="index">
		<van-cell :title="item1.text" :value="item1.value||''" is-link center v-for="(item1,index1) in item.list" :key="index1"
		          :to="item1.path"
		          :title-style="{paddingLeft:'20rpx'}"
		>
			<template #icon>
				<text class="iconfont" :class="item1.icon"></text>
			</template>
		</van-cell>
	</van-cell-group>
</template>


<style lang="scss" scoped>

</style>
