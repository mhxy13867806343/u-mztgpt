<script setup>
import useForm from '@/hooks/useForm'
const {isLoginShow,token}=useForm()
import useStroe from '@/hooks/useStroe'
const {clearStorageSync}=useStroe()
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
const onClickLogin=()=>{
    uni.showModal({
        title: '提示',
        content: '是否要退出登录？',
        cancelText: '取消',
        confirmText: '确定',
        success: res=>{
            if (res.confirm) {
                clearStorageSync()
                setTimeout(()=>{
                    uni.reLaunch({
                        url: '/pages/me/me'
                    });
				},1000)
            }
        }
    });
}
</script>

<template>
	<m-login :show="isLoginShow" />
	<van-cell-group inset v-for="(item,index) in navList" :key="index">
		<van-cell :title="item1.text" :value="item1.value||''" is-link center v-for="(item1,index1) in item.list" :key="index1"
		          :to="item1.path"
		          :title-style="{paddingLeft:'20rpx'}"
		>
			<template #icon>
				<text class="iconfont" :class="item1.icon"></text>
			</template>
		</van-cell>
        <van-button type="primary" block class="quit" v-if="token"
        @click="onClickLogin"
        >退出</van-button>

    </van-cell-group>
</template>


<style lang="scss" scoped>
.quit{
  position: fixed;
  bottom:  calc(var(--window-bottom) / 2);
  left: 0;
  width: 100%;
}
</style>
