<template>
  <div style="height:59px"></div>
  <div style="margin: auto;width: 40%">
    <el-card shadow="never" style="margin-top: 20px;">
    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick" style="background-color: white">
      <el-tab-pane label="Read" name="first">
        <el-card shadow="never"
                 v-for="(item,index) in readMessageList"
                 style="text-align: left;margin-bottom: 10px;cursor: pointer"
                 @click="gotoReply(item)">
          <el-row>
            <el-col :span="2">
              <el-icon :size="35" color="green"><SuccessFilled></SuccessFilled></el-icon>
            </el-col>
            <el-col :span="22">{{item.content}}</el-col>
          </el-row>

        </el-card>
      </el-tab-pane>

      <el-tab-pane label="Unread" name="second">
        <el-card shadow="never" v-for="(item,index) in unReadMessageList"
                 style="text-align: left;margin-bottom: 10px;cursor: pointer"
                 @click="gotoReply(item)">
          <el-row>
            <el-col :span="2">
              <el-icon :size="35" color="rgb(232,155,0)"><WarningFilled></WarningFilled></el-icon>
            </el-col>
            <el-col :span="22">{{item.content}}</el-col>
          </el-row>

        </el-card>
      </el-tab-pane>
    </el-tabs>
    </el-card>
  </div>

</template>

<script>
import {SuccessFilled, Warning, WarningFilled} from "@element-plus/icons-vue";
import {getProcessed, getUnprocessed} from "../api/teacher.js";
export default {
  name: "message",
  components: {WarningFilled, Warning, SuccessFilled},
  data(){
    return {
      activeName:'first',
      readMessageList:[
        {
          id:1,
          userName:'kokomi01',
          userEmail:'111@qq.com',
          content:'You have a new application of programme XXX from userXXX',
          status:1,
          response:'djhasdhja'
        },
        {
          id:2,
          userName:'kokomi02',
          userEmail:'111@qq.com',
          content:'Hello, I majored in XXX in university, which programme should I choose?',
          status:1,
          response:'djhasdhja'
        }
      ],
      unReadMessageList:[
        {
          id:4,
          userName:'kokomi01',
          userEmail:'111@qq.com',
          content:'You have a new application of programme XXX from userXXX',
          status:0,
          response:''
        },
        {
          id:5,
          userName:'kokomi02',
          userEmail:'111@qq.com',
          content:'Hello, I majored in XXX in university, which programme should I choose?',
          status: 0,
          response:''
        }
      ]
    }
  },
  mounted() {
    getUnprocessed(1,10).then(res=>{
      this.$data.unReadMessageList=res.data.data
    })
    getProcessed(1,10).then(res=>{
      this.$data.readMessageList=res.data.data
    })
  },
  methods:{
    gotoReply(item){
        this.$router.push({path:'/reply',
          query:{id:item.id,
            status:item.status,
            message:item.content,
            userName:item.userName,
            userEmail: item.userEmail,
            response:item.response}})
    }
  }
}
</script>

<style scoped>

</style>
