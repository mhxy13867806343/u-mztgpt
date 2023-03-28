<script setup>
import { showToast,showNotify } from 'vant';
const numLv=ref(10)
const exp=ref(507500013125)
const offset=ref(200)

onShow(()=>{
	showNotify({
		message: `今日您已登录可获得20点经验,请明天继续努力`,
		color: '#fff',
		background: 'var(--van-notify-success-background)',
		duration: 1500,
	})
})
const onClickRouter=item=>{
	if((numLv.value-1)<item+1){
		if(item<175){
			
			showNotify({
				message:`当前等级为${item},下一个等级为${item+1},还差${(item+1)*1000000-exp.value}经验考级升级到${item+1}`,
				color: '#fff',
				background: 'var(--van-notify-success-background)',
				duration: 1500,
			})
		}if(item===175){
			showNotify({
				message:`当前等级为${item},已经是最高等级了`,
				color: '#fff',
				background: 'var(--van-notify-success-background)',
				duration: 1500,
			})
		}
	}
	

}
const onClickQuestion=()=>{
	showNotify({
		message:`每日登录可获得1次经验,获取经验值范围是1-100点之间,由系统随机给定`,
		color: '#fff',
		background: 'var(--van-notify-primary-background)',
		duration: 1500,
	})
}
</script>

<template>
	<van-nav-bar  placeholder fixed>
		<template #right>
			<text class="iconfont icon-wenhao-xianxingyuankuang" @click="onClickQuestion"></text>
		</template>
	</van-nav-bar>
	<van-cell-group inset>
		<van-cell title="等级" :value="item" :label="numLv===item+1?`当前等级为${numLv};经验为${exp}`:''"
		v-for="(item,index) in 175" :key="index"
		          @click="onClickRouter(item)"
		/>
	</van-cell-group>
	<van-back-top :offset="offset" />
</template>


<style lang="scss" scoped>
</style>
