<template>
  <Modal
    v-model="rewriteModal"
    title="修改"
    style="text-align:center;"
    :mask-closable="false"
    :closable="false"
    width="1080"
  >
    <Tabs value="rewrite1">
      <TabPane label="基本信息" name="rewrite1">
        <rewrite1></rewrite1>
      </TabPane>
      <TabPane label="发布单位信息" name="rewrite2">
        <rewrite2></rewrite2>
      </TabPane>
      <TabPane label="服务使用限制" name="rewrit3">
        <rewrite3></rewrite3>
      </TabPane>
      <TabPane label="数据描述信息" name="rewrite4">
        <rewrite4></rewrite4>
      </TabPane>
      <TabPane label="操作描述信息" name="rewrite5">
        <rewrite5></rewrite5>
      </TabPane>
      <TabPane label="服务调用示例" name="rewrite6">
        <rewrite6></rewrite6>
      </TabPane>
      <TabPane label="服务范围信息" name="rewrite7">
        <rewrite7></rewrite7>
      </TabPane>
      <TabPane label="瓦片信息" name="rewrite8" v-if="info">
        <rewrite8></rewrite8>
      </TabPane>
    </Tabs>
    <div slot="footer">
      <Button type="primary" size="large" @click="save">保存</Button>
    </div>
  </Modal>
</template>
<script>
import rewrite1 from '../components/rewriteinfo'
import rewrite2 from '../components/rewrite2'
import rewrite3 from '../components/rewrite3'
import rewrite4 from '../components/rewrite4'
import rewrite5 from '../components/rewrite5'
import rewrite6 from '../components/rewrite6'
import rewrite7 from '../components/rewrite7'
import rewrite8 from '../components/rewrite8'

export default {
  name: 'rewrite-modal',
  components: {
    rewrite1,
    rewrite2,
    rewrite3,
    rewrite4,
    rewrite5,
    rewrite6,
    rewrite7,
    rewrite8
  },
  props: {
    rewriteModal: {
      type: Boolean,
      default: false
    },
    info:{
      type: Boolean,
      default: true
    }
  },
  methods: {
    save () {

    }
  }
}
</script>
<style scoped lang="less">
</style>
