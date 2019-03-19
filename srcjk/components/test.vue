<template>
  <div class="layout">
    <Layout>
      <Header>
        <h1>商城</h1>
      </Header>
      <Content>
        <Row>
          <Col :xs="{ span: 24, offset: 4}" :sm="{ span: 10, offset: 2}" :md="{ span: 6, offset: 3}">
            <Card title="商品目录" :padding="0"  style="width: 300px;">
              <CellGroup v-if="res[0] !== undefined && res.length > 0" @on-click="clicks">
                <Cell :name="index" :selected="light === index" v-for="(item ,index) in res" :key="index" @click.native="changeGood($event, item.productId, index)" :title="item.productName" />
              </CellGroup>
            </Card>
          </Col>
<!--      <Col span="6" offset="3">
            <Menu :theme="goodsMenu" active-name="1">
              <MenuGroup title="商品目录" v-if="res[0] !== undefined && res.length > 0">
                <MenuItem :name="index" v-for="(item ,index) in res" :key="index" @click.native="changeGood(item.productId, index)">
                  {{item.productName}}
                </MenuItem>
              </MenuGroup>
            </Menu>
          </Col> -->
          <Col :xs="24" :sm="12" :md="12">
            <router-view :a="goodsId" :b="res[goodsNum]"></router-view>
          </Col>
        </Row>
      </Content>
      <Footer>
        <Button type="success" @click="btnAdd = true">添加</Button>
        <Modal v-model="btnAdd" @on-visible-change="reSet('formAdd')" title="商品添加">
          <p slot="header" style="color:green;text-align:center">
              <Icon type="md-add-circle" />
              <span>商品添加</span>
          </p>
          <Form ref="formAdd" :model="formAdd" :rules="ruleValidate" label-position="top">
            <FormItem label="商品ID" prop="nowId">
                <Input v-model="formAdd.nowId" placeholder=" 例如:10001"></Input>
            </FormItem>
            <FormItem label="商品名称" prop="nowName">
                <Input v-model="formAdd.nowName" placeholder=" 例如:8H 95%白鹅绒静音被 Y1（冬款）"></Input>
            </FormItem>
            <FormItem label="商品价格" prop="nowPrice">
                <Input v-model="formAdd.nowPrice" placeholder=" 例如:1399"></Input>
            </FormItem>
          </Form>
          <Divider>
            <Upload action="//jsonplaceholder.typicode.com/posts/">
              <Button icon="ios-cloud-upload-outline">图片上传</Button>
            </Upload>
          </Divider>
          <div slot="footer">
            <Button type="success" size="large"  :loading="btnAdd_loading" @click="add('formAdd')">添加</Button>
            <Button type="success" ghost size="large" @click="reSet('formAdd')">重置</Button>
          </div>
        </Modal>
        <Button type="warning" @click="btnChg = true">修改</Button>
        <Modal v-model="btnChg" @on-visible-change="reSet('formChg')" title="商品修改" v-if="res[goodsNum]">
          <p slot="header" style="color:orange;text-align:center">
              <Icon type="md-settings" />
              <span>商品修改</span>
          </p>
          <Form ref="formChg" :rules="ruleValidate" :model="formChg" label-position="top">
            <FormItem label="商品ID" prop="nowId">
                <Input v-model="formChg.nowId" :placeholder="res[goodsNum].productId"></Input>
            </FormItem>
            <FormItem label="商品名称" prop="nowName">
                <Input v-model="formChg.nowName" :placeholder="res[goodsNum].productName"></Input>
            </FormItem>
            <FormItem label="商品价格" prop="nowPrice">
                <Input v-model="formChg.nowPrice" :placeholder="res[goodsNum].prodcutPrice"></Input>
            </FormItem>
          </Form>
          <Divider>
            <Upload action="//jsonplaceholder.typicode.com/posts/">
              <Button icon="ios-cloud-upload-outline">图片上传</Button>
            </Upload>
          </Divider>
          <div slot="footer">
            <Button type="warning" size="large" :loading="btnChg_loading" @click="chg('formChg')">修改</Button>
            <Button type="warning" ghost size="large" @click="reSet('formChg')">重置</Button>
          </div>
        </Modal>
        <Button type="error" @click="btnDel = true">删除</Button>
        <Modal v-model="btnDel" @on-ok="del">
          <p slot="header" style="color:#f60;text-align:center">
            <Icon type="ios-information-circle"></Icon>
            <span>删除确认</span>
          </p>
          <div style="text-align:center">
            <p>是否确定删除商品{{goodsId}}？</p>
          </div>
          <div slot="footer">
            <Button type="error" size="large" long :loading="btnDel_loading" @click="del">删除</Button>
          </div>
        </Modal>
      </Footer>
    </Layout>
  </div>
</template>

