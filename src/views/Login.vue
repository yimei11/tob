<template>
  <div class="login-wrap">
    <div class="ms-login">
      <div class="ms-title">后台管理系统</div>
      <el-form
        :model="formdata"
        :rules="rules"
        ref="login"
        class="ms-content"
        label-width="0px"
      >
        <el-form-item prop="username">
          <el-input v-model="formdata.username" placeholder="username">
            <template #prepend>
              <el-button>
                <el-icon><user /></el-icon>
              </el-button>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            type="password"
            placeholder="password"
            v-model="formdata.password"
          >
            <template #prepend>
              <el-button>
                <el-icon><lock /></el-icon>
              </el-button>
            </template>
          </el-input>
        </el-form-item>
        <div class="login-btn">
          <el-button type="primary" @click="submitForm()">登录</el-button>
        </div>
        <p class="login-tips">Tips : 用户名和密码随便填。</p>
      </el-form>
    </div>
  </div>
</template>
<script>
import { ref, reactive, onMounted, computed, watch } from "vue";
import { ElMessage } from "element-plus";
import { useRouter,useRoute } from "vue-router";
import { useStore } from "vuex";
export default {
  name: "Login",
  setup() {
    let login = ref(null);
    let router = useRouter();
    let store = useStore();
    let route = useRoute();   // 路由参数问题
    //   data
    let formdata = reactive({
      username: "admin",
      password: "123123",
    });
    let rules = reactive({
      username: [{ required: true, message: "请输入用户名", trigger: "blur" }],
      password: [{ required: true, message: "请输入密码", trigger: "blur" }],
    });
    // methods
    function submitForm() {
      login.value.validate((valid) => {
        // console.log(valid);
        if (valid) {
          ElMessage.success("登录成功");
          // ElMessage({
          //   message: "登录成功",
          //   type: "success",
          //   onClose(){     // 关闭时的回调函数
          //     // 跳转到首页
          //     router.push("/")
          //   }
          // });
          localStorage.setItem("ms_username",formdata.username)
          router.push("/home/"+formdata.username)
        } else {
          ElMessage.error("登录失败");
        }
      });
    }
    // hook

    // computed

    // watch

    return {
      formdata,
      rules,
      login,
      submitForm,
    };
  },
};
</script>
<style scoped lang="scss">
.login-wrap {
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url(../assets/img/login-bg.jpg);
  background-size: 100%;
}
.ms-title {
  width: 100%;
  line-height: 50px;
  text-align: center;
  font-size: 20px;
  color: #fff;
  border-bottom: 1px solid #ddd;
}
.ms-login {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 350px;
  margin: -190px 0 0 -175px;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.3);
  overflow: hidden;
}
.ms-content {
  padding: 30px 30px;
}
.login-btn {
  text-align: center;
}
.login-btn button {
  width: 100%;
  height: 36px;
  margin-bottom: 10px;
}
.login-tips {
  font-size: 12px;
  line-height: 30px;
  color: #fff;
}
</style>