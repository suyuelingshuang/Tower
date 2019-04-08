<template>
    <div class="add-project">
        <div class="add-project-header">新增项目</div>
        <el-form ref="form" :model="form" :rules="rules" label-width="80px" class="add-project-list">
            <el-form-item label="工程目录">
                <el-select v-model="form.region" placeholder="请选择工程目录">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="项目名称" prop="title">
                <el-input v-model="form.title"></el-input>
            </el-form-item>
            <el-form-item label="项目编号" prop="prid">
                <el-input v-model="form.prid"></el-input>
            </el-form-item>
            <el-form-item label="员工姓名">
                <el-select v-model="form.pName" placeholder="请选择负责人">
                    <el-option v-for="item in members" :key="item.pId" :label="item.pName" :value="item.pName"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="优先级">
                <el-input v-model="form.priority"></el-input>
            </el-form-item>
            <el-form-item label="负责">
                <el-switch v-model="form.owner"></el-switch>
            </el-form-item>
            <el-form-item label="完成✅">
                <el-switch v-model="form.success"></el-switch>
            </el-form-item>
            <el-form-item label="收藏">
                <el-switch v-model="form.star"></el-switch>
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
                    region: '',
                    title: '',
                    id: '',
                    pName: '钟稳霞',
                    primary: '',
                    owner: '',
                    success: '',
                    star: ''
                },
                options: [
                    {
                        label: "通信工程",
                        value: "comProjectData"
                    },
                    {
                        label: "网络工程",
                        value: "netProjectData"
                    }
                ],
                rules: {
                    title: [
                        { required: true, message: '项目名称不能为空'}
                    ],
                    prid: [
                        { required: true, message: '项目编号不能为空'}
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
                var ids = this.$store.getters.getIds;
                console.log("************************");
                console.log(ids);
                if (ids.indexOf(this.form.prid) != -1) {
                    this.$message.warning("该项目编号"+this.form.prid+"已存在，请重新输入！");
                    return;
                }
                if (this.form.region == "comProjectData") {
                    if (this.form.prid.slice(0, 3) != "150") {
                        this.$message.warning("通信工程项目编号需以150开头！");
                        return;
                    }
                } else if (this.form.region == "netProjectData") {
                    if (this.form.prid.slice(0, 3) != "160") {
                        this.$message.warning("网络工程项目编号需以160开头！");
                        return;
                    }
                }
                this.validateSubmit(formName);
            },
            validateSubmit(formName) {
                this.$refs[formName].validate((valid) => {
                    var obj = null;
                    if (valid) {
                        obj = {
                            title: this.form.title,
                            id: this.form.prid,
                            owner: this.form.pName,
                            priority: this.form.priority || 1,
                            own: false,
                            done: false,
                            star: false
                        }
                        this.$store.commit("addProjectData", obj);
                        this.$message.success("新建文件成功！！！");
                        this.$refs[formName].resetFields();
                        console.log(this.$store.state.projectData);
                    } else {
                        console.log('error submit!!');
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
        margin: 10px;
        overflow: scroll;
    }
</style>