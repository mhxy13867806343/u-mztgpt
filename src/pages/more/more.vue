
<script setup>
    import useList from "@/hooks/useList";
    const {search}=useList()
	//导航
	const navList=ref([
		{
			name:'社区',
			checked:false,
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
				},
				{
					name:'开源中国',
					url:'https://www.oschina.net/'
				},
				{
					name:'开发者头条',
					url:'https://toutiao.io/'
				},
				{
					name:'segmentfault',
					url:'https://segmentfault.com/'
				},
				{
					name:'博客园',
					url:'https://www.cnblogs.com/'
				}
			]
		},
		{
            checked:false,
			name:'es6+',
			list:[
				{
					name:'es6文档',
					url:'https://es6.ruanyifeng.com/'
				},
				{
					name:'现代 JavaScript 教程',
					url:'https://zh.javascript.info/'
				}
			]
		},
		{
            checked:false,
			name:'api接口',
			list:[
				{
					name:'网易云音乐 NodeJS 版 API',
					url:'https://neteasecloudmusicapi-docs.4everland.app/#/'
				},
				{
					name:'lol英雄接口',
					url:'https://game.gtimg.cn/images/lol/act/img/js/heroList/hero_list.js?ts=2800705'
				}
			]
		},
		{
            checked:false,
			name:'icon 字体',
			list:[
				{
					name:'iconfont',
					url:'https://www.iconfont.cn/'
				}
			]
		},
		{
            checked:false,
			name:'h5功能',
			list:[
				{
					name:'h5一键注册/登录',
					url:"http://dev.10086.cn/"
				}
			]
		},
		{
            checked:false,
			name:'在线ide',
			list:[
				{
					name:'codepen',
					url:'https://codepen.io/'
				}
			]
		},
		{
            checked:false,
			name:'nginx/redis',
			list:[
				{
					name:'nginx文档',
					url:'https://blog.redis.com.cn/doc/'
				},
				{
					name:'redis文档',
					url:'https://redis.com.cn/documentation.html'
				}
			]
		},
		{
            checked:false,
			name:'工具集',
			list:[
				{
					name:'ai导航/工具',
					url:'https://ai-bot.cn/'
				},
				{
					name:'JSON格式化验证和编辑 - JSONT',
					url:'https://www.jsont.run/'
				}
			]
		},
		{
            checked:false,
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
            checked:false,
			name:'前端框架',
			list:[
				{
					name:'Vue3中文文档',
					url:'https://cn.vuejs.org/'
				},
				{
					name:'uniapp文档',
					url:'https://uniapp.dcloud.net.cn/'
				},
				{
					name:'react文档',
					url:'https://zh-hans.reactjs.org/'
				},
				{
					name:'flutter文档',
					url:'https://flutter.cn/'
				},
				{
					name:'nuxtjs',
					url:'https://nuxtjs.org/'
				}
			]
		},
		{
            checked:false,
			name:'娱乐',
			list:[
				{
					name:'哔哩哔哩 (゜-゜)つロ 干杯~-bilibili',
					url:'https://www.bilibili.com/'
				}
			]
		},
		
	])
	//定时器
	let timer=null
	onMounted(()=>{
        navList.value.map(item=>{
	        item.checked=true
        })
       timer= setInterval(()=>{
			getDateTime()
		},1000)
	})
	onUnmounted(()=>{
		clearInterval(timer)
	})
	//更新内容
	const updateTime=ref('')
	const getDateTime=()=>{
        // 获取当前时间
        const now = new Date();

// 获取星期几（中文）
        const weekdays = ['日', '一', '二', '三', '四', '五', '六'];
        const weekday = '星期' + weekdays[now.getDay()];

// 获取上下午或晚上
        const hour = now.getHours();
        let period;
        if (hour >= 0 && hour < 6) {
            period = '凌晨';
        } else if (hour >= 6 && hour < 9) {
            period = '早上';
        } else if (hour >= 9 && hour < 12) {
            period = '上午';
        } else if (hour >= 12 && hour < 14) {
            period = '中午';
        } else if (hour >= 14 && hour < 18) {
            period = '下午';
        } else if (hour >= 18 && hour < 20) {
            period = '傍晚';
        } else {
            period = '晚上';
        }
		const year = now.getFullYear();
		const month = now.getMonth() + 1;
		const day = now.getDate();

// 输出结果
        updateTime.value=`现在是${year}年${month}月${day}日，${weekday}的${period}，当前时间为${now.toLocaleTimeString()}`;
        
    }
	//搜索
	const onSearchUpdate=val=>searchMatchIncludes(val,search.value)
    const searchMatchIncludes=(text,value)=> {
        const regex = new RegExp(value, 'i');
        return regex.test(text);
    }
    //搜索匹配
	const searchMatchIncludesComputed=computed(()=>{
        const _navList=navList.value
        const regex = new RegExp(search.value, 'i');
        return _navList.filter(item => {
            item.checked=true
            return regex.test(item.name) || item.list.some(subitem => regex.test(subitem.name));
        })||_navList
	})
</script>
<template>
	<van-sticky>
	<van-search v-model="search" placeholder="请输入搜索关键词"
	 @update:model-value="onSearchUpdate"
	/>
		
		<view class="checkbox-van">
            <van-checkbox
		            v-for="(item,index) in navList" v-model="item.checked" :key="index" shape="square" icon-size="30rpx" direction="horizontal">
	            {{ item.name}}
            </van-checkbox>
		</view>
    </van-sticky>
	<van-cell-group inset :title="`${item.name}-${item.list.length}条`" v-for="(item,index) in searchMatchIncludesComputed" :key="index">
	  <view v-for="(item1,index1) in item.list" :key="index1" >
          <van-cell
		          v-if="item.checked"
                   :value="`${item1.name}`" is-link center
                  :title="item1.name"
                  :url="item1.url"
          />
	  </view>
	</van-cell-group>
	<van-divider>{{updateTime}}</van-divider>

</template>


<style lang="scss" scoped>
.checkbox-van{
  z-index: 100;
  background-color: #fff;
  display: flex;
  flex-wrap: wrap;
  padding: 10rpx;
  .van-checkbox{
    margin: 10rpx;
  }
}
</style>
