var commonFun = {};
commonFun.checkJson = {
    mobile:{
        reg:/^1[3-9]\d{9}$/,
        msg:'请输入正确的手机号码'
    },
    tel:{
        reg:/^\d{7,11}$/,
        msg:'电话号码必须为7到11位的数字！'
    },
    password:{
        reg:/^[a-zA-Z0-9]{6,20}$/,
        msg:'密码为字母+数字，不区分大小写，最少六位'
    }
}
commonFun.constantObj = {
    //九大服务 02,03
    serviceList:[{
        text:'无导航描述',
        value:'01',
        key:'01'
    },{
        text:'拍摄位置导航',
        value:'02',
        key:'02'
    },{
        text:'停车位置导航',
        value:'03',
        key:'03'
    },{
        text:'拍摄位置循迹',
        value:'04',
        key:'04'
    },{
        text:'摄影师带队',
        value:'05',
        key:'05'
    },{
        text:'推荐摄影师',
        value:'06',
        key:'06'
    },{
        text:'推荐摄影导游',
        value:'07',
        key:'07'
    },{
        text:'住家楼顶拍摄',
        value:'08',
        key:'08'
    },{
        text:'推荐住宿酒店',
        value:'09',
        key:'09'
    }]
}

// 直接在页面中访问，
// configCommon.constantObj.serviceList
export default commonFun;