<template>
    <div class="task-cell">
        <router-link :to="'/editProject/' + cellInfo.id" class="project-main">
            <div class="title">
                <span class="title-mark" :class="{'mark': done}"></span>{{ cellInfo.title }}<span class="pId">项目编号：{{ cellInfo.id }}</span></div>
            <div class="owner">
                <span>{{cellInfo.owner}}</span>
                <span class="priority">优先级：{{ cellInfo.priority }}</span>
            </div>
        </router-link>
    </div>
</template>
<script>
    export default {
        props: {
            cellInfo: Object,
            done: Boolean
        }
    }
</script>
<style scoped>
    .task-cell {
        margin: 5px 5px;
        font-size: 16px;
    }
    .title {
        display: flex;
        align-items: center;
        height: 24px;
        line-height: 24px;
        vertical-align: middle;
        overflow: hidden;
    }
    .title-mark {
        display: inline-block;
        width: 12px;
        height: 12px;
        border: 1px solid #000000;
    }
    .mark {
        background: aqua;
    }
    .number {
        flex: 1;
        padding-left: 8px;
    }
    .owner {
        
    }
    .owner span {
        font-size: 12px;
        display: inline-block;
        padding: 2px 8px;
        margin: 2px 2px 0;
        border-radius: 12px;
        background: #f3f3f3;
    }
</style>