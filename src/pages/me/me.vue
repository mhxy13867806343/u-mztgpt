<script setup>
import useForm from '@/hooks/useForm'
const {isLoginShow,token,onClickLv}=useForm()
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
            {
                icon: 'icon-gengduo1',
                text: '更多',
                path: '/pages/more/more'
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
//修改头像
const onClickAvater=()=>{
    console.log('修改头像')
}
const onClickRouter=()=>{
    uni.navigateTo({
		url: '/pages/myInfo/myInfo'
	});
}
</script>

<template>
	<m-login :show="isLoginShow" />
	<view class="my-avter icon-comment icon-count flex-start">
<!--		<text class="iconfont  icon-touxiang1" @click="onClickAvater"></text>-->
		<image  src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" lazy-load	@click="onClickAvater" />
		<view class="right">
            <view @click="onClickRouter">作者信息</view>
            <view @click.stop="onClickLv"><text>lv</text> <text>1</text></view>
		</view>
	</view>
	<van-cell-group inset v-for="(item,index) in navList" :key="index">
		<van-cell :title="item1.text" :value="item1.value||''" is-link center v-for="(item1,index1) in item.list" :key="index1"
		          :to="item1.path"
		          :title-style="{paddingLeft:'20rpx'}"
		>
			<template #icon>
				<text class="iconfont" :class="item1.icon"></text>
			</template>
		</van-cell>
        <van-button type="primary" block class="quit-btn-fixed" v-if="token"
        @click="onClickLogin"
        >退出</van-button>

    </van-cell-group>
</template>


<style lang="scss" scoped>
@import "~@/static/style/mpub.scss";
.my-avter{
  height: 180rpx;
  padding: 30rpx 0;
  margin:0 30rpx;
  align-items: center;
  .icon-touxiang1,uni-image{
    width: 120rpx;
    height: 120rpx;
    border-radius: 100%;
  }
  .icon-touxiang1{
    font-size: 200rpx;
  }
  .right{
    padding-left: 30rpx;
    uni-view{
      &:first-child{
        font-size: 26rpx;
		font-weight: bold;
        color: #656565;
        margin-bottom: 30rpx;
      }
      uni-text{
        &:first-child{
          font-size: 22rpx;
		  color: #a9a9a9;
        
        }
        &:last-child{
          font-size: 26rpx;
        }
      }
    }
  }
}
</style>
