<template>
  <div>
		<el-container class="home-container">
			<el-header>
        <div>
          <img src="" alt="">
          <span>电商后台管理系统</span>
        </div>
				<el-button type="info" @click="logout">退出</el-button>
			</el-header>
			<el-container>
				<el-aside width="200px">Aside</el-aside>
				<el-main>Main</el-main>
			</el-container>
		</el-container>
  </div>
</template>

<script>
export default {
	name: 'Home',
	methods: {
		logout() {
			window.sessionStorage.clear()
			this.$router.push('/login')
		}
	}
}
</script>

<style lang="less" scoped>
.home-container {
	height: 100vh;
}
.el-header {
  background-color: #ddd;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  padding-left: 0;
  font-size: 20px;
  > div {
    display: flex;
    align-items: center;
    span {
      margin-left: 15px;
    }
  }
}
.el-aside {
	background-color: #eee;
}
.el-main {
	background-color: #aaa;
}
</style>