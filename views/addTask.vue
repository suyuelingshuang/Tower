<template>
    <div class="add-project">
        <div class="add-project-header">新增任务</div>
        <el-form ref="form" :model="form" :rules="rules" label-width="80px" class="add-project-list">
            <el-form-item label="任务名称" prop="title">
                <el-input v-model="form.title"></el-input>
            </el-form-item>
            <el-form-item label="员工姓名">
                <el-select v-model="form.pName" placeholder="请选择参与者" multiple>
                    <el-option v-for="item in members" :key="item.pId" :label="item.pName" :value="item.pName"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit('form')">立即创建</el-button>
                <el-button @click="resetForm('form')">取消</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                form: {
                    title: '',
                    pName: ''
                },
                rules: {
                    title: [
                        { required: true, message: '项目名称不能为空'}
                    ],
                    pName: [
                        { required: true, message: '员工姓名不能为空'}
                    ]
                },
                members: this.$store.state.members
            }
        },
        methods: {
            onSubmit(formName) {
                this.validateSubmit(formName);
            },
            validateSubmit(formName) {
                this.$refs[formName].validate((valid) => {
                    var obj = null;
                    if (valid) {
                        obj = {
                            title: this.form.title,
                            pName: this.form.pName,
                            id: this.$route.params.id
                        }
                        this.$store.commit("addProjectTask", obj);
                        this.$message.success("新增任务成功！！！");
                        this.$router.go(-1);
                    } else {
                        this.$message.error("error submit!!");
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$router.go(-1);
            }
        }
    }
</script>
<style scoped>
    .add-project {
        font-size: 18px;
        height: 36px;
        line-height: 36px;
        background: #eeeeee;
    }
    .add-project-header {
        text-align: center;
    }
    .add-project-list {
        margin: 10px 10px 10px 0;
        overflow: scroll;
    }
</style>