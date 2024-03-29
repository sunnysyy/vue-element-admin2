/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

// 系统设置
const mallRouter = {
  path: '/mall',
  component: Layout,
  redirect: '/mall/store',
  name: 'MallManage',
  meta: {
    title: '商城管理',
    icon: 'shopping'
  },
  children: [
    {
      path: 'store',
      component: () => import('@/views/permission/role'),
      name: 'storeManage',
      meta: {
        title: '门店管理'
      }
    },
    {
      path: 'favorite-user',
      component: () => import('@/views/permission/page'),
      name: 'FavoriteUser',
      meta: {
        title: '收藏用户'
      }
    },
    {
      path: 'categories',
      component: () => import('@/views/permission/role'),
      name: 'Categories',
      meta: {
        title: '商品分类'
      }
    },
    {
      path: 'size',
      component: () => import('@/views/permission/page'),
      name: 'Size',
      meta: {
        title: '规格尺寸'
      }
    },
    {
      path: 'freight',
      component: () => import('@/views/permission/page'),
      name: 'Freight',
      meta: {
        title: '运费模板'
      }
    },
    {
      path: 'product',
      component: () => import('@/views/permission/page'),
      name: 'ProductManage',
      meta: {
        title: '商品管理'
      }
    },
    {
      path: 'order-set',
      component: () => import('@/views/permission/page'),
      name: 'OrderSet',
      meta: {
        title: '订单设置'
      }
    },
    {
      path: 'printer',
      component: () => import('@/views/permission/page'),
      name: 'PrinterList',
      meta: {
        title: '打印机设置'
      }
    },
    {
      path: 'order-list',
      component: () => import('@/views/permission/page'),
      name: 'orderList',
      meta: {
        title: '订单列表'
      }
    },
    {
      path: 'refund',
      component: () => import('@/views/permission/page'),
      name: 'RefundStatistics',
      meta: {
        title: '退款统计'
      }
    },
    {
      path: 'evaluation',
      component: () => import('@/views/permission/page'),
      name: 'Evaluation',
      meta: {
        title: '评价管理'
      }
    }
  ]
}

export default mallRouter
