<template>
  <div style="height: 69px"></div>

  <el-card style="margin:auto;width: 40%;text-align: left" shadow="never">
    <span class="title-prefix-_MYP6HvkiQ"></span><span style="font-weight: bold">Upload files</span>

    <div>
      <div
          style="margin-left: 30px;font-size: 14px;font-weight: bold;margin-top:20px;margin-bottom: 10px"
      ><span class="title-prefix-_MYP6HvkiQ"></span>EDUCATION CERTIFICATE</div>
    <el-upload
        class="upload-demo"
        drag
        action='http://127.0.0.1:8080/document/upload'
        style="width: 80%;margin: auto;height: 180px"
        :limit="1"
        on-success="handleSuccess"
        :data="file0"

    >
      <el-icon class="el-icon--upload" style="font-size: 40px"><upload-filled /></el-icon>
      <div class="el-upload__text">
        Drop file here or <em>click to upload</em>
      </div>
      <template #tip>
        <div class="el-upload__tip">
          A pdf file with a size less than 500kb
        </div>
      </template>
    </el-upload>
    </div>


    <div >
      <div
          style="margin-left: 30px;font-size: 14px;font-weight: bold;margin-top:50px;margin-bottom: 10px"
      ><span class="title-prefix-_MYP6HvkiQ"></span>LANGUAGE CERTIFICATE</div>
      <el-upload
          class="upload-demo"
          drag
          action='http://127.0.0.1:8080/document/upload'
          style="width: 80%;margin: auto;height: 180px"
          :limit="1"
          on-success="handleSuccess"
          :data="file1"

      >
        <el-icon class="el-icon--upload" style="font-size: 40px"><upload-filled /></el-icon>
        <div class="el-upload__text">
          Drop file here or <em>click to upload</em>
        </div>
        <template #tip>
          <div class="el-upload__tip">
            A pdf file with a size less than 500kb
          </div>
        </template>
      </el-upload>
    </div>


    <div >
      <div
          style="margin-left: 30px;font-size: 14px;font-weight: bold;margin-top:50px;margin-bottom: 10px"
      ><span class="title-prefix-_MYP6HvkiQ"></span>EMPLOYMENT CERTIFICATE</div>
      <el-upload
          class="upload-demo"
          drag
          action='http://127.0.0.1:8080/document/upload'
          style="width: 80%;margin: auto;height: 180px"
          :limit="1"
          on-success="handleSuccess"
          :data="file2"

      >
        <el-icon class="el-icon--upload" style="font-size: 40px"><upload-filled /></el-icon>
        <div class="el-upload__text">
          Drop file here or <em>click to upload</em>
        </div>
        <template #tip>
          <div class="el-upload__tip">
            A pdf file with a size less than 500kb
          </div>
        </template>
      </el-upload>
    </div>

  </el-card>
</template>

<script>
import {ref} from "vue";
const fileName = ref("只允许上传PDF文件")
export default {
  name: "addMaterials",
  data(){
    return{
      id:null,
      file0:{
        documentType:0,
        appId:-1,
        userId:-1
      },
      file1:{
        documentType:1,
        appId:-1,
        userId:-1
      },
      file2:{
        documentType:2,
        appId:-1,
        userId:-1
      }

    }
  },
  created() {
    this.$data.id=this.$route.query.id
    this.$data.file0.appId=this.$route.query.id
    this.$data.file0.userId=localStorage.getItem('userId')
    this.$data.file1.appId=this.$route.query.id
    this.$data.file1.userId=localStorage.getItem('userId')
    this.$data.file2.appId=this.$route.query.id
    this.$data.file2.userId=localStorage.getItem('userId')

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
