<template>
  <div class="sidebar">
    <el-menu
      class="sidebar-el-menu"
      background-color="#324157"
      text-color="#bfcbd9"
      active-text-color="#20a0ff"
      :collapse="collapse"
      unique-opened
      router
    >
      <template v-for="item in items">
        <!-- 一级菜单 -->
        <template v-if="item.subs">
          <el-sub-menu :index="item.index" :key="item.index">
            <template #title>
              <el-icon><component :is="item.icon"/></el-icon>
              <span>{{ item.title }}</span>
            </template>
            <!-- 二级菜单 -->
            <el-menu-item-group>
              <template v-for="subitem in item.subs">
                <template v-if="subitem.subs">
                  <el-sub-menu :index="subitem.index">
                    <!-- 三级菜单 -->
                    <template #title>{{ subitem.title }}</template>
                    <template v-for="subsitem in subitem.subs">
                      <el-menu-item :index="subsitem.index">{{
                        subsitem.title
                      }}</el-menu-item>
                    </template>
                  </el-sub-menu>
                </template>
                <template v-else>
                  <el-menu-item :index="subitem.index">{{
                    subitem.title
                  }}</el-menu-item>
                </template>
              </template>
            </el-menu-item-group>
          </el-sub-menu>
        </template>
        <template v-else>
          <el-menu-item :index="item.index" :key="item.index">
            <el-icon><component :is="item.icon"/></el-icon>
            <template #title>{{ item.title }}</template>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>
<script>
import {
  HomeFilled,
  Grid,
  Tickets,
  Reading,
  Present,
  Right,
  Select,
  School,
  Sell,
  Share,
} from "@element-plus/icons-vue";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import { computed } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
export default {
  name: "Sidebar",
  setup() {
    const items = [
      {
        icon: HomeFilled,
        index: "/dashboard",
        title: "系统首页",
      },
      {
        icon: Grid,
        index: "/table",
        title: "基础表格",
      },
      {
        icon: Tickets,
        index: "/tabs",
        title: "tab选项卡",
      },
      {
        icon: Reading,
        index: "3",
        title: "表单相关",
        subs: [
          {
            index: "/",
            title: "基本表单",
          },
          {
            index: "/upload",
            title: "文件上传",
          },
          {
            index: "4",
            title: "三级菜单",
            subs: [
              {
                index: "/editor",
                title: "富文本编辑器",
              },
            ],
          },
        ],
      },
      {
        icon: Present,
        index: "/icon",
        title: "自定义图标",
      },
      {
        icon: Right,
        index: "/charts",
        title: "schart图表",
      },

      {
        icon: Select,
        index: "/i18n",
        title: "国际化功能",
      },
      {
        icon: School,
        index: "7",
        title: "错误处理",
        subs: [
          {
            index: "/permission",
            title: "权限测试",
          },
          {
            index: "/404",
            title: "404页面",
          },
        ],
      },
      {
        icon: Sell,
        index: "/donate",
        title: "支持作者",
      },
    ];
    // 折叠业务
    let store = useStore();
    let collapse = computed(() => store.state.collapse);
    // 默认显示的模块
    let route = useRoute();
    let onRoute = computed(() => route.path);
    return {
      items,
      collapse,
      onRoute,
    };
  },
};
</script>
<style scoped lang="scss">
.sidebar {
  display: block;
  position: absolute;
  left: 0;
  top: 70px;
  bottom: 0;
  overflow-y: scroll;
}
.sidebar::-webkit-scrollbar {
  width: 0;
}
.sidebar-el-menu:not(.el-menu--collapse) {
  width: 250px;
}
.sidebar > ul {
  height: 100%;
}
</style>