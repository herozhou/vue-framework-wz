<template>

<div>
    

     <Row>
        <Col span="24" >
           
           <div style="" class="doc-header">
                       <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
                    <Form-item prop="user">
                        <Input type="text" v-model="formInline.user" placeholder="Username">
                            <Icon type="ios-person-outline" slot="prepend"></Icon>
                        </Input>
                    </Form-item>
                    <Form-item prop="password">
                        <Input type="password" v-model="formInline.password" placeholder="Password">
                            <Icon type="ios-locked-outline" slot="prepend"></Icon>
                        </Input>
                    </Form-item>
                    <Form-item>
                        <Button type="primary" @click="handleSubmit('formInline')">登录</Button>
                    </Form-item>
                </Form>

            </div>
            <div style="" class="doc-content">
                <h5>行内表单</h5>
        <p>设置属性 inline，表单元素可以水平排列。</p>

            </div>
        </Col>




    </Row>




  <Row>
        <Col span="24" >
           
           <div style="" class="doc-header">
                      <Form :model="formItem" :label-width="80">
        <Form-item label="输入框">
            <Input v-model="formItem.input" placeholder="请输入"></Input>
        </Form-item>
        <Form-item label="选择器">
            <Select v-model="formItem.select" placeholder="请选择">
                <Option value="beijing">北京市</Option>
                <Option value="shanghai">上海市</Option>
                <Option value="shenzhen">深圳市</Option>
            </Select>
        </Form-item>
        <Form-item label="日期控件">
                    <Date-picker type="date" placeholder="选择日期" v-model="formItem.date"></Date-picker>
                    <Time-picker type="time" placeholder="选择时间" v-model="formItem.time"></Time-picker>
        </Form-item>
        <Form-item label="单选框">
            <Radio-group v-model="formItem.radio">
                <Radio label="male">男</Radio>
                <Radio label="female">女</Radio>
            </Radio-group>
        </Form-item>
        <Form-item label="多选框">
            <Checkbox-group v-model="formItem.checkbox">
                <Checkbox label="吃饭"></Checkbox>
                <Checkbox label="睡觉"></Checkbox>
                <Checkbox label="跑步"></Checkbox>
                <Checkbox label="看电影"></Checkbox>
            </Checkbox-group>
        </Form-item>
        <Form-item label="开关">
            <iSwitch v-model="formItem.switch" size="large">
                <span slot="open">开启</span>
                <span slot="close">关闭</span>
            </iSwitch>
        </Form-item>
        <Form-item label="滑块">
            <Slider v-model="formItem.slider" range></Slider>
        </Form-item>
        <Form-item label="文本域">
            <Input v-model="formItem.textarea" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入..."></Input>
        </Form-item>
        <Form-item>
            <Button type="primary">提交</Button>
            <Button type="ghost" style="margin-left: 8px">取消</Button>
        </Form-item>
    </Form>

            </div>
            <div style="" class="doc-content">
                <h5>表单控件</h5>
        <p>在 Form 内，每个表单域由 Form-item 组成，可包含的控件有：Input、Radio、Checkbox、Switch、Select、Slider、DatePicker、TimePicker、Cascader、Transfer、InputNumber、Rate、Upload。</p>
