<template>
  <div style="height:59px"></div>
  <div style="margin: auto;width: 40%">
    <el-card shadow="never" style="margin-top: 20px;">
    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick" style="background-color: white">
      <el-tab-pane label="Read" name="first">
        <el-card shadow="never" v-for="(item,index) in readMessageList" style="text-align: left;margin-bottom: 10px">
          <el-row>
            <el-col :span="2">
              <el-icon :size="35" color="green"><SuccessFilled></SuccessFilled></el-icon>
            </el-col>
            <el-col :span="22">{{item.message}}</el-col>
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
            <el-col :span="22">{{item.message}}</el-col>
          </el-row>

        </el-card>
      </el-tab-pane>
    </el-tabs>
    </el-card>
  </div>

</template>

<script>
import {SuccessFilled, Warning, WarningFilled} from "@element-plus/icons-vue";
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
          message:'You have a new application of programme XXX from userXXX',
          read:true
        },
        {
          id:2,
          userName:'kokomi02',
          message:'Hello, I majored in XXX in university, which programme should I choose?',
          read:true
        },
        {
          id:3,
          userName:'kokomi03',
          message:'I am confused about the courses in programmeXXX.',
          read:true
        }
      ],
      unReadMessageList:[
        {
          id:4,
          userName:'kokomi01',
          type:'apply',
          message:'You have a new application of programme XXX from userXXX',
          read:false
        },
        {
          id:5,
          userName:'kokomi02',
          type:'consult',
          message:'Hello, I majored in XXX in university, which programme should I choose?',
          read:false
        },
        {
          id:6,
          userName:'kokomi03',
          type:'consult',
          message:'I am confused about the courses in programmeXXX.',
          read:false
        }
      ]
    }
  },
  methods:{
    gotoReply(item){
      if(item.type==='apply'){
        //this.$router.push({path:'/showApplication'})
      }else{
        this.$router.push({path:'/reply', query:{message:item.message,userName:item.userName}})
      }
    }
  }
}
</script>

<style scoped>

</style>
