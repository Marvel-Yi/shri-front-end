<template>
  <div style="height: 59px"></div>
  <div style="width: 40%;margin: auto">
    <el-card shadow="never" style="margin-top: 20px;">

          <el-card shadow="never"
                   v-for="(item,index) in applicationList"
                   style="text-align: left;margin-bottom: 10px;cursor: pointer"
                   @click="openMaterialsPage(item)"
                  >
            <el-row>
              <el-col :span="2">
                <el-icon :size="35" color="rgb(232,155,0)" v-if="item.application.status===0"><WarningFilled></WarningFilled></el-icon>
                <el-icon :size="35" color="rgb(232,155,0)" v-if="item.application.status===1"><WarningFilled></WarningFilled></el-icon>
                <el-icon :size="35" color="lightblue" v-if="item.application.status===2"><QuestionFilled></QuestionFilled></el-icon>
                <el-icon :size="35" color="darkred" v-if="item.application.status===3"><CircleCloseFilled></CircleCloseFilled></el-icon>
                <el-icon :size="35" color="green" v-if="item.application.status===4"><SuccessFilled></SuccessFilled></el-icon>
              </el-col>
              <el-col :span="19">
                <div><span style="font-weight: bold">programme name:</span>  {{ item.application.programmeName }}</div>
                <div><span style="font-weight: bold">apply date:</span> {{item.application.applyDate}}</div>
                <div><span style="font-weight: bold">status: </span>
                  <span v-if="item.application.status===0">files not uploaded</span>
                  <span v-if="item.application.status===1">under review</span>
                  <span v-if="item.application.status===2">pending</span>
                  <span v-if="item.application.status===3">rejected</span>
                  <span v-if="item.application.status===4">admitted</span>
                </div>
              </el-col>
              <el-col :span="3">
                <el-button type="primary" v-if="item.application.status===0||item.application.status===1||item.application.status===2" @click="addMaterials(item.application.programmeId)"> add</el-button>
                <el-button type="primary" v-else  @click="gotoApplicationPage(item.application.userId,item.application.userName,item.application.programmeName)"> check</el-button>
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
          application: {
            id: 1,
            userId: 1,
            userName: 'user01',
            userEmail: '111@qq.com',
            programmeId: 2,
            programmeName: 'programme01 jkhsdfj sjdf lkj s',
            signature: '',
            managementSignature: '',
            programmeInChargeSignature: '',
            status: 3,//0 未上传材料；1 未处理；2 处理中；3 拒绝；4 通过
            applyDate: '2021-01-01'
          },
          docNames:['a.pdf','b.pdf']
        },
        {
          application: {
            id: 2,
            userId: 1,
            userName: 'user02',
            userEmail: '121@qq.com',
            programmeId: 3,
            programmeName: 'programme02 jkhsdfj sjdf lkj s',
            signature: '',
            managementSignature: '',
            programmeInChargeSignature: '',
            status: 0,//0 未上传材料；1 未处理；2 处理中；3 拒绝；4 通过
            applyDate: '2021-01-01'
          },
          docNames: ['aa.pdf','bb.pdf']
        }
      ]
    }
  },
  mounted() {
    getMyApplications(localStorage.getItem('userId')).then(res=>{
      let i=0
      this.$data.applicationList=res.data.data
      for(i=0;i<this.$data.applicationList.length;i++){
        this.$data.applicationList[i].application.applyDate=this.$data.applicationList[i].application.applyDate.slice(0,10)
      }
    })
  },
  methods:{
    gotoApplicationPage(userId,userName,programmeName){
      this.$router.push({path:'/showApplication',query:{userId:userId,userName:userName,programmeName:programmeName}})
    },
    addMaterials(programmeId){
      this.$router.push({path:'/materials',query:{id:programmeId}})
    },
    openMaterialsPage(item){
      //if(item.application.status===0||item.application.status===1||item.application.status===2){
        //打开
        this.$router.push({path:'/viewMyMaterials',query:{file0:item.docNames[0],file1:item.docNames[1],file2:item.docNames[2],status:item.application.status}})
      //}
    }
  }
}
</script>

<style scoped>

</style>
