import Vue from 'vue';
import VueRouter from 'vue-router';
import Routers from './router';
import Vuex from 'vuex';
import './theme/index.css';
import ElementUI from 'element-ui';
import App from './app.vue';
import './style.css';
import taskData from './importData/taskData.js';
import projectData from './importData/projectData.js';

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(ElementUI);

// 路由配置
const RouterConfig = {
    // 使用 HTML5 的 History 路由模式
    mode: 'history',
    routes: Routers
};
const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
    window.document.title = to.meta.title;
    next();
});

router.afterEach((to, from, next) => {
    window.scrollTo(0, 0);
});

const store = new Vuex.Store({
    state: {
        taskData: taskData,
        projectData: projectData
    },
    getters: {
        getTaskData: state => {
            return state.taskData;
        },
        getProjectData: state => {
            return state.projectData;
        },
        getColProject: state => {
            return state.projectData.filter((item, index, arr) => {
                return item.star;
            });
        },
        getComProject: state => {
            return state.projectData.filter((item, index, arr) => {
                return item.id.slice(0, 3) == "150";
            });
        },
        getNetProject: state => {
            return state.projectData.filter((item, index, arr) => {
                return item.id.slice(0, 3) == "160";
            });
        },
        getOthProject: state => {
            return state.projectData.filter((item, index, arr) => {
                return item.id.slice(0, 3) != "150" && item.id.slice(0, 3) != "160";
            });
        },
        getIds: state => {
            var obj = state.projectData;
            var res = [];
            for (var index in obj) {
                res.push(obj[index].id);
            }
            return res;
        }
    },
    mutations: {
        addProjectData(state, data) {
            state.taskData.push(data);
            state.projectData.push(data);
        }
    },
    actions: {
        
    }
});

new Vue({
    el: '#app',
    router: router,
    store: store,
    render: h => {
        return h(App)
    }
});