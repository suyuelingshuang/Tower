<template>
        <div class="notice-wrap">
            <div class="notice-header">与我相关</div>
            <ul class="notice-ul" v-if="noticeData.length>0">
                <li class="notice-li" v-for="(item, index) in noticeData" :key="index">
                    <span class="notice-title">{{ item.title }}</span>
                    <span class="notice-time">{{ item.day }}{{ item.time }}</span>
                </li>
            </ul>
        </div>
    </template>
    <script>
        export default {
            data() {
                return {
                    noticeData: this.$store.state.notice
                }
            },
            mounted() {
            }
        }
    </script>
    <style scoped>
        .notice-wrap {
            font-size: 12px;
            height: 24px;
            line-height: 24px;
        }
        .notice-header {
            font-size: 18px;
            height: 36px;
            line-height: 36px;
            text-align: center;
            background: #eeeeee;
            position: fixed;
            top: 0;
            width: 100%;
        }
        .notice-ul {
            margin: 36px 10px;
            overflow: scroll;
        }
        .notice-li {
            display: -webkit-flex;
            display: flex;
            justify-content: space-between;
        }
        .notice-title {
            flex: auto;
        }
        .notice-time {
            flex: 0 1 auto;
        }
    </style>