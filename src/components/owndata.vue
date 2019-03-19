<template>
<div id="owndata">
    <div class="input">
        <div class="ib">
        来源：
          <Select style="width:150px">
              <Option v-for="item,key in statueData" :value="item">{{ item }}</Option>
            </Select>
        </div>
        <div class="ib">
            主题：
              <Select style="width:150px">
                  <Option v-for="item,key in statueData" :value="item">{{ item }}</Option>
              </Select>
            </div>
            <div class="ib">
                图层识别：
                      <Input  placeholder="Enter something..." style="width: 100px"  />
                </div>
            <div class="ib">
                注册时间：
                <Input  placeholder="Enter something..." style="width: 150px" type="date" />
                -
                <Input placeholder="Enter something..." style="width: 150px" type="date" />
                <Button type="primary">搜索</Button>

                </div>
    </div>
    <div class="table">
        <Table border :columns="columns1" :data="data1"></Table>
    </div>
    <div class="page">
        <Page :total="100" />
    </div>
    <Modal
        v-model="modal1"
        title="图源层数据编辑"
        style="text-align:center"
        :closable="false"
        :mask-closable="false"
        width = '650'
        >
        <Tabs value="name1">
        <TabPane label="资源基本信息" name="name1"><Owndata1></Owndata1></TabPane>
        <TabPane label="资源描述" name="name2"><Owndata2></Owndata2></TabPane>
        <TabPane label="空间信息" name="name3"><Owndata3></Owndata3></TabPane>
        <TabPane label="所有权单位" name="name4"><Owndata4></Owndata4></TabPane>
        <TabPane label="其他单位信息" name="name5"><Owndata5></Owndata5></TabPane>
        </Tabs>
    </Modal>
    <Modal
        v-model="modal2"
        title="用户详情"
        style="text-align:center"
        :closable="false"
        :mask-closable="false"
        width = '850'
        >
    <InputList :SelectData="[]" :statueData="[]" :str = "str"></InputList>
        <Table :columns="columns2" :data="[]"></Table>

    </Modal>
</div>
</template>
<script>
import Owndata1 from "../components/Owndata1"
import Owndata2 from "../components/Owndata2"
import Owndata3 from "../components/Owndata3"
import Owndata4 from "../components/Owndata4"
import Owndata5 from "../components/Owndata5"
import InputList from "../components/inputlist"
export default{
  name: 'owndata',
  components: {
    Owndata1,Owndata2,Owndata3,Owndata4,Owndata5,InputList
  },
  data() {
    return {
      modal1:false,
      modal2:false,
      statueData:[],
      str:['用户单位：','申请状态：','申请时间：'],
      columns1: [
                    {
                        title: '序号',
                        key: 'id'
                    },
                    {
                        title: '图层别名',
                        key: 'type'
                    },
                    {
                        title: '注册单位',
                        key: 'name'
                    },
                    {
                        title: '注册时间',
                        key: 'schedule'
                    },
                    {
                        title: '所属服务',
                        key: 'status',
                        // render: (h,params) =>{
                        //   if(params.row.status === '未通过'){
                        //     return h('span', {
                        //       style: {
                        //         color: '#FF7D41'
                        //       }
                        //     }, params.row.status)
                        //   } else if (params.row.status === '已通过'){
                        //     return h('span', {
                        //       style: {
                        //         color: '#169BD5'
                        //       }
                        //     }, params.row.status)
                        //   }else if(params.row.status === '未提交') {
                        //     return h('span', {
                        //       style: {
                        //         color: ' #00CC00'
                        //       }
                        //     }, params.row.status)
                        //   }
                        // }
                    },
                    {
                        title: '图层元数据',
                        key: 'time',
                        render: (h,parmas) => {
                          return h('div',{
                              style : {
                                'text-align' :'center'
                              }
                          },[
                            h('a',{
                              on :{
                                click: () => {
                                  console.log('编辑')
                                  this.modal1 = true
                                  }
                              }
                            },'编辑')
                          ])
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
                            },[
                              h('a',{
                              on: {
                                  click: () => {
                                      console.log(params.row)
                                  }
                              }
                            }, '数据编辑'),
                              h('a',{
                                on: {
                                  click: () => {
                                    this.modal2 = true
                                  }
                                }
                              }, ' 用户')
                          ])

                        }
                    },
                    {
                      title: '地图',
                      key: 'map',
                      render: (h,params) => {
                        return h('div',{
                          style :{
                                'text-align' :'center'
                              }
                        },[
                          h('a',{
                            on: {
                              click: () =>{
                                console.log('地图')
                              }
                            }
                          },'地图')
                        ])
                      }
                    }
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
                    columns2: [
                    {
                        title: '用户名称',
                        key: 'name'
                    },
                    {
                        title: '用户单位',
                        key: 'unit'
                    },
                    {
                        title: '申请时间',
                        key: 'time'
                    },
                    {
                        title: '申请状态',
                        key: 'time'
                    },
                    ]
    }
  }
}
</script>
<style lang="less" scoped>
.ib{
    display: inline-block;
  }
  .table{
    margin-top:20px;

  }
  .page{
    position:absolute;
    bottom: -20%;
    left: 50%;
    margin-left:-200px;
    text-align: center;

  }
</style>
