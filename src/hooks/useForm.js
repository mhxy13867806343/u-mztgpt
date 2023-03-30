import useStore from './useStroe'
export default ()=>{
    const {setStorageSync, getStorageSync,}=useStore()
    const isLoginShow=ref(false)//登录弹窗
    const user=ref({})//用户信息
    const token=ref('')//用户token
    onShow(()=>{
        const userData=getStorageSync('user')
        const _token=getStorageSync('token')
        token.value=_token
        if(!_token){
            isLoginShow.value=true
        }
    })
    //关闭登录弹窗
    const onCloseForm=()=>{
        isLoginShow.value=false
    }
    //打开登录弹窗
    const onLogin=()=>{
        const _token=getStorageSync('token')
        if(!_token){
            isLoginShow.value=true
        }
        return false
       
    }
    //保存用户信息
    const saveForm=async ({token,data})=>{
       await setStorageSync('user',data)
      await  setStorageSync('token',token)
    }
    const onClickLv=()=>{
        uni.navigateTo({
            url: '/pages/level/level'
        });
    }
    return {
        token,
        isLoginShow,
        onCloseForm,
        onLogin,
        onClickLv
    }
}
