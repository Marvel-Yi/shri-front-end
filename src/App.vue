

<template>
  <!--<div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />-->
  <div v-if="$route.meta.showNavi" :key="$route.fullPath">
  <el-menu
      :default-active="$route.path"
      mode="horizontal"
      router
      style="position: fixed;top: 0;z-index: 9;width: 100%"
  >

      <el-menu-item index="/home" ><div style="margin-right: 10px;margin-left: 10px;font-size: 16px">Courses</div></el-menu-item>
      <el-menu-item index="/myApplications" v-if="this.$data.userType==='0'"><div style="margin-right: 10px;margin-left: 10px;font-size: 16px">my Applications</div></el-menu-item>
      <el-menu-item index="/message" v-if="this.$data.userType==='1'"><div style="margin-right: 10px;margin-left: 10px;font-size: 16px">Messages</div></el-menu-item>
      <el-menu-item index="/allApplications" v-if="this.$data.userType==='1'"><div style="margin-right: 10px;margin-left: 10px;font-size: 16px">Applications</div></el-menu-item>





    <div v-if="!this.$data.login">
    <el-button style="position:absolute;right: 30px;top: 15px" @click="this.$router.push('/login')">login</el-button>
    <el-button style="position:absolute;right: 120px;top: 15px" @click="this.$router.push('/register')">register</el-button>
    </div>
    <div v-if="this.$data.login">
      <div style="position:absolute;right:130px;top:20px;">Hello, {{ userName }}</div>
      <el-button style="position:absolute;right: 30px;top: 15px" @click="handleLogout()">logout</el-button>
    </div>

  </el-menu>
  </div>
  <div>
  <router-view></router-view>
  </div>
</template>

<style scoped>

</style>
<script >

export default {
  name: 'App',
  components: {

  },
  data(){
    return{
      login:'',
      userName:'',
      userType:null
    }
  },
  mounted(){
    this.$data.login=localStorage.getItem('login')
    this.$data.userName=localStorage.getItem('userName')
    this.$data.userType=localStorage.getItem('userType')
    console.log('login'+this.$data.login)
  },
  updated() {
    this.$data.login=localStorage.getItem('login')
    this.$data.userName=localStorage.getItem('userName')
    this.$data.userType=localStorage.getItem('userType')
  },
  methods:{
    handleLogout(){
      //this.$router.push('/login')
      window.localStorage.removeItem('userName');
      window.localStorage.removeItem('login')
      window.localStorage.removeItem('userEmail')
      window.localStorage.removeItem('userType')
      window.localStorage.removeItem('hasFormDate')
      window.localStorage.removeItem('ticket')
      window.localStorage.removeItem('userId')
      this.$data.login=''
      this.$data.userName=''
      console.log('logout')
      this.$forceUpdate()
    },

  }
}
</script>
