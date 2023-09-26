<template>
  <div style="height: 59px"></div>
  <el-card shadow="hover" style="width: 40%;margin:auto;text-align: left;margin-top: 15px">
    <div style="margin-left: 10px;font-size: 20px;font-weight: bold">Consult Message</div>
    <div style="margin-left: 10px;margin-top:10px;">
    {{message}}</div>
    <div style="text-align: right;margin-right: 30px">From: {{uName}}</div>
  </el-card>
  <el-card style="width: 40%;margin: auto;margin-top: 15px;" shadow="hover">
    <div style="margin-left: 10px;font-size: 20px;font-weight: bold;text-align: left">Edit Reply Mail</div>
    <el-input type="textarea" style="width: 90%;margin: 10px;margin-top: 40px" v-model="replyForm.header" placeholder="Please input your email header"></el-input>
    <el-input type="textarea" rows="6" style="width: 90%;margin: 10px" v-model="replyForm.body" placeholder="Please input your email body"></el-input>
    <el-input type="textarea" style="width: 90%;margin: 10px" v-model="replyForm.footer" placeholder="Please input your email footer"></el-input>
    <div style="text-align: right">
    <el-button style="margin-right: 40px;margin-top:20px;font-size: 18px" type="primary" icon="Promotion" size="large">submit</el-button>
    </div>
  </el-card>

</template>

<script>
import {Promotion} from "@element-plus/icons-vue";
export default {
  name: "replyPage",
  data(){
    return {
      message:'Hello, I majored in XXX in university, which programme should I choose?',
      uName:'kokomi',
      replyForm:{
        header:'',
        body:'',
        footer:''
      }
    }
  }
}
</script>

<style scoped>

</style>
