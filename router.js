const routers = [
    {
        path: '/home',
        name: 'home',
        meta: {
            title: '我的任务'
        },
        component: (resolve) => require(['./views/home.vue'], resolve)
    },
    {
        path: '/project',
        name: 'project',
        meta: {
            title: '项目'
        },
        component: (resolve) => require(['./views/project.vue'], resolve)
    },
    {
        path: '/dynamic',
        name: 'dynamic',
        meta: {
            title: '动态'
        },
        component: (resolve) => require(['./views/dynamic.vue'], resolve)
    },
    {
        path: '/notice',
        name: 'notice',
        meta: {
            title: '通知'
        },
        component: (resolve) => require(['./views/notice.vue'], resolve)
    },
    {
        path: '/team',
        name: 'team',
        meta: {
            title: '团队'
        },
        component: (resolve) => require(['./views/team.vue'], resolve)
    },
    {
        path: '/editProject/:id',
        name: 'editProject',
        meta: {
            title: '项目详情'
        },
        component: (resolve) => require(['./views/editProject.vue'], resolve)
    },
    {
        path: '/addProject',
        name: 'addProject',
        meta: {
            title: '新增项目'
        },
        component: (resolve) => require(['./views/addProject.vue'], resolve)
    },
    {
        path: '/addTask/:id',
        name: 'addTask',
        meta: {
            title: '新增任务'
        },
        component: (resolve) => require(['./views/addTask.vue'], resolve)
    },
    {
        path: '/addDiscuss/:id',
        name: 'addDiscuss',
        meta: {
            title: '新增讨论'
        },
        component: (resolve) => require(['./views/addDiscuss.vue'], resolve)
    },
    {
        path: '/addMember/',
        name: 'addMember',
        meta: {
            title: '添加成员'
        },
        component: (resolve) => require(['./views/addMember.vue'], resolve)
    },
    {
        path: '*',
        redirect: '/home'
    }
];
export default routers;