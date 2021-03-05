/* eslint-disable */
import '../../src/index'

var demo = document.getElementById('demo')
demo.onclick = function(e){
    var id = e.target.getAttribute('id')
    if(id){
        switch(id){
            case 'openShare':
                (function(){
                    console.log('打开分享弹层');
                    mnb.openShareActionSheet({
                        "imgUrl": "https://static-www.mini1.cn/manage/attach/18-12-21/b9c8ebb595fa9f1cc833698d33eb4411.jpg",
                        "shareUrl": "https://www.mini1.cn/",
                        "title": "迷你世界测试分享",
                        "content": "分享到QQ"
                    },function(result){console.log('分享回调----',result)})
                })();
                break;
            case 'shareToQQ':
                (function(){
                    console.log('分享到QQ click');
                    mnb.shareToQQ({
                        "imgUrl": "https://static-www.mini1.cn/manage/attach/18-12-21/b9c8ebb595fa9f1cc833698d33eb4411.jpg",
                        "shareUrl": "https://www.mini1.cn/",
                        "title": "迷你世界测试分享",
                        "content": "分享到QQ"
                    },function(result){console.log('分享QQ回调----',result)});
                })();
                break;
            case 'shareToQZone':
                (function(){
                    console.log('分享到QQ空间 click');
                    mnb.shareToQZone({
                        "imgUrl": "https://static-www.mini1.cn/manage/attach/18-12-21/b9c8ebb595fa9f1cc833698d33eb4411.jpg",
                        "shareUrl": "https://www.mini1.cn/",
                        "title": "迷你世界测试分享",
                        "content": "分享到QQ空间"
                    },function(result){console.log('分享QQ空间回调----',result)});
                })();
                break;
            case 'shareToWechat':
                (function(){
                    console.log('分享到微信 click');
                    mnb.shareToWechat({
                        "imgUrl": "https://static-www.mini1.cn/manage/attach/18-12-21/b9c8ebb595fa9f1cc833698d33eb4411.jpg",
                        "shareUrl": "https://www.mini1.cn/",
                        "title": "迷你世界测试分享",
                        "content": "分享到微信"
                    },function(result){console.log('分享微信回调----',result)});
                })();
                break;
            case 'shareToTimeline':
                (function(){
                    console.log('分享到微信朋友圈 click');
                    mnb.shareToTimeline({
                        "imgUrl": "https://static-www.mini1.cn/manage/attach/18-12-21/b9c8ebb595fa9f1cc833698d33eb4411.jpg",
                        "shareUrl": "https://www.mini1.cn/",
                        "title": "迷你世界测试分享",
                        "content": "分享到微信朋友圈"
                    },function(result){console.log('分享微信朋友圈回调----',result)});
                })();
                break;
            case 'openMapAction':
                (function(){
                    console.log('点击打开地图');
                    mnb.openMapAction({
                        mapId:'40798043659590'
                    })
                })();
                break;
            case 'getUserAuthInfo':
                (function(){
                    console.log('点击获取登录状态');
                    mnb.getUserAuthInfo(function(result){
                        console.log('登录状态为----',result)
                        console.log('登录态的数据类型',typeof result)
                    })
                })();
                break;
            case 'toMyself':
                (function(){
                    location.reload();
                })
            default :
                break;
        }
    }
}