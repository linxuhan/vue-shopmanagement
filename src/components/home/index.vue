<template>
  <div>
		<el-container class="home-container">
			<el-header>
        <div>
          <img src="../../assets/user.jpg" alt="">
          <span>电商后台管理系统</span>
        </div>
				<el-button type="info" @click="logout">退出</el-button>
			</el-header>
			<el-container>
				<el-aside width="250px">
          <el-menu
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#409eff"
            unique-opened="true"  
          >
            <el-submenu v-for="item in menulist" :key="item.id" :index="item.id + ''">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>{{ item.authName }}</span>
              </template>
              <el-menu-item v-for="subItem in item.children" :key="subItem.id" :index="subItem.id">
                <template slot="title">
                  <i class="el-icon-user"></i>
                  <span>{{ subItem.authName }}</span>
                </template>
              </el-menu-item>
            </el-submenu>
          </el-menu>
        </el-aside>
				<el-main>Main</el-main>
			</el-container>
		</el-container>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      menulist: []
    }
  },
  created() {
    this.getMenuList()
  },
	methods: {
		logout() {
			window.sessionStorage.clear()
			this.$router.push('/login')
    },
    async getMenuList() {
      const { data: res } = await this.$http.get('menus')
      console.log(res);
      if (res.meta.status !== 200) return this.$message.error(res.meta.msg)
      this.menulist = res.data
      console.log(this.menulist);
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
    img {
      width: 50px;
      height: 50px;
    }
    span {
      margin-left: 15px;
    }
  }
}
.el-aside {
	background-color: #545c64;
}
.el-main {
	background-color: #aaa;
}
.el-menu {
  border-right: none;
}
</style>