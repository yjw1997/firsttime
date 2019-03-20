<template>
  <div id="agenttask">
    <InputList
      :SelectData="SelectData"
      :statueData="statueData"
      :str="str"
      @listentochildevent="listentochildevent"
    ></InputList>
    <div class="table">
      <Table
        border
        :columns="columns1"
        :data="data1"
      ></Table>
    </div>
    <div class="page">
      <Page :total="100" />
    </div>
    <Modal
      v-model="modal2"
      title='信息详情'
      loading="loading"
      style="text-align:center"
      :closable="false"
      :mask-closable="false"
      width='821'
    >
      <Tabs  :approvalData="approvalData"></Tabs>
      <div slot="footer">
        <Button
          type="info"
          size="large"
          @click="modalOk"
        >通过</Button>
        <Button
          type="error"
          size="large"
          @click="modalCancel"
        >不通过</Button>
      </div>
    </Modal>
  </div>
</template>
<script>
import axios from "axios"
import InputList from '../components/inputlist'
import Tabs from '../components/tabs'
export default {
  name: 'agenttask',
  components: {
    InputList, Tabs
  },
  mounted() {
    //获取表格数据
    this.getData()
    // 获取流程类型
    this.getProcess()
  },
  methods: {
    // 审批不通过
    modalCancel() {
      // 不通过时，“审批意见”不为空,发送消息到子组件获取审批意见

      // if( ){

      // }
      this.modal2 = false
    
    },
    // 审批通过
    modalOk() {
      this.modal2 = false
    },
    getData() {
      axios.get('../static/data.json').then(response => {
        console.log(response.data.agenttaskdata)
        //获取表格数据
        this.data1 = response.data.agenttaskdata
        // 表格名字去重获取申请单位名称
        let unit = [...this.data1]
        let newdata = []
        for (let val of unit) {
          newdata.push(val.name)
        }
        let newUnit = Array.from(new Set(newdata))
        console.log(newUnit)
        this.SelectData = newUnit
        // 获取流程下拉框的值
      })
    },
    // 获取流程类型
    getProcess() {
      axios.get('../static/data.json').then(response => {
        console.log(response.data.processData)
        this.statueData = response.data.processData
      })
    },
    // 点击搜索按钮由inputlist子组件传递过来的消息
    listentochildevent(data) {
      console.log(data)
      axios.get('../static/data.json', { params: data }).then(response => {

      })

    }
  },
  data() {
    return {
      modal2: false,
      str: ['申请单位', '流程', '申请时间'],
      SelectData: [],
      statueData: [],
      approvalData:{},
      columns1: [
        {
          title: '序号',
          key: 'id'
        },
        {
          title: '申请单位',
          key: 'name'
        },
        {
          title: '当前节点',
          key: 'type'
        },
        {
          title: '流程',
          key: 'schedule',
          render: (h, params) => {
            if (params.row.schedule === '1') {
              return h('span', '账号注册')
            } else if (params.row.schedule === '2') {
              return h('span', '数据目录新建')
            } else if (params.row.schedule === '3') {
              return h('span', '空间数据上传')
            } else if (params.row.schedule === '4') {
              return h('span', '数据申请')
            } else if (params.row.schedule === '5') {
              return h('span', '服务注册')
            } else if (params.row.schedule === '6') {
              return h('span', '服务申请')
            } else if (params.row.schedule === '7') {
              return h('span', '地名地址数据上传')
            } else if (params.row.schedule === '8') {
              return h('span', '数据下载')
            }
          }
        },
        {
          title: '申请时间',
          key: 'time',
          // render: (h, params) => {
          //   if (params.row.status === '未通过') {
          //     return h('span', {
          //       style: {
          //         color: '#FF7D41'
          //       }
          //     }, params.row.status)
          //   } else if (params.row.status === '已通过') {
          //     return h('span', {
          //       style: {
          //         color: '#169BD5'
          //       }
          //     }, params.row.status)
          //   } else if (params.row.status === '未提交') {
          //     return h('span', {
          //       style: {
          //         color: ' #00CC00'
          //       }
          //     }, params.row.status)
          //   }
          // }
        },
        {
          title: '操作',
          key: 'show',
          render: (h, params) => {
            return h('div', {
              style: {
                'text-align': 'center'
              }
            }, [
                h('a', {
                  on: {
                    click: () => {
                      console.log(params.row)
                      this.approvalData = params.row
                      this.modal2 = true
                      console.log(this.approvalData)
                    }
                  }
                }, '审批')
              ])
          }
        },
      ],
      data1: []
    }
  }
}
</script>
<style lang="less" scoped>
.page {
  position: absolute;
  bottom: -30%;
  left: 50%;
  margin-left: -200px;
  .tc();
}
.table {
  margin-top: 20px;
}
</style>
