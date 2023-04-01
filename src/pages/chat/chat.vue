<script setup>
import useForm from '@/hooks/useForm'
const {token,isLoginShow}=useForm()
import useStroe from '@/hooks/useStroe'
const {removeStorageSync,getStorageSync,setStorageSync}=useStroe()
import adds from '@/components/Chat/adds/adds'
import look from '@/components/Chat/look/look'
import toggle from '@/components/Chat/toggle/toggle'
import save from '@/components/Chat/save/save'
import dels from '@/components/Chat/dels/dels'
import levels from '@/components/Chat/levels/levels'
import {showNotify} from "vant";
const showPopover=ref(false)
const showCenter=ref(false)
const typePopValue=ref(-1)//0添加key,1查看key,2切换key,3保存聊天记录,4删除key和聊天记录,5查看等级
const qinput=ref('');//
const sessionInput=ref('');//会话输入框
const isSessionShow=ref(false)//是否显示会话
const sessionList=ref([])//会话列表
const isDisabled=ref(false)
const showLeft=ref(false)
const actionsPopList=ref([
	{
		text:'添加key',
		icon:'icon-tianjia',
		isAdd:true,
		value:0,
		component:adds,
		isDisabled:false
	},
	{
		text: '查看你当前所使用的key',
		icon: 'icon-liulan',
		isLook:true,
		value:1,
		component:look,
		isDisabled:true
	},
	{
		text: '切换key',
		icon: 'icon-key',
		isToggle:true,
		value:2,
		component:toggle,
		isDisabled:true
	},
	{
		text: '保存key聊天记录到本地',
		icon: 'icon-xiazai',
		isDown:true,
		value:3,
		component:save,
		isDisabled:true
	},
	{
		text:'删除key和聊天记录',
		icon:'icon-shanchu',
		isel:true,
		value:4,
		component:dels,
		isDisabled:true
	},
	{
		text:'查看您当前的等级',
		icon:'icon-dengji',
		url:'/pages/level/level',
		isUrl:true,
		value:5,
		component:levels
	}
])
const chatList=ref([])//聊天列表
const chatInputStyle=ref('')//聊天输入框样式
const chatSessionKey='chat-session'//会话缓存key
onShow(()=>{
    const key=getStorageSync(chatSessionKey)
    console.log(key,'abcdef')
    if(key){
        sessionList.value=key
    }
})
onMounted(()=>{
	const tabberContentListCls=document.querySelector('.tabber-content-list')
    uni.getSystemInfo({
        success: res=> {
            const {screenHeight}=res
            chatInputStyle.value=((screenHeight - tabberContentListCls.clientHeight)/5)+'rpx'
        }
    });
	
})
const onClickPop=item=>{
	if(item.isDisabled){
		showNotify({
			message: `请先添加key,暂无法使用此功能`,
			color: '#fff',
			background: 'var(--van-notify-danger-background)',
			duration: 1500,
		})
		return
	}
	typePopValue.value=item.value
	showCenter.value=true
	showPopover.value=false
}
//清除所有
const onSessionClear=()=>{
    removeStorageSync(chatSessionKey)
	showNotify({
		message: `清除成功`,
		color: '#fff',
		background: 'var(--van-notify-success-background)',
		duration: 1500,
	})
	showLeft.value=false
    sessionList.value=[]
}
//新建会话
const onClickSessionAdd=()=>{
	isSessionShow.value=true
}
const onClickSessionAddBtn=()=>{
 
	const t=sessionList.value.filter(item=>item.name===sessionInput.value)
	if(t.length){
        		showNotify({
			message: `会话名称已存在`,
			color: '#fff',
			background: 'var(--van-notify-danger-background)',
			duration: 1500,
		})
		return
	}
	sessionList.value.unshift({
		name:sessionInput.value
    })
    setStorageSync(chatSessionKey,sessionList.value)
	isSessionShow.value=false
    sessionInput.value=''
}
//点击的时候请求
const onClickSession=item=>{
	console.log(item.name,'点击的时候请求')
}
const onClickCopy=data=>{
    uni.setClipboardData({
        data,
        success:()=>{
           uni.showToast({
			   title:'复制成功,分享给别人吧',
			   icon:'none'
		   })
        },
	    		fail:()=>{
			uni.showToast({
				title:'复制失败',
				icon:'none'
			})
		}
    });
}
</script>

