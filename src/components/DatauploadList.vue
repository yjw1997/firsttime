<template>
<div id="DatauploadList">
<ul class="title">
<li>名称：</li>
<li>联系人：</li>
<li>单位名称：</li>
<li>详细地址：</li>
<li>联系电话：</li>
<li>数据用途：</li>
<li style="padding:18px 0px">上传文件：</li>
<li>备注：</li>
</ul>
<ul class="content">
    <li><Input placeholder="Enter something..." style="width: 300px" /></li>
    <li><Input placeholder="Enter something..." style="width: 300px" /></li>
    <li><Input placeholder="Enter something..." style="width: 300px" /></li>
    <li><Input placeholder="Enter something..." style="width: 300px" /></li>
    <li><Input placeholder="Enter something..." style="width: 300px" /></li>
    <li><Input placeholder="Enter something..." style="width: 300px" /></li>
    <li><DatauploadButton></DatauploadButton></li>
    <li><Input placeholder="Enter something..." style="width: 300px" type="textarea"/></li>
    </ul>
</div>
</template>
<script>
import DatauploadButton from '../components/DatauploadButton'
export default{
  name: 'DatauploadList',
  components: {
    DatauploadButton
  }
}
</script>
<style lang="less" scoped >
.title{
  display: inline-block;
  width: 25%;
  text-align: right;
  font-weight: 700;
  font-size: 15px;
  list-style: none;
  line-height: 32px;
  float: left;
}
.content{
  display: inline-block;
  width: 73%;
  text-align: left;
  list-style: none;
}
ul li{
  padding-bottom: 3px;
}
</style>
