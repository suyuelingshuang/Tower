<template>
    <div>
        <ul class="task-list">
            <li v-for="(item, index) in taskData" :key="index" class="list-item">
                <h1>{{ item.name }}</h1><span>优先级：{{ item.priority }}</span>
            </li>
        </ul>
        <el-button size="small" type="primary" class="task-add">新增任务</el-button>
    </div>
</template>
<script>
    export default {
        props: {
            taskData: Array
        },
        data() {
            return {

            }
        }
    }
</script>
<style scoped>
    .task-list, h1 {
        font-size: 16px;
        height: 32px;
        line-height: 32px;
    }
    .list-item {
        display: flex;
        border-bottom: 1px solid #efefef;
    }
    h1 {
        flex: 1;
    }
    span {
        font-size: 12px;
        margin: 0 10px;
    }
    .task-add {
        position:fixed;
        left:50%;
        bottom:36px;
        transform:translate(-50%,-50%);
        z-index:1000;
    }
</style>