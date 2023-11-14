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
              <div><el-input class="form-input" v-model="formData.passportNo" placeholder="please input passport No." ></el-input></div>
            </el-col>
            <el-col :span="12">
              <div>Passport Name</div>
              <div><el-input class="form-input" v-model="formData.passportName" placeholder="please input passport Name" ></el-input></div>
            </el-col>
          </el-row>

          <el-row :gutter="20" style="margin-top: 20px">
            <el-col :span="12">
              <div>Gender</div>
              <div><el-input class="form-input" v-model="formData.gender" placeholder="please input gender" ></el-input></div>
            </el-col>
            <el-col :span="12">
              <div>Country</div>
              <div><el-input class="form-input"  v-model="formData.country" placeholder="please input country" ></el-input></div>
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

              /></div>
            </el-col>
            <el-col :span="12">
              <div>PassType</div>
              <div><el-input class="form-input"  v-model="formData.passType" placeholder="please input passType" ></el-input></div>
            </el-col>
          </el-row>

          <el-row :gutter="20" style="margin-top: 20px">
            <el-col :span="12">
              <div>FinNo</div>
              <div><el-input class="form-input"  v-model="formData.finNo" placeholder="please input FinNo" ></el-input></div>
            </el-col>
            <el-col :span="12">
              <div>PassExpire</div>
              <div><el-date-picker
                  v-model="formData.passExpire"
                  type="date"
                  placeholder="Pick a day"
                  style="margin-top: 6px;width: 300px"
                  size="large"

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
            <div><el-input class="form-input"  v-model="formData.postalCode" placeholder="please input Postal Code" ></el-input></div>
          </el-col>
          <el-col :span="12">
            <div>Qualification Complete Year</div>
            <div><el-input class="form-input"  v-model="formData.qualificationCompleteYear" placeholder="please input Qualification Complete Year" ></el-input></div>
          </el-col>
        </el-row>


        <div style="margin-top:20px">Address</div>
        <div><el-input style="width: 95%;margin-top: 6px;"  v-model="formData.address" placeholder="please input address" type="textarea" ></el-input></div>



        <div style="margin-top:20px">Academic Institution Name</div>
        <div><el-input style="width: 95%;margin-top: 6px;"  v-model="formData.academicInstitutionName" placeholder="please input Academic Institution Name" type="textarea" ></el-input></div>



        <div style="margin-top:20px">Academic Qualification Name</div>
        <div><el-input style="width: 95%;margin-top: 6px;"  v-model="formData.academicQualificationName" placeholder="please input Academic Qualification Name" type="textarea" ></el-input></div>

        <div style="margin-top:20px">Company Name</div>
        <div><el-input style="width: 95%;margin-top: 6px;"  v-model="formData.companyName" placeholder="please input Company Name" type="textarea" ></el-input></div>

        <div style="margin-top:20px">Company Industry</div>
        <div><el-input style="width: 95%;margin-top: 6px;"  v-model="formData.companyIndustry" placeholder="please input Company Industry" type="textarea" ></el-input></div>

        <el-row :gutter="20" style="margin-top: 20px">
          <el-col :span="12">
            <div>Sponsor Type</div>
            <div><el-input class="form-input"  v-model="formData.sponsorType" placeholder="please input Sponsor Type"  ></el-input></div>
          </el-col>
          <el-col :span="12">
            <div>Information Source</div>
            <div><el-input class="form-input"  v-model="formData.infoSource" placeholder="please input Qualification Information Source"  ></el-input></div>
          </el-col>
        </el-row>
      </div>
    </el-card>


    <el-button size="large" type="primary" style=" font-size: 18px;margin-bottom: 30px;width: 200px;margin-top: 20px" @click="handleConfirmApplication">submit</el-button>


  </div>
</template>

<script>
export default {
  name: "update",
  data() {
    return {
      signature: {
        canWidth: 800,//画布宽度--是不会超出父元素的宽度的--设置也不行
        canHeight: 300,
        lineWidth: 3,//画笔粗细
        lineColor: '#000000',//画笔颜色
        bgColor: '#ffffff',//画布背景
        isCrop: false,//是否裁剪
        isClearBgColor: true,//是否清空背景色
        resultImg: '',//生成签名图片-base64
      },
      formData: {
        userId: '123',
        passportNo: '452452',
        passportName: '214',
        gender: 'sdgsg',
        country: 'gdhyjf',
        birth: '2021-12-13',
        passType: 'sdgfdhfg',
        finNo: 'dfghdh',
        passExpire: '1314-04-25',
        address: 'srgg',
        postalCode: 2342,
        qualificationCompleteYear: 2345,

        academicInstitutionName: 'gsdf rgf drfgfdh dthd',
        academicQualificationName: 'dyrdy dr hd d hdfh df',
        companyName: 'sdfgd dfg',
        companyIndustry: 'dfhd df h',
        sponsorType: 1,
        infoSource: 'ertyfh',
      },
      signImg: '',
      programmeId: null,
      userId:null
    }
  },
  beforeMount() {

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
.sig-wrapper{
  width: 90%;
  margin: auto;
}
</style>
