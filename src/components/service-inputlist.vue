<template>
  <div class="input">
    <div class="ib">
      {{str1}}：
      <Select style="width:200px">
        <Option v-for="item in SelectData" :value="item">{{ item }}</Option>
      </Select>
    </div>
    <div class="ib">
      {{str2}}：
      <Select style="width:200px">
        <Option v-for="item in SelectData" :value="item">{{ item }}</Option>
      </Select>
    </div>
    <div class="ib">
      <Button type="primary">搜索</Button>
    </div>
    <div class="ib fr" style="margin-right: 200px;">
      <Button type="primary" @click="resServer">{{str3}}</Button>
      <Button type="primary">{{str4}}</Button>
    </div>
    <Modal v-model="modal" title="服务注册" width="800" class="tc">
      <router-view></router-view>
      <div slot="footer">
        <Button type="primary" v-if="current !== 0" @click="Previous">上一步</Button>
        <Button type="info" @click="next"  v-if="current !== 2">下一步</Button>
        <Button type="info"  v-if="current === 2">提交</Button>
      </div>
    </Modal>
  </div>
</template>
<script>
export default {
  name: "service-inputlist",
  data() {
    return {
      modal: false,
      current: 0,
      select: "GIMS 地图服务"
    };
  },
  mounted() {
    
  },
  methods: {
    // 点击服务注册按钮
    resServer() {
      this.modal = true;
      // 自动加载第一个页面
      this.$router.push({ path: "/myservice/registrationservice/Numone" })
    },
    // 点击上一步
    Previous() {
      if (this.current === 1) {
        this.$router.push({ path: "/myservice/registrationservice/Numone" })
      } else if (this.current === 2) {
        this.$router.push({ path: "/myservice/registrationservice/Numtwo" })
      }
      if(this.current > 0){
      this.current--
      }
    },
    // 点击下一步
    next() {
      if (this.current === 0) {
        this.$router.push({ name: 'Numtwo',params: {current:this.current+1,select:this.select}})
      } else if (this.current === 1) {
        this.$router.push({ path: "/myservice/registrationservice/Numthree" })
      }
      if(this.current<2){
      this.current++
      }
    }
  },
  props: {
    SelectData: {
      type: Array,
      required: true
    },
    statueData: {
      type: Array,
      required: true
    },
    str1: {
      type: String
    },
    str2: {
      type: String
    },
    str3: {
      type: String
    },
    str4: {
      type: String
    }
  }
};
</script>
<style scoped lang="less">
.ib {
  display: inline-block;
}
</style>
