<template>
  <div style="height:59px"></div>
  <div style="">
    <el-card shadow="hover" style="width: 40%;margin:auto;border-radius: 10px;margin-top: 15px" v-for="(item,index) in this.$data.messageList">
      <el-row :gutter="20">
        <el-col :span="1"></el-col>
        <el-col :span="2">
          <div v-if="item.read">
              <el-icon :size="40" color="green"><SuccessFilled></SuccessFilled></el-icon>
          </div>
          <div v-else><el-icon :size="40" color="rgb(232,155,0)"><WarningFilled></WarningFilled></el-icon></div>
        </el-col>
        <el-col :span="20">
          <div v-if="item.type==='apply'" style="text-align: left">
            {{item.message}}
          </div>
          <div v-else>
            <div style="text-align: left">{{item.message}}</div>
          </div>
        </el-col>
        <el-col :span="2"></el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
import {SuccessFilled, Warning} from "@element-plus/icons-vue";
export default {
  name: "message",
  components: {Warning, SuccessFilled},
  data(){
    return {
      messageList:[
        {
          msgId:1,
          type:'apply',
          message:'You have a new application of programme XXX from userXXX',
          read:false
        },
        {
          msgId:2,
          type:'consult',
          message:'Hello, I majored in XXX in university, which programme should I choose?',
          read:true
        },
        {
          msgId:3,
          type:'consult',
          message:'I am confused about the courses in programmeXXX.',
          read:true
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
