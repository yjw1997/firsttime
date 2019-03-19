<template>
<div id="taskalready">
    <InputList :SelectData="SelectData" :statueData="statueData" :str = "str"></InputList>
    <div class="table">
        <Table border :columns="columns1" :data="data1"></Table>
    </div>
    <div class="page">
        <Page :total="100" />
    </div>
    <Modal v-model="modal1" draggable scrollable title="服务申请详情">
        <ul>
          <li>申请单位：</li>
          <li>经办人：</li>
          <li>应用系统名称：</li>
          <li>应用系统描述：</li>
          <li>需求描述：</li>
        </ul>
    </Modal>
</div>
</template>
<script>
  import InputList from '../components/inputlist'
export default{
  name: 'taskalready',
  components:{
    InputList
  },
  data () {
    return {
      modal1:false,
      str: ['申请单位','流程','审批时间'],
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
                        title: '状态',
                        key: 'schedule'
                    },
                    {
                        title: '备注',
                        key: 'schedule'
                    },
                    {
                        title: '审批时间',
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
                        title: '详情',
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
                                      this.modal1 = true
                                  }
                              }
                              },'查看')
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
        text-align: center;

      }
      .table{
        margin-top:20px;
      }
      li{
        list-style: none;
        font-size:15px;
        font-weight: 700;
      }
      </style>
