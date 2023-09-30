<template>
  <div style="height:59px"></div>


</template>

<script>
import {SuccessFilled, Warning} from "@element-plus/icons-vue";
export default {
  name: "message",
  components: {Warning, SuccessFilled},
  data(){
    return {
      messageList:[
        {
          Id:1,
          type:'apply',
          message:'You have a new application of programme XXX from userXXX',
          read:false
        },
        {
          Id:2,
          type:'consult',
          message:'Hello, I majored in XXX in university, which programme should I choose?',
          read:true
        },
        {
          Id:3,
          type:'consult',
          message:'I am confused about the courses in programmeXXX.',
          read:true
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
