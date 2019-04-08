<template>
    <div class="dynamic-wrap">
        <div class="dynamic-header">好友动态</div>
        <ul class="dynamic-ul" v-if="dynamicData.length>0">
            <li class="dynamic-li" v-for="(item, index) in dynamicData" :key="index">
                <span class="dynamic-title">{{ item.title }}</span>
                <span class="dynamic-time">{{ item.day }}{{ item.time }}</span>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                dynamicData: this.$store.state.dynamic
            }
        },
        mounted() {

        }
    }
</script>
<style scoped>
    .dynamic-wrap {
        font-size: 12px;
        height: 24px;
        line-height: 24px;
        position: relative;
    }
    .dynamic-header {
        font-size: 18px;
        height: 36px;
        line-height: 36px;
        text-align: center;
        background: #eeeeee;
        position: fixed;
        top: 0;
        width: 100%;
    }
    .dynamic-ul {
        margin: 36px 10px;
        overflow: scroll;
    }
    .dynamic-li {
        display: -webkit-flex;
        display: flex;
        justify-content: space-between;
    }
    .dynamic-title {
        flex: auto;
        overflow: hidden;
    }
    .dynamic-time {
        flex: 0 1 auto;
    }
</style>