<template>
    <van-popup
            v-model:show="showLeft"
            position="left"
            :style="{ width: '65%', height: '100%' }"
    >
	    <view class="add-icon" @click="onClickSessionAdd">
		    <text class="iconfont icon-tianjia1"></text>
		    <text>新建会话</text>
	    </view>
        <van-cell-group inset v-if="isSessionShow">
            <van-field clearable v-model="sessionInput"  placeholder="请输入会话名称20字内"
            maxlength="20"
            >
                <template #button>
                    <van-button size="mini" type="primary" :disabled="!sessionInput.length"
                    @click="onClickSessionAddBtn"
                    >添加会话</van-button>
                </template>
            </van-field>
        </van-cell-group>
        <scroll-view  scroll-y :style="{height:`calc(60% - 100rpx)`}"
                     class="scroll-Y-calc">
            <view class="scroll-view-item" v-for="(item,index) in sessionList" :key="index"
            @click="onClickSession(item)"
            >
	            				<text>{{item.name}}</text>
            </view>
            <van-empty v-if="!sessionList.length" image-size="30" description="暂无相关会话数据" />
        </scroll-view>
        <view class="add-icon" @click="onSessionClear" v-if="!sessionList.length">
            <text class="iconfont icon-qingchushujuku"></text>
            <text>清除所有</text>
        </view>
    </van-popup>
	<van-nav-bar  placeholder fixed title="透视">
		<template #left v-if="token">
            <text class="iconfont icon-menu"  @click="showLeft=true"/>
		</template>
		<template #right v-if="token">
			<van-popover
				placement="left-start"
				v-model:show="showPopover" theme="dark">
				<template #reference>
					<text class="iconfont icon-menu"></text>
				</template>
				<van-cell
					:title-style="{paddingLeft:'20rpx'}"
					center :title="item.text"  v-for="(item,index) in actionsPopList" :key="index"
				@click="onClickPop(item)"
				>
					<template #icon>
						<text class="iconfont" :class="item.icon"></text>
					</template>
				</van-cell>
			
			</van-popover>
	
		</template>
	</van-nav-bar>
    <m-login :show="isLoginShow" />
	<van-popup teleport="#app"  v-model:show="showCenter" round :style="{ width:'91%' }">
		<view class="tel-pop">
			<component :is="actionsPopList[typePopValue].component"
			@click-levels="showCenter=false"
			></component>
		</view>
	</van-popup>

    <scroll-view  scroll-y :style="{
        height:` calc(100vh - ${chatInputStyle})`,
    }" class="tabber-content-list">
        <view class="chat-home" :class="{'chat-home-last':index===9}" v-for="(item,index) in 10" :key="index">
            <view class="chat-q-input icon-count flex-start">
                <view class="chat-q-input-key">
                    <text>Q</text>
                </view>
                <view class="chat-q-content">
                    vue3 嵌套el-table拖拽解决 使用sortablejs处理的
                </view>
            </view>
            <view class="chat-q icon-count flex-start icon-comment">
                <view class="chat-copy icon-comment-abs">
                    <text class="iconfont icon-fuzhi" @click="onClickCopy(1)"></text>
                    <text class="iconfont icon-yichuli"></text>
                </view>
                <view class="chat-q-content">
                    vue3 嵌套el-table拖拽解决 使用sortablejs处理的
                    vue3 嵌套el-table拖拽解决 使用sortablejs处理的
                    vue3 嵌套el-table拖拽解决 使用sortablejs处理的
                    vue3 嵌套el-table拖拽解决 使用sortablejs处理的
                    vue3 嵌套el-table拖拽解决 使用sortablejs处理的
                    vue3 嵌套el-table拖拽解决 使用sortablejs处理的
                    vue3 嵌套el-table拖拽解决 使用sortablejs处理的
                    vue3 嵌套el-table拖拽解决 使用sortablejs处理的
                    vue3 嵌套el-table拖拽解决 使用sortablejs处理的
                </view>
            </view>
        </view>
    </scroll-view>

	<view class="filed-bot tabber-content-list">
		<van-field clearable v-model="qinput" :disabled="isDisabled" placeholder="请输入你想要问的内容吧">
			<template #button v-if="qinput.length">
				<van-icon name="guide-o" />
			</template>
		</van-field>
	</view>
	<van-back-top />

</template>


<style lang="scss" scoped>
::v-deep .van-popup--left{
  background-color: rgba(32,33,35,.91);
  .add-icon{
    height: 100rpx;
    line-height: 100rpx;
    text-align: center;
    margin-bottom: 20rpx;
    border:1px solid hsla(0,0%,100%,.2) ;
    uni-text{
      color: #fff;
      &:last-child{
        padding-left: 10rpx;
        font-size: 22rpx;
      }
    }
  }
  .scroll-Y-calc{
    border-bottom: 1px solid hsla(0,0%,100%,.2) ;
    .scroll-view-item{
      color: #fff;
      font-size: 20rpx;
      padding:6rpx;
      text-indent: 10rpx;
      height: 30rpx;
      line-height: 30rpx;
    }
  }
}
.van-cell--center {
	background: #1c1c1e;
	color: #fff;
}
.tel-pop{
	height:auto;
	background: #fff;
}
.chat-home{
	padding:0 20rpx;
    margin:40rpx 0;
	uni-image{
		width: 50rpx;
		height: 50rpx;
	}
	.chat-q-input{
		margin-bottom: 20rpx;
		padding:12rpx;
	    .chat-q-input-key{
	      uni-text{
	        background: green;
	        color: #fff;
	        padding: 10rpx;
	        width: 50rpx;
	        height: 50rpx;
	        border-radius: 100%;
            display: block;
            text-align: center;
	      }
	    }
	}
	.chat-q{
		background-color: rgb(230 230 230);
		padding:12rpx;
	  margin-top:50rpx;
	  .chat-copy{
	    right:0;
	    top:-30rpx;
	    
	    .icon-fuzhi,.icon-yichuli{
          font-size: 50rpx;
	    }
	  }
	}
	.chat-q-content{
      padding: 20rpx;
      margin-left: 20rpx;
		font-size: 28rpx;
      background-color: rgba(230, 230, 230,.78);
	}
}
.chat-home-last{
  padding-bottom: calc(var(--window-bottom) / 2);
}
.filed-bot{
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
}
</style>
