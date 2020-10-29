<template>
  <div class="login-container">
      <div class="login-box">
        <div class="login_avatar">
          <img src="../../assets/user.jpg" alt="">
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "Login"
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
</style>