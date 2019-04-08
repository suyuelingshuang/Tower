<template>
        <div>
            <ul class="task-list">
                <li v-for="(item, index) in discussData" :key="index" class="list-item">
                    <h1>{{ item.title }}</h1><span>负责人：{{ item.pName }}</span>
                </li>
            </ul>
            <router-link :to="'/addDiscuss/' + pageId" class="project-main">
                <el-button size="small" type="primary" class="task-add">新增讨论</el-button>
            </router-link>
        </div>
    </template>
    <script>
        export default {
            props: {
                discussData: Array
            },
            data() {
                return {
                    pageId: 0
                }
            },
            mounted() {
                this.pageId = this.$route.params.id;
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