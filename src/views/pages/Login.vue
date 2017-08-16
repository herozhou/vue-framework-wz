<template>
  <div class="app">
    
    <Select v-model="model1" style="width:200px">
        <Option v-for="item in cityList" :value="item.value" :key="item">{{ item.label }}</Option>
    </Select>
  </div>
</template>

<script>
export default {
        data () {
            return {
                cityList: [
                    {
                        value: 'beijing',
                        label: '北京市'
                    },
                    {
                        value: 'shanghai',
                        label: '上海市'
                    },
                    {
                        value: 'shenzhen',
                        label: '深圳市'
                    },
                    {
                        value: 'hangzhou',
                        label: '杭州市'
                    },
                    {
                        value: 'nanjing',
                        label: '南京市'
                    },
                    {
                        value: 'chongqing',
                        label: '重庆市'
                    }
                ],
                model1: ''
            }
        }
    }
</script>


<style type="text/css">
  
.ivu-select-selection {
  display: block;
  box-sizing: border-box;
  outline: 0;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: pointer;
  position: relative;
  background-color: #fff;
  border-radius: 4px;
  border: 1px solid #dddee1;
  transition: all .2s ease-in-out
}

.ivu-select-selection .ivu-select-arrow:nth-of-type(1) {
  display: none;
  cursor: pointer
}

.ivu-select-selection:hover {
  border-color: #57a3f3
}

.ivu-select-selection:hover .ivu-select-arrow:nth-of-type(1) {
  display: inline-block
}

.ivu-select-show-clear .ivu-select-selection:hover .ivu-select-arrow:nth-of-type(2) {
  display: none
}

.ivu-select-arrow {
  position: absolute;
  top: 50%;
  right: 8px;
  line-height: 1;
  margin-top: -7px;
  font-size: 14px;
  color: #80848f;
  transition: all .2s ease-in-out
}

.ivu-select-visible .ivu-select-selection {
  border-color: #57a3f3;
  outline: 0;
  box-shadow: 0 0 0 2px rgba(45,140,240,.2)
}

.ivu-select-visible .ivu-select-arrow:nth-of-type(2) {
  -ms-transform: rotate(180deg);
  transform: rotate(180deg)
}

.ivu-select-disabled .ivu-select-selection {
  background-color: #f3f3f3;
  opacity: 1;
  cursor: not-allowed;
  color: #ccc
}

.ivu-select-disabled .ivu-select-selection:hover {
  border-color: #e4e5e7
}

.ivu-select-disabled .ivu-select-selection .ivu-select-arrow:nth-of-type(1) {
  display: none
}

.ivu-select-disabled .ivu-select-selection:hover {
  border-color: #dddee1;
  box-shadow: none
}

.ivu-select-disabled .ivu-select-selection:hover .ivu-select-arrow:nth-of-type(2) {
  display: inline-block
}

.ivu-select-single .ivu-select-selection {
  height: 32px;
  position: relative
}

.ivu-select-single .ivu-select-selection .ivu-select-placeholder {
  color: #bbbec4
}

.ivu-select-single .ivu-select-selection .ivu-select-placeholder,.ivu-select-single .ivu-select-selection .ivu-select-selected-value {
  display: block;
  height: 30px;
  line-height: 30px;
  font-size: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding-left: 8px;
  padding-right: 24px
}

.ivu-select-large.ivu-select-single .ivu-select-selection {
  height: 36px
}

.ivu-select-large.ivu-select-single .ivu-select-selection .ivu-select-placeholder,.ivu-select-large.ivu-select-single .ivu-select-selection .ivu-select-selected-value {
  height: 34px;
  line-height: 34px;
  font-size: 14px
}

.ivu-select-small.ivu-select-single .ivu-select-selection {
  height: 24px;
  border-radius: 3px
}

.ivu-select-small.ivu-select-single .ivu-select-selection .ivu-select-placeholder,.ivu-select-small.ivu-select-single .ivu-select-selection .ivu-select-selected-value {
  height: 22px;
  line-height: 22px
}

.ivu-select-multiple .ivu-select-selection {
  padding: 0 24px 0 4px;
  min-height: 32px
}

.ivu-select-multiple .ivu-select-selection .ivu-select-placeholder {
  display: block;
  height: 30px;
  line-height: 30px;
  color: #bbbec4;
  font-size: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding-left: 4px;
  padding-right: 22px
}

