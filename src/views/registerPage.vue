<template>
  <div>
    <div style="height: 130px"></div>
    <img src="https://s1.ax1x.com/2023/09/08/pP6MQY9.png" alt="pP6MQY9.png" border="0" />
    <div style="height: 30px"></div>
    <div style='font: 27px "Comic Sans MS";margin-bottom: 30px'>Create your account</div>
    <div>
      <div style="margin-top: 20px">
        <el-input class="login-input"
                  v-model="this.$data.userName"
                  show-password
                  placeholder="Please Input Your Username">
          <template #prefix>
            <el-icon>
              <Avatar/>
            </el-icon>
          </template>
        </el-input>
      </div>
      <div style="margin-top: 20px">
        <el-input class="login-input"
                  v-model="this.$data.registerEmail"
                  placeholder="Please Input Your Email" >
          <template #prefix>
            <el-icon>
              <Message/>
            </el-icon>
          </template>
        </el-input>
      </div>


      <div style="margin-top: 20px">
        <el-input class="login-input"
                  v-model="this.$data.registerPassword"
                  show-password
                  placeholder="Please Input Your Password">
          <template #prefix>
            <el-icon>
              <Lock/>
            </el-icon>
          </template>
        </el-input>
      </div>
      <div style="margin-top: 20px">
        <el-input class="login-input"
                  v-model="this.$data.confirmPassword"
                  show-password
                  placeholder="Please Confirm Your Password">
          <template #prefix>
            <el-icon>
              <Lock/>
            </el-icon>
          </template>
        </el-input>
      </div>
      <div style="margin-top: 20px;">
        <el-button color="#303f9f" style="font: 20px 'Comic Sans MS';width: 350px;height: 50px" @click="handleRegister">CREATE ACCOUNT</el-button>
      </div>
      <div style="margin-top: 15px;font: 15px 'Comic Sans MS'"><span>Have an account? </span><span class="hover-link" @click="this.$router.push('/login')">Log in</span>  </div>
    </div>
  </div>
</template>

<script >
import { Lock,Message,Avatar } from '@element-plus/icons-vue'
import {register} from "../api/user.js";
export default {
  name: "registerPage",
  components: {
    Avatar,
    Lock,
    Message
  },
  data(){
    return {
      registerEmail:'',
      registerPassword:'',
      confirmPassword:'',
      userName:''
    }
  },
  methods:{
    handleRegister(){
      const registerForm={
        userName:this.$data.userName,
        email:this.$data.registerEmail,
        password:this.$data.registerPassword,
        confirmPassword:this.$data.confirmPassword
      }
      register(registerForm).then(res=>{
        if(res.code===0){
          //todo
        }else{
          //todo
        }
      })
    }
  }
}
</script>

<style scoped>
.login-input{
  border-radius: 10px;
  width: 350px;
  height: 55px;
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
