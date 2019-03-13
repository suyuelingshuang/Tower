<template>
    <div class="project">
        <div class="project-header">项目</div>
        <div class="project-add">
            <router-link type="button" class="project-new" :to="`/addProject`">新增项目</router-link>
        </div>
        <div class="project-list" @click="handleSwitch">
            <h1 id="t1">我的收藏</h1>
            <ul v-show="s1">
                <li v-for="(item, index) in colProjectData" :key="index" @click="">
                    <router-link :to="'/editProject/' + item.id" class="project-main">
                        {{ item.title}}
                    </router-link>
                </li>
            </ul>
            <h1 id="t2">通信工程</h1>
            <ul v-show="s2">
                <li v-for="(item, index) in comProjectData" :key="index" @click="">
                    <router-link :to="'/editProject/' + item.id" class="project-main">
                        {{ item.title}}
                    </router-link>
                </li>
            </ul>
            <h1 id="t3">网络工程</h1>
            <ul v-show="s3">
                <li v-for="(item, index) in netProjectData" :key="index" @click="">
                    <router-link :to="'/editProject/' + item.id" class="project-main">
                        {{ item.title}}
                    </router-link>
                </li>
            </ul>
            <h1 id="t4">其他</h1>
            <ul v-show="s4">
                <li v-for="(item, index) in othProjectData" :key="index" @click="">
                    <router-link :to="'/editProject/' + item.id" class="project-main">
                        {{ item.title}}
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                projectData: this.$store.state.taskData,
                colProjectData: this.$store.getters.getColProject,
                comProjectData: this.$store.getters.getComProject,
                netProjectData: this.$store.getters.getNetProject,
                othProjectData: this.$store.getters.getOthProject,
                s1: false,
                s2: false,
                s3: false,
                s4: false
            }
        },
        methods: {
            handleSwitch(ev) {
                var e = ev || window.event;
                var target = e.target || e.srcElement;
                switch(target.id) {
                    case "t1":
                        this.s1 = !this.s1;
                        break;
                    case "t2":
                        this.s2 = !this.s2;
                        break;
                    case "t3":
                        this.s3 = !this.s3;
                        break;
                    case "t4":
                        this.s4 = !this.s4;
                        break;
                    default:
                        break;
                }
            },
            addProject() {
                
            }
        }
    }
</script>
<style scoped>
    .project {
        font-size: 18px;
        height: 36px;
        line-height: 36px;
        background: #eeeeee;
    }
    .project-header {
        text-align: center;
    }
    .project-add {
        text-align: center;
        vertical-align: -webkit-baseline-middle;
        vertical-align: middle;
        border-bottom: 1px solid #efefef;
    }
    .project-new {
        font-size: 16px;
        padding: 4px 8px;
        margin: 2px;
        background: #eeeeee;
    }
    .project-list,h1 {
        font-size: 16px;
        height: 32px;
        line-height: 32px;
        background: #eeeeee;
    }
    h1 {
        border-bottom: 1px solid #ffffff;
    }
</style>