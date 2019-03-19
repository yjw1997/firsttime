<template>
  <div id="registrationservice">
    <div class="serviceinput">
      <InputList
        :SelectData="SelectData"
        :statueData="statueData"
        :str1="str[0]"
        :str2="str[1]"
        :str3="str[2]"
        :str4="str[3]"
      ></InputList>
    </div>
    <div class="table">
      <Table border :columns="columns1" :data="data1"></Table>
    </div>
    <div class="page">
      <Page :total="100" />
    </div>
    <prerview :loading="loading" :modal1="modal1"></prerview>
    <usermodal
      :loading="loading"
      :selectData="selectData"
      :modal2="modal2"
    ></usermodal>
    <feedback :loading="loading" :modal3="modal3"></feedback>
    <Rewrite :rewriteModal="rewriteModal"></Rewrite>
  </div>
</template>
<script>
import Bus from '../assets/eventBus'
// import Tabs from '../components/show-taps'
import InputList from '../components/service-inputlist'
import prerview from '../components/preview-modal'
import usermodal from '../components/user-modal'
import feedback from '../components/feedback-modal'
import Rewrite from '../components/rewrite-modal'
export default {
  name: 'registrationservice',
  components: {
    InputList, prerview, usermodal, feedback, Rewrite
  },
  data () {
    return {
      
      str: ['审批状态', '服务状态', '服务注册', '删除服务'],
      modal1: false,
      modal2: false,
      modal3: false,
      modal4: false,
      loading: true,
      rewriteModal: false,
      selectData: [
        '所有', '单位1', '单位2'
      ],
      SelectData: [
        '全部', '未提交', '已通过', '未通过'
      ],
      statueData: [
        '全部', '未提交', '已通过', '未通过'
      ],
      columns1: [
        {
          title: '编号',
          key: 'number'
        },
        {
          title: '服务名称',
          key: 'servicename'
        },
        {
          title: '服务别名',
          key: 'servicename1'
        },
        {
          title: '服务类型',
          key: 'type'
        },
        {
          title: '注册时间',
          key: 'time'
        },
        {
          title: '更新时间',
          key: 'time1'
        },
        {
          title: '服务状态',
          key: 'servicestatus',
          render: (h, params) => {
            if (params.row.servicestatus === '停止') {
              return h('span', {
                style: {
                  color: '#FF7D41'
                }
              }, params.row.servicestatus)
            } else if (params.row.servicestatus === '运行') {
              return h('span', {
                style: {
                  color: '#28FF28'
                }
              }, params.row.servicestatus)
            }
          }
        },
        {
          title: '审核状态',
          key: 'auditstatus',
          width: 80,
          render: (h, params) => {
            if (params.row.auditstatus === '未通过') {
              return h('span', {
                style: {
                  color: '#FF7D41'
                }
              }, params.row.auditstatus)
            } else if (params.row.auditstatus === '已通过') {
              return h('span', {
                style: {
                  color: '#28FF28'
                }
              }, params.row.auditstatus)
            }
          }
        },
        {
          title: '反注册/恢复',
          width: 80,
          key: 'change',
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
                  }
                }
              }, '反注册')
            ])
          }
        },
        {
          title: '运行/停止',
          key: 'change1',
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
                  }
                }
              }, '查看')
            ])
          }
        },
        {
          title: '原始地址',
          key: 'address'
        },
        {
          title: '操作',
          key: 'action',
          width: 300,
          fixed: 'right',
          align: 'center',
          render: (h, params) => {
            return h('div', [
              h('Button', {
                props: {
                  type: 'primary',
                  size: 'small'
                },
                style: {
                  marginRight: '5px'
                },
                on: {
                  click: () => {
                    this.modal3 = true
                  }
                }
              }, '预览'),
              h('Button', {
                props: {
                  type: 'info',
                  size: 'small'
                },
                on: {
                  click: () => {
                    this.modal1 = true
                  }
                }
              }, '反馈'),
              h('Button', {
                props: {
                  type: 'warning',
                  size: 'small'
                },
                on: {
                  click: () => {
                    this.rewriteModal = true
                  }
                }
              }, '修改'),
              h('Button', {
                props: {
                  type: 'success',
                  size: 'small'
                },
                on: {
                  click: () => {
                    this.modal2 = true
                  }
                }
              }, '用户'),
              h('Button', {
                props: {
                  type: 'error',
                  size: 'small'
                },
                on: {
                  click: () => {
                    console.log(params.row)
                  }
                }
              }, '删除')
            ])
          }
        }
      ],
      data1: [
        {
          number: '1',
          servicename: '服务申请',
          servicename1: '服务名1',
          type: '待提交',
          status: '未通过',
          time: '2018-5-22 11:52:22',
          time1: '2019-5-22 11:52:22',
          servicestatus: '运行',
          auditstatus: '未通过',
          address: 'http://'
        }
      ]
    }
  },
  mounted () {
    var self = this
    Bus.$on('prerviewCancel', function (msg) {
      console.log(msg)
      self.modal1 = false
    }),
    Bus.$on('prerviewok', function (msg) {
      console.log(msg)
      self.modal1 = false
    }),
    Bus.$on('usermodalCancel', function (msg) {
      console.log(msg)
      self.modal2 = false
    }),
    Bus.$on('usermodalok', function (msg) {
      console.log(msg)
      self.modal2 = false
    }),
    Bus.$on('feedbackCancel', function (msg) {
      console.log(msg)
      self.modal3 = false
    }),
    Bus.$on('feedbackok', function (msg) {
      console.log(msg)
      self.modal3 = false
    })
  }
}
</script>
<style lang="less" scoped>
.page {
  position: absolute;
  bottom: -30%;
  left: 50%;
  margin-left: -200px;
  text-align: center;
}
.table {
  margin-top: 20px;
}
.serviceinput {
  margin-top: 15px;
}
</style>
