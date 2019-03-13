<template>
    <div class="discuss">
        <el-button class="discuss-add" size="small" type="primary">新建讨论</el-button>
    </div>
</template>
<script>
    export default {

    }
</script>
<style scoped>
    .discuss-add {
        position:fixed;
        left:50%;
        bottom:36px;
        transform:translate(-50%,-50%);
        z-index:1000;
        display: block;
    }
</style>