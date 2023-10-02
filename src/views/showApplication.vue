<template>
  <div style="height: 59px"></div>
  <div class="form-wrapper" style="margin: auto;width: 40%">
    <el-card shadow="never" style="margin-top: 20px;text-align: left">
      <span class="title-prefix-_MYP6HvkiQ"></span><span style="font-size: 18px;font-weight: bold">Basic Information</span>
      <div>
        <div class="form-item" style="width: 95%;margin:auto;padding-top: 20px">

          <el-row  :gutter="20" >
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

  </div>
</template>

<script>
import {getApplicationInfo} from "../api/application.js";

export default {
  name: "showApplication",
  data(){
    return {
      formData:{
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
  created() {
    //getApplicationInfo(this.$route.query.id)
    console.log(this.$route.query.id)
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
.form-input{
  width: 300px;
  height: 40px;
  margin-top: 6px;
}
</style>
