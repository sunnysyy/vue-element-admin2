import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/* Router Modules */
import systemRouter from './modules/system'
import userRouter from './modules/user'
import financeRouter from './modules/finance'
import integralRouter from './modules/integral'
import mallRouter from './modules/mall'
// import componentsRouter from './modules/components'
// import chartsRouter from './modules/charts'
// import tableRouter from './modules/table'
// import nestedRouter from './modules/nested'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    noCache: true                if set true, the page will no be cached(default is false)
    affix: true                  if set true, the tag will affix in the tags-view
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/auth-redirect'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: '首页', icon: 'dashboard', affix: true }
      }
    ]
  }
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [
  // 权限管理
  {
    path: '/permission',
    component: Layout,
    redirect: '/permission/page',
    alwaysShow: true, // will always show the root menu
    name: 'Permission',
    meta: {
      title: '权限管理',
      icon: 'lock',
      roles: ['admin', 'editor'] // you can set roles in root nav
    },
    children: [
      {
        path: 'role',
        component: () => import('@/views/permission/role'),
        name: 'RolePermission',
        meta: {
          title: '角色管理',
          roles: ['admin']
        }
      },
      {
        path: 'page',
        component: () => import('@/views/permission/page'),
        name: 'PagePermission',
        meta: {
          title: '管理员列表',
          roles: ['admin'] // or you can only set roles in sub nav
        }
      }
    ]
  },

  // {
  //   path: '/icon',
  //   component: Layout,
  //   // hidden: true,
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/icons/index'),
  //       name: 'Icons',
  //       meta: { title: 'Icons', icon: 'icon', noCache: true }
  //     }
  //   ]
  // },

  /** when your routing map is too long, you can split it into small modules **/
  // 系统设置
  systemRouter,

  // CMS模块
  {
    path: '/cms',
    component: Layout,
    redirect: '/cms/page',
    alwaysShow: true, // will always show the root menu
    name: 'CMS',
    meta: {
      title: 'CMS模块',
      icon: 'example'
    },
    children: [
      {
        path: 'page',
        component: () => import('@/views/permission/role'),
        name: 'CMSPage',
        meta: {
          title: '单页管理'
        }
      },
      {
        path: 'notice',
        component: () => import('@/views/permission/page'),
        name: 'CMSNotice',
        meta: {
          title: '公告管理'
        }
      }
    ]
  },

  // 微信设置
  {
    path: '/wechat',
    component: Layout,
    redirect: '/wechat/set',
    name: 'WechatSet',
    meta: {
      title: '微信设置',
      icon: 'wechat'
    },
    children: [
      {
        path: 'wxKey',
        component: () => import('@/views/permission/role'),
        name: 'wxKey',
        meta: {
          title: '小程序设置'
        }
      },
      {
        path: 'message',
        component: () => import('@/views/permission/page'),
        name: 'Message',
        meta: {
          title: '订阅'
        }
      }
    ]
  },

  // 用户管理
  userRouter,

  // 财务管理
  financeRouter,
  // 积分模块
  integralRouter,

  // 短信设置
  {
    path: '/sms',
    component: Layout,
    redirect: '/sms/code',
    name: 'SmsSet',
    meta: {
      title: '短信设置',
      icon: 'message'
    },
    children: [
      {
        path: 'code',
        component: () => import('@/views/permission/role'),
        name: 'SmsCode',
        meta: {
          title: '验证码设置'
        }
      },
      {
        path: 'recode',
        component: () => import('@/views/permission/page'),
        name: 'SmsRecord',
        meta: {
          title: '短信记录'
        }
      }
    ]
  },

  // 商城管理
  mallRouter,

  // 营销辅助
  {
    path: '/market',
    component: Layout,
    redirect: '/market/seckill',
    name: 'UserManage',
    meta: {
      title: '营销辅助',
      icon: 'chart'
    },
    children: [
      {
        path: 'seckill',
        component: () => import('@/views/permission/role'),
        name: 'SeckillSet',
        meta: {
          title: '秒杀设置'
        }
      },
      {
        path: 'rebate',
        component: () => import('@/views/permission/page'),
        name: 'PurchaseRebate',
        meta: {
          title: '购买返利'
        }
      },
      {
        path: 'rewards',
        component: () => import('@/views/permission/page'),
        name: 'ShareRewards',
        meta: {
          title: '分享奖励'
        }
      }
    ]
  },

  // 投票活动
  {
    path: '/vote',
    component: Layout,
    redirect: '/vote/activity',
    name: 'VoteActivity',
    meta: {
      title: '投票活动',
      icon: 'peoples'
    }
  },
  // componentsRouter,
  // chartsRouter,
  // nestedRouter,
  // tableRouter,

  {
    path: '/example',
    component: Layout,
    hidden: true,
    redirect: '/example/list',
    name: 'Example',
    meta: {
      title: 'Example',
      icon: 'el-icon-s-help'
    },
    children: [
      {
        path: 'create',
        component: () => import('@/views/example/create'),
        name: 'CreateArticle',
        meta: { title: 'Create Article', icon: 'edit' }
      },
      {
        path: 'edit/:id(\\d+)',
        component: () => import('@/views/example/edit'),
        name: 'EditArticle',
        meta: { title: 'Edit Article', noCache: true, activeMenu: '/example/list' },
        hidden: true
      },
      {
        path: 'list',
        component: () => import('@/views/example/list'),
        name: 'ArticleList',
        meta: { title: 'Article List', icon: 'list' }
      }
    ]
  },

  {
    path: '/tab',
    component: Layout,
    hidden: true,
    children: [
      {
        path: 'index',
        component: () => import('@/views/tab/index'),
        name: 'Tab',
        meta: { title: 'Tab', icon: 'tab' }
      }
    ]
  },

  {
    path: '/error',
    component: Layout,
    redirect: 'noRedirect',
    name: 'ErrorPages',
    hidden: true,
    meta: {
      title: 'Error Pages',
      icon: '404'
    },
    children: [
      {
        path: '401',
        component: () => import('@/views/error-page/401'),
        name: 'Page401',
        meta: { title: '401', noCache: true }
      },
      {
        path: '404',
        component: () => import('@/views/error-page/404'),
        name: 'Page404',
        meta: { title: '404', noCache: true }
      }
    ]
  },

  {
    path: '/error-log',
    component: Layout,
    hidden: true,
    children: [
      {
        path: 'log',
        component: () => import('@/views/error-log/index'),
        name: 'ErrorLog',
        meta: { title: 'Error Log', icon: 'bug' }
      }
    ]
  },

  {
    path: '/excel',
    component: Layout,
    redirect: '/excel/export-excel',
    name: 'Excel',
    hidden: true,
    meta: {
      title: 'Excel',
      icon: 'excel'
    },
    children: [
      {
        path: 'export-excel',
        component: () => import('@/views/excel/export-excel'),
        name: 'ExportExcel',
        meta: { title: 'Export Excel' }
      },
      {
        path: 'export-selected-excel',
        component: () => import('@/views/excel/select-excel'),
        name: 'SelectExcel',
        meta: { title: 'Export Selected' }
      },
      {
        path: 'export-merge-header',
        component: () => import('@/views/excel/merge-header'),
        name: 'MergeHeader',
        meta: { title: 'Merge Header' }
      },
      {
        path: 'upload-excel',
        component: () => import('@/views/excel/upload-excel'),
        name: 'UploadExcel',
        meta: { title: 'Upload Excel' }
      }
    ]
  },

  {
    path: '/zip',
    component: Layout,
    redirect: '/zip/download',
    alwaysShow: true,
    hidden: true,
    name: 'Zip',
    meta: { title: 'Zip', icon: 'zip' },
    children: [
      {
        path: 'download',
        component: () => import('@/views/zip/index'),
        name: 'ExportZip',
        meta: { title: 'Export Zip' }
      }
    ]
  },

  // {
  //   path: '/pdf',
  //   component: Layout,
  //   redirect: '/pdf/index',
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/pdf/index'),
  //       name: 'PDF',
  //       meta: { title: 'PDF', icon: 'pdf' }
  //     }
  //   ]
  // },
  // {
  //   path: '/pdf/download',
  //   component: () => import('@/views/pdf/download'),
  //   hidden: true
  // },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
