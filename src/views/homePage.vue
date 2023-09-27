<template>
  <div style="height: 60px"></div>
  <el-button @click="consultVisible=true"  style="position: absolute; bottom: 30px;right: 30px;width: 70px;height: 70px" circle type="primary"><el-icon :size="30"><Message></Message></el-icon></el-button>
  <el-dialog
      v-model="consultVisible"
      title="Submit a Counselling"
      width="30%"
  >
    <div>
      <el-input v-model='consultForm.message' placeholder="Please input" type="textarea" style="width: 90%"></el-input>
    </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="consultVisible = false">Cancel</el-button>
        <el-button type="primary" @click="submitConsult()">
          Confirm
        </el-button>
      </span>
    </template>
  </el-dialog>
  <div style="margin-top: 30px">
    <el-row :gutter="20" style="width: 60%;margin-left: 20%;" >
      <el-col :span="7"><div  style="background-color: white;border-radius: 15px">
        <el-container>
          <el-header style="text-align: left;margin-top: 20px" height="30px"><span class="title-prefix-_MYP6HvkiQ"></span> <span style="font-size: 16px;font-weight: bold">Course Filter</span></el-header>
          <el-main style="margin-top: 0px">
            <div>
              <el-container>
                <el-header style="text-align: left;font-weight: 500" height="20px">
                  Study Mode
                </el-header>
                <el-main style="text-align: left">
                  <div>
                  <el-checkbox v-model="checkBoxList.studyMode.full" label="full time"  @change="modeCodeChange"/></div>
                  <div>
                    <el-checkbox v-model="checkBoxList.studyMode.part" label="part time" @change="modeCodeChange"/></div>

                </el-main>
              </el-container>
            </div>
            <div>
              <el-container>
                <el-header style="text-align: left;" height="20px">Certificate Type</el-header>
                <el-main style="text-align: left">
                  <div>
                  <el-checkbox v-model="checkBoxList.type.diploma" label="diploma" @change="handleTypeChange" /></div>
                  <div>
                    <el-checkbox v-model="checkBoxList.type.certificate" label="certificate" @change="handleTypeChange"/></div>
                  <div>
                    <el-checkbox v-model="checkBoxList.type.postgraduate" label="postgraduate" @change="handleTypeChange"/></div>
                </el-main>
              </el-container>
            </div>
          </el-main>
        </el-container>

      </div></el-col>
      <el-col :span="17">
        <div  style="border: 0px;border-radius: 15px;background-color: white;text-align: left;padding: 10px;padding-left: 30px">
          <span style="font-size: 19px;font-weight: bold">Programmes</span>
        </div>
        <el-card v-for="(item,index) in this.$data.courseList" style="margin-top: 20px;border:0px;border-radius: 15px;cursor: pointer" shadow="hover"
                 @click="handleClickProgramme(item)">
          <el-container>
            <!--<el-header  style="text-align: left;font-size: 16px;font-weight: bold;min-height: 10px">{{ item.name }}</el-header>-->
            <el-main  style="text-align: left">
              <div style="text-align: left;font-size: 16px;font-weight: bold;min-height: 10px;margin-bottom: 10px;">{{ item.name }}</div>
              <div style="font-size: 14px;color: gray;margin-bottom: 5px">{{ item.studyMode }}  | {{item.certificateType}}</div>
              <div>{{ item.programmeNotes }}</div></el-main>
          </el-container>

        </el-card>
      </el-col>

    </el-row>
  </div>
</template>

<script>
import {getCourses} from "../api/course.js";
import {Message} from "@element-plus/icons-vue";
import {submitConsult} from "../api/user.js";


