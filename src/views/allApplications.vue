<template>
  <div style="height: 59px"></div>
  <div>
    <el-card v-for="(item,index) in applicationList">

    </el-card>
  </div>
</template>

<script>
export default {
  name: "allApplications",
  data(){
    return {
      applicationList:{

      }
    }
  }
}
</script>

<style scoped>

</style>
