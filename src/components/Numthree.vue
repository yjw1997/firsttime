<template>
  <div>
    <Steps :current="current">
      <Step title="已完成" content="选择服务类型"></Step>
      <Step title="已完成" content="选择服务"></Step>
      <Step title="进行中" content="填写元数据"></Step>
    </Steps>
    {{this.$route.params.current}}
  </div>
</template>


<script>
export default {
  name: "numthree",
  data () {
    return {
      current: 2,
    }
  },
  props: {}
};
</script>
<style lang="less" scoped>
</style>

