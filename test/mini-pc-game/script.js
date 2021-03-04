import '../../src/index'

var demo = document.getElementById('demo')
demo.onclick = (e)=>{
    var id = e.target.getAttribute('id')
    if(!id){
        return ;
    }
    switch(id){
        case 'getAuthInfo':
            (()=>{
                console.log('获取登录态 click')
                mnwpc.getUserAuth(function(result){
                    console.log(result)
                })
            })();
            break;
        case 'openMapAction':
            (()=>{
                console.log('打开地图 click')
                mnwpc.openMapDetail({
                    id:'3212702269945'
                })
            })();
            break;
        case 'openRoom':
            (()=>{
                console.log('打开房间 click')
                mnwpc.openRoom({
                    owid:'90173043162150',
                    uin_range:'2259,2259'
                })
            })();
            break;
        case 'qqLoginBind':
            (()=>{
                console.log('QQ绑定 click')
                mnwpc.qqLoginBind({
                    openId:'22222'
                },function(result){console.log(result)})
            })();
            break;
        case 'wechatLoginBind':
            (()=>{
                console.log('微信绑定 click')
                mnwpc.wechatLoginBind({
                    openId:'22222'
                },function(result){console.log(result)})
            })();
            break;
        default:
            break;
    }
}
