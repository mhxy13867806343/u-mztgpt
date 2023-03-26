<script>
export default {
  onLaunch: function () {
    console.log('App Launch')
  },
  onShow: function () {
    console.log('App Show')
  },
  onHide: function () {
    console.log('App Hide')
  },
}
</script>

<style>
/*每个页面公共css */
@import "static/inconfont/iconfont.css";
.list-text{
	font-size: 26rpx;
	line-height: 40rpx;

}
.list-text-gress{
	color: #9f9f9f;
}
.icon-count{
	display: flex;
	justify-content: space-between;
}
.waterfall-content{
	margin:30rpx;
	column-count: 2;
	column-gap: 10px;
}
.waterfall-content-list{
	margin-bottom: 30rpx;
}
.waterfall-content-list-text{
	padding: 21rpx 0;
	
}
uni-image{
	border-radius: 10rpx;
}
.icon-count-num{
	padding:0 15rpx;
}
.icon-comment{
	position: relative;
}
.tabber-content-list{
	padding-bottom: calc(var(--window-bottom) / 2);
}
</style>
