<script setup>
import useStroe from '@/hooks/useStroe'
const {getStorageSync}=useStroe()
const props=defineProps({
    show:{
        type:Boolean,
        default:false
    }
})
const showCenter=ref(false)
const username=ref('')//用户名
const password=ref('')//密码
const isLogin=ref('login')//登录还是注册
watchEffect(async ()=>{

})

onMounted(()=>{
    isClickLoginToken()
})
onTabItemTap((item)=>{
    isClickLoginToken()
})
const isClickLoginToken=()=>{
    const token=getStorageSync('token')
    showCenter.value=!token.length
}
//登录
const onLoginSubmit=e=>{
    console.log(e,3333)
    showCenter.value=false
}
//注册
const onReginSubmit=(e)=>{
    console.log(e,4444)
    showCenter.value=false
}
//用户名
const validatorUserMessage=value=>{
    const regex = /^[a-zA-Z][a-zA-Z0-9_@#\$%\^&\*\-\+\.]{0,19}$/;
    if(!value.length){
        		return '请输入3-20个字符的用户名'
    }
    if(!regex.test(value)){
		return '用户名只能是字母开头，字母数字下划线@#$%^&*~()-+=`'
	}
	return true
}
//密码
const validatorPasswordMessage=value=>{
    const reg=/^(?![a-zA-Z]+$)(?![A-Z0-9]+$)(?![A-Z\W_!@#$%^&*`~()-+=]+$)(?![a-z0-9]+$)(?![a-z\W_!@#$%^&*`~()-+=]+$)(?![0-9\W_!@#$%^&*`~()-+=]+$)[a-zA-Z0-9\W_!@#$%^&*`~()-+=]/
    if(!value.length){
        return '请输入3-20个字符的密码'
    }
	if(!reg.test(value)){
        return '大写字母，小写字母，数字，特殊符号 @#$%^&*~()-+=` 中任意3项密码'
    }
    return true
}
</script>
<template>
	<van-popup v-model:show="showCenter" round :style="{ padding: '20rpx',width:'86%' }"
    >
        <view class="login" v-if="isLogin==='login'">
            <van-form @submit="onLoginSubmit">
                <van-cell-group inset>
                    <van-field
                            v-model="username"
                            name="登录用户名"
                            label="登录用户名" clearable
                            placeholder="请输入登录用户名"
                            required
                            :trigger="['onBlur','onChange','onSubmit']"
                            :rules="[
                            { required: true,message:'请输入用户名',   validator: validatorUserMessage,},
                            ]"
                    >
	                    <template #left-icon>
	                       <text class="iconfont icon-yonghuming1"></text>
	                    </template>
                    </van-field>
                    <van-field
                            v-model="password"
                            type="password"
                            clearable
                            name="登录密码" required
                            label="登录密码"
                            placeholder="请输入登录密码"
                            :trigger="['onBlur','onChange','onSubmit']"
                            :rules="[
                            { required: true,message:'请输入密码',
                              validator: validatorPasswordMessage,
                            
                             },
						
                             ]"
                    >
                        <template #left-icon>
                            <text class="iconfont icon-mima1"></text>
                        </template>
                    </van-field>
                </van-cell-group>
                <view class="login-btn">
                    <van-button round block type="primary" native-type="submit">
                        登录
                    </van-button>
                </view>
            </van-form>
            <view class="login-toggle text-right">
                <text class="text-right" @click="isLogin='regin'">注册</text>
            </view>
        </view>
		<view class="login" v-else-if="isLogin==='regin'">
            <van-form @submit="onReginSubmit">
                <van-cell-group inset>
                    <van-field
                            v-model="username"
                            name="注册用户名"
                            label="注册用户名" clearable
                            placeholder="请输入注册用户名"
                            required
                            :trigger="['onBlur','onChange','onSubmit']"
                            :rules="[
                            { required: true,message:'请输入用户名',   validator: validatorUserMessage,},
                            ]"
                    >
                        <template #left-icon>
                            <text class="iconfont icon-yonghuming1"></text>
                        </template>
                    </van-field>
                    <van-field
                            v-model="password"
                            type="password"
                            clearable
                            name="注册密码" required
                            label="注册密码"
                            placeholder="请输入注册密码"
                            :trigger="['onBlur','onChange','onSubmit']"
                            :rules="[
                            { required: true,message:'请输入密码',
                              validator: validatorPasswordMessage,
                            
                             },
						
                             ]"
                    >
                        <template #left-icon>
                            <text class="iconfont icon-mima1"></text>
                        </template>
                    </van-field>
                </van-cell-group>
                <view class="login-btn">
                    <van-button round block type="primary" native-type="submit">
                        注册
                    </van-button>
                </view>
            </van-form>
            <view class="login-toggle text-right">
                <text class="text-right" @click="isLogin='login'">登录</text>
            </view>
		</view>
        <template #overlay-content>
            <view class="login-close">
                <text class="iconfont icon-guanbi" @click="showCenter=false"></text>
            </view>
        </template>
       
	</van-popup>

</template>


<style scoped lang="scss">
.login{
  .login-btn{
    margin: 20rpx;
  }
  .login-toggle{
    padding: 40rpx;
    uni-text{
      color: #007aff;
      font-size: 20rpx;
      text-decoration: underline;
      cursor: pointer;
    }
  }
}
.icon-guanbi{
    position: fixed;
    top: 65%;
    left: 50%;
    transform: translate(-50%,0%);
    z-index: 111;
    font-size: 30px;
    color: #fff;
}
</style>
