<template>
  <div style="height: 59px"></div>
  <div class="clip-img">
    <div class="course-name">
    <span>{{ courseInfo.name }}</span>
    </div>
    <div style="margin-top: 50px">
      <el-button v-if='!this.$data.hasApplied' color="#2E294E" style="font-size: 22px;width: 180px;height: 50px;font-family:'Comic Sans MS',serif;border-radius: 20px;border: 2px solid white" @click="clickApply()">Apply Now</el-button>
      <el-button v-else color="#2E294E" style="font-size: 22px;width: 180px;height: 50px;font-family:'Comic Sans MS',serif;border-radius: 20px;border: 2px solid white" >Applied!</el-button>
    </div>
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
          <el-button v-if="!this.$data.hasApplied" color="#ffb300"
                     style="font-size: 15px;width: 140px;height: 40px;font-family:'Comic Sans MS',serif;
                     border-radius: 20px;border: 2px solid white;margin-top: 10px;font-weight: bold" @click="clickApply()">Apply Now</el-button>
          <el-button v-else color="#ffb300"
                     style="font-size: 15px;width: 140px;height: 40px;font-family:'Comic Sans MS',serif;
                     border-radius: 20px;border: 2px solid white;margin-top: 10px;font-weight: bold" >Applied!</el-button>
        </el-col>
      </el-row>
    </div>
  </el-affix>
  <div class="content-container" style="width: 45%;margin:auto;margin-top: 40px">
    <div class="course-overview" v-if="tabsStatic.courseOverview">
    <el-row :gutter="20">
      <el-col :span="6">
        <el-statistic title="COMMITMENT" :value="this.$data.courseInfo.commitmentMonths+' Months'" value-style="font-size:30px"> </el-statistic>
        <div>{{this.$data.courseInfo.cpdHours}} training hours</div>
      </el-col>
      <el-col :span="6">
        <el-statistic title="NEXT INTAKE" :value="this.$data.courseInfo.intakeDate" value-style="font-size:30px"></el-statistic>
        <div v-if="this.$data.courseInfo.intakes===11||this.$data.courseInfo.intakes===12||this.$data.courseInfo.intakes===13">{{this.$data.courseInfo.intakes}}th</div>
        <div v-else-if="this.$data.courseInfo.intakes%10===1">{{this.$data.courseInfo.intakes}}st</div>
        <div v-else-if="this.$data.courseInfo.intakes%10===2">{{this.$data.courseInfo.intakes}}nd</div>
        <div v-else-if="this.$data.courseInfo.intakes%10===3">{{this.$data.courseInfo.intakes}}rd</div>
        <div v-else>{{this.$data.courseInfo.intakes}}th</div>
      </el-col>
      <el-col :span="6">
        <el-statistic title="CPD HOURS" :value="this.$data.courseInfo.cpdHours" value-style="font-size:30px"></el-statistic>
        <div>HR-related training hours</div>
      </el-col>
      <el-col :span="6">
        <el-statistic title="PROGRAMME FEE" :value="'$'+this.$data.courseInfo.fee" value-style="font-size:30px"></el-statistic>
        <div>Before GST</div>
      </el-col>
    </el-row>
      <div
          style="margin-top: 80px;
          border: 1px black solid;
          padding: 8px;
          border-radius: 15px;font-family: 'Comic Sans MS',serif;font-size: 20px">{{this.$data.courseInfo.graduateStuCnt}} students have graduated from this programme</div>

      <div style="text-align: left;margin-top: 80px;font-family: Verdana,serif;font-size: 19px">{{this.$data.courseInfo.programmeNotes}}</div>
      <div style="background-color: #E4F2FF;margin-top: 80px;font-family: Verdana,serif">
        <div style="font-size: 25px;font-weight: bold;padding: 10px">Who Should Attend?</div>
        <div style="width: 80%;margin: auto;font-size: 19px">
          {{this.$data.courseInfo.whoShouldAttend}}</div>
      </div>
      <div style="margin-top: 80px">
        <div style="text-align: left;font-size: 40px;font-family: system-ui,serif;font-weight: bold;">Assessment</div>
        <div style="font-size: 19px;margin-top: 30px;">{{this.$data.courseInfo.assessment}}</div>
      </div>

      <div style="margin-top: 80px">
        <div style="text-align: left;font-size: 40px;font-family: system-ui,serif;font-weight: bold;">Delivery Mode</div>

        <div style="font-size: 19px;margin-top: 30px;">
          <img src="https://shri.org.sg/wp-content/uploads/2022/08/F2F.png" style="width: 60px">
          <div style="margin-top: 10px">
            {{this.$data.courseInfo.deliveryMode}}</div></div>
      </div>
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


import {applyProgramme} from "../api/user.js";
import {getCourseInfo} from "../api/course.js";

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
      courseInfo:{},
      hasApplied:false
    }
  },
  mounted(){
    console.log(this.$route.query.courseId)
    this.$data.courseInfo=JSON.parse(localStorage.getItem('course'))
    getCourseInfo(this.$route.query.courseId).then(res=>{
      this.$data.courseInfo=res.data.programme
      this.$data.hasApplied=res.data.hasApplied
    })
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
    },
    clickApply(){
      if(localStorage.getItem('hasFormData')){
        //has form
      }else{
        this.$router.push({path:'/application',query:{programmeId:this.$data.courseInfo.id}})
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
