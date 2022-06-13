<template>
  <div class="header">
    <!-- 折叠按钮 -->
    <div class="collapse-btn" @click="collapseChage">
      <!-- <i v-if="!collapse" class="el-icon-s-fold"></i>
      <i v-else class="el-icon-s-unfold"></i> -->
      <el-icon v-if="!collapse"><fold /></el-icon>
      <el-icon v-else><expand /></el-icon>
    </div>
    <div class="logo">后台管理系统</div>
    <div class="header-right">
      <div class="header-user-con">
        <!-- 全屏 -->
        <div class="btn-fullscreen" @click="fullsccreen_fn">
          <el-tooltip :content='isFullScreen?"取消全屏":"全屏"' placement="bottom">
            <el-icon><rank /></el-icon>
          </el-tooltip>
        </div>
        <!-- 消息中心 -->
        <div class="btn-bell">
          <el-tooltip
            effect="dark"
            :content="message ? `有${message}条未读消息` : `消息中心`"
            placement="bottom"
          >
            <router-link to="/tabs">
              <!-- <i class="el-icon-bell"></i> -->
              <el-icon class="el-icon-bell"><bell /></el-icon>
            </router-link>
          </el-tooltip>
          <span class="btn-bell-badge" v-if="message"></span>
        </div>
        <!-- 用户头像 -->
        <div class="user-avator">
          <img src="../assets/img/img.jpg" />
        </div>
        <!-- 用户名下拉菜单 -->
        <el-dropdown class="user-name" trigger="click" @command="handleCommand">
          <span class="el-dropdown-link">
            {{ username }}
            <!-- <i class="el-icon-caret-bottom"></i> -->
            <el-icon><caret-bottom /></el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <a href="https://github.com/lin-xin/vue-manage-system"
                target="_blank">
                <el-dropdown-item>项目仓库</el-dropdown-item>
              </a>
              <el-dropdown-item command="user">个人中心</el-dropdown-item>
              <el-dropdown-item divided command="loginout"
                >退出登录</el-dropdown-item
              >
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>
<script>
import { ref,computed, onMounted } from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";
import useFullscreen from '../utils/useFullScreen.js';
export default {
  name: "Header",
  setup() {
    //   data
    let message = 2;
    // vuex
    let store = useStore();
    let collapse = computed(() => store.state.collapse);
    //   methods
    function collapseChage() {
      //   修改store中的状态
      store.commit("handleCollapse", !collapse.value);
    }
    //   全屏
    let isFullScreen = ref(false);
    function fullsccreen_fn() {
        useFullscreen(isFullScreen)
    }
    // 点击用户事件
    let username = localStorage.getItem("ms_username");
    let router = useRouter();
    function handleCommand(command){
        // console.log(command);
        if(command == 'loginout'){
            router.push('/login');
            localStorage.removeItem("ms_username")
        }else if(command == "user"){
            router.push("/user")
        }
    }
    //   computed

    return {
      collapse,
      message,
      isFullScreen,
      username,
      collapseChage,
      fullsccreen_fn,
      handleCommand
    };
  },
};
</script>
<style scoped lang="scss">
.header {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 70px;
  font-size: 22px;
  color: #fff;
  overflow: hidden;
}
.collapse-btn {
  float: left;
  padding: 0 21px;
  cursor: pointer;
  line-height: 74px;
}
.header .logo {
  float: left;
  width: 250px;
  line-height: 70px;
}
.header-right {
  float: right;
  padding-right: 50px;
}
.header-user-con {
  display: flex;
  height: 70px;
  align-items: center;
}
.btn-fullscreen {
  transform: rotate(45deg);
  margin-right: 5px;
  font-size: 24px;
  margin-top: 4px;
}
.btn-bell,
.btn-fullscreen {
  position: relative;
  width: 30px;
  height: 30px;
  text-align: center;
  border-radius: 15px;
  cursor: pointer;
}
.btn-bell-badge {
  position: absolute;
  right: 0;
  top: -2px;
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background: #f56c6c;
  color: #fff;
}
.btn-bell .el-icon-bell {
  color: #fff;
  margin-top: 4px;
}
.user-name {
  margin-left: 10px;
}
.user-avator {
  margin-left: 20px;
}
.user-avator img {
  display: block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.el-dropdown-link {
  color: #fff;
  cursor: pointer;
}
.el-dropdown-menu__item {
  text-align: center;
}
</style>