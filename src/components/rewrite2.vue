<template>
  <div id="rewriteinfo">
    <div class="ib tr" style="width:49%">
      <ul class="ul-title">
        <li>单位名称：</li>
        <li>单位地址：</li>
        <li>联系人：</li>
        <li>联系人职位：</li>
        <li>国家：</li>
        <li>省（直辖市）：</li>
      </ul>
      <ul class="ul-content">
        <li>
          <Input placeholder="发布单位" />
        </li>
        <li style="text-align:center">
          <Input placeholder="发布单位" />
        </li>
        <li>
          <Input placeholder="发布单位" />
        </li>
        <li>
          <Input placeholder="发布单位" />
        </li>
        <li>
          <Input placeholder="发布单位" />
        </li>
        <li>
          <Input placeholder="发布单位" />
        </li>
      </ul>
    </div>
    <div class="ib fr" style="width:49%">
      <ul class="ul-title">
        <li>城市：</li>
        <li>详细地址：</li>
        <li>邮编：</li>
        <li>电话：</li>
        <li>传真：</li>
        <li>电子邮箱：</li>
      </ul>
      <ul class="ul-content">
        <li>
          <DatePicker
            type="datetime"
            placeholder="Select date and time"
            style="width: 200px"
          ></DatePicker>
        </li>
        <li>
          <Input placeholder="发布单位" />
        </li>
        <li>
          <Input placeholder="关键词" />
        </li>
        <li>
           <Input placeholder="关键词" />
        </li>
        <li>
           <Input placeholder="关键词" />
        </li>
        <li>
           <Input placeholder="关键词" />
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="less" scoped>
</style>
