<template>
    <div>
        <div class="home-header">
            <div class="home-title">我的任务</div>
            <ul class="home-nav" @click="handleNavClick">
                <li class="home-nav-tab" :class="{'active': actived}" id="1">我参与的任务</li>
                <li class="home-nav-tab" :class="{'active': !actived}" id="2">我发起的任务</li>
            </ul>
        </div>
        <task-item :taskInfo="propTasks" :isProp="actived"></task-item>
    </div>
</template>
<script>
    import taskItem from '../components/taskItem.vue';
    export default {
        components: {
            taskItem
        },
        data() {
            return {
                tasks: this.$store.state.projectData,
                propTasks: this.$store.state.projectData,
                actived: true,
                exTarget: null
            }
        },
        computed: {
            partTask() {
                return this.tasks.filter((item, index, arr) => {
                    return !item.own;
                });
            },
            initTask() {
                return this.tasks.filter((item, index, arr) => {
                    return item.own;
                });
            }
        },
        mounted() {
            this.propTasks = this.partTask;
        },
        methods: {
            handleNavClick(ev) {
                var e = ev || window.event;
                var target = e.target || e.srcElement;
                if (this.exTarget == target) return;
                if (target && target.id == "2") {
                    this.propTasks = this.initTask;
                    this.undoFlag = this.$store.state.propUndo;
                    this.doFlag = this.$store.state.propDo;
                    this.actived = false;
                } else {
                    this.propTasks = this.partTask;
                    this.undoFlag = this.$store.state.initUndo;
                    this.doFlag = this.$store.state.initDo;
                    this.actived = true;
                }
                this.exTarget = target;
            }
        }
    }
</script>
<style scoped>
    .home-header {

    }
    .home-title {
        font-size: 18px;
        height: 36px;
        line-height: 36px;
        text-align: center;
        background: #eeeeee;
    }
    .home-nav {
        width: 90%;
        margin: 5px auto;
        display: flex;
    }
    .home-nav-tab {
        flex: 1;
        text-align: center;
        border: 1px solid royalblue;
        font-size: 16px;
        color:royalblue;
    }
    .home-nav-tab.active {
        background: royalblue;
        color: #ffffff;
    }
</style>

