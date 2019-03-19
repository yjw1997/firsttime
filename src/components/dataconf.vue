<template>
    <div class="demo-split">
        <Split v-model="split3">
            <div slot="left" class="demo-split-pane no-padding">
                <Split v-model="split4">
                    <div slot="left" class="demo-split-pane">
                        <Card class="card">
                            <p slot="title">
                                <Icon type="ios-clipboard" />
                                数据库数据目录
                            </p>
                            <div>
                                <Input  placeholder="Enter something..." style="width: 150px"/>
                                <Button type="primary">搜索</Button>
                                <Button type="primary" shape="circle" icon="md-sync"></Button>
                            </div>
                        </Card>
                    </div>
                    <div slot="right" class="demo-split-pane">
                        <Card class="card">
                            <p slot="title">
                                <Icon type="ios-clipboard" />
                                数据来源目录
                            </p>
                            <div>
                            <div>
                                <Input  placeholder="Enter something..." style="width: 120px"/>
                                <Button type="primary">搜索</Button>
                                <Select style="width:70px">
                                    <Option v-for="item in SelectData" :value="item">{{ item }}</Option>
                                </Select>
                            </div>
                            <div class="tree">
                                <Tree :data="data2" show-checkbox></Tree>
                            </div>
                          </div>
                        </Card>
                    </div>
                </Split>
            </div>
            <div slot="right" class="demo-split-pane">
               <DataInf></DataInf>
            </div>
        </Split>
    </div>
</template>
<script>
  import Data from '../data.json'
  import DataInf from '../components/datainf'

    export default {
      components:{
        DataInf
      },
        data () {
            return {
                split3: 0.6,
                split4: 0.5,
                SelectData: [],
                data2: Data.data2
            }
        },
    }
</script>
<style lang="less" scoped>
    .demo-split{
        height: 500px;
        border: 1px solid #dcdee2;
    }
    .demo-split-pane{
        padding: 10px;
    }
    .demo-split-pane.no-padding{
        height: 500px;
        padding: 0;
    }
</style>
