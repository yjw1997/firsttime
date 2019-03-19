<template>
    <div id="text3">
        <Table :columns="columns1" :data="data1"></Table>
    </div>
  </template>
  <script>
    export default {
        data () {
            return {
                columns1: [
                    {
                        title: '级别',
                        key: 'name'
                    },
                    {
                        title: '比例尺',
                        key: 'age'
                    },
                    {
                        title: '切图起始点',
                        key: 'address'
                    },
                    {
                        title: '瓦片宽',
                        key: 'width'
                    },
                    {
                        title: '瓦片高',
                        key: 'height'
                    }
                ],
                data1: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        date: '2016-10-03'
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park',
                        date: '2016-10-01'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        date: '2016-10-02'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        date: '2016-10-04'
                    }
                ]
            }
        }
    }
  </script>
  <style lang="less" scoped>
    ul{
      /* width: 49%; */
      line-height: 30px;
      display: inline-block;
      list-style: none;
      text-align:left;
      font-size:15px;
        padding: 0px 20px;
    }
  </style>
