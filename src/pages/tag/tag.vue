<script setup>
import useList from "@/hooks/useList";
const {search,getTabList,list,loading,total}=useList()
import useDetails from "@/hooks/useDetails";
const {onClickDetlis}=useDetails()
import {toolDebounce,toolThrottle} from '@/utils/tools'
const timer=ref(null)//定时器
const showPop=ref(false)//弹窗
const longPress=ref(false)//长按
const tagDetails=ref({})//弹窗详情
onMounted(()=>{
	getTabList()
})
const onSearchUpdate=val=>{
    loading.value=true
	search.value=val
	list.value=[]
    getTabList(val)
}
const onSearcThrottledOnSearchUpdate = toolDebounce(onSearchUpdate,1500);
//手指按下
const onTouchStart=(e,item,index)=>{
    longPress.value=false
    timer.value= setTimeout(() => {
        showPop.value=true
        tagDetails.value=item
    }, 2000);
}
//手指离开
const onTouchEnd=(e,item,index)=>{
	clearTimeout(timer.value);
}
const onClickShowPopClose=()=>{
	showPop.value=false
    clearTimeout(timer.value);
}
//点击详情
const onClickDetlisStop=id=>{
    if(!longPress.value){
        onClickDetlis(id)
	}
    onClickShowPopClose()

}
const onClickMsTab=(count)=>{
	window.location.href=`https://www.leshetu.me/tag/${count}`
}
</script>
<template>
    <van-sticky>
        <van-search v-model="search" placeholder="请输入搜索关键词"
                    @update:model-value="onSearcThrottledOnSearchUpdate"
        />
    </van-sticky>
	<view class="tag">
		<view class="tag-list icon-count">
			<view class="tag-list-item" v-for="(item,index) in list" :key="index"
                  @touchstart="onTouchStart($event,item,index)" @touchend="onTouchEnd($event,item,index)"
			
			>
				<view class="tab-list-item-title"><text>{{  item.type}}</text> <text v-if="item.count>0" @click.stop="onClickMsTab(item.type_id)" >*{{item.count}}</text></view>
				<view class="tab-list-item-content van-multi-ellipsis--l2" @click.stop="onClickDetlisStop(item.url_id)">{{item.title}}</view>
			</view>
         

            <van-empty image-size="100" description="暂无标签数据" v-if="!list.length&&!loading"/>
            
		</view>
        <van-divider dashed v-if="total>0">共 <text>{{total}}条标签数据</text></van-divider>
        <van-divider dashed v-else>我是有底线的</van-divider>
        <van-back-top />
        <van-popup
                v-model:show="showPop"
                position="bottom"
                round
        >
	        <view class="details-pop">
		       <view class="d-showcang text-right">
                   <text class="iconfont icon-shoucang"></text>
			       <text>收藏</text>
		       </view>
                <van-cell-group inset>
                    <van-cell title="名称" :value="tagDetails.title"  is-link @click="onClickDetlisStop(tagDetails.url_id)"/>
                    <van-cell title="数量" :value="tagDetails.count"  is-link @click="onClickMsTab(tagDetails.count)" />
                    <van-cell title="分类" :value="tagDetails.type"  />
                </van-cell-group>
                <van-button type="default" @click="onClickShowPopClose" block>取消</van-button>
	        </view>
        </van-popup>
	</view>
</template>



<style lang="scss" scoped>
.tag{
  .tag-list{
    flex-wrap: wrap;
    justify-content: center;
    .tag-list-item{
      margin-right: 2%;
      margin-bottom: 2%;
      padding: 30rpx;
      border: 2rpx solid #eee;
      background-color: #fff;
      border-radius: 4rpx;
      width: 46%;
      box-sizing: border-box;
      .tab-list-item-title{
        uni-text{
          &:first-child{
            background-color: #eee;
            display: inline-block;
            padding: 0 10px 0;
            font-size: 24rpx;
            color: #666;
          }
          &:last-child{
			font-size: 22rpx;
			color: #a9a9a9;
		  }
        }
      }
      .tab-list-item-content{
        padding-top: 20rpx;
        font-size: 22rpx;
        color: #a9a9a9;
      }
    }
  }
}
.details-pop{
  .d-showcang{
    padding:30rpx 30rpx 0;
    uni-text{
      &:first-child{
		font-size: 40rpx;
		color: #a9a9a9;
		padding: 20rpx 0;
	  }
	  &:last-child{
		font-size: 28rpx;
		color: #a9a9a9;
		padding: 20rpx 0;
	  
	  }
      margin-left: 36rpx;
    }
  }
}
</style>
