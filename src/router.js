import Vue from 'vue'
import Router from 'vue-router'
import Landing from './views/Landing.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'landing',
      component: Landing
    },
    //我的页面
    {
      path: '/profile',
      name: "profile",
      component: () => import('./views/mine/profile.vue'),

    },
    {
      //我的信息
      path: '/profile/Account',
      name: "Account",
      component: () => import('./views/mine/myAccount/Account.vue'),

    },
    {
      //我的信息-登陆密码修改
      path: '/profile/ResetPassword',
      name: "ResetPassword",
      component: () => import('./views/mine/myAccount/ResetPassword.vue'),

    },
    {
      //我的信息-收货地址
      path: '/profile/DeliveryAddress',
      name: "DeliveryAddress",
      component: () => import('./views/mine/myAccount/DeliveryAddress.vue'),

    },
    {
      //我的信息-增加地址
      path: '/profile/AddAddress',
      name: "AddAddress",
      component: () => import('./views/mine/myAccount/AddAddress.vue'),

    },
    {
      //我的信息-增加地址-编辑
      path: '/profile/AddAddress/SearchAd',
      name: "SearchAd",
      component: () => import('./views/mine/myAccount/SearchAd.vue'),

    },
    {
      //我的信息-用户名
      path: '/profile/Account/ResetUsername',
      name: "ResetUsername",
      component: () => import('./views/mine/myAccount/ResetUsername.vue'),

    },
    {
      // 我的余额
      path: '/profile/myBalance',
      name: 'myBalance',
      component: () => import('./views/mine/myBalance.vue')
    },
    {

      path: '/profile/myBalance/state',
      name: 'state',
      component: () => import('./views/mine/state.vue')
    },

    {
      // 我的优惠
      path: '/profile/myDiscounts',
      name: 'myDiscounts',
      component: () => import('./views/mine/myDiscounts.vue')
    },

    {
      path: '/profile/myDiscounts/hongbaoSm',
      name: 'hongbaoSm',
      component: () => import('./views/mine/hongbaoSm.vue')
    },

    {
      path: '/profile/myDiscounts/daijj',
      name: 'daijj',
      component: () => import('./views/mine/daijj.vue')
    },
    {
      path: '/profile/myDiscounts/integral',
      name: 'integral',
      component: () => import('./views/mine/integral.vue')
    },
    {
      path: '/profile/myDiscounts/cashHb',
      name: 'cashHb',
      component: () => import('./views/mine/Discounts/cashHb.vue')
    }, {
      path: '/profile/myDiscounts/hisToryHb',
      name: 'hisToryHb',
      component: () => import('./views/mine/Discounts/hisToryHb.vue')
    }, {
      path: '/profile/myDiscounts/recommend',
      name: 'recommend',
      component: () => import('./views/mine/Discounts/recommend.vue')
    },
    {
      // 我的积分
      path: '/profile/myIntegral',
      name: 'myIntegral',
      component: () => import('./views/mine/myIntegral.vue')
    },
    {
      // 积分商城
      path: '/profile/JFStore',
      name: 'JFStore',
      component: () => import('./views/mine/JFStore.vue')
    }, {
      //会员中心
      path: '/profile/vip',
      name: 'vip',
      component: () => import('./views/mine/Vip/VipCard.vue')
    },
    {
      //会员购买
      path: '/profile/vip/OnlinePay',
      name: 'OnlinePay',
      component: () => import('./views/mine/Vip/OnlinePay.vue')
    },
    //商家注册信息
    {
      path: '/storeDetail',
      name: 'storeDetail',
      component: () => import('./views/shop/everyStore/storeMess/StoreDetail.vue')
    },
    //商品介绍页面
    {
      path: '/goodsDetail',
      name: 'goodsDetail',
      component: () => import('./views/shop/everyStore/letsShopping/GoodsDetail.vue')
    }, {
      path: '/qyrz',
      name: 'qyrz',
      component: () => import('./views/shop/everyStore/storeMess/Qyrz.vue')
    },
    {
      path: '/oneOrder',
      name: 'oneOrder',
      component: () => import('./views/order/oneOrder.vue')
    },
    {
      //会员说明

      path: '/profile/vip/vipDescribe',
      name: 'vipDescribe',
      component: () => import('./views/mine/Vip/VipDescribe.vue')
    },
    {
      //会员兑换
      path: '/profile/vip/ChangeVip',
      name: 'ChangeVip',
      component: () => import('./views/mine/Vip/ChangeVip.vue')
    },
    {
      //会员购买记录
      path: '/profile/vip/BuyRecord',
      name: 'BuyRecord',
      component: () => import('./views/mine/Vip/BuyRecord.vue')
    },
    {
      //会员购买记录
      path: '/OnlinePay',
      name: 'OnlinePay',
      component: () => import('./views/buy/OnlinePay.vue')
    },
    {
      //服务中心
      path: '/profile/ServeCenter',
      name: 'ServeCenter',
      component: () => import('./views/mine/ServeCenter/ServiceCenter.vue')
    }, {
      //热门问题
      path: '/profile/Answers',
      name: 'Answers',
      component: () => import('./views/mine/ServeCenter/Answers.vue')
    }, {
      //下载
      path: '/profile/Download',
      name: '/profile/Download',
      component: () => import('./views/mine/Download.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/login/login.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('./views/register/register.vue')
    },
    //商店
    {
      path: '/shop',
      name: 'shop',
      component: () => import('./views/shop/shop.vue')
    },
    //分类
    {
      path: '/shop/classify',
      name: 'classify',
      component: () => import('./views/shop/classify/classify.vue')
    },
    // 单独商家页面---购物车和评论
    {
      path: '/letsShop',
      name: 'letsShop',
      component: () => import('./views/shop/everyStore/LetsShop.vue'),
      children: [{
          path: '/addShoping',
          name: 'addShoping',
          component: () => import('./views/shop/everyStore/letsShopping/AddShoping'),
        },
        {
          path: '/showComment',
          name: 'showComment',
          component: () => import('./views/shop/everyStore/letsShopping/ShowComment'),
        }
      ]
    },
    //购物车跳转订单详情
    {
      path: '/confirmOrder',
      name: 'confirmOrder',
      component: () => import('./views/buy/ConfirmOrder.vue')
    },
    {
      path: '/chooseAddress',
      name: 'chooseAddress',
      component: () => import('./views/buy/chooseAddress.vue')
    },
    {
      path: '/addAddress',
      name: 'addAddress',
      component: () => import('./views/buy/AddAddress.vue')
    },
    //订单备注 
    {
      path: '/remark',
      name: 'remark',
      component: () => import('./views/buy/remark.vue')
    },
    //开具发票
    {
      path: '/receipt',
      name: 'receipt',
      component: () => import('./views/buy/receipt.vue')
    },
    //选择送餐地址
    {
      path: '/chooseAdd',
      name: 'chooseAdd',
      component: () => import('./views/buy/chooseAdd.vue')
    }, {
      path: '/search',
      name: 'search',
      component: () => import('./views/search/search.vue')
    },
    {
      path: '/order',
      name: 'order',
      component: () => import('./views/order/order.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('./views/mine/profile.vue')
    },
    {
      path: '/pinpoint',
      name: 'pinpoint',
      component: () => import('./views/pinpoint/pinpoint.vue')
    }
  ]
})