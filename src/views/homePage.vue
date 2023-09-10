<template>
  <div style="height: 60px"></div>
  <div style="margin-top: 30px">
    <el-row :gutter="20" style="width: 60%;margin-left: 20%;" >
      <el-col :span="7"><div  style="background-color: white;border-radius: 15px">
        <el-container>
          <el-header style="text-align: left;margin-top: 20px" height="30px"><span class="title-prefix-_MYP6HvkiQ"></span> <span style="font-size: 16px;font-weight: bold">Course Filter</span></el-header>
          <el-main style="margin-top: 0px">
            <div>
              <el-container>
                <el-header style="text-align: left;font-weight: 500" height="20px">
                  Time
                </el-header>
                <el-main style="text-align: left">
                  <div>
                  <el-checkbox v-model="checkBoxList.time.full" label="full time"  /></div>
                  <div>
                    <el-checkbox v-model="checkBoxList.time.part" label="part time" /></div>

                </el-main>
              </el-container>
            </div>
            <div>
              <el-container>
                <el-header style="text-align: left;" height="20px">Type</el-header>
                <el-main style="text-align: left">
                  <div>
                  <el-checkbox v-model="checkBoxList.type.diploma" label="diploma"  /></div>
                  <div>
                    <el-checkbox v-model="checkBoxList.type.certificate" label="certificate" /></div>
                  <div>
                    <el-checkbox v-model="checkBoxList.type.postgraduate" label="postgraduate" /></div>
                </el-main>
              </el-container>
            </div>
          </el-main>
        </el-container>

      </div></el-col>
      <el-col :span="17">
        <div  style="border: 0px;border-radius: 15px;background-color: white;text-align: left;padding: 10px;padding-left: 30px">
          <span style="font-size: 19px;font-weight: bold">Online Courses</span>
        </div>
        <el-card v-for="(item,index) in this.$data.courseList" style="margin-top: 20px;border:0px;border-radius: 15px;cursor: pointer" shadow="hover">
          <el-container>
            <el-header height="10px" style="text-align: left;font-size: 18px;font-weight: bold">{{ item.name }}</el-header>
            <el-main  style="text-align: left"><div style="font-size: 14px;color: gray;margin-bottom: 5px">{{ item.time }} time | {{item.type}}</div>
              <div>{{ item.context }}</div></el-main>
          </el-container>

        </el-card>
      </el-col>

    </el-row>
  </div>
</template>

<script>
export default {
  name: "homePage",
  data(){
    return {
      courseList:[
        {
          id:1,
          name:'Python',
          time:'full',
          type:'certificate',
          context:'Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation.'
        },{
          id:2,
          name:'C++ Programming',
          time:'part',
          type:'postgraduate',
          context:'C++ (/ˈsiː plʌs plʌs/, pronounced "C plus plus" and sometimes abbreviated as CPP) is a high-level, general-purpose programming language created by Danish computer scientist Bjarne Stroustrup.'
        },
        {
          id:1,
          name:'Python',
          time:'full',
          type:'certificate',
          context:'Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation.'
        },{
          id:2,
          name:'C++ Programming',
          time:'part',
          type:'postgraduate',
          context:'C++ (/ˈsiː plʌs plʌs/, pronounced "C plus plus" and sometimes abbreviated as CPP) is a high-level, general-purpose programming language created by Danish computer scientist Bjarne Stroustrup.'
        }
      ],
      checkBoxList: {
        time:{
          full:false,
          part:false
        },
        type:{
          certificate:false,
          diploma:false,
          postgraduate:false
        }
      }
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
