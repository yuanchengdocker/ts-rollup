import { boxOptionConfigsInter } from '../interface'
const optionConfigs: boxOptionConfigsInter = {
  openShareActionSheet: {
    method: 'shareAction',
    option: {
      sharePlatform: null
    }
  },
  shareToWechat: {
    method: 'shareAction',
    option: {
      sharePlatform: 'Wechat'
    }
  },
  shareToTimeline: {
    method: 'shareAction',
    option: {
      sharePlatform: 'WechatMoments'
    }
  },
  shareToQQ: {
    method: 'shareAction',
    option: {
      sharePlatform: 'QQ'
    }
  },
  shareToQZone: {
    method: 'shareAction',
    option: {
      sharePlatform: 'QZone'
    }
  },
  openMapAction: {
    method: 'openMapAction'
  },
  getUserAuthInfo: {
    method: 'getUserAuthInfo'
  }
}
export default {
  optionConfigs
}
