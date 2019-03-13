<template>
    <div class="task-cell">
        <div class="title"><span class="title-mark" :class="{'mark': done}"></span>{{ cellInfo.title }}<span class="number">项目编号：{{ cellInfo.id }}</span></div>
        <div class="owner">
            <li v-for="(item, index) in cellInfo.owner" :key="index">{{item.name}} {{item.number}}</li>
            <li class="priority">优先级：{{ cellInfo.priority }}</li>
        </div>
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
    .owner li {
        font-size: 12px;
        display: inline-block;
        padding: 2px 8px;
        margin: 2px 2px 0;
        border-radius: 12px;
        background: #f3f3f3;
    }
</style>