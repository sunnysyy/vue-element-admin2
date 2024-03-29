/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

// 系统设置
const systemRouter = {
  path: '/system',
  component: Layout,
  redirect: '/system/file-upload',
  name: 'System',
  meta: {
    title: '系统设置',
    icon: 'el-icon-setting'
  },
  children: [
    {
      path: 'file-upload',
      component: () => import('@/views/permission/role'),
      name: 'FileUpload',
      meta: {
        title: '上传文件管理'
      }
    },
    {
      path: 'online-pay',
      component: () => import('@/views/permission/page'),
      name: 'OnlinePay',
      meta: {
        title: '在线支付'
      }
    },
    {
      path: 'banner',
      component: () => import('@/views/permission/role'),
      name: 'BannerList',
      meta: {
        title: 'Banner管理'
      }
    },
    {
      path: 'log',
      component: () => import('@/views/permission/page'),
      name: 'SystemLog',
      meta: {
        title: '操作日志'
      }
    }
  ]
}

export default systemRouter
