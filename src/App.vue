

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
  <div v-if="$route.meta.showNavi">
  <el-menu
      :default-active="$route.path"
      mode="horizontal"
      router
      style="position: fixed;top: 0;z-index: 9;width: 100%"
  >
    <el-menu-item index="/home" ><div style="margin-right: 10px;margin-left: 10px;font-size: 16px">Courses</div></el-menu-item>
    <el-menu-item index="/courseInfo"><div style="margin-right: 10px;margin-left: 10px;font-size: 16px">Course Info</div></el-menu-item>
    <el-button style="position:absolute;right: 30px;top: 15px" @click="this.$router.push('/login')">login</el-button>
    <el-button style="position:absolute;right: 120px;top: 15px" @click="this.$router.push('/register')">register</el-button>

  </el-menu>
  </div>
  <div>
  <router-view></router-view>
  </div>
</template>

<style scoped>

</style>
<script >
import imgLOGO from './assets/shriLOGO.png'
export default {
  name: 'App',
  components: {

  }
}
</script>
