<template>
    <div id="mydata">
        <div id="tags">
        <div class="tag"><router-link to="/mydata/owndata">我拥有的数据</router-link></div>
        <div class="tag"><router-link to="/mydata/appdata">我申请的数据</router-link></div>
        <div class="tag"><router-link to="/mydata/downloadmanagement">下载管理</router-link></div>
        <div class="tag"><router-link to="/mydata/directorymanagement">目录管理</router-link></div>
        <div class="tag"><router-link to="/mydata/dataconf">数据配置</router-link></div>
        <div class="tag"><router-link to="/mydata/dataupload">数据上传</router-link></div>
        <div class="tag"><router-link to="/mydata/placeNameAddress">地名地址</router-link></div>
      </div>
      <div id="h1111">
      <router-view></router-view>
    </div>
    </div>
</template>
<script>
  export default{
    name: 'mydata',
    mounted () {
      this.init()
    },
    methods: {
      init () {
        this.$router.push({path:'/mydata/owndata'})
      }
    }
  }
</script>
<style lang="less" scoped>
#tags{
    padding-bottom:20px;
    border-bottom: #e8eaec 1px solid;
  }
  .tag{
    padding: 20px 10px;
    border: 1px solid #e8eaec;
    border-radius: 3px;
    background: #f7f7f7;
    display: inline-block;
    margin-right:10px;
  }
  .tag:hover{
    cursor: pointer;
    color:palegreen;
    transform:scale(0.8);
    -ms-transform:rotate(0.8); 	/* IE 9 */
    -moz-transform:rotate(0.8); 	/* Firefox */
    -webkit-transform:rotate(0.8); /* Safari 和 Chrome */
    -o-transform:rotate(0.8); 	/* Opera */
  }
</style>