.ivu-select-input {
  display: inline-block;
  height: 32px;
  line-height: 32px;
  padding: 0 24px 0 8px;
  font-size: 12px;
  outline: 0;
  border: none;
  box-sizing: border-box;
  color: #495060;
  background-color: transparent;
  position: relative;
  cursor: pointer
}

.ivu-select-input::-moz-placeholder {
  color: #bbbec4;
  opacity: 1
}

.ivu-select-input:-ms-input-placeholder {
  color: #bbbec4
}

.ivu-select-input::-webkit-input-placeholder {
  color: #bbbec4
}

.ivu-select-single .ivu-select-input {
  width: 100%
}

.ivu-select-large .ivu-select-input {
  font-size: 14px;
  height: 36px
}

.ivu-select-small .ivu-select-input {
  height: 24px
}

.ivu-select-multiple .ivu-select-input {
  height: 29px;
  line-height: 32px;
  padding: 0 0 0 4px
}

.ivu-select-not-found {
  text-align: center;
  color: #bbbec4
}

.ivu-select-not-found li:not([class^=ivu-]) {
  margin-bottom: 0
}

.ivu-select-loading {
  text-align: center;
  color: #bbbec4
}

.ivu-select-multiple .ivu-tag {
  margin: 3px 4px 2px 0
}

.ivu-select-item {
  margin: 0;
  line-height: normal;
  padding: 7px 16px;
  clear: both;
  color: #495060;
  font-size: 12px!important;
  white-space: nowrap;
  list-style: none;
  cursor: pointer;
  transition: background .2s ease-in-out
}

.ivu-select-item:hover {
  background: #f3f3f3
}

.ivu-select-item-focus {
  background: #f3f3f3
}

.ivu-select-item-disabled {
  color: #bbbec4;
  cursor: not-allowed
}

.ivu-select-item-disabled:hover {
  color: #bbbec4;
  background-color: #fff;
  cursor: not-allowed
}

.ivu-select-item-selected,.ivu-select-item-selected:hover {
  color: #fff;
  background: rgba(45,140,240,.9)
}

.ivu-select-item-selected.ivu-select-item-focus {
  background: rgba(40,123,211,.91)
}

.ivu-select-item-divided {
  margin-top: 5px;
  border-top: 1px solid #e9eaec
}

.ivu-select-item-divided:before {
  content: '';
  height: 5px;
  display: block;
  margin: 0 -16px;
  background-color: #fff;
  position: relative;
  top: -7px
}

.ivu-select-large .ivu-select-item {
  padding: 7px 16px 8px;
  font-size: 14px!important
}

@-moz-document url-prefix() {
  .ivu-select-item {
    white-space: normal
  }
}

.ivu-select-multiple .ivu-select-item-selected {
  color: rgba(45,140,240,.9);
  background: #fff
}

.ivu-select-multiple .ivu-select-item-focus,.ivu-select-multiple .ivu-select-item-selected:hover {
  background: #f3f3f3
}

.ivu-select-multiple .ivu-select-item-selected.ivu-select-multiple .ivu-select-item-focus {
  color: rgba(40,123,211,.91);
  background: #fff
}

.ivu-select-multiple .ivu-select-item-selected:after {
  display: inline-block;
  font-family: Ionicons;
  speak: none;
  font-style: normal;
  font-weight: 400;
  font-variant: normal;
  text-transform: none;
  text-rendering: auto;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  float: right;
  font-size: 24px;
  content: '\F3FD';
  color: rgba(45,140,240,.9)
}

.ivu-select-group {
  list-style: none;
  margin: 0;
  padding: 0
}

.ivu-select-group-title {
  padding-left: 8px;
  font-size: 12px;
  color: #999;
  height: 30px;
  line-height: 30px
}

.ivu-form-item-error .ivu-select-selection {
  border: 1px solid #ed3f14
}

.ivu-form-item-error .ivu-select-arrow {
  color: #ed3f14
}

.ivu-form-item-error .ivu-select-visible .ivu-select-selection {
  border-color: #ed3f14;
  outline: 0;
  box-shadow: 0 0 0 2px rgba(237,63,20,.2)
}

.ivu-select-dropdown {
  width: inherit;
  max-height: 200px;
  overflow: auto;
  margin: 5px 0;
  padding: 5px 0;
  background-color: #fff;
  box-sizing: border-box;
  border-radius: 4px;
  box-shadow: 0 1px 6px rgba(0,0,0,.2);
  position: absolute;
  z-index: 900
}

</style>
