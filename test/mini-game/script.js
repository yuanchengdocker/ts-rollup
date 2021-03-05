import '../../src/index'
var demo = document.getElementById('demo');
mnw.initNativeShare(
  {
    platform: [
      'fx_qq',
      'fx_fb',
      'fx_wx',
      'fx_pyq',
      'fx_wb',
      'fx_qqkj',
      'fx_tw',
    ],
    imgUrl:
      'https://static-www.mini1.cn/manage/attach/18-12-21/b9c8ebb595fa9f1cc833698d33eb4411.jpg',
    url: 'https://www.mini1.cn/',
    title: '初始化工具栏分享数据22',
    content: '初始化工具栏分享数据content',
  },
  function (result) {
    console.log('初始化工具栏分享数据' + result);
  }
);
demo.onclick = function (e) {
  var id = e.target.getAttribute('id');
  if (!id) {
    return;
  }
  switch (id) {
    case 'getUserAgent':
      (function () {
        alert(navigator.userAgent);
      })();
      break;
    case 'openShare':
      (function () {
        console.log('打开分享 click');
        mnw.openShare(
          {
            platform: [
              'fx_qq',
              'fx_fb',
              'fx_wx',
              'fx_pyq',
              'fx_wb',
              'fx_qqkj',
              'fx_tw',
            ],
            imgUrl:
              'https://static-www.mini1.cn/manage/attach/18-12-21/b9c8ebb595fa9f1cc833698d33eb4411.jpg',
            url: 'https://www.mini1.cn/',
            title: '迷你世界测试分享',
            content: '打开原生的分享弹层',
          },
          function (result) {
            console.log('分享回调----', result);
          }
        );
      })();
      break;
    case 'shareToQQ':
      (function () {
        console.log('分享到QQ click');
        mnw.shareToQQ(
          {
            imgUrl:
              'https://static-www.mini1.cn/manage/attach/18-12-21/b9c8ebb595fa9f1cc833698d33eb4411.jpg',
            url: 'https://www.mini1.cn/',
            title: '迷你世界测试分享',
            content: '分享到QQ',
          },
          function (result) {
            console.log('分享QQ回调----', result);
          }
        );
      })();
      break;
    case 'shareToFacebook':
      (function () {
        console.log('分享到FB click');
        mnw.shareToFB(
          {
            imgUrl:
              'https://static-www.mini1.cn/manage/attach/18-12-21/b9c8ebb595fa9f1cc833698d33eb4411.jpg',
            url: 'https://www.mini1.cn/',
            title: '迷你世界测试分享',
            content: '分享到FB',
          },
          function (result) {
            console.log('分享FB回调----', result);
          }
        );
      })();
      break;
    case 'shareToTwitter':
      (function () {
        console.log('分享到twitter click');
        mnw.shareToTwitter(
          {
            imgUrl:
              'https://static-www.mini1.cn/manage/attach/18-12-21/b9c8ebb595fa9f1cc833698d33eb4411.jpg',
            url: 'https://www.mini1.cn/',
            title: '迷你世界测试分享',
            content: '分享到twitter',
          },
          function (result) {
            console.log('分享twitter回调----', result);
          }
        );
      })();
      break;
    case 'shareToWechat':
      (function () {
        console.log('分享到微信 click');
        mnw.shareToWechat(
          {
            imgUrl:
              'https://static-www.mini1.cn/manage/attach/18-12-21/b9c8ebb595fa9f1cc833698d33eb4411.jpg',
            url: 'https://www.mini1.cn/',
            title: '迷你世界测试分享',
            content: '分享到微信',
          },
          function (result) {
            console.log('分享微信回调----', result);
          }
        );
      })();
      break;
    case 'shareToWeibo':
      (function () {
        console.log('分享到微博 click');
        mnw.shareToWeibo(
          {
            imgUrl:
              'https://static-www.mini1.cn/manage/attach/18-12-21/b9c8ebb595fa9f1cc833698d33eb4411.jpg',
            url: 'https://www.mini1.cn/',
            title: '迷你世界测试分享',
            content: '分享到weibo',
          },
          function (result) {
            console.log('分享weibo回调----', result);
          }
        );
      })();
      break;
    case 'shareToTimeline':
      (function () {
        console.log('分享到朋友圈 click');
        mnw.shareToTimeline(
          {
            imgUrl:
              'https://static-www.mini1.cn/manage/attach/18-12-21/b9c8ebb595fa9f1cc833698d33eb4411.jpg',
            url: 'https://www.mini1.cn/',
            title: '迷你世界测试分享',
            content: '分享到朋友圈',
          },
          function (result) {
            console.log('分享朋友圈回调----', result);
          }
        );
      })();
      break;
    case 'shareToQZone':
      (function () {
        console.log('分享到QZone click');
        mnw.shareToQZone(
          {
            imgUrl:
              'https://static-www.mini1.cn/manage/attach/18-12-21/b9c8ebb595fa9f1cc833698d33eb4411.jpg',
            url: 'https://www.mini1.cn/',
            title: '迷你世界测试分享',
            content: '分享到QZone',
          },
          function (result) {
            console.log('分享QZone回调----', result);
          }
        );
      })();
      break;
    case 'reloadPage':
      (function () {
        console.log('刷新页面 click');
        mnw.refreshPage();
      })();
      break;
    case 'closeWindow':
      (function () {
        console.log('关闭浏览器 click');
        mnw.closeWindow(function(result){console.log(result);});
      })();
      break;
    case 'showBar':
      (function () {
        console.log('显示所有工具栏 click');
        mnw.showBar(
          {
            bar: ['top', 'bottom'],
          },
          function (result) {
            console.log(result);
          }
        );
      })();
      break;
    case 'showTopBar':
      (function () {
        console.log('显示菜单栏 click');
        mnw.showBar(
          {
            bar: ['top'],
          },
          function (result) {
            console.log(result);
          }
        );
      })();
      break;
    case 'showBottomBar':
      (function () {
        console.log('显示下工具栏 click');
        mnw.showBar(
          {
            bar: ['bottom'],
          },
          function (result) {
            console.log(result);
          }
        );
      })();
      break;
    case 'hideBar':
      (function () {
        console.log('隐藏所有工具栏 click');
        mnw.hideBar(
          {
            bar: ['top', 'bottom'],
          },
          function (result) {
            console.log(result);
          }
        );
      })();
      break;
    case 'hideTopBar':
      (function () {
        console.log('隐藏标题栏 click');
        mnw.hideBar(
          {
            bar: ['top'],
          },
          function (result) {
            console.log(result);
          }
        );
      })();
      break;
    case 'hideBottomBar':
      (function () {
        console.log('隐藏下工具栏 click');
        mnw.hideBar(
          {
            bar: ['bottom'],
          },
          function (result) {
            console.log(result);
          }
        );
      })();
      break;
    case 'getNetworkType':
      (function () {
        console.log('获取网络状态 click');
        mnw.getNetworkType(function (result) {
          console.log('当前网络状态为---' + result);
        });
      })();
      break;
    case 'checkMiniboxInstallStatus':
      (function () {
        // 判断是否安装了盒子，iOS因政策原因不能判断其他应用状态，所以会一直返回false字符串
        console.log('判断是否安装了盒子 click');
        mnw.checkMiniboxInstallStatus(function (result) {
          console.log(typeof result);
          console.log('迷你盒子是否已安装---' + result);
        });
      })();
      break;
    case 'openMinibox':
      (function () {
        console.log('打开盒子 click');
        mnw.openMinibox(function (result) {
          console.log('是否已经打开迷你盒子---' + result);
        });
      })();
      break;
    case 'checkOrOpenDownload':
      (function () {
        console.log('判断打开盒子，否就调起下载链接 click');
        mnw.openMinibox(function (result) {
          console.log('是否已经打开迷你盒子---' + result);
          result = result + '';
          if (result !== 'true') {
            window.location.href =
              'https://helper.miniworldbox.com/index/apk/android';
          }
        });
      })();
      break;
    case 'downloadImage':
      (function () {
        console.log('下载图片到相册 click');
        mnw.donwloadImage(
          {
            url:
              'https://static-www.mini1.cn/manage/attach/18-12-29/dcf4b658f58fb7aa96570096d1274128.jpg',
          },
          function (result) {
            console.log('保存图片到相册回调-----', result);
          }
        );
      })();
      break;
    case 'hasAD':
      (function () {
        console.log('判断是否有广告 click');
        mnw.hasAD(function (result) {
          console.log('是否有广告可播放-----', result);
          // ios 为字符串  安卓为布尔类型
        });
      })();
      break;
    case 'openAD':
      (function () {
        console.log('打开广告 click');
        mnw.openAD(function (result) {
          console.log('广告回调----', result);
        });
      })();
      break;
    case 'showShareBtn':
      (function () {
        console.log('显示分享按钮 click');
        mnw.showShareBtn();
      })();
      break;
    case 'hideShareBtn':
      (function () {
        console.log('隐藏分享按钮 click');
        mnw.hideShareBtn();
      })();
      break;

    case 'openChargeStore':
      (function () {
        /**
         * 打开充值界面，此接口只在移动端openBrowser=3打开窗口浏览器的情况下有效
         */
        console.log('打开充值界面按钮 click');
        mnw.openChargeStore();
      })();
      break;
    case 'openMapDetail':
      (function () {
        /**
         * 打开地图详情页面，此接口只在移动端openBrowser=3打开窗口浏览器的情况下有效
         */
        console.log('打开地图详情页面 click');
        // 正式服地图：97964088950057
        // 测试服地图：3212702269945
        mnw.openMapDetail({
          fromowid: '3212702269945',
        });
      })();
      break;
    case 'shareType1':
      (function () {
        console.log('打开分享类型 1 click');
        //分享【图片+链接】
        mnw.openShare(
          {
            shareType: '1',
            platform: [
              'fx_qq',
              'fx_fb',
              'fx_wx',
              'fx_pyq',
              'fx_wb',
              'fx_qqkj',
              'fx_tw',
            ],
            imgUrl:
              'https://static-www.mini1.cn/manage/attach/18-12-21/b9c8ebb595fa9f1cc833698d33eb4411.jpg',
            url: 'https://www.mini1.cn/',
            title: '迷你世界测试分享',
            content: '打开原生的分享弹层',
          },
          function (result) {
            console.log('分享回调----', result);
          }
        );
      })();
      break;
    case 'shareType2':
      (function () {
        console.log('打开分享类型 2 click');
        //分享【图片】
        mnw.openShare(
          {
            shareType: '2',
            platform: [
              'fx_qq',
              'fx_fb',
              'fx_wx',
              'fx_pyq',
              'fx_wb',
              'fx_qqkj',
              'fx_tw',
            ],
            imgUrl:
              'https://static-www.mini1.cn/manage/attach/18-12-21/b9c8ebb595fa9f1cc833698d33eb4411.jpg',
            url: 'https://www.mini1.cn/',
            title: '迷你世界测试分享',
            content: '打开原生的分享弹层',
          },
          function (result) {
            console.log('分享回调----', result);
          }
        );
      })();
      break;
    case 'shareType3':
      (function () {
        console.log('打开分享类型 3 click');
        // 分享【链接】
        mnw.openShare(
          {
            shareType: '3',
            platform: [
              'fx_qq',
              'fx_fb',
              'fx_wx',
              'fx_pyq',
              'fx_wb',
              'fx_qqkj',
              'fx_tw',
            ],
            imgUrl:
              'https://static-www.mini1.cn/manage/attach/18-12-21/b9c8ebb595fa9f1cc833698d33eb4411.jpg',
            url: 'https://www.mini1.cn/',
            title: '迷你世界测试分享',
            content: '打开原生的分享弹层',
          },
          function (result) {
            console.log('分享回调----', result);
          }
        );
      })();
      break;
    case 'getUserAuth':
      (function () {
        mnw.getUserAuth(function (result) {
          console.log('获取登录态回调', result);
        });
      })();
      break;
    case 'openRoom':
      (function () {
        console.log('打开房间click');
        mnw.openRoom({
          owid: '87016037434737', //90173043162150
          uin_range: '1331,1331', //2259,2259
        });
      })();
      break;
    case 'openTheme':
      (function () {
        console.log('打开主题click');
        mnw.openTheme({
          specId: '123',
        });
      })();
      break;
    default:
      break;
  }
};
