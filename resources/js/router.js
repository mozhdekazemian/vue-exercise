import Vue from 'vue'
import VueRouter from 'vue-router'

import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import index from "./components/customer/index";


Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/page1',
            name: 'page1',
            component: Page1,
        },
        {
            path: '/page2',
            name: 'page2',
            component: Page2,
        },
        {
            path: '/index',
            name: 'index',
            component: index,
        },

    ],
});
