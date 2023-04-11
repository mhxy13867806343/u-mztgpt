import useStroe from "@/hooks/useStroe";
import {isProduction} from './env.js'
import { showLoadingToast,showSuccessToast, showFailToast } from 'vant';
export function requests(opt) {
    const {getStorageSync}=useStroe()
    const {url,method,message,forbidClick,loadingType,duration,data}=opt
    return new Promise((resolve, reject) => {
        showLoadingToast({
            message: message||'加载中...',
            forbidClick: forbidClick||true,
            loadingType: loadingType||'spinner',
            duration: duration||0
        });
        const _token=getStorageSync('token')
        uni.request({
            url: isProduction+url,
            data,
            method: method||'GET',
            header: {
                'content-type': 'application/json',
                Authorization: `Bearer ${_token}`
            },
            success(response) {
                const {code,data,msg} = response.data
                if (code === 200) {
                    showSuccessToast(msg)
                    resolve(data);
                    
                } else {
                    showFailToast(msg)
                    reject(new Error(`Request failed with status code: ${code}`));
                   
                }
            },
            fail(err) {
                showFailToast('请求失败')
                reject(err);
              
            }
        });
    });
}
