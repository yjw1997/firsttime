<template>
  <div class="demo-split">
    <Split v-model="split1">
      <div slot="left" class="demo-split-pane">
        状态：
        <Select v-model="model1" style="width:100px">
          <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
        <div class="ib">
          目录名称：
          <Input v-model="value3" style="width:100px" size="small" placeholder="目录名称" />
          <Button size="small" type="primary">搜索</Button>
        </div>
        <div style="float:right" class="ib">
          <Button type="primary">目录注册</Button>
          <Button type="error">目录删除</Button>
        </div>
        <div class="ztree">
          <Tree :data="data" multiple show-checkbox></Tree>
        </div>
      </div>

      <div slot="right" class="demo-split-pane">
          <Card class="card">
              <p slot="title">
                  <Icon type="ios-clipboard" />
                  目录元数据信息
              </p>
              <ul class="title">
                <li>目录编号：</li>
                <li>目录代码：</li>
                <li>目录名称：</li>
                <li>目录描述：</li>
                <li>目录提供方：</li>
                <li>元数据维护单位：</li>
                <li>创建时间：</li>
                <li>修改时间：</li>
                <li>目录关键字：</li>
                <li>审批状态：</li>
              </ul>
              <ul class="cardContent">
                  <li>申请字段：123123312321321313</li>
                  <li>申请时间：</li>
                  <li>审批时间：</li>
                  <li>审批状态：</li>
                  <li>审批人：</li>
                  <li>审批意见：</li>
                </ul>
          </Card>
      </div>
    </Split>
  </div>
</template>
<script>
  export default {
    name: 'directorymanagement',
    data() {
      return {
        split1: 0.6,
        cityList: [
          {
            value: 'New York',
            label: 'New York'
          },
          {
            value: 'London',
            label: 'London'
          }
        ],
        model1: '',
        value3: '',
        data: [
          {
            title: 'parent 1',
            expand: true,
            selected: true,
            children: [
              {
                title: 'parent 1-1',
                expand: true,
                children: [
                  {
                    title: 'leaf 1-1-1',
                    disabled: true
                  },
                  {
                    title: 'leaf 1-1-2'
                  }
                ]
              }
            ]
          }
        ]
      }
    }
  }
</script>
<style lang="less" scoped>
  .demo-split {
    height: 500px;
    border: 1px solid #dcdee2;
  }

  .demo-split-pane {
    padding: 10px;
  }

  .ib {
    display: inline-block;
  }
  .title{
        width: 30%;
        text-align: right;
        font-weight: 700;
        line-height: 30px;
        list-style: none;
        display: inline-block;

      }
      .title li{
       overflow: hidden;text-overflow: ellipsis;
      }
      .cardContent{
        width: 68%;
        display: inline-block;
        list-style: none;
        line-height: 30px;
      }
      .cardContent li{
       overflow: hidden;text-overflow: ellipsis;
      }
</style>
