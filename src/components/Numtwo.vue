<template>
  <div>
    <Steps :current="current">
      <Step title="已完成" content="选择服务类型"></Step>
      <Step title="进行中" content="选择服务"></Step>
      <Step title="待进行" content="填写元数据"></Step>
    </Steps>
    {{selectVal}}
  </div>
</template>


<script>
import Bus from "../assets/eventBus.js";
export default {
  name: "numtwo",
  
  data() {
    return {
      current: 1,
      selectVal: "1111111"
    };
  },
  beforeCreate() {
    var self = this;
    Bus.$on("selectVal", function(data) {
      console.log(data);
      self.selectVal = data;
    });
  },
  props: {}
};
</script>
<style lang="less" scoped>
</style>

