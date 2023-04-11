import {requests} from '@/utils/requests'
export default ()=>{
    const list = ref([]);//列表数据
    const search = ref('');//搜索关键字
    const loading = ref(true);//是否正在加载
    const finished = ref(true);//是否加载完毕
    const refreshing = ref(false);//是否正在刷新
    const page=ref(1);//当前页码
    const pageSize=ref(10);//每页条数
    const total=ref(0)
    const onClearList=()=>{
        search.value='';
        list.value = [];
        page.value = 1;
        pageSize.value = 10;
        total.value = 0;
        loading.value = true;
        finished.value = false;
        refreshing.value = false;
    }
    //列表数据
    const getListOld=async ()=>{

    }
    //重置数据
    const onRefresh=async ()=>{
        onClearList()
        await getListOld()
    }
    //搜索
    const onSearch=async (value)=>{
        console.log(value)
        search.value=value
        onClearList()
        await getListOld()
    }
    //清空搜索
    const onCancel=async ()=>{
        onClearList()
        await getListOld()
    }
    const getTabList=(title)=>{
        requests({
            url: 'home/tag',
            data:{
                title
            },
        }).then(res=>{
            list.value=res.list
            total.value=res.count
            if(!res.list.length){
                loading.value=false
            }
        }).catch(err=>{
            loading.value=false
        })
    }
    
    return {
        list,
        search,
        onLoad,
        loading,
        finished,
        onRefresh,
        total,
        refreshing,
        onSearch,
        onCancel,
        getTabList
    };
}
