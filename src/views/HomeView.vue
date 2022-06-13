<template>
  <div class="home">
    <v-header></v-header>
    <v-sidebar></v-sidebar>
    <div class="content-box" :class="{ 'content-collapse': collapse }">
      <v-tags></v-tags>
      <div class="content">
        <router-view v-slot="{ Component }">
          <transition name="move" mode="out-in">
            <keep-alive :include="tagsList">
              <component :is="Component" />
            </keep-alive>
          </transition>
        </router-view>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { useRouter, useRoute } from "vue-router";
import VHeader from "../components/Header.vue";
import VSidebar from "../components/Sidebar.vue";
import VTags from "../components/Tags.vue";
export default {
  name: "HomeView",
  components: {
    VHeader,
    VSidebar,
    VTags
  },
  setup() {
    let route = useRoute(); // 接收参数
    let router = useRouter(); // 路由实例
    console.log(route.params.id);
    console.log(router);
  },
};
</script>
<style lang="scss" scoped>
.home {
  h3 {
    color: blue;
  }
}
</style>
