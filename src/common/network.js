const API = {
   host: 'http://127.0.0.1:8996'
}

const ajax = ({url = '',type = 'GET',para = {},isUseOrigin = true } = {}) => {

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
            type: type,
            data: para,
            success(res) {
                let content = res.data.content;
                if (!isUseOrigin) {
                    content = res.data.data;
                }
                resolve(content);
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