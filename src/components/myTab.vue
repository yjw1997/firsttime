<template>
  <div id="myTab">

    <Tabs type="card" style="width: 100%;height: 100%;" @on-click = "showinfor">
        <TabPane name= "home" key="0" icon="md-home">
          <div id="content">
          <router-view></router-view>
           </div>
        </TabPane>
        <!-- <TabPane type="card" closable v-for="tab in tabList" :name="'-'+tab.id" v-if="tab.isshow" :key="tab.id + new Date().getTime()" :label="tab.title" :id="tab.id">
          <router-view></router-view>
        </TabPane>
        <div>11s</div> -->
    </Tabs>

    <div id="tags-title" v-if= "isshow">
      <router-link :to="tabList.url">{{tabList.title}}
      </router-link>
    </div>
  </div>
</template>
<script>
import bus from '../assets/eventBus.js'
export default {
  name:'MyTab',
  data () {
    return {
      tabList :{

      },
      isshow :false,
    }
  },
  mounted (){
    var self = this
    bus.$on("bus",function(msg){
      // 接受传输过来的数据，如果数据重复，如果不存在则添加数据
      // if(self.tabList.findIndex(t=> t.id==msg.id) === -1){
      //   self.tabList=msg
      // }
      self.tabList=msg
      self.isshow=true

      console.log(self.tabList)
      // 模拟点击事件

          })
  },
  methods: {
    //点击删除按钮更新视图
    handleTabRemove (name) {
      // console.log(name)
      let newId = parseInt(name.replace("-",""))
      // console.log(newId)
      // //删除数组中的一项
      let index = this.tabList.findIndex(item => item.id === newId)
      console.log(index)
      // this.tabList.splice(index, 1)
      delete this.tabList[index]
      //整理数组
      let arr = [...this.tabList]
      let newArr = arr.filter(item => item)
      this.tabList = [...newArr]
      console.log(this.tabList)

    },
    //点击首页
    showinfor () {
      this.$router.push({path: '/infor'})
      }
  }
}
</script>
<style lang="less" scoped>

  #myTab{
    margin-left:20px;
    float: left;
    width: 80%;
    height: 700PX;
    position: relative;
  }
  .position{
    position: absolute;
    left: 238px;
  }
  .position2{
    position: absolute;
    right: 0px;
    top: 0px;
  }
  #frame{
    min-height: 600px;

}
  #tags-title{
    position: absolute;
    border: 1px solid black;
    top: 0;
    left: 56px;
    z-index: 999;
    height: 32px;
    padding-bottom: 5px;
    background: #fff;
    transform: translateZ(0);
    border-color: #dcdee2;
    padding: 5px 16px 4px;
    border-top-left-radius:4px;
    border-top-right-radius:4px;
  }
  #tags-title:hover{
    border: 1px solid #2d8cf0;
  }
  #content{
    // background: #EEF5F9;
  }

</style>
