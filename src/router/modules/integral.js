/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

// 系统设置
const integralRouter = {
  path: '/integral',
  component: Layout,
  redirect: '/integral/check-in',
  name: 'Integral',
  meta: {
    title: '积分模块',
    icon: 'clipboard'
  },
  children: [
    {
      path: 'check-in',
      component: () => import('@/views/permission/role'),
      name: 'CheckInRules',
      meta: {
        title: '签到规则'
      }
    },
    {
      path: 'gift',
      component: () => import('@/views/permission/page'),
      name: 'GiftRules',
      meta: {
        title: '签到规则'
      }
    },
    {
      path: 'exchange',
      component: () => import('@/views/permission/role'),
      name: 'integralExChange',
      meta: {
        title: '积分兑换'
      }
    },
    {
      path: 'details',
      component: () => import('@/views/permission/page'),
      name: 'integralDetails',
      meta: {
        title: '积分明细'
      }
    }
  ]
}

export default integralRouter
