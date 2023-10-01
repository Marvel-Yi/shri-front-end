<template>
  <div style="height: 59px"></div>
  <el-card shadow="hover" style="width: 40%;margin:auto;text-align: left;margin-top: 15px">
    <div style="margin-left: 10px;font-size: 20px;font-weight: bold">Consult Message</div>
    <div style="margin-left: 10px;margin-top:10px;">
    {{message}}</div>
    <div style="text-align: right;margin-right: 30px">From: {{userName}}</div>
  </el-card>
  <el-card style="width: 40%;margin: auto;margin-top: 15px;" shadow="hover" v-if="status==='0'">
    <div style="margin-left: 10px;font-size: 20px;font-weight: bold;text-align: left">Edit Reply Mail</div>
    <el-input type="textarea" rows="6" style="width: 90%;margin: 10px" v-model="replyForm.body" placeholder="Please input your email body"></el-input>
    <div style="text-align: right">
    <el-button
        style="margin-right: 40px;margin-top:20px;font-size: 18px"
        type="primary"
        icon="Promotion"
        size="large" @click="handleSubmit()">submit</el-button>
    </div>
  </el-card>

  <el-card style="width: 40%;margin: auto;margin-top: 15px;" shadow="hover" v-if="status==='1'">
    <div style="margin-left: 10px;font-size: 20px;font-weight: bold;text-align: left">Reply Mail</div>
    <div style="text-align: left;width: 92%;margin: auto">
      <div style="margin-top: 20px">
        <div style="margin-bottom: 10px">To {{userName}}:</div>
        <div>{{response}}</div>

      </div>
    </div>

  </el-card>

</template>

<script>
import {Promotion} from "@element-plus/icons-vue";
import {submitReply} from "../api/teacher.js";
export default {
  name: "replyPage",
  data(){
    return {
      id:'',
      message:'Hello, I majored in XXX in university, which programme should I choose?',
      userName:'kokomi',
      userEmail:'',
      status:'',
      response:'sdfsd gfs fgfdgh dfh asdfcd ef ef wefesd sdgsdgs dgsdg sdgsd gsd gsdg  gwrr r rrrr rr rsdsd  sdsd sdsd sd as a aaaaaa aa aaaa frg',
      replyForm:{
        body:'',
      }
    }
  },
  mounted() {
    this.$data.userName=this.$route.query.userName;
    this.$data.message=this.$route.query.message;
    this.$data.userEmail=this.$route.query.userEmail;
    this.$data.status=this.$route.query.status;
    this.$data.response=this.$route.query.response;
    this.$data.id=this.$route.query.id;
    //console.log(this.$data.status)
  },
  methods:{
    handleSubmit(){
      const replyInfo={
        id:this.$data.id,
        response:this.$data.replyForm.body,
        userEmail:this.$data.userEmail,
      }
      submitReply(replyInfo).then(res=>{
        console.log(res)
        if(res.data.code===0){
          this.$message.success('successfully submitted!')
          this.$router.push('/message')
        }else{
          this.$message.error("there's something wrong...")
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
