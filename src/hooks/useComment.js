export default ()=>{
    const contentDetailsRef=ref(null)//内容详情
    const sendText=ref('')//评论内容
    const sendTextLen=ref(0)//评论内容长度
    const isCommentShow=ref(false)//
    const placeholder=ref('请输入内容')//评论框占位符
    const commentInput=ref(null)//评论输入框
    // 评论
    const onInputBoxClear=e=>{
        console.log(e)
    }
    return {
        contentDetailsRef,
        sendText,
        sendTextLen,
        isCommentShow,
        placeholder,
        commentInput,
        onInputBoxClear
    }
}