<script>
export default {
  data () {
    return {
      res: '', // 创建对象
      goodsId: '10001',
      goodsNum: 0,
      btnDel: false,
      btnDel_loading: false,
      btnAdd: false,
      btnAdd_loading: false,
      btnChg: false,
      btnChg_loading: false,
      light: 0,
      // goodsMenu: 'light',
      formAdd: {
        nowId: '',
        nowName: '',
        nowPrice: ''
      },
      formChg: {
        nowId: '',
        nowName: '',
        nowPrice: ''
      },
      ruleValidate: {
        nowId: [
          { required: true, message: 'ID不能为空', trigger: 'blur' },
          {type: 'string', whitespace: true, message: '包含空白字符', trigger: 'change'},
          {type: 'string', pattern: /^[0-9]*$/, message: 'ID只能为数字', trigger: 'change'}
        ],
        nowName: [
          { required: true, message: '商品名称不能为空', trigger: 'blur' },
          {type: 'string', whitespace: true, message: '包含空白字符', trigger: 'change'},
          {type: 'string', pattern: /^[\u4E00-\u9FA5A-Za-z0-9（）]{2,20}$/, message: '名称为2-20位中文或英文、数字、中文括号', trigger: 'change'}
        ],
        nowPrice: [
          { required: true, message: '价格不能为空', trigger: 'blur' },
          {type: 'string', whitespace: true, message: '包含空白字符', trigger: 'change'},
          {type: 'string', pattern: /^[1-9]\d*$/, message: '商品价格只能为数字且为正整数', trigger: 'change'}
        ]
      }
    }
  },
  mounted () {
    this.getGoodsList()
  },
  methods: {
    getGoodsList () {
      this.$axios.get('static/data.json').then((res) => {
        // 用axios的方法引入地址
        this.res = res.data.result
        // 赋值
      })
    },
    changeGood: function (e, id, num) {
      // console.log(e.target)
      this.goodsId = id
      this.goodsNum = num
    },
    del () {
      this.btnDel_loading = true
      setTimeout(() => {
        this.res.splice(this.goodsNum, 1)
        this.goodsNum = 0
        this.goodsId = this.res[0].productId
        this.light = 0
        this.btnDel_loading = false
        this.btnDel = false
        this.$Message.success('删除成功')
      }, 800)
    },
    add (name) {
      let formAdd = this.formAdd
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.btnAdd_loading = true
          this.res.push({'productId': formAdd.nowId, 'prodcutPrice': formAdd.nowPrice, 'productName': formAdd.nowName, 'prodcutImg': '../../static/images/5.jpg'})
          if (this.res) {
            setTimeout(() => {
              let goodsLength = this.res.length - 1
              this.goodsNum = goodsLength
              this.btnAdd_loading = false
              this.btnAdd = false
              this.$Message.success('添加成功!')
            }, 800)
          }
        } else {
          this.$Message.error('Fail!')
        }
      })
    },
    chg (name) {
      let formChg = this.formChg
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.btnChg_loading = true
          setTimeout(() => {
            let goodsImg = this.res[this.goodsNum].prodcutImg
            this.btnChg_loading = false
            this.res.splice(formChg.goodsNum, 1, {'productId': formChg.nowId, 'prodcutPrice': formChg.nowPrice, 'productName': formChg.nowName, 'prodcutImg': goodsImg})
            this.$Message.success('修改成功!')
          }, 800)
        } else {
          this.$Message.error('Fail!')
        }
      })
    },
    reSet (name) {
      this.$refs[name].resetFields()
    },
    clicks (index) {
      this.light = index
    }
  }
}
</script>

<style lang="less" scoped>
  html{
    min-height: 100%;
  }
  body{
    height: 100%;
    min-height: 1000px;
  }
  h1,
  h2 {
    font-weight: normal;
    color: #fff;
  }
  ul {
/*    width: 500px;
    height: 800px;
    display: inline-block;
    margin: 0 20px;
    list-style-type: none;
    border: 1px solid red;
    padding: 0; */
  }
  li {
    /* margin: 30px 0; */
    cursor: pointer;
  }
  a {
    color: #42b983;
  }
  input {
    text-align: center;
  }
  .ivu-layout {
    background: #fff;
  }
  .ivu-layout-header {
    background: rgba(135, 206, 250, 0.7);
  }
  .ivu-cell {
    text-align: left;
  }
  .ivu-cell-title {
    line-height: 80px !important;
    color: red;
  }
  .ivu-layout-content {
    overflow: hidden;
    margin-bottom: 30px;
  }
  .ivu-card {
    margin-top: 120px;
  }
  @media screen and (max-width: 768px) {
    .ivu-card {
      margin-top: 30px;
    },
    .ivu-layout-footer{
      flex: 0 0 auto;
    }
  }
  .ivu-cell-group {
    height: 300px;
    overflow-x: hidden;
    overflow-y: scroll;
  }
  .ivu-menu{
    margin-top: 120px;
    height: 300px;
  }
  .ivu-menu-item-group{
    height: 300px;
    overflow-x: hidden;
    overflow-y: scroll;
  }
  ::-webkit-scrollbar { width: 0 !important }
  .ivu-layout-footer{
    position:fixed;
    bottom:0;
    left:0px;
    width: 100%
  }
/*  .scroll_content{
    -ms-scroll-chaining: chained;
    -ms-overflow-style: none;
    -ms-content-zooming: zoom;
    -ms-scroll-rails: none;
    -ms-content-zoom-limit-min: 100%;
    -ms-content-zoom-limit-max: 500%;
    -ms-scroll-snap-type: proximity;
    -ms-scroll-snap-points-x: snapList(100%, 200%, 300%, 400%, 500%);
    -ms-overflow-style: none;
    overflow: auto;
  } */
</style>
