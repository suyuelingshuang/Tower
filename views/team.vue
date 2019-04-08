<template>
    <div class="team">
        <div class="team-header">团队</div>
        <ul class="team-list" v-if="members.length>0">
            <li class="team-item" v-for="(item, index) in members" :key="index">
                <span class="team-name">{{item.pName}}</span>
                <span class="team-id">{{item.pId}}</span>
                <el-button class="team-edit" size="mini" type="danger" @click="deleteMem(index)">删除</el-button>
            </li>
        </ul>
        <router-link :to="`/addMember`">
            <el-button class="team-add" type="primary" @click="">添加成员</el-button>
        </router-link>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                members: this.$store.state.members
            }
        },
        methods: {
            deleteMem(index) {
                this.$store.commit("deleteMember", index);
            }
        }
    }
</script>
<style scoped>
    .team {
        position: relative;
    }
    .team-header {
        font-size: 18px;
        height: 36px;
        line-height: 36px;
        background: #eeeeee;
        position: fixed;
        top: 0;
        width: 100%;
        text-align: center;
    }
    .team-list {
        margin: 36px 10px;
        overflow: scroll;
    }
    .team-item {
        display: -webkit-flex;
        display: flex;
        justify-content: space-between;
        margin: 5px 0;
    }
    .team-name {
        flex: auto;
        overflow: hidden;
    }
    .team-id {
        flex: 0 1 auto;
        margin-right: 8px;
    }
    .team-edit {
        flex: 0 1 auto;
    }
    .team-add {
        position: fixed;
        bottom: 40px;
        left: 50%;
        margin-left: -49px;
    }
</style>
