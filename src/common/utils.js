const toast = (msg) => {
    wx.showToast({
        icon: 'none',
        title: msg
    });
}

export default {
    toast
};