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
])//右上角菜单数据
const chatList=ref([
    {
        name:'测试abc',
	    sessionList:[
            {
                name:`
                 vue3 嵌套el-table拖拽解决 使用sortablejs处理的
                    vue3 嵌套el-table拖拽解决 使用sortablejs处理的
                    vue3 嵌套el-table拖拽解决 使用sortablejs处理的
                    vue3 嵌套el-table拖拽解决 使用sortablejs处理的
                    vue3 嵌套el-table拖拽解决 使用sortablejs处理的
                    vue3 嵌套el-table拖拽解决 使用sortablejs处理的
                    vue3 嵌套el-table拖拽解决 使用sortablejs处理的
                    vue3 嵌套el-table拖拽解决 使用sortablejs处理的
                    vue3 嵌套el-table拖拽解决 使用sortablejs处理的
                `
            }
	    ]
    },
    {
        name:'测试abc',
        sessionList:[
            {
                name:`
                 vue3 嵌套el-table拖拽解决 使用sortablejs处理的
                    vue3 嵌套el-table拖拽解决 使用sortablejs处理的
                    vue3 嵌套el-table拖拽解决 使用sortablejs处理的
                    vue3 嵌套el-table拖拽解决 使用sortablejs处理的
                    vue3 嵌套el-table拖拽解决 使用sortablejs处理的
                    vue3 嵌套el-table拖拽解决 使用sortablejs处理的
                    vue3 嵌套el-table拖拽解决 使用sortablejs处理的
                    vue3 嵌套el-table拖拽解决 使用sortablejs处理的
                    vue3 嵌套el-table拖拽解决 使用sortablejs处理的
                `
            }
        ]
    },
    {
        name:'测试abc',
        sessionList:[
            {
                name:`
                 vue3 嵌套el-table拖拽解决 使用sortablejs处理的
                    vue3 嵌套el-table拖拽解决 使用sortablejs处理的
                    vue3 嵌套el-table拖拽解决 使用sortablejs处理的
                    vue3 嵌套el-table拖拽解决 使用sortablejs处理的
                    vue3 嵌套el-table拖拽解决 使用sortablejs处理的
                    vue3 嵌套el-table拖拽解决 使用sortablejs处理的
                    vue3 嵌套el-table拖拽解决 使用sortablejs处理的
                    vue3 嵌套el-table拖拽解决 使用sortablejs处理的
                    vue3 嵌套el-table拖拽解决 使用sortablejs处理的
                `
            }
        ]
    }
])//聊天列表
const chatDyList=ref([
        {"name": "Python编程语言入门指南"},
        {"name": "如何使用GPT-3生成自然语言文本"},
        {"name": "数字人工智能的发展与未来"},
        {"name": "最新的AI技术在游戏开发中的应用"},
        {"name": "如何用Python构建自己的聊天机器人"},
        {"name": "数字人工智能对医学领域的影响"},
        {"name": "LOL电竞比赛的技术分析与策略讲解"},
        {"name": "如何使用GPT-2生成虚构小说"},
        {"name": "Python数据可视化工具的使用方法"},
        {"name": "数字人工智能对社会的影响与挑战"},
        {"name": "游戏音效设计中的数字信号处理技术"},
        {"name": "使用Python进行数据分析的基本步骤"},
        {"name": "数字人工智能在智能家居领域的应用"},
        {"name": "LOL中ADCarry的战术选择与实战分析"},
        {"name": "如何使用GPT-3生成程序代码"},
        {"name": "Python网络爬虫的原理与实现"},
        {"name": "数字人工智能对工业自动化的影响"},
        {"name": "游戏设计中的情感体验与用户研究"},
        {"name": "使用Python进行文本分析的技术方法"},
        {"name": "数字人工智能在智能交通领域的应用"},
        {"name": "LOL中打野选手的战术选择与实战分析"},
        {"name": "如何使用GPT-2生成广告文案"},
        {"name": "Python机器学习的基础算法与实践"},
        {"name": "数字人工智能对金融行业的影响与变革"},
        {"name": "游戏剧情设计中的叙事技巧与创新思维"},
        {"name": "使用Python进行图像处理的技术方法"},
        {"name": "数字人工智能在教育领域的应用与发展"},
        {"name": "LOL中中单选手的战术选择与实战分析"},
        {"name": "如何使用GPT-3生成艺术创作作品"}
    ])//随机生成聊天动态列表
