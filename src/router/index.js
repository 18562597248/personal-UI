import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
    //,
    //{
    //  name: 'Login',
    //  path: '/login',
    //  component: require('../components/Login.vue')
    //},
    //{
    //  name: 'Home',
    //  path: '/',
    //  component: require('../components/Home.vue'),
    //  children: [
    //    {
    //      name: 'modal',
    //      path: '/modal',
    //      component: require('demo/modal/demo.vue')
    //    },
    //    {
    //      name: 'buttongroup',
    //      path: '/buttongroup',
    //      component: require('demo/buttongroup/demo.vue')
    //    },
    //    {
    //      name: 'icon',
    //      path: '/icon',
    //      component: require('demo/icon/demo.vue')
    //    },
    //    {
    //      name: 'treetable',
    //      path: '/treetable',
    //      component: require('demo/treetable/demo.vue')
    //    },
    //    {
    //      name: 'tag',
    //      path: '/tag',
    //      component: require('demo/tag/demo.vue')
    //    },
    //    {
    //      name: 'button',
    //      path: '/button',
    //      component: require('demo/button/demo.vue')
    //    },
    //    {
    //      name: 'input',
    //      path: '/input',
    //      component: require('demo/input/demo.vue')
    //    },
    //    {
    //      name: 'datepicker',
    //      path: '/datepicker',
    //      component: require('demo/datapicker/demo.vue')
    //    },
    //    {
    //      name: 'datetimepicker',
    //      path: '/datetimepicker',
    //      component: require('demo/datetimepicker/demo.vue')
    //    },
    //    {
    //      name: 'layout',
    //      path: '/layout',
    //      component: require('demo/layout/demo.vue')
    //    },
    //    {
    //      name: 'widget',
    //      path: '/widget',
    //      component: require('demo/widget/demo.vue')
    //    },
    //    {
    //      name: 'timepicker',
    //      path: '/timepicker',
    //      component: require('demo/timepicker/demo.vue')
    //    },
    //    {
    //      name: 'message',
    //      path: '/message',
    //      component: require('demo/message/demo.vue')
    //    },
    //    {
    //      name: 'tabs',
    //      path: '/tabs',
    //      component: require('demo/tabs/demo.vue')
    //    },
    //    {
    //      name: 'radio',
    //      path: '/radio',
    //      component: require('demo/radio/demo.vue')
    //    },
    //    {
    //      name:'checkbox',
    //      path:'checkbox',
    //      component:require('demo/checkbox/demo.vue')
    //    },{
    //      name:'radiogroup',
    //      path:'/radiogroup',
    //      component:require('demo/radiogroup/demo.vue')
    //    },
    //    {
    //      name: 'label',
    //      path: '/label',
    //      component: require('demo/label/demo.vue')
    //    },
    //    {
    //      name: 'dropdown',
    //      path: '/dropdown',
    //      component: require('demo/dropdown/demo.vue')
    //    },
    //    {
    //      name: 'badge',
    //      path: '/badge',
    //      component: require('demo/badges/demo.vue')
    //    },
    //    {
    //      name: 'form',
    //      path: '/form',
    //      component: require('demo/form/demo.vue')
    //    },
    //    {
    //      name:'switch',
    //      path:'switch',
    //      component: require('demo/switch/demo.vue')
    //    },
    //    {
    //      name:'tooltip',
    //      path:'/tooltip',
    //      component: require('demo/tooltip/demo.vue')
    //    },
    //    {
    //      name:'select',
    //      path:'/select',
    //      component: require('demo/select/demo.vue')
    //    },
    //    {
    //      name:'inputnumber',
    //      path:'/inputnumber',
    //      component: require('demo/inputNumber/demo.vue')
    //    },
    //    {
    //      name:'popover',
    //      path:'/popover',
    //      component: require('demo/popover/demo.vue')
    //    },
    //    {
    //      name:'steps',
    //      path:'/steps',
    //      component:require('demo/steps/demo.vue')
    //    },
    //    {
    //      name:'table',
    //      path:'/table',
    //      component: require('demo/table/demo.vue')
    //    },
    //    {
    //      name:'tree',
    //      path:'/tree',
    //      component: require('demo/tree/demo.vue')
    //    },
    //    {
    //      name:'progress',
    //      path:'/progress',
    //      component:require('demo/progress/demo.vue')
    //    },
    //    {
    //      name:'collpase',
    //      path:'/collpase',
    //      component:require('demo/collpase/demo.vue')
    //    },
    //    {
    //      name:'slider',
    //      path:'/slider',
    //      component:require('demo/slider/demo.vue')
    //    },
    //    {
    //      name:'transfer',
    //      path:'/transfer',
    //      component:require('demo/transfer/demo.vue')
    //    },
    //    {
    //      name:'upload',
    //      path:'/upload',
    //      component:require('demo/upload/demo.vue')
    //    },
    //    {
    //      name:'card',
    //      path:'/card',
    //      component:require('demo/card/demo.vue')
    //    },
    //    // {
    //    //   name:'cardextend',
    //    //   path:'/cardextend',
    //    //   component:require('demo/cardextend/demo.vue')
    //    // },
    //    {
    //      name:'loading',
    //      path:'/loading',
    //      component:require('demo/loading/demo.vue')
    //    },
    //    {
    //      name:'notice',
    //      path:'/notice',
    //      component:require('demo/notice/dome.vue')
    //    },
    //    {
    //      name:'timeline',
    //      path:'/timeline',
    //      component:require('demo/timeline/demo.vue')
    //    },
    //    {
    //      name:'pagebar',
    //      path:'/pagebar',
    //      component:require('demo/pagebar/demo.vue')
    //    },
    //    {
    //      name:'multisearch',
    //      path:'/multisearch',
    //      component:require('demo/multisearch/demo.vue')
    //    },  {
    //      name:'calendar',
    //      path:'/calendar',
    //      component:require('demo/calendar/demo.vue')
    //    },  {
    //      name:'colourmatching',
    //      path:'/colourmatching',
    //      component:require('demo/colourmatching/demo.vue')
    //    },  {
    //      name:'usableIcons',
    //      path:'/usableIcons',
    //      component:require('demo/usableIcons/demo.vue')
    //    }
    //  ]
    //},
    //// {
    ////   name: 'Home',
    ////   path: '/',
    ////   component: require('../components/Home.vue'),
    ////   children: [
    ////     ...generateRoutesFromMenu(menu)
    ////     ]
    //// },
    //{
    //  path: '*',
    //  redirect: '/'
    //}
  ]
})

// menu should have 2 levels.

function generateRoutesFromMenu (menu = [], routes = []) {
  for (let i = 0, l = menu.length; i < l; i++) {
    let item = menu[i]
    if (item.path) {
      routes.push(item)
    }
    if (!item.component) {
      generateRoutesFromMenu(item.children, routes)
    }
  }
  return routes
}
