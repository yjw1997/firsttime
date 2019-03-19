<template>
  <div class="input">
    <div class="ib">
      {{str[0]}}：
      <Select style="width:200px" v-model="val1">
        <Option v-for="item in SelectData" :value="item">{{ item }}</Option>
      </Select>
    </div>
    <div class="ib">
      {{str[1]}}：
      <Select style="width:200px" v-model="val2">
        <Option v-for="item in statueData" :value="item">{{ item }}</Option>
      </Select>
    </div>
    <div class="ib">
      {{str[2]}}：
      <DatePicker v-model="starTime" type="datetime" placeholder="开始时间" style="width: 200px"></DatePicker>
      -
      <DatePicker v-model="endTime" type="datetime" placeholder="结束时间" style="width: 200px"></DatePicker>
      <Button type="primary" @click="search">搜索</Button>

    </div>
  </div>
</template>
<script>
  export default {
    name: 'inputlist',
    data() {
      return {
        val1: '',
        val2: '',
        starTime: '',
        endTime: ''
      }
    },
    props: {
      SelectData: {
        type: Array,
      },
      statueData: {
        type: Array,
      },
      str: {
        type: Array,
      }
    },
    methods: {
      search() {
        // 获取所有数据传到父组件
        let type = this.val1
        let status = this.val2
        let starTime = Date.parse(new Date(this.starTime))
        let endTime = Date.parse(new Date(this.endTime))
        // 限制不能只输入开始时间或者结束时间
        if(Object.is(starTime,NaN) && !Object.is(endTime,NaN) || !Object.is(starTime,NaN) && Object.is(endTime,NaN)){
          this.$Message.error('请输入您的开始时间或结束时间');
        }else{
        // 限制不能结束时间小于开始时间
        if(starTime > endTime){
          this.$Message.error('您输入的开始日期不能晚于结束日期');
        }else{
        let data = {
          type, status, starTime, endTime
        }
        //删除掉空的项
        for (var [index,val] of Object.entries(data)) {
          if(Object.is(val,NaN)){
            delete data[index]
          }else if(Object.is(val,"")){
            delete data[index]
          }
        }
        console.log(data)
        //向父组件传值
        if(Object.keys(data).length !== 0){
        this.$emit("listentochildevent",data)
        }else{
        this.$Message.error('请选择您的搜索条件');
        }
        }
        }
        }
        // 时间戳转换为时间
        // var time=new Date(parseInt(starTime)).toLocaleDateString()
        // console.log(time)
      }
  }
</script>
<style lang="less" scoped>

</style>
