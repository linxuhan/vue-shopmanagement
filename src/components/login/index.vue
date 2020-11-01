<template>
  <div class="login-container">
      <div class="login-box">
        <div class="login_avatar">
          <img src="../../assets/user.jpg" alt="">
        </div>
        <el-form ref="loginRef" :model="loginForm" :rules="loginRule" class="login_form">
          <el-form-item prop="username">
            <el-input v-model="loginForm.username" prefix-icon="el-icon-user" />
          </el-form-item>
          <el-form-item prop="password">
            <el-input v-model="loginForm.password" type="password" prefix-icon="el-icon-lock" />
          </el-form-item>
          <el-form-item class="btns">
            <el-button type="primary" @click="login">登录</el-button>
            <el-button type="info" @click="resetLoginForm">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      loginRule: {
        username: [
          { required: true, message: "请输入登录名称", trigger: "blur"},
          { min: 3, max: 10, message: "长度在3到10个字符", trigger: "blur"}
        ],
        password: [
          { required: true, message: "请输入登录密码", trigger: "blur"},
          { min: 6, max: 18, message: "长度在6到18个字符", trigger: "blur"}
        ]
      },
      loginForm: {
        username: 'admin',
        password: '123456'
      }
    }
  },
  methods: {
    login() {
      // this.$refs.loginRef.validate(async valid => {
      //   if (!valid) return
      //   await this.$http.post('login', this.loginForm)
      // })

      this.$refs.loginRef.validate(valid => {
        if (!valid) return
        this.$http.post('login', this.loginForm).then((reslove, reject) => {
          const { data: res } = reslove
          console.log(res.data.token);
          if (res.meta.status !== 200) return this.$message.error('登录失败')
          this.$message.success('登录成功')

          // 保存token值
          window.sessionStorage.setItem('token', res.data.token)
          this.$router.push('/home')
        })
      })
    },
    resetLoginForm() {
      this.$refs.loginRef.resetFields()
    }
  }
}
</script>

<style lang="less" scoped>
.login-container {
  height: 100%;
  background-color: #222222;
}

.login-box {
  width: 450px;
  height: 350px;
  background-color: #fff;
  border-radius: 2px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  .login_avatar {
    height: 130px;
    width: 130px;
    border: 1px solid #eee;
    border-radius: 50%;
    padding: 10px;
    box-shadow: 0 0 10px #ddd;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }
}

.login_form {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 10px;
  box-sizing: border-box;
}

.btns {
  display: flex;
  justify-content: flex-end;
}
</style>