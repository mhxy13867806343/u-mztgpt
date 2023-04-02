
<script setup>
	const navList=ref([
		{
			name:'社区',
			list:[
				{
					name:'github',
					url:'https://github.com/'
				},
				{
					name:'码云',
					url:'https://gitee.com/'
				},
				{
					name:'稀土掘金',
					url:'https://juejin.cn/'
				}
			]
		},
		{
			name:'es6+',
			list:[
				{
					name:'es6文档',
					url:'https://es6.ruanyifeng.com/'
				}
			]
		},
		{
			name:'nginx',
			list:[
				{
					name:'nginx文档',
					url:'https://blog.redis.com.cn/doc/'
				}
			]
		},
		{
			name:'工具集',
			list:[
				{
					name:'ai导航/工具',
					url:'https://ai-bot.cn/'
				}
			]
		},
		{
			name:'妹子图数据',
			list:[
				{
					name:'妹子图 – 绝对领域',
					url:'https://www.ababbb.com/ymm/mzt'
				},
				{
					name:'福利兔-快跟福利兔许个愿吧（*＾-＾*）',
					url:'https://www.fulitu.cc/?iui.su'
				},
				{
					name:'妹子图 | 逗包儿-Page 24',
					url:'https://www.doubor.com/tag/mei-zi-tu/page/24/'
				},
				{
					name:'妹子图壁纸图片大全-靓丽图库',
					url:'https://m.75ll.com/t-%E5%A6%B9%E5%AD%90%E5%9B%BE/list-5.html'
				}
			]
		},
		{
			name:'前端框架',
			list:[
				{
					name:'Vue3中文文档',
					url:'https://cn.vuejs.org/'
				},
				{
					name:'uniapp文档',
					url:'https://uniapp.dcloud.net.cn/'
				}
			]
		},
		{
			name:'娱乐',
			list:[
				{
					name:'哔哩哔哩 (゜-゜)つロ 干杯~-bilibili',
					url:'https://www.bilibili.com/'
				}
			]
		}
	])
</script>
<template>
	<van-cell-group inset :title="item.name" v-for="(item,index) in navList" :key="index">
	  <van-cell
	   v-for="(item1,index1) in item.list" :key="index1"  :value="item1.name" is-link center
	   :url="item1.url"
	   />
	</van-cell-group>
</template>


<style lang="scss" scoped>

</style>
