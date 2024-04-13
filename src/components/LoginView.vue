<template>
  <div>
    <el-form ref="loginForm" :model="loginForm" :rules="loginFormRules" label-width="100px">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="loginForm.username" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="loginForm.password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {loginInfo} from '@/api/index'
import store from "@/main";


export default {
  name: "LoginView",
  data() {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      loginFormRules: {
        username: [
          {required: true, message: '请输入用户名', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur'}
        ]
      }
    };
  },
  methods: {
    login: function () {
      this.$refs.loginForm.validate(async valid => {
        if (valid) {
          const data = {
            "Username": this.loginForm.username,
            "Password": this.loginForm.password
          };
          const response = await loginInfo(data);
          if (response.data) {
            store.state.isLogin = true;
            this.$router.push('HelloWorld');
          }
        } else {
          console.log('表单验证失败');

          return false;
        }
      });
    }
  }
}
</script>

<style scoped>

</style>