<template>
    <div class="addProject">
        <div class="addProject-header">{{ taskData.title }}</div>
        <ul class="addProject-list" @click="handleClickNav">
            <li class="list-item" :class="{'actived': activeIndex==0}" id="0">任务</li>
            <li class="list-item" :class="{'actived': activeIndex==1}" id="1">讨论</li>
            <li class="list-item" :class="{'actived': activeIndex==2}" id="2">文档</li>
            <li class="list-item" :class="{'actived': activeIndex==3}" id="3">文件</li>
            <li class="list-item" :class="{'actived': activeIndex==4}" id="4">设置</li>
        </ul>
        <task v-show="activeIndex == 0" :taskData="taskData.tasks || []"></task>
        <discuss v-show="activeIndex == 1" :discussData="taskData.discuss || []"></discuss>
        <docment v-show="activeIndex == 2"></docment>
        <files v-show="activeIndex == 3"></files>
        <set-file v-show="activeIndex == 4"></set-file>
    </div>
</template>
<script>
    import task from "../components/task.vue";
    import discuss from "../components/discuss.vue";
    import docment from "../components/document.vue";
    import files from "../components/files.vue";
    import setFile from "../components/setFile.vue";
    export default {
        components: {
            task,
            discuss,
            docment,
            files,
            setFile
        },
        data() {
            return {
                activeIndex: "0",
            }
        },
        computed: {
            taskData() {
                var pageId = this.$route.params.id;
                var projects = this.$store.getters.getProjectData.filter((item, index, arr) => {
                    return item.id == pageId;
                })[0];
                return projects;
            }
        },
        methods: {
            handleClickNav(ev) {
                var e = ev || window.event;
                var target = e.target || e.srcElement;
                if (target.id == this.activeIndex) return;
                this.activeIndex = target.id;
            },
            getProjectData() {

            }
        }
    }
</script>
<style scoped>
    .addProject {
        position: fixed;
        top: 0;
        width: 100%;
    }
    .addProject-header {
        font-size: 18px;
        height: 36px;
        line-height: 36px;
        text-align: center;
        background: #eeeeee;
    }
    .addProject-list {
        height: 32px;
        line-height: 32px;
        font-size: 16px;
        display: flex;
        border-bottom: 1px solid #eeeeee;
    }
    .list-item {
        flex: 1;
        justify-content: space-between;
        text-align: center;
    }
    .actived {
        border-bottom: 1px solid royalblue;
    }
</style>