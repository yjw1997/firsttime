<template>
  <div id="applicationservice">
    <div class="serviceinput">
      <InputList
        :SelectData="SelectData"
        :statueData="statueData"
        :str1="str[0]"
        :str2="str[1]"
        :str3="str[2]"
        :str4="str[3]"
      ></InputList>
    </div>
    <div class="table">
      <Table border :columns="columns1" :data="data1"></Table>
    </div>
    <div class="page">
      <Page :total="100"/>
    </div>
    <Modal
      v-model="rewriteModal"
      title="服务详情预览"
      style="text-align:center;"
      :mask-closable="false"
      :closable="false"
      width="850"
    >
      <Showtops :show="false"></Showtops>
      <Rewrite :rewriteModal="rewriteModal" :info = "info"></Rewrite>
      <Comment :comment = "comment"></Comment>
    </Modal>
  </div>
</template>
<script>
import InputList from "../components/service-inputlist";
import Showtops from "../components/show-taps";
import Rewrite from "../components/rewrite-modal";
import Comment from "../components/comment";
export default {
  name: "applicationservice",
  components: {
    InputList,
    Showtops,
    Rewrite,
    Comment
  },
  data() {
    return {
      showComment: false,
      info:false,
      comment: false,
      rewriteModal: false,
      str: ["审批状态", "服务状态", "服务申请", "退订服务"],
      rewriteModal: false,
      statueData: ["所有", "开", "关"],
      SelectData: ["未通过", "已通过"],
      columns1: [
        {
          title: "编号",
          key: "number"
        },
        {
          title: "服务名称",
          key: "name"
        },
        {
          title: "服务别名",
          key: "name1"
        },
        {
          title: "服务地址",
          key: "address"
        },
        {
          title: "服务发布单位",
          key: "serviceunit"
        },
        {
          title: "申请时间",
          key: "time"
        },
        {
          title: "审批状态",
          key: "status",
          render: (h, params) => {
            if (params.row.status === "未通过") {
              return h(
                "span",
                {
                  style: {
                    color: "#FF7D41"
                  }
                },
                params.row.status
              );
            } else if (params.row.status === "已通过") {
              return h(
                "span",
                {
                  style: {
                    color: "#169BD5"
                  }
                },
                params.row.status
              );
            }
          }
        },
        {
          title: "操作",
          key: "action",
          width: 250,
          fixed: "right",
          align: "center",
          render: (h, params) => {
            return h("div", [
              h(
                "Button",
                {
                  props: {
                    type: "info",
                    size: "small"
                  },
                  on: {
                    click: () => {
                      this.rewriteModal = true;
                    }
                  }
                },
                "预览"
              ),
              h(
                "Button",
                {
                  props: {
                    type: "warning",
                    size: "small"
                  },
                  on: {
                    click: () => {
                      this.rewriteModal = true
                    }
                  }
                },
                "元数据"
              ),
              h(
                "Button",
                {
                  props: {
                    type: "success",
                    size: "small"
                  },
                  on: {
                    click: () => {
                      this.comment = true
                    }
                  }
                },
                "评论"
              ),
              h(
                "Button",
                {
                  props: {
                    type: "error",
                    size: "small"
                  },
                  on: {
                    click: () => {}
                  }
                },
                "退订"
              )
            ]);
          }
        }
      ],
      data1: [
        {
          number: "1",
          name: "服务申请",
          name1: "服务名1",
          type: "类型2",
          address: "福州单位",
          serviceunit: "福州单位",
          time: "2018-5-22 11:52:22",
          status: "未通过"
        },
        {
          number: "2",
          name: "服务申请",
          name1: "服务名1",
          type: "类型2",
          address: "福州单位",
          serviceunit: "福州单位",
          time: "2019-6-22 11:52:22",
          status: "已通过"
        }
      ]
    };
  }
};
</script>
<style lang="less" scoped>
.page {
  position: absolute;
  bottom: -30%;
  left: 50%;
  margin-left: -200px;
  text-align: center;
}
.table {
  margin-top: 20px;
}
.serviceinput {
  margin-top: 15px;
}
</style>
