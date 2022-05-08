const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  pluginOptions:{
    "style-resources-loader":{
      cssProcessor:"scss",
      patterns:[]
    }
  }
});
