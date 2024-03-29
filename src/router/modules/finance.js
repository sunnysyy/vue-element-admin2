/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

// 系统设置
const financeRouter = {
  path: '/finance',
  component: Layout,
  redirect: '/finance/coupon-rule',
  name: 'FinanceManage',
  meta: {
    title: '财务管理',
    icon: 'money'
  },
  children: [
    {
      path: 'coupon-rule',
      component: () => import('@/views/permission/role'),
      name: 'CouponRule',
      meta: {
        title: '优惠券规则'
      }
    },
    {
      path: 'coupon-merger',
      component: () => import('@/views/permission/page'),
      name: 'CouponMerger',
      meta: {
        title: '优惠券合并规则'
      }
    },
    {
      path: 'coupon-pwd',
      component: () => import('@/views/permission/role'),
      name: 'CouponPwd',
      meta: {
        title: '优惠券动态口令'
      }
    },
    {
      path: 'coupon-manage',
      component: () => import('@/views/permission/page'),
      name: 'CouponManage',
      meta: {
        title: '优惠券管理'
      }
    },
    {
      path: 'user-asset',
      component: () => import('@/views/permission/page'),
      name: 'UserAsset',
      meta: {
        title: '用户资产管理'
      }
    },
    {
      path: 'recharge-gift',
      component: () => import('@/views/permission/page'),
      name: 'RechargeGift',
      meta: {
        title: '充值赠送规则'
      }
    },
    {
      path: 'recharge-record',
      component: () => import('@/views/permission/page'),
      name: 'RechargeRecord',
      meta: {
        title: '充值记录'
      }
    },
    {
      path: 'asset-details',
      component: () => import('@/views/permission/page'),
      name: 'AssetDetails',
      meta: {
        title: '用户资金明细'
      }
    }
  ]
}

export default financeRouter
