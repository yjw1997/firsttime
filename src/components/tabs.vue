<template>
    <div>
        <Tabs value="text1">
            <TabPane label="基本信息" name="text1"><Text1></Text1></TabPane>
            <TabPane label="服务发布单位详细信息" name="text2"><Text2></Text2></TabPane>
            <TabPane label="服务使用限制" name="text3"><Text3></Text3></TabPane>
            <TabPane label="数据描述信息" name="text4"><Text4></Text4></TabPane>
            <TabPane label="支持操作" name="text5"><Text5></Text5></TabPane>
             <TabPane label="瓦片信息" name="text16"><Text6></Text6></TabPane>
        </Tabs>
        <div style="text-align:left">
        <Collapse value="2">
          <Panel name="1">
              历史审批意见
              <p slot="content">
                  <Table :columns="columns1" :data="data1"></Table>
              </p>
          </Panel>
          <Panel name="2">
              填写审批意见
              <p slot="content">
                  <Input v-model="value5" type="textarea" placeholder="Enter something..." />
              </p>
          </Panel>
      </Collapse>
    </div>
    </div>
    </template>
    <script>
      import Text1 from '../components/text1'
      import Text2 from '../components/text2'
      import Text3 from '../components/text3'
      import Text4 from '../components/text4'
      import Text5 from '../components/text51'
      import Text6 from '../components/text6'
      export default{
        name: 'tabs',
        components: {
          Text1,Text2,Text3,Text4,Text6,Text5
        },
        data () {
            return {
              data1:[],
              value5:'',
              columns1: [
                    {
                        title: '审批人',
                        key: 'name'
                    },
                    {
                        title: '审批结果',
                        key: 'age'
                    },
                    {
                        title: '审批时间',
                        key: 'address'
                    },
                    {
                        title: '审批意见',
                        key: 'ui'
                    }
                ],
            }
        }
      }
    </script>
    <style  scoped>
    </style>
