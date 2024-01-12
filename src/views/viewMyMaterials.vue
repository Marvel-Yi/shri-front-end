<template>
  <div style="height: 75px"></div>
  <el-card style="width: 40%;margin: auto;text-align: left" shadow="never">
    <div style="margin-left: 20px;margin-top: 20px;padding-bottom: 20px">
      <span class="title-prefix-_MYP6HvkiQ" ></span><span style="font-weight: bold">EDUCATION CERTIFICATE</span>
      <div style="margin-top: 20px;margin-left: 30px">

        <div v-if="files.file0=='null'">
          You haven't uploaded this file
        </div>
        <div v-else>
          <div style="margin-bottom: 10px">{{files.file0}}</div>
          <el-button @click="viewFile0">click to view</el-button>
          <el-button>click to download</el-button>
        </div>
      </div>
    </div>
    <el-divider></el-divider>

    <div style="margin-left: 20px;margin-top: 40px;padding-bottom: 20px">
      <span class="title-prefix-_MYP6HvkiQ" ></span><span style="font-weight: bold">LANGUAGE CERTIFICATE</span>
      <div style="margin-top: 20px;margin-left: 30px">

        <div v-if="files.file1=='null'">
          You haven't uploaded this file
        </div>
        <div v-else>
          <div style="margin-bottom: 10px">{{files.file1}}</div>
          <el-button @click="viewFile1">click to view</el-button>
          <el-button>click to download</el-button>
        </div>

      </div>
    </div>
    <el-divider></el-divider>

    <div style="margin-left: 20px;margin-top: 40px;padding-bottom: 20px">
      <span class="title-prefix-_MYP6HvkiQ" ></span><span style="font-weight: bold">EMPLOYMENT CERTIFICATE</span>
      <div style="margin-top: 20px;margin-left: 30px">

        <div v-if="files.file2=='null'">
          You haven't uploaded this file
        </div>
        <div v-else>
          <div style="margin-bottom: 10px">{{files.file2}}</div>
          <el-button @click="viewFile2">click to view</el-button>
          <el-button>click to download</el-button>
        </div>

      </div>
    </div>
  </el-card>

</template>

<script>

import {downloadFile, getFile} from "../api/files.js";

export default {
  name: "viewMyMaterials",
  data(){
    return {
      status:null,
      files: {
        file0: 'tang-1-0..pdf',
        file1:'tang-1-0..pdf',
        file2:'null'
      },
      chooseStatus:-1,
      declineReason:'',
      declineShow:false,
      decisionSent:-1
    }
  },
  mounted() {
    this.$data.files.file0=this.$route.query.file0
    this.$data.files.file1=this.$route.query.file1
    this.$data.files.file2=this.$route.query.file2
    this.$data.status=this.$route.query.status
  },
  methods:{
    viewFile0(){
      getFile(this.$data.files.file0).then(res=>{
        const blob=new Blob([res.data],{type:"application/pdf"})
        let url=window.URL.createObjectURL(blob)
        window.open(url,"_blank")
      })
    },
    viewFile1(){
      getFile(this.$data.files.file1).then(res=>{
        const blob=new Blob([res.data],{type:"application/pdf"})
        let url=window.URL.createObjectURL(blob)
        window.open(url,"_blank")
      })
    },
    viewFile2(){
      getFile(this.$data.files.file2).then(res=>{
        const blob=new Blob([res.data],{type:"application/pdf"})
        let url=window.URL.createObjectURL(blob)
        window.open(url,"_blank")
      })
    },
    downloadFile(type){
      let fileName=''
      if(type===0) {
        fileName=this.$data.files.file0
      }else if(type===1){
        fileName=this.$data.files.file1
      }else{
        fileName=this.$data.files.file2
      }
      downloadFile(fileName).then(res=>{
        const blob=new Blob([res.data])
        var fileURL = window.URL.createObjectURL(blob);
        var fileLink = document.createElement('a')
        fileLink.href = fileURL
        fileLink.setAttribute('download',fileName)
        document.body.appendChild(fileLink)
        fileLink.click();

      })
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
