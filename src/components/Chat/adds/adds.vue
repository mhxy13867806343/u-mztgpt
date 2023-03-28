<script setup>
import {showNotify} from "vant";
const emit=defineEmits(['submit'])
const key=ref('')//当前用户所需要的key
//提交数据
const onSubmit=values=>{
	const arr=[]
	Object.keys(values).forEach(key => {
		arr.push(values[key])
	});
	emit('submit',arr)
}
//粘贴至输入框
const clickCopy=()=>{
	uni.getClipboardData({
		success: function (res) {
			console.log(res.data);
			uni.setClipboardData({
				data: res.data,
				success: ()=> {
					if(!res.data){
						showNotify({
							message: `请先复制数据过来`,
							color: '#fff',
							background: 'var(--van-notify-warning-background)',
							duration: 1500,
						})
						key.value=''
						return
					}
					key.value=res.data
				}
			});
		}
	});
	
}
</script>
<template>
	<view style="margin: 16px;">
		<van-button round block type="primary" @click="clickCopy">
			粘贴至输入框
		</van-button>
	</view>
	<van-form @submit="onSubmit">
		<van-cell-group inset>
			<van-field
				v-model="key"
				name="当前用户所需要的key"
				label="key"
				clearable  autosize
				type="textarea"
				maxlength="255"  show-word-limit
				placeholder="当前用户所需要的key"
				:rules="[{ required: true, message: '当前用户所需要的key',
				trigger: ['onBlur','onChange','onSubmit'],
				 validator:(val)=>{
					const regex = /^[a-zA-Z]*$/;
					if(!regex.test(val)){
						return '当前用户所需要的key只能是字母'
						
					}
					
				 }
				 }]"
			/>
		</van-cell-group>
		<view style="margin: 16px;">
			<van-button round block type="primary" native-type="submit">
				提交
			</van-button>
		</view>
	</van-form>
</template>


<style scoped lang="scss">
@import "../chat.scss";
</style>
