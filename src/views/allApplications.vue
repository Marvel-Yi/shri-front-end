<template>
  <div style="height:59px"></div>
  <div style="">
    <el-card shadow="hover"
             style="width: 40%;margin:auto;border-radius: 10px;margin-top: 15px;cursor: pointer"
             v-for="(item,index) in this.$data.applicationList"
             @click="gotoApplicationPage(item.id)">
      <el-row :gutter="20">
        <el-col :span="1"></el-col>
        <el-col :span="2">
          <div v-if="item.status===2">
            <el-icon :size="40" color="green"><SuccessFilled></SuccessFilled></el-icon>
          </div>
          <div v-else-if="item.status===1"><el-icon :size="40" color="rgb(232,155,0)"><QuestionFilled></QuestionFilled></el-icon></div>
          <div v-else><el-icon :size="40" color="lightblue"><WarningFilled></WarningFilled></el-icon></div>
        </el-col>
        <el-col :span="20">
          <div style="text-align: left">
            Application for {{item.programmeName}} from {{item.userName}}
          </div>
        </el-col>
        <el-col :span="2"></el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
import {SuccessFilled, WarningFilled,QuestionFilled,Warning} from "@element-plus/icons-vue";
export default {
  name: "allApplications",
  components: {WarningFilled, QuestionFilled, SuccessFilled},
  data(){
    return {
      applicationList:[{
        id:1,
        userName:'user01',
        programmeName:'programme01',
        status:0//0 未处理；1 处理中；2 已处理
      },
        {
          id:2,
          userName:'user01',
          programmeName:'programme02',
          status:1
        },
        {
          id:3,
          userName:'user02',
          programmeName:'programme03',
          status: 2
        }]
    }
  },
  methods:{
    gotoApplicationPage(id){
      this.$router.push({path:'/showApplication',query:{id:id}})
    }

  }
}
</script>

<style scoped>

</style>
