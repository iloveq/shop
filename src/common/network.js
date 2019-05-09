const API = {
   host: 'http://172.30.14.202:8030/shop'
}

const ajax = ({url = '',type = 'POST',para = {},isUseOrigin = true } = {}) => {

    return new Promise((resolve, reject) => {
        let currentUrl = `${API.host}/${url}`
        if (!isUseOrigin) {
            currentUrl = url
        }
        wx.request({
            url: currentUrl,
            header: {
                'content-type': 'application/json',
            },
            method: type,
            data: para,
            success(res) {
                let content = res.data.content;
                if(res.data.code==200){
                    resolve(content);
                }else{
                    reject(res.data.code); 
                }
                
            },
            fail(err) {
                reject(err);
            }
        })
    });

}

export default {
    ajax
};