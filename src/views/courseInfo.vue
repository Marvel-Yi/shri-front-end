<template>
  <div style="height: 59px"></div>
  <div class="clip-img">
    <div class="course-name">
    <span>{{ courseName }}</span>
    </div>
    <div style="margin-top: 50px">
      <el-button color="#2E294E" style="font-size: 22px;width: 180px;height: 50px;font-family:'Comic Sans MS',serif;border-radius: 20px;border: 2px solid white">Apply Now</el-button></div>
  </div>
  <el-affix :offset="59">
    <div class="vertical-bar" style="background-color: #2E294E;height: 60px;width: 100%">
      <el-row :gutter="15" style="width: 99%">
        <el-col :span="3" >
          <div style="margin-top: 15px"><div class="tab" @click="handleTabClick('courseOverview')">Course Overview</div></div>
          <div v-if="tabsStatic.courseOverview"
              style="width: 70%;height: 5px;background-color: #ffb300;margin-top: 13px;margin-left:auto;margin-right: auto;"></div>
        </el-col>
        <el-col :span="3">
          <div style="margin-top: 15px"><div class="tab " @click="handleTabClick('Admission')">Admission Requirements</div></div>
          <div v-if="tabsStatic.Admission"
               style="width: 70%;height: 5px;background-color: #ffb300;margin-top: 13px;margin-left:auto;margin-right: auto;"></div>
        </el-col>
        <el-col :span="3">
          <div style="margin-top: 15px"><div class="tab" @click="handleTabClick('Fees')">Fees</div></div>
          <div v-if="tabsStatic.Fees"
               style="width: 70%;height: 5px;background-color: #ffb300;margin-top: 13px;margin-left:auto;margin-right: auto;"></div>
        </el-col>
        <el-col :span="3">
          <div style="margin-top: 15px"><div class="tab" @click="handleTabClick('Fundings')">Fundings</div></div>
          <div v-if="tabsStatic.Fundings"
               style="width: 70%;height: 5px;background-color: #ffb300;margin-top: 13px;margin-left:auto;margin-right: auto;"></div>
        </el-col>
        <el-col :span="3">
          <div style="margin-top: 15px"><div class="tab" @click="handleTabClick('FAQ')">FAQ</div></div>
          <div v-if="tabsStatic.FAQ"
               style="width: 70%;height: 5px;background-color: #ffb300;margin-top: 13px;margin-left:auto;margin-right: auto;"></div>
        </el-col>
        <el-col :span="6"></el-col>
        <el-col :span="3">
          <el-button color="#ffb300"
                     style="font-size: 15px;width: 140px;height: 40px;font-family:'Comic Sans MS',serif;
                     border-radius: 20px;border: 2px solid white;margin-top: 10px;font-weight: bold">Apply Now</el-button>
        </el-col>
      </el-row>
    </div>
  </el-affix>
  <div class="content-container">
    <div class="course-overview" v-if="tabsStatic.courseOverview">
    <el-row :gutter="20" style="width: 50%;margin:auto;margin-top: 40px">
      <el-col :span="6"> <el-statistic title="COMMITMENT" value="3 Months" value-style="font-size:30px"></el-statistic></el-col>
      <el-col :span="6"> <el-statistic title="NEXT INTAKE" :value="tabsStatic.Fundings" value-style="font-size:30px"></el-statistic></el-col>
      <el-col :span="6"> <el-statistic title="CPD HOURS" value="54 Hours" value-style="font-size:30px"></el-statistic></el-col>
      <el-col :span="6"> <el-statistic title="PROGRAMME FEE" value="$1,600" value-style="font-size:30px"></el-statistic></el-col>
    </el-row>
    </div>
    <div v-if="tabsStatic.Admission">
      Admission
    </div>
    <div v-if="tabsStatic.Fees">
      Fees
    </div>
    <div v-if="tabsStatic.Fundings">
      Fundings
    </div>
    <div v-if="tabsStatic.FAQ">
      FAQ
    </div>
  </div>
</template>

<script>
import {checkCookieValid} from "../api/user.js";

export default {
  name: "courseInfo",
  data(){
    return {
      activeName:'first',
      courseName:'CPP Programming and Software Designing',
      tabsStatic:{
        courseOverview:true,
        Admission:false,
        Fees:false,
        Fundings:false,
        FAQ:false
      },
      courseInfo:{}
    }
  },
  mounted(){
    checkCookieValid().then(res=>{
      if(res.data.code===0){//invalid
        window.localStorage.setItem('login','false')
        this.$router.push('/login')
      }
    })
    console.log(this.$route.query.courseId)
    this.$data.courseInfo=JSON.parse(localStorage.getItem('course'))
  },
  /**
   *
   * beforeRouteEnter(to, from, next) {
   *     // change background color
   *     document.querySelector('body').setAttribute('style', 'background-color:white')
   *     next()
   *   },
   *   beforeRouteLeave(to, from, next) {
   *     // restore background color
   *     document.querySelector('body').setAttribute('style', 'background-color:#f0f0ed')
   *     next()
   *   },
   */

  methods:{
    handleTabClick(tab){

      if(tab==='courseOverview'){
        this.$data.tabsStatic.courseOverview=true;
        this.$data.tabsStatic.Admission=false;
        this.$data.tabsStatic.Fees=false;
        this.$data.tabsStatic.Fundings=false;
        this.$data.tabsStatic.FAQ=false;

      }else if(tab==='Admission'){
        this.$data.tabsStatic.courseOverview=false;
        this.$data.tabsStatic.Admission=true;
        this.$data.tabsStatic.Fees=false;
        this.$data.tabsStatic.Fundings=false;
        this.$data.tabsStatic.FAQ=false;
      }else if(tab==='Fees'){
        this.$data.tabsStatic.courseOverview=false;
        this.$data.tabsStatic.Admission=false;
        this.$data.tabsStatic.Fees=true;
        this.$data.tabsStatic.Fundings=false;
        this.$data.tabsStatic.FAQ=false;
      }else if(tab==='Fundings'){
        this.$data.tabsStatic.courseOverview=false;
        this.$data.tabsStatic.Admission=false;
        this.$data.tabsStatic.Fees=false;
        this.$data.tabsStatic.Fundings=true;
        this.$data.tabsStatic.FAQ=false;
      }else{
        this.$data.tabsStatic.courseOverview=false;
        this.$data.tabsStatic.Admission=false;
        this.$data.tabsStatic.Fees=false;
        this.$data.tabsStatic.Fundings=false;
        this.$data.tabsStatic.FAQ=true;
      }
    }
  },
}
</script>

<style scoped>
@import "../css/courseInfo.css";
.course-name{
  color: white;
  font-family:'Comic Sans MS',serif ;
  font-weight: bold;
  font-size: 50px;
  padding-top:120px;
}
.tab{
  color: white;font-family: 'Comic Sans MS',serif;font-size: 18px
}
.tab:hover{
  cursor: pointer;
  color: #ffb300;
}
</style>
