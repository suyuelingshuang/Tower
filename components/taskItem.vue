<template>
    <div class="task-item-wrap">
        <div class="task-item" v-show="unDoTasks.length">
            <div class="task-title" @click="handleListTitle()">{{doTaskFlag ? "隐藏": "查看"}}未完成的任务</div>
            <task-cell v-show="doTaskFlag" v-for="(item, index) in unDoTasks" :cellInfo="item" :done="false" :key="index"></task-cell>
        </div>
        <div class="task-item" v-show="doTasks.length">
            <div class="task-title" @click="handleListTitle(true)">{{undoTaskFlag ? "隐藏": "查看"}}已完成的任务</div>
            <task-cell v-show="undoTaskFlag" v-for="(item, index) in doTasks" :cellInfo="item" :done="true" :key="index"></task-cell>
        </div>
    </div>
</template>
<script>
    import taskCell from "./taskCell.vue";
    export default {
        props: {
            taskInfo: Array,
            isProp: Boolean
        },
        components: {
            taskCell
        },
        data() {
            return {
                undoFlag: true,
                doFlag: false,
                iUndoFlag: true,
                iDoFlag: false
            }
        },
        computed: {
            doTaskFlag() {
                return this.isProp ? this.undoFlag : this.iUndoFlag;
            },
            undoTaskFlag() {
                return this.isProp ? this.doFlag : this.iDoFlag;
            },
            doTasks() {
                return this.filterTasks(this.taskInfo, true);
            },
            unDoTasks() {
                return this.filterTasks(this.taskInfo, false);
            }
        },
        methods: {
            filterTasks(tasks, flag) {
                var res = [];
                res = tasks.filter((item, index, arr) => {
                    return flag ? item.done : !item.done;
                });
                return res;
            },
            handleListTitle(isDo) {
                if (isDo) {
                    if (this.isProp) {
                        this.doFlag = !this.doFlag;
                    } else {
                        this.iDoFlag = !this.iDoFlag;
                    }
                } else {
                    if (this.isProp) {
                        this.undoFlag = !this.undoFlag;
                    } else {
                        this.iUndoFlag = !this.iUndoFlag;
                    }
                }
            }
        }
    }
</script>
<style scoped>
    .task-item-wrap {
        
    }
    .task-title {
        height: 30px;
        line-height: 30px;
        font-size: 16px;
        color: royalblue;
        background: #f8f8f9;
        cursor: pointer;
    }
</style>