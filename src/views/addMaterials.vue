<template>
  <div style="height: 69px"></div>
  <el-card style="margin:auto;width: 40%;text-align: left" shadow="never">
    <span class="title-prefix-_MYP6HvkiQ"></span><span style="font-weight: bold">Upload files</span>
    <!-- 上传合同 -->
    <el-form-item label="Upload File" prop="cght">
      <el-upload
          class="upload-demo"
          action="http://127.0.0.1/upload"
          :limit="1"
          :show-file-list="true"
          :on-success="handleSuccess"
          :on-error="handleError"
      >
        <el-row>
          <el-button type="primary">add file</el-button>
          <span style="font-size: 13px;color: #8d8d8d;margin-left: 15px">{{ fileName }}</span>
        </el-row>
      </el-upload>
    </el-form-item>

  </el-card>
</template>

<script>
import {ref} from "vue";
const fileName = ref("只允许上传PDF文件")
export default {
  name: "addMaterials",
  data(){
    return{

    }
  },
  methods:{

    handleSuccess (res) {
      fileName.value = res.data.title;
      //form.value.cght = res.data.title;
    },
    handleError(error){
      this.$message.error(error.message)
    }

  }
}
</script>

<style scoped>
.title-prefix-_MYP6HvkiQ {
  width: 4px;
  height: 14px;
  display: inline-block;
  margin-right: 5px;
  -webkit-border-radius: 100px;
  -moz-border-radius: 100px;
  border-radius: 100px;
  background: #0068FF;
}
</style>
