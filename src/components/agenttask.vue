<template>
  <div id="agenttask">
    <InputList :SelectData="SelectData" :statueData="statueData" :str = "str"></InputList>
    <div class="table">
        <Table border :columns="columns1" :data="data1"></Table>
    </div>
    <div class="page">
        <Page :total="100" />
    </div>
    <Modal
    v-model="modal2"
    title="信息详情"
    loading="loading"
    style="text-align:center"
    :closable="false"
    :mask-closable="false"
    width = '821'
    >
    <Tabs></Tabs>
    <div slot="footer">
        <Button type="text" size="large" @click="modalCancel">取消</Button>
        <Button type="primary" size="large" @click="modalOk">确定</Button>
   </div>
</Modal>
  </div>
</template>
<script>
  import InputList from '../components/inputlist'
  import Tabs from '../components/tabs'
export default{
  name : 'agenttask',
  components:{
    InputList,Tabs
  },
  methods :{
    modalCancel () {
      this.modal2=false
    },
    modalOk () {
      this.modal2=false
    }
  },
  data () {
    return {
    modal2: false,
    str: ['申请单位','流程','申请时间'],
    SelectData:[
          '所有流程','账号注册','数据目录新建'
        ],
        statueData:[
        '全部','未提交','已通过','未通过'
        ],
        columns1: [
                    {
                        title: '序号',
                        key: 'id'
                    },
                    {
                        title: '申请单位',
                        key: 'type'
                    },
                    {
                        title: '当前节点',
                        key: 'name'
                    },
                    {
                        title: '流程',
                        key: 'schedule'
                    },
                    {
                        title: '申请时间',
                        key: 'status',
                        render: (h,params) =>{
                          if(params.row.status === '未通过'){
                            return h('span', {
                              style: {
                                color: '#FF7D41'
                              }
                            }, params.row.status)
                          } else if (params.row.status === '已通过'){
                            return h('span', {
                              style: {
                                color: '#169BD5'
                              }
                            }, params.row.status)
                          }else if(params.row.status === '未提交') {
                            return h('span', {
                              style: {
                                color: ' #00CC00'
                              }
                            }, params.row.status)
                          }
                        }
                    },
                    {
                        title: '操作',
                        key: 'show',
                        render: (h,params) => {
                          return h('div', {
                              style :{
                                'text-align' :'center'
                              }
                            }, [
                              h('a',{
                                on: {
                                  click: () => {
                                      console.log(params.row)
                                      this.modal2 = true
                                  }
                              }
                              },'审批')
                            ])
                        }
                    },
                ],
                data1: [
                    {
                        id: '1',
                        type: '服务申请',
                        name: '服务名1',
                        schedule: '待提交',
                        status: '未通过',
                        time: '2018-5-22 11:52:22',
                        show: 1
                    },
                    {
                        id: '2',
                        type: '服务申请',
                        name: '服务名1',
                        schedule: '待提交',
                        status: '已通过',
                        time: '2018-5-22 11:52:22',
                        show: 1
                    },
                    {
                        id: '3',
                        type: '服务申请',
                        name: '服务名1',
                        schedule: '待提交',
                        status: '未提交',
                        time: '2018-5-22 11:52:22',
                        show: 1
                    },
                    {
                        id: '4',
                        type: '服务申请',
                        name: '服务名1',
                        schedule: '待提交',
                        status: '未提交',
                        time: '2018-5-22 11:52:22',
                        show: 1
                    },
                    {
                        id: '5',
                        type: '服务申请',
                        name: '服务名1',
                        schedule: '待提交',
                        status: '未提交',
                        time: '2018-5-22 11:52:22',
                        show: 1
                    },

                ],
    }
  }
}
</script>
<style lang="less" scoped>
.page{
    position:absolute;
    bottom: -30%;
    left: 50%;
    margin-left:-200px;
    .tc();

  }
  .table{
    margin-top:20px;
  }
  </style>
