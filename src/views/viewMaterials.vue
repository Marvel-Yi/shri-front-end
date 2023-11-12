<template>
  <div>
    <div style="height: 59px"></div>
    <el-button @click="viewFile0">click to view file0</el-button>
  </div>

</template>

<script>
import {getFile} from "../api/files.js";

export default {
  name: "viewMaterials",
  data(){
    return {
      files: {
        file0: 'tang-1-0..pdf',
        file1:'tang-1-0..pdf',
        file2:'tang-1-0..pdf'
      }
    }
  },
  methods:{
    viewFile0(){
      getFile(this.$data.files.file0).then(res=>{
        const blob=new Blob([res.data],{type:"application/pdf"})
        let url=window.URL.createObjectURL(blob)
        window.open(url,"_blank")
      })
    }
  }
}
</script>

<style scoped>

</style>
