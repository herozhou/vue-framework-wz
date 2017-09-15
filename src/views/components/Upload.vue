<template>
   


<div>

		<Row>
        <Col :md="4" >
           
           <div style="" class="doc-header">

     <Upload action="//jsonplaceholder.typicode.com/posts/">
        <Button type="ghost" icon="ios-cloud-upload-outline">上传文件</Button>
    </Upload>

            </div>
            <div style="" class="doc-content">
                <h5>自定义时间轴点</h5>
        <p>接受一个 slot 来自定义轴点的内容，比如一个图标。</p>
            </div>

             
        </Col>


        <Col :md="8">
           

<div class="highlight" style="background: #f0f0f0"><pre style="line-height: 125%"><span style="color: #062873; font-weight: bold">&lt;template&gt;</span>
    <span style="color: #062873; font-weight: bold">&lt;Upload</span> <span style="color: #4070a0">action=&quot;//jsonplaceholder.typicode.com/posts/&quot;</span><span style="color: #062873; font-weight: bold">&gt;</span>
        <span style="color: #062873; font-weight: bold">&lt;Button</span> <span style="color: #4070a0">type=&quot;ghost&quot;</span> <span style="color: #4070a0">icon=&quot;ios-cloud-upload-outline&quot;</span><span style="color: #062873; font-weight: bold">&gt;</span>上传文件<span style="color: #062873; font-weight: bold">&lt;/Button&gt;</span>
    <span style="color: #062873; font-weight: bold">&lt;/Upload&gt;</span>
<span style="color: #062873; font-weight: bold">&lt;/template&gt;</span>
<span style="color: #062873; font-weight: bold">&lt;script&gt;</span>
    export default {
        
    }
<span style="color: #062873; font-weight: bold">&lt;/script&gt;</span>
</pre></div>

        </Col>



    </Row>


    <Row>
        <Col :md="4" >
           
           <div style="" class="doc-header">

    <Upload
        multiple
        action="//jsonplaceholder.typicode.com/posts/">
        <Button type="ghost" icon="ios-cloud-upload-outline">上传文件</Button>
    </Upload>

            </div>
            <div style="" class="doc-content">
                <h5>多选</h5>
        <p>设置属性 multiple，可以选择多个文件。</p>

            </div>

             
        </Col>


        <Col :md="8">
           

<div class="highlight" style="background: #f0f0f0"><pre style="line-height: 125%"><span style="color: #062873; font-weight: bold">&lt;template&gt;</span>
    <span style="color: #062873; font-weight: bold">&lt;Upload</span>
        <span style="color: #4070a0">multiple</span>
        <span style="color: #4070a0">action=&quot;//jsonplaceholder.typicode.com/posts/&quot;</span><span style="color: #062873; font-weight: bold">&gt;</span>
        <span style="color: #062873; font-weight: bold">&lt;Button</span> <span style="color: #4070a0">type=&quot;ghost&quot;</span> <span style="color: #4070a0">icon=&quot;ios-cloud-upload-outline&quot;</span><span style="color: #062873; font-weight: bold">&gt;</span>上传文件<span style="color: #062873; font-weight: bold">&lt;/Button&gt;</span>
    <span style="color: #062873; font-weight: bold">&lt;/Upload&gt;</span>
<span style="color: #062873; font-weight: bold">&lt;/template&gt;</span>
<span style="color: #062873; font-weight: bold">&lt;script&gt;</span>
    export default {
        
    }
<span style="color: #062873; font-weight: bold">&lt;/script&gt;</span>
</pre></div>

        </Col>



    </Row>



    </Row>


    <Row>
        <Col :md="4" >
           
           <div style="" class="doc-header">

    <div>
        <Upload
            :before-upload="handleUpload"
            action="//jsonplaceholder.typicode.com/posts/">
            <Button type="ghost" icon="ios-cloud-upload-outline">选择要上传文件的文件</Button>
        </Upload>
        <div v-if="file !== null">待上传文件：{{ file.name }} <Button type="text" @click="upload" :loading="loadingStatus">{{ loadingStatus ? '上传中' : '点击上传' }}</Button></div>
    </div>

            </div>
            <div style="" class="doc-content">
                <h5>手动上传</h5>
        <p> 绑定 before-upload，并返回false，可以阻止默认上传流程，手动控制文件上传。。</p>

            </div>

             
        </Col>


        <Col :md="8">
           

