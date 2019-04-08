<template>
    <div>
        <el-form ref="form" :model="form" :rules="rules" label-width="80px" class="set-file-list">
            <el-form-item label="负责人">
                <el-select v-model="form.pName" placeholder="请选择负责人">
                    <el-option v-for="item in members" :key="item.value" :label="item.pName" :value="item.pName">
                        <span style="float: left">{{ item.pName }}</span>
                        <span style="float: right; color: #8492a6; font-size: 13px">{{ item.pId }}</span>
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="完成✅">
                <el-switch v-model="form.done"></el-switch>
            </el-form-item>
            <el-form-item label="收藏">
                <el-switch v-model="form.star"></el-switch>
            </el-form-item>
            <el-form-item label="动态">
                <el-switch v-model="form.dynamic"></el-switch>
            </el-form-item>
            <el-form-item label="通知">
                <el-switch v-model="form.notice"></el-switch>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit('form')">保存修改</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                members: [],
                form: {
                    pName: "钟稳霞",
                    done: false,
                    star: false,
                    dynamic: true,
                    notice: true
                },
                rules: {

                }
            }
        },
        computed:{
            pageId() {
                return this.$route.params.id;
            }
        },
        mounted() {
            var that = this;
            this.members = this.$store.state.members;
            var curPro = this.$store.state.projectData.filter(function(item, index, arr) {
                return item.id == that.pageId;
            })[0];
            this.form.pName = curPro.owner;
            this.form.done = curPro.done;
            this.form.star = curPro.star;
        },
        methods: {
            onSubmit(formName) {
                var obj = {
                    owner: this.form.pName,
                    done: this.form.done,
                    star: this.form.star,
                    dynamic: this.form.dynamic,
                    notice: this.form.notice,
                    id: this.pageId
                }
                this.$store.commit("setProjectFile", obj);
                this.$message.success("保存成功！");
            }
        }
    }
</script>
<style scoped>
    .set-file-list {
        margin-top: 10px;
    }
</style>