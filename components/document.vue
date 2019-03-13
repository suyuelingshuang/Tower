<template>
    <div>
        <el-upload
            class="upload-list"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            :on-success="handleSuccess"
            :on-error="handleSuccess"
            :before-upload="handleBeforeUpload"
            multiple
            :limit="10"
            :on-exceed="handleExceed"
            :file-list="fileList">
            <div class="upload-button">
                <el-button size="small" type="primary">上传文档</el-button>
                <div slot="tip" class="el-upload__tip">只能上传doc/docx/pdf/excel文件，且不超过500kb</div>
            </div>
        </el-upload>
    </div>
</template>
<script>
    import fileList from "../importData/documentData.js";
    export default {
        data() {
            return {
                fileList: fileList
            };
        },
        methods: {
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePreview(file) {
                console.log(file);
            },
            handleExceed(files, fileList) {
                this.$message.warning(`当前限制选择 10 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
            },
            beforeRemove(file, fileList) {
                return this.$confirm(`确定移除 ${ file.name }？`);
            },
            handleSuccess(res, file, fileList) {
                console.log(res);
                if (res.type == "success") {
                    fileList.push(file);
                }
            },
            handleBeforeUpload(file) {
                var type = file.type;
                if (type != "application/pdf" && type != "application/msexcel" && type != "application/msword") {
                    this.$message.warning("只允许上传doc/docx/pdf/excel文件！");
                    return false;
                }
                if (file.size > 500*1024) {
                    this.$message.warning("文件大小不能超过500kb！");
                    return false;
                }
            }
            
        }
    }
</script>
<style scoped>
    .upload-list {
        position: absolute;
        top: 36px;
        z-index: -1;
    }
    .upload-button {
        position: fixed;
        bottom: 36px;
        width: 100%;
        left: 50%;
        transform:translate(-50%,0);
        z-index:1000;
    }
</style>