<div class="highlight" style="background: #f0f0f0"><pre style="line-height: 125%"><span style="color: #062873; font-weight: bold">&lt;template&gt;</span>
    <span style="color: #062873; font-weight: bold">&lt;div&gt;</span>
        <span style="color: #062873; font-weight: bold">&lt;Upload</span>
            <span style="color: #4070a0">:before-upload=&quot;handleUpload&quot;</span>
            <span style="color: #4070a0">action=&quot;//jsonplaceholder.typicode.com/posts/&quot;</span><span style="color: #062873; font-weight: bold">&gt;</span>
            <span style="color: #062873; font-weight: bold">&lt;Button</span> <span style="color: #4070a0">type=&quot;ghost&quot;</span> <span style="color: #4070a0">icon=&quot;ios-cloud-upload-outline&quot;</span><span style="color: #062873; font-weight: bold">&gt;</span>选择要上传文件的文件<span style="color: #062873; font-weight: bold">&lt;/Button&gt;</span>
        <span style="color: #062873; font-weight: bold">&lt;/Upload&gt;</span>
        <span style="color: #062873; font-weight: bold">&lt;div</span> <span style="color: #4070a0">v-if=&quot;file !== null&quot;</span><span style="color: #062873; font-weight: bold">&gt;</span>待上传文件：<span style="">{{</span> file.name }} <span style="color: #062873; font-weight: bold">&lt;Button</span> <span style="color: #4070a0">type=&quot;text&quot;</span> <span style="">@</span><span style="color: #4070a0">click=&quot;upload&quot;</span> <span style="color: #4070a0">:loading=&quot;loadingStatus&quot;</span><span style="color: #062873; font-weight: bold">&gt;</span><span style="">{{</span> loadingStatus ? &#39;上传中&#39; : &#39;点击上传&#39; }}<span style="color: #062873; font-weight: bold">&lt;/Button&gt;&lt;/div&gt;</span>
    <span style="color: #062873; font-weight: bold">&lt;/div&gt;</span>
<span style="color: #062873; font-weight: bold">&lt;/template&gt;</span>
<span style="color: #062873; font-weight: bold">&lt;script&gt;</span>
    export default <span style="">{</span>
        data () <span style="">{</span>
            return <span style="">{</span>
                file: null,
                loadingStatus: false
            }
        },
        methods: <span style="">{</span>
            handleUpload (file) <span style="">{</span>
                this.file = file;
                return false;
            },
            upload () <span style="">{</span>
                this.loadingStatus = true;
                setTimeout(() =&gt; <span style="">{</span>
                    this.file = null;
                    this.loadingStatus = false;
                    this.$<span style="color: #bb60d5">Message</span>.<span style="color: #bb60d5">success</span>(<span style="color: #4070a0">&#39;上传成功&#39;</span>)
                }, 1500);
            }
        }
    }
<span style="color: #062873; font-weight: bold">&lt;/script&gt;</span>
</pre></div>
        </Col>



    </Row>




    <Row>
        <Col :md="4" >
           
           <div style="" class="doc-header">

    <Upload
        multiple
        type="drag"
        action="//jsonplaceholder.typicode.com/posts/">
        <div style="padding: 20px 0">
            <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
            <p>点击或将文件拖拽到这里上传</p>
        </div>
    </Upload>

            </div>
            <div style="" class="doc-content">
                <h5>拖拽上传</h5>
        <p>设置属性 type 为 drag，可以拖拽上传。</p>

            </div>


        </Col>


        <Col :md="8">
           

<div class="highlight" style="background: #f0f0f0"><pre style="line-height: 125%"><span style="color: #062873; font-weight: bold">&lt;template&gt;</span>
    <span style="color: #062873; font-weight: bold">&lt;Upload</span>
        <span style="">multiple</span>
        <span style="color: #4070a0">type=&quot;drag&quot;</span>
        <span style="color: #4070a0">action=&quot;//jsonplaceholder.typicode.com/posts/&quot;</span><span style="color: #062873; font-weight: bold">&gt;</span>
        <span style="color: #062873; font-weight: bold">&lt;div</span> <span style="color: #4070a0">style=&quot;padding: 20px 0&quot;</span><span style="color: #062873; font-weight: bold">&gt;</span>
            <span style="color: #062873; font-weight: bold">&lt;Icon</span> <span style="color: #4070a0">type=&quot;ios-cloud-upload&quot;</span> <span style="color: #4070a0">size=&quot;52&quot;</span> <span style="color: #4070a0">style=&quot;color: #3399ff&quot;</span><span style="color: #062873; font-weight: bold">&gt;&lt;/Icon&gt;</span>
            <span style="color: #062873; font-weight: bold">&lt;p&gt;</span>点击或将文件拖拽到这里上传<span style="color: #062873; font-weight: bold">&lt;/p&gt;</span>
        <span style="color: #062873; font-weight: bold">&lt;/div&gt;</span>
    <span style="color: #062873; font-weight: bold">&lt;/Upload&gt;</span>
<span style="color: #062873; font-weight: bold">&lt;/template&gt;</span>
<span style="color: #062873; font-weight: bold">&lt;script&gt;</span>
    export default {
        
    }
<span style="color: #062873; font-weight: bold">&lt;/script&gt;</span>
</pre></div>
        </Col>



    </Row>


        <Row>
        <Col :md="4" >
           
           <div style="" class="doc-header">

    <div>
         <div class="demo-upload-list" v-for="item in uploadList">
        <template v-if="item.status === 'finished'">
            <img :src="item.url">
            <div class="demo-upload-list-cover">
                <Icon type="ios-eye-outline" @click.native="handleView(item.name)"></Icon>
                <Icon type="ios-trash-outline" @click.native="handleRemove(item)"></Icon>
            </div>
        </template>
        <template v-else>
            <Progress v-if="item.showProgress" :percent="item.percentage" hide-info></Progress>
        </template>
    </div>
    <Upload
        ref="upload"
        :show-upload-list="false"
        :default-file-list="defaultList"
        :on-success="handleSuccess"
        :format="['jpg','jpeg','png']"
        :max-size="2048"
        :on-format-error="handleFormatError"
        :on-exceeded-size="handleMaxSize"
        :before-upload="handleBeforeUpload"
        multiple
        type="drag"
        action="//jsonplaceholder.typicode.com/posts/"
        style="display: inline-block;width:58px;">
        <div style="width: 58px;height:58px;line-height: 58px;">
            <Icon type="camera" size="20"></Icon>
        </div>
    </Upload>
    <Modal title="查看图片" v-model="visible">
        <img :src="'https://o5wwk8baw.qnssl.com/' + imgName + '/large'" v-if="visible" style="width: 100%">
    </Modal>
    </div>

            </div>
            <div style="" class="doc-content">
                <h5>自定义上传列表</h5>
        <p>可以自由控制上传列表，完成各种业务逻辑，示例是一个照片墙，可以查看大图和删除。</p>
 <p>设置属性 show-upload-list 为 false，可以不显示默认的上传列表</p>        
<p>设置属性 default-file-list 设置默认已上传的列表。 </p>
 <p>通过 on-success 等属性来控制完整的上传过程，详见API。</p>
 <p>另外，可以通过丰富的配置，来定制上传需求，本例中包含了：</p>
   <p>文件必须是 jpg 或 png 格式的图片。</p>
  <p>最多上传5张图片。</p>
 <p>每个文件大小不超过 2M。 </p>
            </div>

             
        </Col>


        <Col :md="8">
           

<div class="highlight" style="background: #f0f0f0"><pre style="line-height: 125%"><span style="color: #062873; font-weight: bold">&lt;template&gt;</span>
    <span style="color: #062873; font-weight: bold">&lt;div</span> <span style="color: #4070a0">class=&quot;demo-upload-list&quot;</span> <span style="color: #4070a0">v-for=&quot;item in uploadList&quot;</span><span style="color: #062873; font-weight: bold">&gt;</span>
        <span style="color: #062873; font-weight: bold">&lt;template</span> <span style="color: #4070a0">v-if=&quot;item.status === &#39;finished&#39;&quot;</span><span style="color: #062873; font-weight: bold">&gt;</span>
            <span style="color: #062873; font-weight: bold">&lt;img</span> <span style="color: #4070a0">:src=&quot;item.url&quot;</span><span style="color: #062873; font-weight: bold">&gt;</span>
            <span style="color: #062873; font-weight: bold">&lt;div</span> <span style="color: #4070a0">class=&quot;demo-upload-list-cover&quot;</span><span style="color: #062873; font-weight: bold">&gt;</span>
                <span style="color: #062873; font-weight: bold">&lt;Icon</span> <span style="color: #4070a0">type=&quot;ios-eye-outline&quot;</span> <span style="">@</span><span style="color: #4070a0">click.native=&quot;handleView(item.name)&quot;</span><span style="color: #062873; font-weight: bold">&gt;&lt;/Icon&gt;</span>
                <span style="color: #062873; font-weight: bold">&lt;Icon</span> <span style="color: #4070a0">type=&quot;ios-trash-outline&quot;</span> <span style="">@</span><span style="color: #4070a0">click.native=&quot;handleRemove(item)&quot;</span><span style="color: #062873; font-weight: bold">&gt;&lt;/Icon&gt;</span>
            <span style="color: #062873; font-weight: bold">&lt;/div&gt;</span>
        <span style="color: #062873; font-weight: bold">&lt;/template&gt;</span>
        <span style="color: #062873; font-weight: bold">&lt;template</span> <span style="">v-else</span><span style="color: #062873; font-weight: bold">&gt;</span>
            <span style="color: #062873; font-weight: bold">&lt;Progress</span> <span style="color: #4070a0">v-if=&quot;item.showProgress&quot;</span> <span style="color: #4070a0">:percent=&quot;item.percentage&quot;</span> <span style="">hide-info</span><span style="color: #062873; font-weight: bold">&gt;&lt;/Progress&gt;</span>
        <span style="color: #062873; font-weight: bold">&lt;/template&gt;</span>
    <span style="color: #062873; font-weight: bold">&lt;/div&gt;</span>
    <span style="color: #062873; font-weight: bold">&lt;Upload</span>
        <span style="color: #4070a0">ref=&quot;upload&quot;</span>
        <span style="color: #4070a0">:show-upload-list=&quot;false&quot;</span>
        <span style="color: #4070a0">:default-file-list=&quot;defaultList&quot;</span>
        <span style="color: #4070a0">:on-success=&quot;handleSuccess&quot;</span>
        <span style="color: #4070a0">:format=&quot;[&#39;jpg&#39;,&#39;jpeg&#39;,&#39;png&#39;]&quot;</span>
        <span style="color: #4070a0">:max-size=&quot;2048&quot;</span>
        <span style="color: #4070a0">:on-format-error=&quot;handleFormatError&quot;</span>
        <span style="color: #4070a0">:on-exceeded-size=&quot;handleMaxSize&quot;</span>
        <span style="color: #4070a0">:before-upload=&quot;handleBeforeUpload&quot;</span>
        <span style="">multiple</span>
        <span style="color: #4070a0">type=&quot;drag&quot;</span>
        <span style="color: #4070a0">action=&quot;//jsonplaceholder.typicode.com/posts/&quot;</span>
        <span style="color: #4070a0">style=&quot;display: inline-block;width:58px;&quot;</span><span style="color: #062873; font-weight: bold">&gt;</span>
        <span style="color: #062873; font-weight: bold">&lt;div</span> <span style="color: #4070a0">style=&quot;width: 58px;height:58px;line-height: 58px;&quot;</span><span style="color: #062873; font-weight: bold">&gt;</span>
            <span style="color: #062873; font-weight: bold">&lt;Icon</span> <span style="color: #4070a0">type=&quot;camera&quot;</span> <span style="color: #4070a0">size=&quot;20&quot;</span><span style="color: #062873; font-weight: bold">&gt;&lt;/Icon&gt;</span>
        <span style="color: #062873; font-weight: bold">&lt;/div&gt;</span>
    <span style="color: #062873; font-weight: bold">&lt;/Upload&gt;</span>
    <span style="color: #062873; font-weight: bold">&lt;Modal</span> <span style="color: #4070a0">title=&quot;查看图片&quot;</span> <span style="color: #4070a0">v-model=&quot;visible&quot;</span><span style="color: #062873; font-weight: bold">&gt;</span>
        <span style="color: #062873; font-weight: bold">&lt;img</span> <span style="color: #4070a0">:src=&quot;&#39;https://o5wwk8baw.qnssl.com/&#39; + imgName + &#39;/large&#39;&quot;</span> <span style="color: #4070a0">v-if=&quot;visible&quot;</span> <span style="color: #4070a0">style=&quot;width: 100%&quot;</span><span style="color: #062873; font-weight: bold">&gt;</span>
    <span style="color: #062873; font-weight: bold">&lt;/Modal&gt;</span>
<span style="color: #062873; font-weight: bold">&lt;/template&gt;</span>
<span style="color: #062873; font-weight: bold">&lt;script&gt;</span>
    export default <span style="">{</span>
        data () <span style="">{</span>
            return <span style="">{</span>
                defaultList: [
                    <span style="">{</span>
                        &#39;name&#39;: &#39;a42bdcc1178e62b4694c830f028db5c0&#39;,
                        &#39;url&#39;: &#39;https://o5wwk8baw.qnssl.com/a42bdcc1178e62b4694c830f028db5c0/avatar&#39;
                    },
                    <span style="">{</span>
                        &#39;name&#39;: &#39;bc7521e033abdd1e92222d733590f104&#39;,
                        &#39;url&#39;: &#39;https://o5wwk8baw.qnssl.com/bc7521e033abdd1e92222d733590f104/avatar&#39;
                    }
                ],
                imgName: &#39;&#39;,
                visible: false,
                uploadList: []
            }
        },
        methods: <span style="">{</span>
            handleView (name) <span style="">{</span>
                this.imgName = name;
                this.visible = true;
            },
            handleRemove (file) <span style="">{</span>
                // 从 upload 实例删除数据
                const fileList = this.$<span style="color: #bb60d5">refs</span>.<span style="color: #bb60d5">upload</span>.<span style="color: #bb60d5">fileList</span>;
                this.$<span style="color: #bb60d5">refs</span>.<span style="color: #bb60d5">upload</span>.<span style="color: #bb60d5">fileList</span>.<span style="color: #bb60d5">splice</span>(<span style="">fileList.indexOf</span>(<span style="">file</span>), <span style="color: #40a070">1</span>);
            },
            handleSuccess (res, file) <span style="">{</span>
                // 因为上传过程为实例，这里模拟添加 url
                file.url = &#39;https://o5wwk8baw.qnssl.com/7eb99afb9d5f317c912f08b5212fd69a/avatar&#39;;
                file.name = &#39;7eb99afb9d5f317c912f08b5212fd69a&#39;;
            },
            handleFormatError (file) <span style="">{</span>
                this.$<span style="color: #bb60d5">Notice</span>.<span style="color: #bb60d5">warning</span>(<span style="">{</span>
                    <span style="">title:</span> <span style="color: #4070a0">&#39;文件格式不正确&#39;</span>,
                    <span style="">desc:</span> <span style="color: #4070a0">&#39;文件 &#39;</span> <span style="">+</span> <span style="">file.name</span> <span style="">+</span> <span style="color: #4070a0">&#39; 格式不正确，请上传 jpg 或 png 格式的图片。&#39;</span>
                <span style="">}</span>);
            },
            handleMaxSize (file) <span style="">{</span>
                this.$<span style="color: #bb60d5">Notice</span>.<span style="color: #bb60d5">warning</span>(<span style="">{</span>
                    <span style="">title:</span> <span style="color: #4070a0">&#39;超出文件大小限制&#39;</span>,
                    <span style="">desc:</span> <span style="color: #4070a0">&#39;文件 &#39;</span> <span style="">+</span> <span style="">file.name</span> <span style="">+</span> <span style="color: #4070a0">&#39; 太大，不能超过 2M。&#39;</span>
                <span style="">}</span>);
            },
            handleBeforeUpload () <span style="">{</span>
                const check = this.uploadList.length <span style="color: #062873; font-weight: bold">&lt; 5</span><span style="">;</span>
                <span style="">if</span> <span style="">(!check)</span> <span style="">{</span>
                    <span style="">this.</span>$<span style="color: #bb60d5">Notice</span>.<span style="color: #bb60d5">warning</span>(<span style="">{</span>
                        <span style="">title:</span> <span style="color: #4070a0">&#39;最多只能上传 5 张图片。&#39;</span>
                    <span style="">}</span>)<span style="">;</span>
                <span style="">}</span>
                <span style="">return</span> <span style="">check;</span>
            <span style="">}</span>
        <span style="">},</span>
        <span style="">mounted</span> <span style="">()</span> <span style="">{</span>
            <span style="color: #4070a0">this.uploadList =</span> <span style="color: #4070a0">this.</span>$<span style="color: #bb60d5">refs</span>.<span style="color: #bb60d5">upload</span>.<span style="color: #bb60d5">fileList</span><span style="color: #4070a0">;</span>
        <span style="">}</span>
    <span style="">}</span>
<span style="">&lt;/script</span><span style="color: #062873; font-weight: bold">&gt;</span>
<span style="color: #062873; font-weight: bold">&lt;style&gt;</span>
    .demo-upload-list<span style="">{</span>
        display: inline-block;
        width: 60px;
        height: 60px;
        text-align: center;
        line-height: 60px;
        border: 1px solid transparent;
        border-radius: 4px;
        overflow: hidden;
        background: <span style="color: #007020">#</span><span style="color: #06287e">fff</span>;
        position: relative;
        box-shadow: 0 1px 1px rgba(0,0,0,.2);
        margin-right: 4px;
    }
    .demo-upload-list img<span style="">{</span>
        width: 100%;
        height: 100%;
    }
    .demo-upload-list-cover<span style="">{</span>
        display: none;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0,0,0,.6);
    }
    .demo-upload-list:hover .demo-upload-list-cover<span style="">{</span>
        display: block;
    }
    .demo-upload-list-cover i<span style="">{</span>
        color: <span style="color: #007020">#</span><span style="color: #06287e">fff</span>;
        font-size: 20px;
        cursor: pointer;
        margin: 0 2px;
    }
<span style="color: #062873; font-weight: bold">&lt;/style&gt;</span>
</pre></div>
        </Col>



    </Row>


</div>
</template>
<script>
    export default {
        data () {
            return {
                file: null,
                loadingStatus: false,
                 defaultList: [
                    {
                        'name': 'a42bdcc1178e62b4694c830f028db5c0',
                        'url': 'https://o5wwk8baw.qnssl.com/a42bdcc1178e62b4694c830f028db5c0/avatar'
                    },
                    {
                        'name': 'bc7521e033abdd1e92222d733590f104',
                        'url': 'https://o5wwk8baw.qnssl.com/bc7521e033abdd1e92222d733590f104/avatar'
                    }
                ],
                imgName: '',
                visible: false,
                uploadList: []
            }
        },
        methods: {
            handleUpload (file) {
                this.file = file;
                return false;
            },
            upload () {
                this.loadingStatus = true;
                setTimeout(() => {
                    this.file = null;
                    this.loadingStatus = false;
                    this.$Message.success('上传成功')
                }, 1500);
            },
             handleView (name) {
                this.imgName = name;
                this.visible = true;
            },
            handleRemove (file) {
                // 从 upload 实例删除数据
                const fileList = this.$refs.upload.fileList;
                this.$refs.upload.fileList.splice(fileList.indexOf(file), 1);
            },
            handleSuccess (res, file) {
                // 因为上传过程为实例，这里模拟添加 url
                file.url = 'https://o5wwk8baw.qnssl.com/7eb99afb9d5f317c912f08b5212fd69a/avatar';
                file.name = '7eb99afb9d5f317c912f08b5212fd69a';
            },
            handleFormatError (file) {
                this.$Notice.warning({
                    title: '文件格式不正确',
                    desc: '文件 ' + file.name + ' 格式不正确，请上传 jpg 或 png 格式的图片。'
                });
            },
            handleMaxSize (file) {
                this.$Notice.warning({
                    title: '超出文件大小限制',
                    desc: '文件 ' + file.name + ' 太大，不能超过 2M。'
                });
            },
            handleBeforeUpload () {
                const check = this.uploadList.length < 5;
                if (!check) {
                    this.$Notice.warning({
                        title: '最多只能上传 5 张图片。'
                    });
                }
                return check;
            },
        },
         mounted () {
            this.uploadList = this.$refs.upload.fileList;
        }

    }
</script>

<style>
    .demo-upload-list{
        display: inline-block;
        width: 60px;
        height: 60px;
        text-align: center;
        line-height: 60px;
        border: 1px solid transparent;
        border-radius: 4px;
        overflow: hidden;
        background: #fff;
        position: relative;
        box-shadow: 0 1px 1px rgba(0,0,0,.2);
        margin-right: 4px;
    }
    .demo-upload-list img{
        width: 100%;
        height: 100%;
    }
    .demo-upload-list-cover{
        display: none;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0,0,0,.6);
    }
    .demo-upload-list:hover .demo-upload-list-cover{
        display: block;
    }
    .demo-upload-list-cover i{
        color: #fff;
        font-size: 20px;
        cursor: pointer;
        margin: 0 2px;
    }
</style>



