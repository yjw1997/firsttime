<template>
  <div id="downloadmanagement">
    <div class="input">
      <InputList :SelectData="[]" :statueData="[]" :str="str"></InputList>
    </div>
    <div class="content">
      <Card class="card">
        <p slot="title">
          <Icon type="ios-clipboard"/>长短途汽车站
        </p>
        <div slot="extra">
          <Button size="large" icon="md-close" type="error" shape="circle"></Button>
          <Button size="large" icon="md-arrow-round-down" type="primary" shape="circle"></Button>
        </div>
        <ul class="title">
          <li>申请字段：</li>
          <li>申请时间：</li>
          <li>审批时间：</li>
          <li>审批状态：</li>
          <li>审批人：</li>
          <li>审批意见：</li>
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
      <Card class="card">
        <p slot="title">
          <Icon type="ios-clipboard"/>长短途汽车站
        </p>
        <div slot="extra">
          <Button size="large" icon="md-close" type="error" shape="circle"></Button>
          <Button size="large" icon="md-arrow-round-down" type="primary" shape="circle"></Button>
        </div>
        <ul class="title">
          <li>申请字段：</li>
          <li>申请时间：</li>
          <li>审批时间：</li>
          <li>审批状态：</li>
          <li>审批人：</li>
          <li>审批意见：</li>
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
      <Card class="card">
        <p slot="title">
          <Icon type="ios-clipboard"/>长短途汽车站
        </p>
        <div slot="extra">
          <Button size="large" icon="md-close" type="error" shape="circle"></Button>
          <Button size="large" icon="md-arrow-round-down" type="primary" shape="circle"></Button>
        </div>
        <ul class="title">
          <li>申请字段：</li>
          <li>申请时间：</li>
          <li>审批时间：</li>
          <li>审批状态：</li>
          <li>审批人：</li>
          <li>审批意见：</li>
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
      <Card class="card">
        <p slot="title">
          <Icon type="ios-clipboard"/>长短途汽车站
        </p>
        <div slot="extra">
          <Button size="large" icon="md-close" type="error" shape="circle"></Button>
          <Button size="large" icon="md-arrow-round-down" type="primary" shape="circle"></Button>
        </div>
        <ul class="title">
          <li>申请字段：</li>
          <li>申请时间：</li>
          <li>审批时间：</li>
          <li>审批状态：</li>
          <li>审批人：</li>
          <li>审批意见：</li>
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
      <Card class="card">
        <p slot="title">
          <Icon type="ios-clipboard"/>长短途汽车站
        </p>
        <div slot="extra">
          <Button size="large" icon="md-close" type="error" shape="circle"></Button>
          <Button size="large" icon="md-arrow-round-down" type="primary" shape="circle"></Button>
        </div>
        <ul class="title">
          <li>申请字段：</li>
          <li>申请时间：</li>
          <li>审批时间：</li>
          <li>审批状态：</li>
          <li>审批人：</li>
          <li>审批意见：</li>
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
      <Card class="card">
        <p slot="title">
          <Icon type="ios-clipboard"/>长短途汽车站
        </p>
        <div slot="extra">
          <Button size="large" icon="md-close" type="error" shape="circle"></Button>
          <Button size="large" icon="md-arrow-round-down" type="primary" shape="circle"></Button>
        </div>
        <ul class="title">
          <li>申请字段：</li>
          <li>申请时间：</li>
          <li>审批时间：</li>
          <li>审批状态：</li>
          <li>审批人：</li>
          <li>审批意见：</li>
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
    <div class="page">
      <Page :total="100"/>
    </div>
  </div>
</template>
<script>
import InputList from "../components/inputlist";
export default {
  name: "downloadmanagement",
  components: {
    InputList
  },
  data() {
    return {
      split3: 0.5,
      split4: 0.5,
      str: ["名称", "审批状态", "申请时间"]
    };
  }
};
</script>
<style lang="less" scoped>
.demo-split {
  height: 300px;
  border: 1px solid #dcdee2;
}
.demo-split-pane {
  padding: 10px;
}
.demo-split-pane.no-padding {
  height: 200px;
  padding: 0;
}
.content {
  margin-top: 20px;
}
.page {
  position: absolute;
  bottom: -40px;
  left: 50%;
  margin-left: -200px;
  text-align: center;
}
.card {
  width: 33%;
  display: inline-block;
  height: 220px;
}
ul {
  line-height: 20px;
  list-style: none;
  display: inline-block;
}
.title {
  width: 25%;
  text-align: right;
  font-weight: 700;
  display: inline-block;
}
.title li {
  overflow: hidden;
  text-overflow: ellipsis;
}
.cardContent {
  width: 70%;
  display: inline-block;
}
.cardContent li {
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
