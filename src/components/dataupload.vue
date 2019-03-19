<template>
  <div id="dataupload">
    <Button type="info" @click = "addinfo">数据上传</Button>
    <Table border :columns="columns1" :data="data1"></Table>
    <Modal
    v-model="modal1"
    title="上传图层信息列表"
    style="text-align:center"
    :closable="false"
    :mask-closable="false"
    width = '650'
    >
    <Table :columns="columns1" :data="data1"></Table>
  </Modal>
  <Modal
  v-model="modal2"
  title="数据上传"
  style="text-align:center"
  :closable="false"
  :mask-closable="false"
  width = '650'
  height = '470'
  >
  <DatauploadList></DatauploadList>
</Modal>
  </div>
 </template>
<script>
  import Data from '../data.json'
  import DatauploadList from "../components/DatauploadList"
  export default {
    name: 'dataupload',
    components:{
      DatauploadList
    },
    data() {
      return {
        modal1: false,
        modal2: false,
        // data1: [],
        columns1: [
          {
            title: '序号',
            key: 'key'
          },
          {
            title: '用户名',
            key: 'username'
          },
          {
            title: '名称',
            key: 'name'
          },
          {
            title: '数据用途',
            key: 'datauser'
          },
          {
            title: '数据类型',
            key: 'datatype'
          },
          {
            title: '上传时间',
            key: 'uploadtime'
          },
          {
            title: '备注',
            key: 'remarks'
          },
          {
            title: '审评状态',
            key: 'show',
            render: (h, parmas) => {
              return h('div', {
                style: {
                  'text-align': 'center'
                }
              }, [
                  h('a', {
                    on: {
                      click: () => {
                        this.modal1 = true
                        console.log('查看入库状态')
                      }
                    }
                  }, '查看入库状态')
                ])
            }
          },
        ],
        data1: [
          {
          key: '1',
          type: '服务申请',
          name: '服务名1',
          schedule: '待提交',
          status: '未通过',
          time: '2018-5-22 11:52:22',
          show: 1
          }
        ]
      }
    },
    methods: {
      addinfo () {
        this.modal2 = true
      }
    }

  }

</script>
<style lang="less" scoped>

</style>
