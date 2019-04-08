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
import members from './importData/member.js';
import dynamic from './importData/dynamic.js';
import notice from './importData/notice.js';

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
        projectData: projectData,
        members: members,
        dynamic: dynamic,
        notice: notice
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
        },
        getDayDynamic: state => {
            var obj = state.dynamic;
            var res = {};
            for (var i in obj) {
                if (!res[obj[i].day]) {
                    res[obj[i].day] = [];
                }
                res[obj[i].day].push({
                    title: obj[i].title,
                    time: obj[i].time
                });
            }
            return res;
        }
    },
    mutations: {
        addProjectData(state, data) {
            state.taskData.push(data);
            state.projectData.push(data);
            var props = {
                title: data.owner + "新增了项目" + data.title,
                flag: data.owner == "钟稳霞"
            }
            this.commit("getTime", props);
        },
        addProjectTask(state, data) {
            var obj = state.projectData;
            var temp = -1;
            for (var index in obj) {
                if (obj[index].id == data.id) {
                    temp = index;
                    break;
                }
            }
            if (!obj[temp].tasks) {
                state.projectData[temp].tasks = [];
            }
            state.projectData[temp].tasks.push({
                title: data.title,
                pName: data.pName
            });
            var props = {
                title: data.pName[0] + "新增了任务" + data.title,
                flag: data.pName[0] == "钟稳霞"
            };
            this.commit("getTime", props);
        },
        addProjectDiscuss(state, data) {
            var obj = state.projectData;
            var temp = -1;
            for (var index in obj) {
                if (obj[index].id == data.id) {
                    temp = index;
                    break;
                }
            }
            if (!obj[temp].discuss) {
                state.projectData[temp].discuss = [];
            }
            state.projectData[temp].discuss.push({
                title: data.title,
                pName: data.pName
            });
            var props = {
                title: data.pName + "新增了讨论" + data.title,
                flag: data.pName == "钟稳霞"
            };
            this.commit("getTime", props);
        },
        setProjectFile(state, data) {
            console.log(data);
            var obj = state.projectData;
            var temp = -1;
            for (var index in obj) {
                if (obj[index].id == data.id) {
                    temp = index;
                    break;
                }
            }
            var cur = state.projectData[temp];
            cur.owner = data.owner;
            cur.done = data.done;
            cur.star = data.star;
            var props = {
                title: "更改了设置",
                flag: data.owner == "钟稳霞"
            }
            this.commit("getTime", props);
        },
        getTime(state, data) {
            var date = new Date();
            var day = date.getUTCFullYear() + "年" + (date.getUTCMonth()+1) + "月" + date.getUTCDate() + "日";
            var time = date.getHours() + ":" + date.getMinutes();
            var obj = {
                title: data.title,
                day: day,
                time: time
            };
            state.dynamic.unshift(obj);
            if(data.flag) {
                state.notice.unshift(obj);
            }
        },
        deleteMember(state, index) {
            var del = state.members.splice(index, 1)[0];
            var props = {
                title: "删除了成员" + del.pName,
                flag: del == "钟稳霞"
            };
            this.commit("getTime", props);
        },
        addMember(state, data) {
            state.members.push(data);
            var props = {
                title: "新增了成员" + data.pName,
                flag: data.pName == "钟稳霞"
            };
            this.commit("getTime", props);
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