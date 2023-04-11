export default ()=>{
    const onClickDetlis = (id) => {
        uni.navigateTo({
            url: `/pages/mmDetails/mmDetails?id=${id}`
        })
    }
    return {
        onClickDetlis
    }
}
