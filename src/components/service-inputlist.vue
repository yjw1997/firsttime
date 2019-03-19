<template>
    <div class="input">
        <div class="ib">
        {{str1}}：
          <Select style="width:200px">
              <Option v-for="item,key in SelectData" :value="item">{{ item }}</Option>
          </Select>
        </div>
        <div class="ib">
            {{str2}}：
              <Select style="width:200px">
                  <Option v-for="item,key in statueData" :value="item">{{ item }}</Option>
              </Select>
            </div>
        <div class="ib">
            <Button type="primary">搜索</Button>
        </div>
				<div class="ib fr" style="margin-right: 200px;">
				     <Button type="primary">{{str3}}</Button>
						<Button type="primary">{{str4}}</Button>
				</div>
    </div>
</template>
<script>
  export default{
    name: 'service-inputlist',
    props: {
      SelectData:{
        type:Array,
        required:true
      },
      statueData:{
        type:Array,
        required:true
      },
      str1:{
        type: String
      },str2:{
        type: String
      },str3:{
			  type: String
			},str4:{
			  type: String,
			}
    }
  }
</script>
<style scoped lang="less">
  .ib{
    display: inline-block;
  }

</style>