export default {
  name: "homePage",
  components: {Message},
  data(){
    return {
      courseList:[
        {
          id:1,
          name:'Python',
          studyMode:'full-time',
          certificateType:'certificate',
          programmeNotes:'Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation.'
        },{
          id:2,
          name:'C++ Programming',
          studyMode:'part-time',
          certificateType:'postgraduate',
          programmeNotes:'C++ (/ˈsiː plʌs plʌs/, pronounced "C plus plus" and sometimes abbreviated as CPP) is a high-level, general-purpose programming language created by Danish computer scientist Bjarne Stroustrup.'
        },
      ],
      checkBoxList: {
        studyMode:{
          full:false,
          part:false
        },
        type:{
          certificate:false,
          diploma:false,
          postgraduate:false
        },
      },
      typeList:[],
      modeCode:'',
      consultVisible:false,
      consultForm:{
        message:''
      }
    }
  },
  mounted(){
    const courseParams={
      current:1,
      limit:10,
    studyMode:this.$data.modeCode,
    certificateTypes:this.typeList
  }

    getCourses(courseParams).then(res=>{
      this.$data.courseList = res.data.data

    })
  },
  methods:{
    submitConsult(){
      const consultInfo={
        userName:localStorage.getItem('userName'),
        userEmail:localStorage.getItem('userEmail'),
        content:this.$data.consultForm.message
      }
      submitConsult(consultInfo).then(res=>{
        if(res.data.code===-1){
          //redirect to login
        }else{
          this.$message.success('successfully submitted!')
          this.$data.consultVisible=false
        }
      })
      this.$data.consultForm.message=''
    },
    handleTypeChange(){
      this.$data.typeList=[]
      if(this.$data.checkBoxList.type.certificate){
        this.$data.typeList.push('certificate')
      }
      if(this.$data.checkBoxList.type.diploma){
        this.$data.typeList.push('diploma')
      }
      if(this.$data.checkBoxList.type.postgraduate){
        this.$data.typeList.push('postgraduate')
      }
      const courseParams={
        current:1,
        limit:10,
        studyMode:this.$data.modeCode,
        certificateTypes:this.typeList
      }
      getCourses(courseParams).then(res=>{
        if(res.data.code===-1){
          localStorage.removeItem('login')
          localStorage.removeItem('userName')
          this.$router.push('/login')
        }else {
          console.log(res)
          this.$data.courseList = res.data.data
        }
      })
      console.log(this.$data.courseList)
    },
    modeCodeChange(){
      /**
       * if(this.$data.checkBoxList.studyMode.full^this.$data.checkBoxList.studyMode.part){
       *         this.$data.modeCode=0
       *       }else{
       *         if(this.$data.checkBoxList.studyMode.full){
       *           this.$data.modeCode=1
       *         }else {
       *           this.$data.modeCode=2
       *         }
       *       }
       */
      if(!(this.$data.checkBoxList.studyMode.full^this.$data.checkBoxList.studyMode.part)){
        this.$data.modeCode=''
      }else{
        if(this.$data.checkBoxList.studyMode.full){
          this.$data.modeCode='full-time'
        }else {
          this.$data.modeCode='part-time'
        }
      }
      const courseParams={
        current:1,
        limit:10,
        studyMode:this.$data.modeCode,
        certificateTypes:this.typeList
      }
      getCourses(courseParams).then(res=>{
        if(res.data.code===-1){
          localStorage.removeItem('login')
          localStorage.removeItem('userName')
          this.$router.push('/login')
        }else {
          console.log(res)
          this.$data.courseList = res.data.data
        }
      })
      console.log(this.$data.courseList)
    },
    handleClickProgramme(item){
      window.localStorage.setItem('course',JSON.stringify(item))
      this.$router.push({path: '/courseInfo', query: { courseId: item.id } })
    }
  }
}
</script>

<style scoped>
.title-prefix-_MYP6HvkiQ {
  width: 4px;
  height: 14px;
  display: inline-block;
  margin-right: 5px;
  -webkit-border-radius: 100px;
  -moz-border-radius: 100px;
  border-radius: 100px;
  background: #0068FF;
}
</style>