const chatInputStyle=ref('')//聊天输入框样式
const chatSessionKey='chat-session'//会话缓存key
onShow(()=>{
    const key=getStorageSync(chatSessionKey)
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
const isSessionTextFilter=(name)=>{
    const t=sessionList.value.filter(item=>item.name===name)
	let filter=true
    if(t.length){
        showNotify({
            message: `会话名称或内容已存在`,
            color: '#fff',
            background: 'var(--van-notify-danger-background)',
            duration: 1500,
        })
        filter=false
    }
    return filter
}
const onClickSessionAddBtn=()=>{
    const t=isSessionTextFilter(sessionInput.value)
	if(t){
        onSaveSession(sessionInput.value)
        isSessionShow.value=false
        sessionInput.value=''
	}
 
}
const onClickChatDy=name=>{
    qinput.value=name
    const t=isSessionTextFilter(qinput.value)
    if(t) {
        onSaveSession(name)
    }
    
}
const onSaveSession=(name)=>{
    //保存会话
    sessionList.value.unshift({
        name,
	    sessionChildList:[],// 存放聊天内容
	    isSessionChild:false,// 是否是有右边对话内容
    })
    setStorageSync(chatSessionKey,sessionList.value)
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
        <view class="add-icon" @click="onSessionClear" v-if="sessionList.length">
            <text class="iconfont icon-qingchushujuku"></text>
            <text>清除所有</text>
        </view>
    </van-popup>
	<van-nav-bar  placeholder fixed title="聊天">
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
        <view class="chat-home" :class="{'chat-home-last':index===9}" v-for="(item,index) in chatList" :key="index">
            <view class="chat-q-input icon-count flex-start">
                <view class="chat-q-input-key">
                    <text>Q</text>
                </view>
                <view class="chat-q-content">
                    {{ item.name}}
                </view>
            </view>
            <view class="chat-q icon-count flex-start icon-comment" v-for="(sitem,sindex) in item.sessionList" :key="sindex">
                <view class="chat-copy icon-comment-abs">
                    <text class="iconfont icon-fuzhi" @click="onClickCopy(sitem.name)"></text>
                    <text class="iconfont icon-yichuli"></text>
                </view>
                <view class="chat-q-content">
                    {{ sitem.name }}
                </view>
            </view>
        </view>
    </scroll-view>
<!--	<view class="chat-more iconfont icon-gengduo"></view>-->
    <scroll-view class="scroll-view_H-chat" scroll-x>
        <view class="scroll-view-item_H uni-bg-red" v-for="(item,index) in chatDyList" :key="index"
        @click="onClickChatDy(item.name)"
        >
	        <text>{{  index+1}}.</text>{{ item.name }}
        </view>
    </scroll-view>
	<view class="filed-bot tabber-content-list">
		<van-field clearable v-model="qinput" :disabled="isDisabled" placeholder="请输入你想要问的内容吧">
			<template #button v-if="qinput.length">
				<van-icon name="guide-o" />
			</template>
		</van-field>
	</view>

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
      padding:20rpx;
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
.filed-bot,.chat-more,.scroll-view_H-chat{
  bottom: 0;
  position: fixed;
	
}
.filed-bot{
  left: 0;
}
.scroll-view_H-chat,.chat-more{
  bottom: calc(var(--window-bottom) + 1rpx );
  z-index: 1;
}
.scroll-view_H-chat,.filed-bot {
  width: 100%;
}
.scroll-view_H-chat{
  white-space: nowrap;
  background: #d5d5d5;
  .scroll-view-item_H {
    display: inline-block;
    text-align: center;
    font-size: 20rpx;
    padding:14rpx;
  }
}
.chat-more{
  font-size: 100rpx;
  right:0;
  
}
</style>
