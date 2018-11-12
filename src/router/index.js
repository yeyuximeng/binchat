import Vue from 'vue'
import Router from 'vue-router'
import Contacts from '@/components/contacts/Contacts'
import Center from '@/components/center/Center'
import Msg from '@/components/msg/Msg'
import Discover from '@/components/discover/Discover'
import Dialog from '@/components/dialog/Dialog'

Vue.use(Router)

export default new Router({
    //mode: '',
    routes: [
        {
            path: '/',
            name: 'Msg0',
            component: Msg
        },
        {
            path: '/contacts',
            name: 'Contacts',
            component: Contacts
        },
        {
            path: '/center',
            name: 'Center',
            component: Center
        },
        {
            path: '/msg',
            name: 'Msg',
            component: Msg
        },
        {
            path: '/discover',
            name: 'Discover',
            component: Discover
        },

        //子路由
        {
            path: '/dialog',
            name: 'Dialog',
            component: Dialog
        }
    ]
})