<p>给 Form-item 设置属性 label 可以显示表单域的标签，需要给 Form 设置 label-width。 </p>
            </div>
        </Col>



    </Row>




    <Row>
        <Col span="24" >
           
           <div style="" class="doc-header">
                       <Form :model="formLeft" label-position="left" :label-width="100">
        <Form-item label="标题">
            <Input v-model="formLeft.input1"></Input>
        </Form-item>
        <Form-item label="标题名称">
            <Input v-model="formLeft.input2"></Input>
        </Form-item>
        <Form-item label="标题名称对齐">
            <Input v-model="formLeft.input3"></Input>
        </Form-item>
    </Form>
    <Form :model="formRight" label-position="right" :label-width="100">
        <Form-item label="标题">
            <Input v-model="formRight.input1"></Input>
        </Form-item>
        <Form-item label="标题名称">
            <Input v-model="formRight.input2"></Input>
        </Form-item>
        <Form-item label="标题名称对齐">
            <Input v-model="formRight.input3"></Input>
        </Form-item>
    </Form>
    <Form :model="formTop" label-position="top">
        <Form-item label="标题">
            <Input v-model="formTop.input1"></Input>
        </Form-item>
        <Form-item label="标题名称">
            <Input v-model="formTop.input2"></Input>
        </Form-item>
        <Form-item label="标题名称对齐">
            <Input v-model="formTop.input3"></Input>
        </Form-item>
    </Form>

            </div>
            <div style="" class="doc-content">
                <h5>对齐方式</h5>
        <p>设置属性 label-position，可以改变表单域标签的位置，left 为左对齐，right 为右对齐，top 会置于表单域顶部</p>
            </div>
        </Col>

    </Row>



    <Row>
        <Col span="24" >
           
           <div style="" class="doc-header">
                <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
        <Form-item label="姓名" prop="name">
            <Input v-model="formValidate.name" placeholder="请输入姓名"></Input>
        </Form-item>
        <Form-item label="邮箱" prop="mail">
            <Input v-model="formValidate.mail" placeholder="请输入邮箱"></Input>
        </Form-item>
        <Form-item label="城市" prop="city">
            <Select v-model="formValidate.city" placeholder="请选择所在地">
                <Option value="beijing">北京市</Option>
                <Option value="shanghai">上海市</Option>
                <Option value="shenzhen">深圳市</Option>
            </Select>
        </Form-item>
        <Form-item label="选择日期">
            <Row>
                <Col span="11">
                    <Form-item prop="date">
                        <Date-picker type="date" placeholder="选择日期" v-model="formValidate.date"></Date-picker>
                    </Form-item>
                </Col>
                <Col span="2" style="text-align: center">-</Col>
                <Col span="11">
                    <Form-item prop="time">
                        <Time-picker type="time" placeholder="选择时间" v-model="formValidate.time"></Time-picker>
                    </Form-item>
                </Col>
            </Row>
        </Form-item>
        <Form-item label="性别" prop="gender">
            <Radio-group v-model="formValidate.gender">
                <Radio label="male">男</Radio>
                <Radio label="female">女</Radio>
            </Radio-group>
        </Form-item>
        <Form-item label="爱好" prop="interest">
            <Checkbox-group v-model="formValidate.interest">
                <Checkbox label="吃饭"></Checkbox>
                <Checkbox label="睡觉"></Checkbox>
                <Checkbox label="跑步"></Checkbox>
                <Checkbox label="看电影"></Checkbox>
            </Checkbox-group>
        </Form-item>
        <Form-item label="介绍" prop="desc">
            <Input v-model="formValidate.desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入..."></Input>
        </Form-item>
        <Form-item>
            <Button type="primary" @click="handleSubmit('formValidate')">提交</Button>
            <Button type="ghost" @click="handleReset('formValidate')" style="margin-left: 8px">重置</Button>
        </Form-item>
    </Form>
    

            </div>
            <div style="" class="doc-content">
                <h5>表单验证</h5>
        <p>Form 组件基于  async-validator 实现的数据验证，给 Form 设置属性 rules，同时给需要验证的 Form-item 设置属性 prop 指向对应字段即可。</p>
            </div>
        </Col>


    </Row>



    <Row>
        <Col span="24" >
           
           <div style="" class="doc-header">
                 <Form ref="formDynamic" :model="formDynamic" :label-width="80">
        <Form-item
            v-for="(item, index) in formDynamic.items"
            :key="index"
            :label="'项目' + (index + 1)"
            :prop="'items.' + index + '.value'"
            :rules="{required: true, message: '项目' + (index + 1) +'不能为空', trigger: 'blur'}">

                    <Input type="text" v-model="item.value" placeholder="请输入..."></Input>
                    <Button type="ghost" @click="handleRemove(index)" size='small'>删除</Button>
        </Form-item>
        <Form-item>
            <Row>
                    <Button type="dashed" long @click="handleAdd" icon="plus-round">新增</Button>
            </Row>
        </Form-item>
        <Form-item>
            <Button type="primary" @click="handleSubmit('formDynamic')">提交</Button>
            <Button type="ghost" @click="handleReset('formDynamic')" style="margin-left: 8px">重置</Button>
        </Form-item>
    </Form>
    

            </div>
            <div style="" class="doc-content">
                <h5>动态增减表单项</h5>
        <p>当需要动态维护 Form-item 时，也可以直接给 Form-item 设置属性 rules 来单独为该域做验证</p>
        <p>动态设置 Form-item 的 prop 属性时，会依据上层的 Form 组件的 model 来获取，查看示例代码。</p>
        <p>Form-item 还可以独立设置 required、error 等属性，详见 API。</p>

            </div>
        </Col>

    </Row>
  
</div>

</template>
<script>
    export default {
        data () {
            return {
                formItem: {
                    input: '',
                    select: '',
                    radio: 'male',
                    checkbox: [],
                    switch: true,
                    date: '',
                    time: '',
                    slider: [20, 50],
                    textarea: ''
                },
                 formInline: {
                    user: '',
                    password: ''
                },
                ruleInline: {
                    user: [
                        { required: true, message: '请填写用户名', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请填写密码', trigger: 'blur' },
                        { type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur' }
                    ]
                },
                 formLeft: {
                    input1: '',
                    input2: '',
                    input3: ''
                },
                formRight: {
                    input1: '',
                    input2: '',
                    input3: ''
                },
                formTop: {
                    input1: '',
                    input2: '',
                    input3: ''
                },
                formValidate: {
                    name: '',
                    mail: '',
                    city: '',
                    gender: '',
                    interest: [],
                    date: '',
                    time: '',
                    desc: ''
                },
                ruleValidate: {
                    name: [
                        { required: true, message: '姓名不能为空', trigger: 'blur' }
                    ],
                    mail: [
                        { required: true, message: '邮箱不能为空', trigger: 'blur' },
                        { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }
                    ],
                    city: [
                        { required: true, message: '请选择城市', trigger: 'change' }
                    ],
                    gender: [
                        { required: true, message: '请选择性别', trigger: 'change' }
                    ],
                    interest: [
                        { required: true, type: 'array', min: 1, message: '至少选择一个爱好', trigger: 'change' },
                        { type: 'array', max: 2, message: '最多选择两个爱好', trigger: 'change' }
                    ],
                    date: [
                        { required: true, type: 'date', message: '请选择日期', trigger: 'change' }
                    ],
                    time: [
                        { required: true, type: 'date', message: '请选择时间', trigger: 'change' }
                    ],
                    desc: [
                        { required: true, message: '请输入个人介绍', trigger: 'blur' },
                        { type: 'string', min: 20, message: '介绍不能少于20字', trigger: 'blur' }
                    ]
                },
                formDynamic: {
                    items: [
                        {
                            value: ''
                        }
                    ]
                },
            }   
        },//data
      methods: {
            handleSubmit(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('提交成功!');
                    } else {
                        this.$Message.error('表单验证失败!');
                    }
                })
            },
             handleReset (name) {
                this.$refs[name].resetFields();
            },
            handleAdd () {
                this.formDynamic.items.push({
                    value: ''
                });
            },
            handleRemove (index) {
                this.formDynamic.items.splice(index, 1);
            },
        }
           
    }
</script>



