<template>
  <div style="height: 59px"></div>
  <div class="form-wrapper" style="margin: auto;width: 40%">
    <el-card shadow="never" style="margin-top: 20px;text-align: left">
      <span class="title-prefix-_MYP6HvkiQ"></span><span style="font-size: 18px;font-weight: bold">Basic Information</span>
      <div>
        <div class="form-item" style="width: 95%;margin:auto;padding-top: 20px">

          <el-row  :gutter="20" >
            <el-col :span="12">
              <div>User Name</div>
              <div><el-input class="form-input" v-model="userName" placeholder="please input passport No." disabled></el-input></div>
            </el-col>
            <el-col :span="12">
              <div>Programme Name</div>
              <div><el-input class="form-input" v-model="programmeName" placeholder="please input passport Name" disabled></el-input></div>
            </el-col>
          </el-row>

          <el-row  :gutter="20" style="margin-top: 20px">
            <el-col :span="12">
              <div>Passport No.</div>
              <div><el-input class="form-input" v-model="formData.passportNo" placeholder="please input passport No." disabled></el-input></div>
            </el-col>
            <el-col :span="12">
              <div>Passport Name</div>
              <div><el-input class="form-input" v-model="formData.passportName" placeholder="please input passport Name" disabled></el-input></div>
            </el-col>
          </el-row>

          <el-row :gutter="20" style="margin-top: 20px">
            <el-col :span="12">
              <div>Gender</div>
              <div><el-input class="form-input" v-model="formData.gender" placeholder="please input gender" disabled></el-input></div>
            </el-col>
            <el-col :span="12">
              <div>Country</div>
              <div><el-input class="form-input"  v-model="formData.country" placeholder="please input country" disabled></el-input></div>
            </el-col>
          </el-row>

          <el-row :gutter="20" style="margin-top: 20px">
            <el-col :span="12">
              <div>Birth</div>
              <div><el-date-picker
                  v-model="formData.birth"
                  type="date"
                  placeholder="Pick a day"
                  style="margin-top: 6px;width: 300px"
                  size="large"
                  disabled
              /></div>
            </el-col>
            <el-col :span="12">
              <div>PassType</div>
              <div><el-input class="form-input"  v-model="formData.passType" placeholder="please input passType" disabled></el-input></div>
            </el-col>
          </el-row>

          <el-row :gutter="20" style="margin-top: 20px">
            <el-col :span="12">
              <div>FinNo</div>
              <div><el-input class="form-input"  v-model="formData.finNo" placeholder="please input FinNo" disabled></el-input></div>
            </el-col>
            <el-col :span="12">
              <div>PassExpire</div>
              <div><el-date-picker
                  v-model="formData.passExpire"
                  type="date"
                  placeholder="Pick a day"
                  style="margin-top: 6px;width: 300px"
                  size="large"
                  disabled
              /></div>
            </el-col>
          </el-row>



        </div>
      </div>
    </el-card>

    <el-card shadow="never" style="margin-top: 20px;text-align: left">
      <span class="title-prefix-_MYP6HvkiQ"></span><span style="font-size: 18px;font-weight: bold">Personal Information</span>
      <div class="form-item" style="width: 95%;margin:auto;padding-top: 20px">
        <el-row :gutter="20" style="margin-top: 20px">
          <el-col :span="12">
            <div>Postal Code</div>
            <div><el-input class="form-input"  v-model="formData.postalCode" placeholder="please input Postal Code" disabled></el-input></div>
          </el-col>
          <el-col :span="12">
            <div>Qualification Complete Year</div>
            <div><el-input class="form-input"  v-model="formData.qualificationCompleteYear" placeholder="please input Qualification Complete Year" disabled></el-input></div>
          </el-col>
        </el-row>


        <div style="margin-top:20px">Address</div>
        <div><el-input style="width: 95%;margin-top: 6px;"  v-model="formData.address" placeholder="please input address" type="textarea" disabled></el-input></div>



        <div style="margin-top:20px">Academic Institution Name</div>
        <div><el-input style="width: 95%;margin-top: 6px;"  v-model="formData.academicInstitutionName" placeholder="please input Academic Institution Name" type="textarea" disabled></el-input></div>



        <div style="margin-top:20px">Academic Qualification Name</div>
        <div><el-input style="width: 95%;margin-top: 6px;"  v-model="formData.academicQualificationName" placeholder="please input Academic Qualification Name" type="textarea" disabled></el-input></div>

        <div style="margin-top:20px">Company Name</div>
        <div><el-input style="width: 95%;margin-top: 6px;"  v-model="formData.companyName" placeholder="please input Company Name" type="textarea" disabled></el-input></div>

        <div style="margin-top:20px">Company Industry</div>
        <div><el-input style="width: 95%;margin-top: 6px;"  v-model="formData.companyIndustry" placeholder="please input Company Industry" type="textarea" disabled></el-input></div>

        <el-row :gutter="20" style="margin-top: 20px">
          <el-col :span="12">
            <div>Sponsor Type</div>
            <div><el-input class="form-input"  v-model="formData.sponsorType" placeholder="please input Sponsor Type" disabled></el-input></div>
          </el-col>
          <el-col :span="12">
            <div>Information Source</div>
            <div><el-input class="form-input"  v-model="formData.infoSource" placeholder="please input Qualification Information Source" disabled></el-input></div>
          </el-col>
        </el-row>
      </div>
    </el-card>

    <el-card shadow="never" style="margin-top: 20px;">
      <div style="text-align: left;">
        <span class="title-prefix-_MYP6HvkiQ"></span><span style="font-size: 18px;font-weight: bold">Signature</span>
        <div class="sig-wrapper">
          <div style="margin-top: 10px;margin-bottom: 5px">Please sign here</div>
          <vue-esign style="border: 1px solid #ddd; ;margin: auto" ref="esign" :isClearBgColor=true :quality="0.01"></vue-esign>
          <div style="text-align: right;margin-top: 15px" >
            <el-button @click="handleReset()" type="primary">reset</el-button>

          </div>
        </div>
      </div>
      <el-button size="large" type="primary" style=" font-size: 18px" @click="handleSubmit">submit</el-button>
    </el-card>

  </div>
