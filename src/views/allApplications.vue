<template>
  <div style="height:59px"></div>
  <div style="width: 40%;margin: auto">
    <el-card shadow="never" style="margin-top: 20px;">
      <el-tabs v-model="activeName" class="demo-tabs" @tab-click="" style="background-color: white">
        <el-tab-pane label="under review" name="first">
          <el-card shadow="never"
                   v-for="(item,index) in applicationList0"
                   style="text-align: left;margin-bottom: 10px;cursor: pointer"
                   @click="gotoApplicationPage(item.userId,item.userName,item.programmeName)">
            <el-row>
              <el-col :span="2">
                <el-icon :size="35" color="rgb(232,155,0)"><WarningFilled></WarningFilled></el-icon>
              </el-col>
              <el-col :span="22">
                <div><span style="font-weight: bold">user:</span> {{ item.userName }}({{item.userEmail}})</div>
                <div><span style="font-weight: bold">programme name:</span>  {{ item.programmeName }}</div>
                <div><span style="font-weight: bold">apply date:</span> {{item.applyDate}}</div>
              </el-col>
            </el-row>

          </el-card>
        </el-tab-pane>

        <el-tab-pane label="pending" name="second">
          <el-card shadow="never" v-for="(item,index) in applicationList1"
                   style="text-align: left;margin-bottom: 10px;cursor: pointer"
                   @click="gotoApplicationPage(item.userId,item.userName,item.programmeName)">
            <el-row>
              <el-col :span="2">
                <el-icon :size="35" color="lightblue"><QuestionFilled></QuestionFilled></el-icon>
              </el-col>
              <el-col :span="22">
                <div><span style="font-weight: bold">user:</span> {{ item.userName }}({{item.userEmail}})</div>
                <div><span style="font-weight: bold">programme name:</span>  {{ item.programmeName }}</div>
                <div><span style="font-weight: bold">apply date:</span> {{item.applyDate}}</div>
              </el-col>
            </el-row>

          </el-card>
        </el-tab-pane>

        <el-tab-pane label="rejected" name="third">
          <el-card shadow="never" v-for="(item,index) in applicationList1"
                   style="text-align: left;margin-bottom: 10px;cursor: pointer"
                   @click="gotoApplicationPage(item.userId,item.userName,item.programmeName)">
            <el-row>
              <el-col :span="2">
                <el-icon :size="35" color="darkred"><CircleCloseFilled></CircleCloseFilled></el-icon>
              </el-col>
              <el-col :span="22">
                <div><span style="font-weight: bold">user:</span> {{ item.userName }}({{item.userEmail}})</div>
                <div><span style="font-weight: bold">programme name:</span>  {{ item.programmeName }}</div>
                <div><span style="font-weight: bold">apply date:</span> {{item.applyDate}}</div>
              </el-col>
            </el-row>

          </el-card>
        </el-tab-pane>

        <el-tab-pane label="admitted" name="forth">
          <el-card shadow="never" v-for="(item,index) in applicationList1"
                   style="text-align: left;margin-bottom: 10px;cursor: pointer"
                   @click="gotoApplicationPage(item.userId,item.userName,item.programmeName)">
            <el-row>
              <el-col :span="2">
                <el-icon :size="35" color="green"><SuccessFilled></SuccessFilled></el-icon>
              </el-col>
              <el-col :span="22"><div><span style="font-weight: bold">user:</span> {{ item.userName }}({{item.userEmail}})</div>
                <div><span style="font-weight: bold">programme name:</span>  {{ item.programmeName }}</div>
                <div><span style="font-weight: bold">apply date:</span> {{item.applyDate}}</div></el-col>
            </el-row>

          </el-card>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<script>
import {SuccessFilled, WarningFilled,QuestionFilled,Warning,CircleCloseFilled} from "@element-plus/icons-vue";
import {getAllApplication} from "../api/teacher.js";
import {cleanLocalStorage} from "../js/index.js";
export default {
  name: "allApplications",
  components: {CircleCloseFilled, WarningFilled, QuestionFilled, SuccessFilled},
  data(){
    return {
      activeName:'first',
      applicationList0:[{
        id:1,
        userId:1,
        userName:'user01',
        userEmail:'111@qq.com',
        programmeId:2,
        programmeName:'programme01 jkhsdfj sjdf lkjdf  s',
        signature:'',
        managementSignature:'',
        programmeInChargeSignature:'',
        status:0,//0 未处理；1 处理中；2 拒绝；3 通过
        applyDate:'2021-01-01'
      }],
      applicationList1:[{
        id:1,
        userId:1,
        userName:'user01',
        userEmail:'111@qq.com',
        programmeId:2,
        programmeName:'programme01sf  edfsdg sdgsd',
        signature:'',
        managementSignature:'',
        programmeInChargeSignature:'',
        status:1,//0 未处理；1 处理中；2 拒绝；3 通过
        applyDate:'2021-01-01'
      }],applicationList2:[{
        id:1,
        userId:1,
        userName:'user01',
        userEmail:'111@qq.com',
        programmeId:2,
        programmeName:'programme01 dhdgfh df hs',
        signature:'',
        managementSignature:'',
        programmeInChargeSignature:'',
        status:2,//0 未处理；1 处理中；2 拒绝；3 通过
        applyDate:'2021-01-01'
      }],applicationList3:[{
        id:1,
        userId:1,
        userName:'user01',
        userEmail:'111@qq.com',
        programmeId:2,
        programmeName:'programme01 dsfgd sfghdfsh ',
        signature:'',
        managementSignature:'',
        programmeInChargeSignature:'',
        status:3,//0 未处理；1 处理中；2 拒绝；3 通过
        applyDate:'2021-01-01'
      },]
    }
  },
  mounted() {
    getAllApplication(0,10,1).then(res=>{
      let i=0
      if(res.data.code===-1){
        cleanLocalStorage();
        this.$router.push('/login')
      }else {
        this.$data.applicationList0 = res.data.data
        for(i=0;i<this.$data.applicationList0.length;i++){
          this.$data.applicationList0[i].applyDate=this.$data.applicationList0[i].applyDate.slice(0,10)
        }
      }
    })
    getAllApplication(1,10,1).then(res=>{
      let i=0
      if(res.data.code===-1){
        cleanLocalStorage();
        this.$router.push('/login')
      }else {
        this.$data.applicationList1 = res.data.data
        for(i=0;i<this.$data.applicationList1.length;i++){
          this.$data.applicationList1[i].applyDate=this.$data.applicationList1[i].applyDate.slice(0,10)
        }
      }
    })
    getAllApplication(2,10,1).then(res=>{
      let i=0
      if(res.data.code===-1){
        cleanLocalStorage();
        this.$router.push('/login')
      }else {
        this.$data.applicationList2 = res.data.data
        for(i=0;i<this.$data.applicationList2.length;i++){
          this.$data.applicationList2[i].applyDate=this.$data.applicationList2[i].applyDate.slice(0,10)
        }
      }
    })
    getAllApplication(3,10,1).then(res=>{
      let i=0
      if(res.data.code===-1){
        cleanLocalStorage();
        this.$router.push('/login')
      }else {

        this.$data.applicationList3 = res.data.data
        for(i=0;i<this.$data.applicationList3.length;i++){
          this.$data.applicationList3[i].applyDate=this.$data.applicationList3[i].applyDate.slice(0,10)
        }
      }
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
