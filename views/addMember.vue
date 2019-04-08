<template>
        <div class="add-project">
            <div class="add-project-header">添加成员</div>
            <el-form ref="form" :model="form" :rules="rules" label-width="80px" class="add-project-list">
                <el-form-item label="成员名称" prop="pName">
                    <el-input v-model="form.pName"></el-input>
                </el-form-item>
                <el-form-item label="成员编号" prop="pId">
                    <el-input v-model="form.pId"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit('form')">确认添加</el-button>
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
                        pName: '',
                        pId: ''
                    },
                    rules: {
                        pName: [
                            { required: true, message: '成员名称不能为空'}
                        ],
                        pId: [
                            { required: true, message: '成员编号不能为空'}
                        ]
                    }
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
                                pName: this.form.pName,
                                pId: this.form.pId
                            }
                            this.$store.commit("addMember", obj);
                            this.$message.success("添加成员成功！！！");
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