</template>

<script>
import {submitApplication, submitSignature, update} from "../api/application.js";
import {cleanLocalStorage} from "../js/index.js";

export default {
  name: "confirmApplication",
  data(){
    return {
      appId:-1,
      signImg:'',
      hasFormData:false,
      userId:'',
      userName:'',
      programmeName:'',
      formData:{
        programmeId: -1,
        userId:-1,
        passportNo:'12432342',
        passportName:'efdsfgsah',
        gender:'male',
        country:'aefsag',
        birth:'2002-01-01',
        passType:'sdfsgsfbz',
        finNo:'adwsrgbdgb',
        passExpire:'2025-12-12',
        address:'sdgas egsrg wegfsdg awestfag',
        postalCode:'23423423',
        qualificationCompleteYear:'2022',
        academicInstitutionName:'sdgashbfsdz',
        academicQualificationName:'asdgsgbdfs',
        companyName:'sdgbfhnjhtg',
        companyIndustry:'aSfgfdh',
        sponsorType:'asfdhsajk',
        infoSource:'dghdss',
      }
    }
  },
  beforeMount() {
    this.$data.formData=JSON.parse(localStorage.getItem('applyFormData'))
    this.$data.hasFormData=this.$route.query.hasFormData
    this.$data.programmeName=JSON.parse(localStorage.getItem('course')).name
    this.$data.userName=localStorage.getItem('userName')
  },
  methods:{handleReset(){
      this.$refs.esign.reset()//清空画布内容
      this.lineWidth = 3
      this.lineColor = '#000000'
      this.bgColor = '#ffffff'
      this.isCrop = false
      this.resultImg = ''
    },
    handleSubmit(){
      /**submitApplication(applyInfo).then(res=>{
        if(res.data.code===0){
          this.$message.success('successfully applied!')
        }else if(res.data.code===-1){
          cleanLocalStorage();
          this.$router.push('/login')
        }else{
          this.$message.error('there is something wrong...')
        }
      })**/
      const applyInfo={

        programmeId: this.$data.formData.programmeId,
        userId:this.formData.userId,

        passportNo:this.formData.passportNo,
        passportName:this.formData.passportName,
        gender:this.formData.gender,
        country:this.formData.country,
        birth:this.formData.birth,
        passType:this.formData.passType,
        finNo:this.formData.finNo,
        passExpire:this.formData.passExpire,
        address:this.formData.address,
        postalCode:this.formData.postalCode,
        qualificationCompleteYear:this.formData.qualificationCompleteYear,

        academicInstitutionName:this.formData.academicInstitutionName,
        academicQualificationName:this.formData.academicQualificationName,
        companyName:this.formData.companyName,
        companyIndustry:this.formData.companyIndustry,
        sponsorType:this.formData.sponsorType,
        infoSource:this.formData.infoSource,
      }
      if(this.$data.hasFormData){
        //use update API
        update(applyInfo).then(res=>{
          if(res.data.code===0){
            this.$data.appId=res.data.data.app.id
            this.$message.success('successfully applied!')

            //submit signature
            this.$refs.esign.generate().then(res => {  //使用generate将签名导出为图片
              console.log('图片的base64地址', res)
              console.log(this.$refs.esign)
              this.$data.signImg = res

              const sig={
                programmeId: this.$data.appId,
                signature:this.$data.signImg
              }
              submitSignature(sig).then(res=>{
                if(res.data.code===0){
                  this.$message.success('successfully applied!')
                }else if(res.data.code===-1){
                  cleanLocalStorage()
                  this.$router.push('/login')
                }else {
                  this.$message.error("there's something wrong...")
                }
              })
            }).catch(err => {
              console.log('画布没有签字时', err)
              alert('请先完成签字！') // 画布没有签字时会执行这里 'Not Signned'
            })

          }else if(res.data.code===-1){
            cleanLocalStorage();
            this.$router.push('/login')
          }else{
            this.$message.error('there is something wrong...')
          }
        })
      }else{
        //use submit API
        submitApplication(applyInfo).then(res=>{
          if(res.data.code===0){
            this.$message.success('successfully applied!')
            this.$data.appId=res.data.data.app.id
            //submit signature
            this.$refs.esign.generate().then(res => {  //使用generate将签名导出为图片
              console.log('图片的base64地址', res)
              console.log(this.$refs.esign)
              this.$data.signImg = res

              const sig={
                programmeId: this.$data.appId,
                signature:this.$data.signImg
              }
              submitSignature(sig).then(res=>{
                if(res.data.code===0){
                  this.$message.success('successfully applied!')
                }else if(res.data.code===-1){
                  cleanLocalStorage()
                  this.$router.push('/login')
                }else {
                  this.$message.error("there's something wrong...")
                }
              })
            }).catch(err => {
              console.log('画布没有签字时', err)
              alert('请先完成签字！') // 画布没有签字时会执行这里 'Not Signned'
            })
          }else if(res.data.code===-1){
            cleanLocalStorage();
            this.$router.push('/login')
          }else{
            this.$message.error('there is something wrong...')
          }
        })
      }



    }
  }
}
</script>

<style scoped>
.form-input{
  width: 300px;
  height: 40px;
  margin-top: 6px;
}
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
.sig-wrapper{
  width: 90%;
  margin: auto;
}
</style>
