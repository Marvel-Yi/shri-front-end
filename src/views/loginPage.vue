<template>
<div>
  <div style="height: 130px"></div>
 <img src="https://s1.ax1x.com/2023/09/08/pP6MQY9.png" alt="pP6MQY9.png" border="0" />
  <div style="height: 30px"></div>
  <div style='font: 27px "Comic Sans MS";margin-bottom: 30px'>Log in to your account</div>
  <div>
    <div>
    <el-input class="login-input"
              v-model="this.$data.loginForm.userName"
              placeholder="Please Input Your UserName">
      <template #prefix>
        <el-icon>
          <Avatar/>
        </el-icon>
      </template>
    </el-input>
    </div>
    <div style="margin-top: 20px">
    <el-input class="login-input"
              v-model="this.$data.loginForm.loginPassword"
              show-password
              placeholder="Please Input Your Password">
      <template #prefix>
        <el-icon>
          <Lock/>
        </el-icon>
      </template>
    </el-input>
    </div>
    <div style="margin-top: 30px;">
      <el-button color="#303f9f" style="font: 20px 'Comic Sans MS';width: 350px;height: 50px" @click="handleLogin()">LOG IN</el-button>
    </div>
    <div style="margin-top: 15px;font: 15px 'Comic Sans MS'"><span>Do not have an account yet? </span><span class="hover-link" @click="this.$router.push('/register')">Register now!</span>  </div>
  </div>
</div>
</template>

<script >
import {Avatar, Lock, Message} from '@element-plus/icons-vue'
import {loginUser} from "../api/user.js";
export default {
  name: "loginPage",
  components: {
    Avatar,
    Lock,
    Message
  },
  data(){
    return {
      loginForm:{
        userName:'',
        loginPassword:''
      }
    }
  },
  methods:{
    handleLogin(){
      var that=this
      const loginInfo = {
        userName: this.loginForm.userName,
        password: this.loginForm.loginPassword,
      }
      loginUser(loginInfo).then(res=>{
        console.log(res)
        if(res.data.code===1){
          console.log("login failed")
          that.$message.error("Login failed, please check your email or password")

        }else {
          window.localStorage.setItem('login','true')
          localStorage.setItem('userName',res.data.userName)
          localStorage.setItem('userEmail',res.data.userMail)
          localStorage.setItem('userType', res.data.userType)
          localStorage.setItem('ticket',res.data.msg+';path=/')
          document.cookie='ticket'+"="+res.data.msg+';path=/'
          that.$message.success("welcome back")
          that.$router.push({path: '/home'})
        }
      })
    }
  }
}
</script>

<style scoped>
body{

}
.login-input{
  border-radius: 10px;
  width: 350px;
  height: 60px;
  overflow: hidden;
}
:deep(.el-input__wrapper) {
  border-radius: 10px;

}
.hover-link{
  color: #1e88e5;
}
.hover-link:hover{
  color: #0d47a1;
  cursor: pointer;
}


</style>
