<template>
  <div style="height:59px"></div>
  <div style="width: 50%;margin: auto">
    <el-card shadow="never" style="margin-top: 20px;">
      <el-tabs v-model="activeName" class="demo-tabs" @tab-click="" style="background-color: white" tab-position="left">
        <el-tab-pane label="FILES NOT UPLOADED" name="first">
          <el-card shadow="never"
                   v-for="(item,index) in applicationList0"
                   style="text-align: left;margin-bottom: 10px;cursor: pointer"
                   @click="gotoApplicationPage(item.application.userId,item.application.userName,item.application.programmeName)">
            <el-row>
              <el-col :span="2">
                <el-icon :size="35" color="rgb(232,155,0)"><WarningFilled></WarningFilled></el-icon>
              </el-col>
              <el-col :span="22">
                <div><span style="font-weight: bold">user:</span> {{ item.application.userName }}({{item.application.userEmail}})</div>
                <div><span style="font-weight: bold">programme name:</span>  {{ item.application.programmeName }}</div>
                <div><span style="font-weight: bold">apply date:</span> {{item.application.applyDate}}</div>
              </el-col>
            </el-row>

          </el-card>
        </el-tab-pane>
        <el-tab-pane label="UNDER REVIEW" name="second" >
          <el-card shadow="never"
                   v-for="(item,index) in applicationList1"
                   style="text-align: left;margin-bottom: 10px;cursor: pointer"
                   @click="gotoApplicationPage(item.application.userId,item.application.userName,item.application.programmeName)">
            <el-row>
              <el-col :span="2">
                <el-icon :size="35" color="rgb(232,155,0)"><WarningFilled></WarningFilled></el-icon>
              </el-col>
              <el-col :span="19">
                <div><span style="font-weight: bold">user:</span> {{ item.application.userName }}({{item.application.userEmail}})</div>
                <div><span style="font-weight: bold">programme name:</span>  {{ item.application.programmeName }}</div>
                <div><span style="font-weight: bold">apply date:</span> {{item.application.applyDate}}</div>
              </el-col>
              <el-col :span="3">
                <el-button v-on:click.stop="viewFiles(item.docNames,1,item.application.hasDecisionSent,item.application.id)">view files</el-button>
              </el-col>
            </el-row>

          </el-card>
        </el-tab-pane>

        <el-tab-pane label="PENDING" name="third" style="text-align: center;">
          <el-card shadow="never" v-for="(item,index) in applicationList2"
                   style="text-align: left;margin-bottom: 10px;cursor: pointer"
                   @click="gotoApplicationPage(item.application.userId,item.application.userName,item.application.programmeName)">
            <el-row>
              <el-col :span="2">
                <el-icon :size="35" color="lightblue"><QuestionFilled></QuestionFilled></el-icon>
              </el-col>
              <el-col :span="19">
                <div><span style="font-weight: bold">user:</span> {{ item.application.userName }}({{item.application.userEmail}})</div>
                <div><span style="font-weight: bold">programme name:</span>  {{ item.application.programmeName }}</div>
                <div><span style="font-weight: bold">apply date:</span> {{item.application.applyDate}}</div>
              </el-col>
              <el-col :span="3">
                <el-button v-on:click.stop="viewFiles(item.docNames,2,item.application.hasDecisionSent,item.application.id)">view files</el-button>
              </el-col>
            </el-row>

          </el-card>
        </el-tab-pane>

        <el-tab-pane label="REJECTED" name="forth">
          <el-card shadow="never" v-for="(item,index) in applicationList3"
                   style="text-align: left;margin-bottom: 10px;cursor: pointer"
                   @click="gotoApplicationPage(item.application.userId,item.application.userName,item.application.programmeName)">
            <el-row>
              <el-col :span="2">
                <el-icon :size="35" color="darkred"><CircleCloseFilled></CircleCloseFilled></el-icon>
              </el-col>
              <el-col :span="19">
                <div><span style="font-weight: bold">user:</span> {{ item.application.userName }}({{item.application.userEmail}})</div>
                <div><span style="font-weight: bold">programme name:</span>  {{ item.application.programmeName }}</div>
                <div><span style="font-weight: bold">apply date:</span> {{item.application.applyDate}}</div>
              </el-col>
              <el-col :span="3">
                <el-button v-on:click.stop="viewFiles(item.docNames,3,item.application.hasDecisionSent,item.application.id)">view files</el-button>
              </el-col>
            </el-row>

          </el-card>
        </el-tab-pane>

        <el-tab-pane label="ADMITTED" name="fifth">
          <el-card shadow="never" v-for="(item,index) in applicationList4"
                   style="text-align: left;margin-bottom: 10px;cursor: pointer"
                   @click="gotoApplicationPage(item.application.userId,item.application.userName,item.application.programmeName)">
            <el-row>
              <el-col :span="2">
                <el-icon :size="35" color="green"><SuccessFilled></SuccessFilled></el-icon>
              </el-col>
              <el-col :span="19"><div><span style="font-weight: bold">user:</span> {{ item.application.userName }}({{item.application.userEmail}})</div>
                <div><span style="font-weight: bold">programme name:</span>  {{ item.application.programmeName }}</div>
                <div><span style="font-weight: bold">apply date:</span> {{item.application.applyDate}}</div></el-col>
              <el-col :span="3">
                <el-button v-on:click.stop="viewFiles(item.docNames,4,item.application.hasDecisionSent,item.application.id)">view files</el-button>
              </el-col>
            </el-row>

          </el-card>
        </el-tab-pane>

        <el-tab-pane label="CONFIRMED" name="sixth">
          <el-card shadow="never" v-for="(item,index) in applicationList5"
                   style="text-align: left;margin-bottom: 10px;cursor: pointer"
                   @click="gotoApplicationPage(item.application.userId,item.application.userName,item.application.programmeName)">
            <el-row>
              <el-col :span="2">
                <el-icon :size="35" color="green"><SuccessFilled></SuccessFilled></el-icon>
              </el-col>
              <el-col :span="19"><div><span style="font-weight: bold">user:</span> {{ item.application.userName }}({{item.application.userEmail}})</div>
                <div><span style="font-weight: bold">programme name:</span>  {{ item.application.programmeName }}</div>
                <div><span style="font-weight: bold">apply date:</span> {{item.application.applyDate}}</div></el-col>
              <el-col :span="3">
                <el-button v-on:click.stop="viewFiles(item.docNames,5,item.application.hasDecisionSent,item.application.id)">view files</el-button>
              </el-col>
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
      applicationList0:[{application:{
        id:1,
        userId:1,
        userName:'user01',
        userEmail:'111@qq.com',
        programmeId:2,
        programmeName:'programme01 jkhsdfj sjdf lkjdf  s',
        signature:'',
        managementSignature:'',
        programmeInChargeSignature:'',
        status:0,//0 缺文件；1 待处理；2 处理中；3 拒绝；4 通过；5 确认
        applyDate:'2021-01-01',
          hasDecisionSent:0
      },
        docNames:['0-tang-18.pdf','1-tang-18.pdf','2-tang-18.pdf']
      }],
      applicationList1:[{
        application: {
          id: 1,
          userId: 1,
          userName: 'user01',
          userEmail: '111@qq.com',
          programmeId: 2,
          programmeName: 'programme01sf  edfsdg sdgsd',
          signature: '',
          managementSignature: '',
          programmeInChargeSignature: '',
          status: 1,//0 缺文件；1 待处理；2 处理中；3 拒绝；4 通过；5 确认
          applyDate: '2021-01-01',
          hasDecisionSent:0
        },
        docNames:['0-tang-18.pdf','1-tang-18.pdf','2-tang-18.pdf']
      }],
      applicationList2:[{
        application: {
          id: 1,
          userId: 1,
          userName: 'user01',
          userEmail: '111@qq.com',
          programmeId: 2,
          programmeName: 'programme01 dhdgfh df hs',
          signature: '',
          managementSignature: '',
          programmeInChargeSignature: '',
          status: 2,//0 缺文件；1 待处理；2 处理中；3 拒绝；4 通过；5 确认
          applyDate: '2021-01-01',
          hasDecisionSent:0
        },
        docNames:['0-tang-18.pdf','1-tang-18.pdf','2-tang-18.pdf']
      }
      ],
      applicationList3:[{
        application: {
          id: 1,
          userId: 1,
          userName: 'user01',
          userEmail: '111@qq.com',
          programmeId: 2,
          programmeName: 'programme01 dsfgd sfghdfsh ',
          signature: '',
          managementSignature: '',
          programmeInChargeSignature: '',
          status: 3,//0 缺文件；1 待处理；2 处理中；3 拒绝；4 通过；5 确认
          applyDate: '2021-01-01',
          hasDecisionSent:0
        },
        docNames:['0-tang-18.pdf','1-tang-18.pdf','2-tang-18.pdf']
      }],
      applicationList4:[{
        application: {
          id: 1,
          userId: 1,
          userName: 'user01',
          userEmail: '111@qq.com',
          programmeId: 2,
          programmeName: 'programme01 dsfgd sfghdfsh ',
          signature: '',
          managementSignature: '',
          programmeInChargeSignature: '',
          status: 4,//0 缺文件；1 待处理；2 处理中；3 拒绝；4 通过；5 确认//0 未处理；1 处理中；2 拒绝；3 通过
          applyDate: '2021-01-01',
          hasDecisionSent:1
        },
        docNames:['0-tang-18.pdf','1-tang-18.pdf','2-tang-18.pdf']
      }],
      applicationList5:[{
        application: {
          id: 1,
          userId: 1,
          userName: 'user05',
          userEmail: '555@qq.com',
          programmeId: 2,
          programmeName: 'programme01 dsfgd sfghdfsh ',
          signature: '',
          managementSignature: '',
          programmeInChargeSignature: '',
          status: 5,//0 缺文件；1 待处理；2 处理中；3 拒绝；4 通过；5 确认
          applyDate: '2021-01-01',
          hasDecisionSent:1
        },
        docNames:['0-tang-18.pdf','1-tang-18.pdf','2-tang-18.pdf']
      }]
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
    getAllApplication(4,10,1).then(res=>{
      let i=0
      if(res.data.code===-1){
        cleanLocalStorage();
        this.$router.push('/login')
      }else {

        this.$data.applicationList4 = res.data.data
        for(i=0;i<this.$data.applicationList4.length;i++){
          this.$data.applicationList4[i].applyDate=this.$data.applicationList4[i].applyDate.slice(0,10)
        }
      }
    })
  },
  methods:{
    gotoApplicationPage(userId,userName,programmeName){
      this.$router.push({path:'/showApplication',query:{userId:userId,userName:userName,programmeName:programmeName}})
    },
    viewFiles(docNames,status,decisionSent,appId){
      console.log(docNames)
      this.$router.push({path:'/viewMaterials',query:{file0:docNames[0],file1:docNames[1],file2:docNames[2],status:status,decisionSent:decisionSent,appId:appId}})
    }

  }
}
</script>

<style scoped>
::v-deep .el-tabs--left .el-tabs__item.is-left, .el-tabs--right .el-tabs__item.is-left {
  justify-content: left;
}

</style>
