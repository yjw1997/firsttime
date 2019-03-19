<template>
  <div id="rewriteinfo">
    <div class="ib tr" style="width:49%">
      <ul class="ul-title">
        <li>数据服务类型：</li>
        <li>元数据：</li>
        <li>服务类型版本：</li>
        <li>服务名：</li>
        <li>服务别名：</li>
        <li>摘要：</li>
      </ul>
      <ul class="ul-content">
        <li>
          <Select style="width:200px">
            <Option value="wmts" key="iwmts">wmts</Option>
          </Select>
        </li>
        <li style="text-align:center">
          <Button type="info">获取元数据</Button>
        </li>
        <li>
          <Input disabled></Input>
        </li>
        <li>
          <Input disabled></Input>
        </li>
        <li>
          <Input placeholder="请输入服务器名"></Input>
        </li>
        <li>
          <Input type="textarea"></Input>
        </li>
      </ul>
    </div>
    <div class="ib fr" style="width:49%">
      <ul class="ul-title">
        <li>发布日期：</li>
        <li>发布单位：</li>
        <li>关键词：</li>
        <li>上传缩略图：</li>
      </ul>
      <ul class="ul-content">
        <li>
          <DatePicker type="datetime" placeholder="Select date and time" style="width: 200px"></DatePicker>
        </li>
        <li>
          <Input placeholder="发布单位"></Input>
        </li>
        <li>
          <Input placeholder="关键词"></Input>
        </li>
        <li>
          <Upload action="//jsonplaceholder.typicode.com/posts/">
            <Button icon="ios-cloud-upload-outline">上传</Button>
          </Upload>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'rewrite1'
}
</script>
<style lang="less" scoped>
</style>

