<template>
  <div>
    <div style="height: 75px"></div>
    <el-card style="width: 40%;margin: auto;text-align: left" shadow="never">
      <div style="margin-left: 20px;margin-top: 20px;padding-bottom: 20px">
        <span class="title-prefix-_MYP6HvkiQ" ></span><span style="font-weight: bold">EDUCATION CERTIFICATE</span>
        <div style="margin-top: 20px;margin-left: 30px">
          <div style="margin-bottom: 10px">{{files.file0}}</div>
          <el-button @click="viewFile0">click to view</el-button>
          <el-button>click to download</el-button>
        </div>
      </div>
      <el-divider></el-divider>

      <div style="margin-left: 20px;margin-top: 40px;padding-bottom: 20px">
        <span class="title-prefix-_MYP6HvkiQ" ></span><span style="font-weight: bold">LANGUAGE CERTIFICATE</span>
        <div style="margin-top: 20px;margin-left: 30px">
          <div style="margin-bottom: 10px">{{files.file1}}</div>
          <el-button @click="viewFile1">click to view</el-button>
          <el-button>click to download</el-button>
        </div>
      </div>
      <el-divider></el-divider>

      <div style="margin-left: 20px;margin-top: 40px;padding-bottom: 20px">
        <span class="title-prefix-_MYP6HvkiQ" ></span><span style="font-weight: bold">EMPLOYMENT CERTIFICATE</span>
        <div style="margin-top: 20px;margin-left: 30px">
          <div style="margin-bottom: 10px">{{files.file2}}</div>
          <el-button @click="viewFile2">click to view</el-button>
          <el-button>click to download</el-button>
        </div>
      </div>

      <el-divider></el-divider>
      <div v-if="status==1" style="margin-left: 20px;margin-top: 40px;padding-bottom: 20px">
        <span class="title-prefix-_MYP6HvkiQ" ></span><span style="font-weight: bold">CHANGE STATUS</span>
        <div style="height: 20px"></div>
        <el-radio-group v-model="chooseStatus" size="large">
          <el-radio-button label="2"> pending</el-radio-button>
          <el-radio-button label="3"> rejected</el-radio-button>
          <el-radio-button label="4"> admitted</el-radio-button>
        </el-radio-group>
        <div style="height: 30px"></div>
        <el-button type="primary" size="large" style="float: right;margin-right: 50px;"  @click="changeStatus()">CHANGE</el-button>
        <div style="height: 30px"></div>
      </div>
      <div v-if="status==2" style="margin-left: 20px;margin-top: 40px;padding-bottom: 20px">
        <span class="title-prefix-_MYP6HvkiQ" ></span><span style="font-weight: bold">CHANGE STATUS</span>
        <div style="height: 20px"></div>
        <el-radio-group v-model="chooseStatus" size="large">
          <el-radio-button label="3"> rejected</el-radio-button>
          <el-radio-button label="4"> admitted</el-radio-button>
        </el-radio-group>
        <div style="height: 30px"></div>
        <el-button type="primary" size="large" style="float: right;margin-right: 50px;" @click="changeStatus()">CHANGE</el-button>
        <div style="height: 30px"></div>
      </div>
      <div v-if="status==3||status==4"  style="margin-left: 20px;margin-top: 40px;padding-bottom: 20px">
        <span class="title-prefix-_MYP6HvkiQ" ></span><span style="font-weight: bold">STATUS</span>
        <el-result
            icon="success"
            title="Admitted!"
            v-if="status==4"
        >
        </el-result>

        <el-result
            icon="error"
            title="Rejected!"
            v-if="status==3"
        >
        </el-result>
      </div>
    </el-card>


  </div>

</template>

<script>
import {downloadFile, getFile} from "../api/files.js";
import {changeApplicationStatus} from "../api/teacher.js";

export default {
  name: "viewMaterials",
  data(){
    return {
      status:null,
      files: {
        file0: 'tang-1-0..pdf',
        file1:'tang-1-0..pdf',
        file2:'tang-1-0..pdf'
      },
      chooseStatus:-1,
      appId:-1
    }
  },
  mounted() {
    this.$data.files.file0=this.$route.query.file0
    this.$data.files.file1=this.$route.query.file1
    this.$data.files.file2=this.$route.query.file2
    this.$data.status=this.$route.query.status
    this.$data.appId=this.$route.query.appId
  },
  methods:{
    changeStatus(){
      console.log("status:"+this.$data.chooseStatus)
      if(this.$data.chooseStatus===-1){
        this.$message.error("please choose the status!")
      }else{
        changeApplicationStatus(this.$data.appId,this.$data.chooseStatus)
      }


    },
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
