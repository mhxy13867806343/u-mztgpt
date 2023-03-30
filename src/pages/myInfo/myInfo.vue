<script setup>
import useForm from '@/hooks/useForm'
const {isLoginShow,token,onClickLv}=useForm()
const nickName=ref('昵称')//昵称
const idCode=ref('')//编号
const onClickMyInfo=()=>{
    uni.reLaunch({
        url: '/pages/myInfo/myInfo'
    });
}
const onClickSave=()=>{
    uni.showToast({
		title: '保存成功',
		icon: 'none',
		duration: 2000
	});
}
</script>

<template>
	<view class="info">
        <m-login :show="isLoginShow" />
        <van-cell-group inset>
            <van-cell title="用户名" value="用户名" center/>
	        <van-cell title="昵称" center >
		       <template v-slot:value>
                   <van-field v-model="nickName" clearable center input-align="right"  placeholder="请输入20位内的昵称"
                   maxlength="20"
                   
                   />
		       </template>
	        </van-cell>
            <van-cell title="编号" center >
                <template v-slot:value>
                    <van-field v-model="idCode" clearable center input-align="right" placeholder="请输入20位内编码"
                    maxlength="20"
                    />
                </template>
            </van-cell>
            <van-cell @click="onClickLv"  title="lv" value="1"  center  is-link/>
        </van-cell-group>
        <van-button type="primary" block class="quit-btn-fixed" v-if="token"
                    @click="onClickSave"
        >保存</van-button>
	</view>
</template>


<style lang="scss" scoped>
@import "~@/static/style/mpub.scss";
</style>
