<style scoped>
    .expand-row{
        margin-bottom: 16px;
    }
</style>
<template>
    <div>
        <tr v-for="sub in row">
            <td >{{sub.id}}</td>
            <td >{{sub.name}}</td>
            <td>{{sub.parent_id}}</td>
        </tr>
    </div>
</template>
<script>
    export default {
      props: {
        row: Object

      },
      data: function () {
        console.info(this.row);
        return {
          columns1: [
            {
              title: '序号',
              key: 'id',
              //width: 60
            },
            {
              title: '名称',
              key: 'name'
            }, {
              title: 'parent_id',
              key: 'parent_id'
            },
            {
              title: '操作',
              key: 'action',
              width: 150,
              align: 'center',
              render: (ce, params) => {
                // console.info(ce);
                //   console.info(params);
                return ce('div', [
                  ce('Button', {
                    props: {
                      type: 'primary',
                      size: 'small'
                    },
                    style: {
                      marginRight: '5px'
                    },
                    on: {
                      click: () => {
                        this.addFrom.titleN = "编辑";
                        let formItemN = JSON.parse(JSON.stringify(params.row))
                        console.info(formItemN);
                        delete formItemN['_index'];
                        delete formItemN['_rowKey'];
                        //   delete formItemN['defaultList'];

                        Object.assign(this.addFrom.formItem, formItemN);

                        console.info(this.addFrom.formItem);
                        this.$router.push({name: '操作分类', params: this.addFrom.formItem});
                        this.loading = true;
                      }
                    }
                  }, '编辑'), ce('Button', {
                    props: {
                      type: 'error',
                      size: 'small'
                    },
                    on: {
                      click: () => {
                        this.remove(params)
                      }
                    }
                  }, '删除')

                ]);
              }
            }

          ],
        }
      }

    };
</script>