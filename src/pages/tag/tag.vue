<script setup>
</script>
<template>
	<view class="tag">
		<view class="tag-list icon-count">
			<view class="tag-list-item" v-for="(item,index) in 100" :key="index">
				<view class="tab-list-item-title"><text>兔玩映画</text> <text>*799</text></view>
				<view class="tab-list-item-content van-multi-ellipsis--l2">兔玩映画 旗袍萝莉 [40P532M]</view>
			</view>
		</view>
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
</style>
