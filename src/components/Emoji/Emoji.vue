<script setup>
import {Toast} from "vant";
const props = defineProps({
	inputBox: {
		type: String,
	},
	inputLen: {
		type: Number,
	},
})


const emit=defineEmits(['update:inputBox','clear'])
const emojiTitleActive=ref(0)	// 表情索引
const codeDom=ref('')	// 点击空白处隐藏
const emojiTrgger=ref('') // 触发表情的dom
const emojiList=ref([]) // 表情列表
const divInputBox=ref('')// 输入框操作
const emojiShow=ref(false) // 是否显示表情
const historyListEmojiRef=ref([]) //历史表情



onMounted(() => {
	const _historyListEmoji=JSON.parse(localStorage.getItem('historyListEmoji'))
	if(_historyListEmoji){
		historyListEmojiRef.value=_historyListEmoji
	}
	getEmojiList1()
	setTimeout(()=>{
		if(emojiList.value.length){
			const emojiContainerAll=document.querySelectorAll('.emoji-all-container')
			const emojiItemAll=document.querySelectorAll('.emoji-item-img-url')
			const emojiListLen=emojiList.value.length
			for(let i=0;i<emojiContainerAll.length;i++){
				const sum=emojiItemAll[i].height*(emojiListLen/24)
				emojiContainerAll[i].style.maxHeight=sum+'px'
			}
		}
	},200)
	document.addEventListener('click', closeSelect)
	emojiTrggerSelectType('addEventListener')
	divInputBoxaddEventListener()
})
onUnmounted(() => {
	document.removeEventListener('click', closeSelect)
	emojiTrggerSelectType('removeEventListener')
})
//获取表情列表
const getEmojiList1=()=>{
	const emojiList1=[]
	const emojiNum=1
	const emojiEnd=130
	for(let i=1;i<emojiEnd+1;i++){
		emojiList1.push({
			e_url:`/static/emoji/${i}.png`,
			e_name:`${emojiNum}-${i}`
		})
	}
	emojiList.value=emojiList1
}
//点击空白处隐藏
const closeSelect = (e) => {
	if (codeDom.value && !codeDom.value.contains(e.target)) {
		emojiShow.value = false
	}
}
const emojiTrggerSelect=e=>{
	return e.preventDefault()
}
const emojiTrggerSelectType=type=>{
	if(emojiTrgger.value){
		emojiTrgger.value[type]('click', e=>emojiTrggerSelect(e))
	}
}
const divInputBoxaddEventListener=()=>{
	divInputBox.value.addEventListener('input',e=>{
		emit('update:inputBox',e.target.innerHTML)
	})
}
const onEmojiClick=(item,type)=>{
	if ( document.activeElement!==divInputBox.value) {
		divInputBox.value.focus()
	}
	const src =item.e_url
	const imgSrc=`<img class="emoji-imgs" src="${src}" style="width: 20px;height: 20px;"/>`
	document.execCommand('insertHTML', true, imgSrc)
	// divInputBox.value.innerHTML += imgSrc
	document.getSelection().collapseToEnd()

	if(type=='news'){
		saveHistoryEmoji(item)
	}

}
const onClickDivInputBoxFocus=()=>{
	emojiShow.value=!emojiShow.value
	//divGetSelection()
	divGetSelection()
}
const divGetSelection=()=>{
	const  esrc = document.getElementById('inputBox');

	const range = document.createRange();

	range.selectNodeContents(esrc);

	range.collapse(false);

	const sel = window.getSelection();

	sel.removeAllRanges();

	sel.addRange(range);
}
//保存历史表情
const saveHistoryEmoji=(item)=>{
	let  list=historyListEmojiRef.value
	const temp_index=list.indexOf(item)
	if(temp_index>-1){
		historyListEmojiRef.value.splice(temp_index,1)
	}
	historyListEmojiRef.value.unshift(item)


	// 历史记录只保存6条

	if (list && list.length && list.length > 8) {

		list.pop()
	}
	localStorage.setItem("historyListEmoji", JSON.stringify(historyListEmojiRef.value));

}
const onemojiTitleActive=index=>{
	emojiTitleActive.value=index

}

</script>
<template>
	<div id="apps" ref="codeDom">
		<div class="emoji-container">
			<div class="input-box-container">
				<div class="input-box-edit">
					<div class="input-box" contenteditable="true" spellcheck="false" id="inputBox"
							 placeholder="这一刻的想法..."
							 ref="divInputBox"
					></div>
				</div>
				
			</div>
			<div class="input-action-position">
				<div class="input-action-part">
					<div @click="onClickDivInputBoxFocus" class=" iconfont icon-biaoqing icon-count flex-end flex-1"><span class="emoji-trgger"
					ref="emojiTrgger"
					></span></div>

				</div>
				<scroll-view  scroll-y="true" class="scroll-Y"  v-show="emojiShow" :style="{height:'200px'}">
					<div class="input-action-absolute">
						<span
							@click="onemojiTitleActive(0)"
							class="iconfont  icon-111" :class="[emojiTitleActive===0?'icon-biaoqing1-copy':'icon-biaoqing']"></span>
						<div>
							<div class="emoji-all-container">
								<img  v-for="(item,index) in emojiList" :src="item.e_url" :key="index"
								      class="emoji-item-img-url"
								      @click="onEmojiClick(item,'news')"
								>
							</div>
						</div>
					</div>
				</scroll-view>
				
			</div>
		</div>

	</div>
</template>



<style scoped>
.emoji-container{
	width: 100%;
	background-color:#fff;
}
.input-action-part{
	display: flex;
	align-items: center;
	padding:0 20rpx;
	margin: 10rpx 0;
}
.emoji-trgger{
	color: #4e5969;
	font-size: 24rpx;
	line-height: 30rpx;
	transition: color .3s;
	padding: 0 15rpx;
}
.input-box-container {
	padding:1rpx;
	//position: relative;

}
.input-box-edit{
	overflow: hidden;
	min-height: 100rpx;
	overflow-y: scroll;
}
.input-count{
  font-size: 22rpx;
	color: #8a919f;
  text-align: center;
  z-index: 1;
}
.input-box {
	margin: 0 auto;
	background: #efefef;
	width: 100%;
	min-height: 100rpx;
	outline: none;
	border: transparent;
	border-radius: 8rpx;
	padding: 10rpx;
	font-size: 20rpx;
}
.input-box:empty:before {
	content: attr(placeholder);
	//position: absolute;
	color: gray;
	background-color: transparent;
	font-size: 26rpx;
	opacity: 0.57;
}
 .emoji-all-container img{
	width:60rpx;
	height:60rpx;
	padding:6rpx;
	cursor:pointer;
}

.input-action-absolute{
	width: 100%;
	background: #fff;
	box-shadow: 0 16rpx 48rpx rgb(0 0 0 / 16%);
	border-radius: 4rx;
}
.icon-111{
	padding: 20rpx;
}
</style>
