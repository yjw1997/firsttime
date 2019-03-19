<template>
  <div>
    <ul v-if="b">
      <Divider>商品ID:{{b.productId}}</Divider>
      <li>商品名称:{{b.productName}}</li>
      <li>商品价格:{{b.prodcutPrice}}￥</li>
      <li><img :src="b.prodcutImg" alt="图片加载失败"></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'test2',
  props: ['a', 'b'],
  data () {
    return {
      res: '' // 创建对象
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
      // console.log(res)
      })
    }
  }
}
</script>

<style lang="less" scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  /* width: 500px; */
  display: inline-block;
/*  margin: 0 20px; */
  list-style-type: none;
  padding: 0;
}
li {
  margin: 20px 0;
}
a {
  color: #42b983;
}
</style>
