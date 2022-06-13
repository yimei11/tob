import { createStore } from "vuex";

export default createStore({
  state: {
    collapse:false,
    tagsList:[]
  },
  getters: {},
  mutations: {
    handleCollapse(state,payload){
      // console.log(state);
      // console.log(payload);
      state.collapse = payload
    },
    // 添加 tag 
    setTagsItem(state,payload){
      console.log(state);
      console.log(payload);
      state.tagsList.push(payload)
    },
    // 删除 tag 
    delTagsItem(state,payload){
      state.tagsList.splice(payload.index,1)
    }
  },
  actions: {},
  modules: {},
});
