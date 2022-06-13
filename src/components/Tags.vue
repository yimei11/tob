<template>
  <div class="tags" v-if="showTags">
    <ul>
      <li
        class="tags-li"
        v-for="(item, index) in tagsList"
        :class="{ active: isActive(item.path) }"
        :key="index"
      >
        <router-link :to="item.path" class="tags-li-title">{{
          item.title
        }}</router-link>
        <span class="tags-li-icon" @click="closeTags(index)">
          <el-icon><close/></el-icon>
        </span>
      </li>
    </ul>
  </div>
</template>
<script>
import { useStore } from "vuex";
import { computed,getCurrentInstance } from "vue";
import { onBeforeRouteUpdate, useRoute, useRouter } from "vue-router";
export default {
  name: "tags",
  setup() {
    let instance = getCurrentInstance();
    console.log(instance);
    const route = useRoute();
    const router = useRouter();
    const isActive = (path) => {
      return path === route.fullPath;
    };
    let store = useStore();
    let tagsList = computed(() => store.state.tagsList);
    let showTags = computed(() => tagsList.value.length > 0);
    let setTag = function (route) {
      // 判断元素是否存在
      const isExist = tagsList.value.some((item) => {
        return item.path === route.fullPath;
      });
      if (isExist) {
        // 存在x
      } else {
        store.commit("setTagsItem", {
          name: route.name,
          title: route.meta.title,
          path: route.fullPath,
        });
      }
    };
    // 路由守卫
    onBeforeRouteUpdate((to, from) => {
      console.log(from);
      console.log(to);
      setTag(to);
    });
    function closeTags(index){
        console.log(index);
        store.commit("delTagsItem",{index})
    }
    return {
      showTags,
      tagsList,
      isActive,
      closeTags
    };
  },
};
</script>
<style scoped>
.tags {
  position: relative;
  height: 30px;
  overflow: hidden;
  background: #fff;
  padding-right: 120px;
  box-shadow: 0 5px 10px #ddd;
}

.tags ul {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
}

.tags-li {
  float: left;
  margin: 3px 5px 2px 3px;
  border-radius: 3px;
  font-size: 12px;
  overflow: hidden;
  cursor: pointer;
  height: 23px;
  line-height: 23px;
  border: 1px solid #e9eaec;
  background: #fff;
  padding: 0 5px 0 12px;
  vertical-align: middle;
  color: #666;
  -webkit-transition: all 0.3s ease-in;
  -moz-transition: all 0.3s ease-in;
  transition: all 0.3s ease-in;
}

.tags-li:not(.active):hover {
  background: #f8f8f8;
}

.tags-li.active {
  color: #fff;
  background:#409eff;
}

.tags-li-title {
  float: left;
  max-width: 80px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-right: 5px;
  color: #666;
}

.tags-li.active .tags-li-title {
  color: #fff;
}

.tags-close-box {
  position: absolute;
  right: 0;
  top: 0;
  box-sizing: border-box;
  padding-top: 1px;
  text-align: center;
  width: 110px;
  height: 30px;
  background: #fff;
  box-shadow: -3px 0 15px 3px rgba(0, 0, 0, 0.1);
  z-index: 10;
}
</style>