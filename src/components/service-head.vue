<template>
  <div id="myservice">
      <div id="tags">
      <div class="tag"><router-link to="/myservice/registrationservice">我注册的服务</router-link></div>
      <div class="tag"><router-link to="/myservice/applicationservice">我申请的服务</router-link></div>
	  <div class="tag"><router-link to="/myservice/gimsservice">GIMS服务</router-link></div>
    </div>
    <div>
    <router-view></router-view>
  </div>
  </div>

</template>
<script>
  export default{
    name: 'myservice',
    mounted () {
      this.init()
    },
    methods: {
      init () {
        this.$router.push({path:'/myservice/registrationservice'})
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
