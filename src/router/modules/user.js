/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

// 系统设置
const userRouter = {
  path: '/user',
  component: Layout,
  redirect: '/user/set',
  name: 'UserManage',
  meta: {
    title: '用户管理',
    icon: 'user'
  },
  children: [
    {
      path: 'set',
      component: () => import('@/views/permission/role'),
      name: 'UserSet',
      meta: {
        title: '用户设置'
      }
    },
    {
      path: 'list',
      component: () => import('@/views/permission/page'),
      name: 'UserList',
      meta: {
        title: '用户列表'
      }
    },
    {
      path: 'address',
      component: () => import('@/views/permission/page'),
      name: 'ShippingAddress',
      meta: {
        title: '收货地址'
      }
    },
    {
      path: 'label',
      component: () => import('@/views/permission/page'),
      name: 'UserLabel',
      meta: {
        title: '用户标签'
      }
    },
    {
      path: 'verified',
      component: () => import('@/views/permission/page'),
      name: 'UserVerified',
      meta: {
        title: '用户实名认证'
      }
    },
    {
      path: 'label-certification',
      component: () => import('@/views/permission/page'),
      name: 'labelCertification',
      meta: {
        title: '用户标签认证'
      }
    }
  ]
}

export default userRouter
