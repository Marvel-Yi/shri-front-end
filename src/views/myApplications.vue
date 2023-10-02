<template>
  <div style="height: 59px"></div>
  <div style="width: 40%;margin: auto">
    <el-card shadow="never" style="margin-top: 20px;">

          <el-card shadow="never"
                   v-for="(item,index) in applicationList"
                   style="text-align: left;margin-bottom: 10px;cursor: pointer"
                   @click="gotoApplicationPage(item.userId,item.userName,item.programmeName)">
            <el-row>
              <el-col :span="2">
                <el-icon :size="35" color="rgb(232,155,0)" v-if="item.status===0"><WarningFilled></WarningFilled></el-icon>
                <el-icon :size="35" color="lightblue" v-if="item.status===1"><QuestionFilled></QuestionFilled></el-icon>
                <el-icon :size="35" color="darkred" v-if="item.status===2"><CircleCloseFilled></CircleCloseFilled></el-icon>
                <el-icon :size="35" color="green" v-if="item.status===3"><SuccessFilled></SuccessFilled></el-icon>
              </el-col>
              <el-col :span="22">
                <div><span style="font-weight: bold">programme name:</span>  {{ item.programmeName }}</div>
                <div><span style="font-weight: bold">apply date:</span> {{item.applyDate}}</div>
              </el-col>
            </el-row>
          </el-card>



    </el-card>
  </div>
</template>

<script>


import {getMyApplications} from "../api/application.js";

export default {
  name: "myApplications",
  data(){
    return{
      applicationList:[
        {
          id:1,
          userId:1,
          userName:'user01',
          userEmail:'111@qq.com',
          programmeId:2,
          programmeName:'programme01 jkhsdfj sjdf lkj s',
          signature:'',
          managementSignature:'',
          programmeInChargeSignature:'',
          status:3,//0 未处理；1 处理中；2 拒绝；3 通过
          applyDate:'2021-01-01'
        }
      ]
    }
  },
  mounted() {
    getMyApplications(localStorage.getItem('userId')).then(res=>{
      this.$data.applicationList=res.data.data
    })
  },
  methods:{
    gotoApplicationPage(userId,userName,programmeName){
      this.$router.push({path:'/showApplication',query:{userId:userId,userName:userName,programmeName:programmeName}})
    }
  }
}
</script>

<style scoped>

</style>
