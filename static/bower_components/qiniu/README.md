Qiniu-JavaScript-SDK
============

基于七牛 API 及 Plupload 开发的前端 JavaScript SDK

### 快速导航

- [示例网站](http://jssdk.demo.qiniu.io/)
- [安装与使用](#usage)
- [运行示例](#demo)
- [常见问题](#faq)

### 概述

Qiniu-JavaScript-SDK （下文简称为 JS-SDK）适用于 IE8+、Chrome、Firefox、Safari 等浏览器，基于七牛云存储官方 API 构建，其中上传功能基于 [Plupload](http://www.plupload.com/) 插件封装。开发者基于 JS-SDK 可以方便的从浏览器端上传文件至七牛云存储，并对上传成功后的图片进行丰富的数据处理操作。

不考虑兼容性的情况下，如手机端，建议直接使用 Formdata 结合七牛[表单上传](https://developer.qiniu.com/kodo/manual/form-upload)的方式上传文件。

[ Formdata 上传 demo ](http://jssdk.demo.qiniu.io/formdata)

![ Formdata ](http://oky1vwhqm.bkt.clouddn.com/1486368013.png)

Qiniu-JavaScript-SDK  为客户端 SDK，没有包含 token 生成实现，为了安全，token 建议通过网络从服务端获取，具体生成代码可以参考以下服务端 SDK 的文档。

- [Android](https://developer.qiniu.com/kodo/sdk/android)
- [Java](https://developer.qiniu.com/kodo/sdk/java)
- [PHP](https://developer.qiniu.com/kodo/sdk/php)
- [Python](https://developer.qiniu.com/kodo/sdk/python)
- [Ruby](https://developer.qiniu.com/kodo/sdk/ruby)
- [Go](https://developer.qiniu.com/kodo/sdk/go)
- [Node.js](https://developer.qiniu.com/kodo/sdk/nodejs)
- [C#](https://developer.qiniu.com/kodo/sdk/csharp)
- [C/C++](https://developer.qiniu.com/kodo/sdk/cpp)
- [Objective-C](https://developer.qiniu.com/kodo/sdk/objc)

Qiniu-JavaScript-SDK 的示例 Demo 中的服务器端部分是基于[ Node.js 服务器端 SDK ](https://developer.qiniu.com/kodo/sdk/nodejs) 开发的。

<!--
本 SDK 可使开发者忽略上传底层实现细节，而更多的关注 UI 层的展现。
 -->

### 功能简介

- 上传
    - html5 模式大于 4M 时可分块上传，小于4M时直传
    - 分块上传时，可以断点续上传
    - flash、html4 模式直接上传
    - 继承了 plupload 的功能，可筛选文件上传、拖曳上传等
- 下载（公开资源）
- 数据处理（图片）
    - imageView2（缩略图）
    - imageMogr2（高级处理，包含缩放、裁剪、旋转等）
    - imageInfo （获取基本信息）
    - exif （获取图片 EXIF 信息）
    - watermark （文字、图片水印）
    - pipeline  （管道，可对 imageView2、imageMogr2、watermark 进行链式处理）

### 项目构成介绍

```
├── demo             // 示例 Demo
│   ├── images
│   │   └── ...
│   ├── scripts
│   │   └── ...
│   ├── styles
│   │   └── ...
│   ├── views
│   │   └── ...
│   ├── config.js.example
│   └── server.js         // 示例 Demo 的服务器端程序
├── dist              // SDK 输出目录
│   ├── qiniu.js          // 非压缩版
│   ├── qiniu.min.js      // 压缩版
│   └── qiniu.min.map     // 压缩版的 source map 文件
├── src               // SDK 源目录
│   └── qiniu.js          // 源文件
├── Gruntfile.js
├── Makefile
├── README.md
├── bower.json
└── package.json
```

<a id="usage"></a>
### 准备

- JS-SDK 的上传功能基于 [Plupload](http://www.plupload.com/) 插件封装的，所以需要[下载 Plupload](http://plupload.com/download)，建议使用 2.1.1 版本。
    您也可以访问[ 开放静态文件 CDN ](http://staticfile.org/)，搜索 plupload，使用 CDN 加速的静态文件地址。

- 在使用 JS-SDK 之前，您必须先注册一个七牛帐号，并登录控制台获取一对有效的 AccessKey 和 SecretKey，您可以阅读[ 快速入门 ](https://developer.qiniu.com/kodo/manual/console-quickstart)和[ 安全机制 ](https://developer.qiniu.com/kodo/manual/security#security) 以进一步了解如何正确使用和管理密钥 。

- JS-SDK 依赖服务端颁发 uptoken，可以通过以下二种方式实现：
    - 利用[七牛服务端 SDK ](https://developer.qiniu.com/sdk#sdk)构建后端服务
    - 利用七牛底层 API 构建服务，详见七牛[上传策略](https://developer.qiniu.com/kodo/manual/put-policy)和[上传凭证](https://developer.qiniu.com/kodo/manual/upload-token)

    后端服务应提供一个 URL 地址，供 JS-SDK 初始化使用，前端通过 Ajax 请求该地址后获得 uptoken。Ajax 请求成功后，服务端应返回如下格式的 json：

    ```
    {
        "uptoken": "0MLvWPnyya1WtPnXFy9KLyGHyFPNdZceomL..."
    }
    ```


### 安装

支持以下几种安装方式

- 直接使用CDN 加速的静态文件地址，访问[ 开放静态文件 CDN ](http://staticfile.org/)，搜索  qiniu

    ```
    https://cdn.staticfile.org/qiniu-JS-SDK/<version>/qiniu.min.js
    ```

- 使用 Bower 安装

    Bower 是一个客户端技术的软件包管理器，它可用于搜索、安装和卸载如 JavaScript、HTML、CSS 之类的网络资源。如果需要更详细的关于 Bower 的使用说明，您可以访问[ Bower 官方网站](http://bower.io/)。

    通过 Bower 安装会将 JS-SDK 依赖的 plupload 也一起安装在 `bower_components` 中：

    ```
    bower install qiniu
    ```

    执行之后，JS-SDK 和 plupload 分别在以下位置

    ```
    bower_components
    ├── plupload
    │   └── js
    │       ├── moxie.js
    │       ├── moxie.min.js
    │       ├── plupload.dev.js
    │       ├── plupload.full.min.js
    │       └── plupload.min.js
    └── qiniu
        └── dist
            ├── qiniu.js
            ├── qiniu.min.js
            └── qiniu.min.map
    ```

- 使用 NPM 安装

    NPM 的全称是 Node Package Manager，是一个[ NodeJS ](https://nodejs.org)包管理和分发工具，已经成为了非官方的发布 Node 模块（包）的标准。如果需要更详细的关于 NPM 的使用说明，您可以访问[ NPM 官方网站](https://www.npmjs.com)，或对应的[中文网站](http://www.npmjs.com.cn/)

    ```
    npm install qiniu-js
    ```

    执行之后，JS-SDK 在以下位置

    ```
    node_modules
    └── qiniu-js
        └── dist
            ├── qiniu.js
            ├── qiniu.min.js
            └── qiniu.min.map
    ```

- 通过 Github 上的 qiniu/js-sdk 仓库获取

    下载最新的[ 发布版本 ](https://github.com/qiniu/js-sdk/releases)并解压 或 直接克隆仓库

    ```
    git clone https://github.com/qiniu/js-sdk.git
    ```

    JS-SDK 在  `dist` 目录中

### 使用

#### 上传功能

1. 在页面中引入 plupload，`plupload.full.min.js`（生产环境）或 引入`plupload.dev.js`和`moxie.js`（开发调试）

2. 在页面中引入 `qiniu.min.js`（生产环境）或 `qiniu.js`（开发调试）

3. 初始化 uploader，**请确保在执行初始化时，页面已经引入 plupload**

    ```JavaScript
    var uploader = Qiniu.uploader({
        runtimes: 'html5,flash,html4',      // 上传模式,依次退化
        browse_button: 'pickfiles',         // 上传选择的点选按钮，**必需**
        // 在初始化时，uptoken, uptoken_url, uptoken_func 三个参数中必须有一个被设置
        // 切如果提供了多个，其优先级为 uptoken > uptoken_url > uptoken_func
        // 其中 uptoken 是直接提供上传凭证，uptoken_url 是提供了获取上传凭证的地址，如果需要定制获取 uptoken 的过程则可以设置 uptoken_func
        // uptoken : '<Your upload token>', // uptoken 是上传凭证，由其他程序生成
        // uptoken_url: '/uptoken',         // Ajax 请求 uptoken 的 Url，**强烈建议设置**（服务端提供）
        // uptoken_func: function(file){    // 在需要获取 uptoken 时，该方法会被调用
        //    // do something
        //    return uptoken;
        // },
        get_new_uptoken: false,             // 设置上传文件的时候是否每次都重新获取新的 uptoken
        // downtoken_url: '/downtoken',
        // Ajax请求downToken的Url，私有空间时使用,JS-SDK 将向该地址POST文件的key和domain,服务端返回的JSON必须包含`url`字段，`url`值为该文件的下载地址
        // unique_names: true,              // 默认 false，key 为文件名。若开启该选项，JS-SDK 会为每个文件自动生成key（文件名）
        // save_key: true,                  // 默认 false。若在服务端生成 uptoken 的上传策略中指定了 `save_key`，则开启，SDK在前端将不对key进行任何处理
        domain: '<Your bucket domain>',     // bucket 域名，下载资源时用到，如：'http://xxx.bkt.clouddn.com/' **必需**
        container: 'container',             // 上传区域 DOM ID，默认是 browser_button 的父元素，
        max_file_size: '100mb',             // 最大文件体积限制
        flash_swf_url: 'path/of/plupload/Moxie.swf',  //引入 flash,相对路径
        max_retries: 3,                     // 上传失败最大重试次数
        dragdrop: true,                     // 开启可拖曳上传
        drop_element: 'container',          // 拖曳上传区域元素的 ID，拖曳文件或文件夹后可触发上传
        chunk_size: '4mb',                  // 分块上传时，每块的体积
        auto_start: true,                   // 选择文件后自动上传，若关闭需要自己绑定事件触发上传,
        //x_vars : {
        //    自定义变量，参考http://developer.qiniu.com/docs/v6/api/overview/up/response/vars.html
        //    'time' : function(up,file) {
        //        var time = (new Date()).getTime();
                  // do something with 'time'
        //        return time;
        //    },
        //    'size' : function(up,file) {
        //        var size = file.size;
                  // do something with 'size'
        //        return size;
        //    }
        //},
        init: {
            'FilesAdded': function(up, files) {
                plupload.each(files, function(file) {
                    // 文件添加进队列后,处理相关的事情
                });
            },
            'BeforeUpload': function(up, file) {
                   // 每个文件上传前,处理相关的事情
            },
            'UploadProgress': function(up, file) {
                   // 每个文件上传时,处理相关的事情
            },
            'FileUploaded': function(up, file, info) {
                   // 每个文件上传成功后,处理相关的事情
                   // 其中 info 是文件上传成功后，服务端返回的json，形式如
                   // {
                   //    "hash": "Fh8xVqod2MQ1mocfI4S4KpRL6D98",
                   //    "key": "gogopher.jpg"
                   //  }
                   // 参考http://developer.qiniu.com/docs/v6/api/overview/up/response/simple-response.html

                   // var domain = up.getOption('domain');
                   // var res = parseJSON(info);
                   // var sourceLink = domain + res.key; 获取上传成功后的文件的Url
            },
            'Error': function(up, err, errTip) {
                   //上传出错时,处理相关的事情
            },
            'UploadComplete': function() {
                   //队列文件处理完毕后,处理相关的事情
            },
            'Key': function(up, file) {
                // 若想在前端对每个文件的key进行个性化处理，可以配置该函数
                // 该配置必须要在 unique_names: false , save_key: false 时才生效

                var key = "";
                // do something with key here
                return key
            }
        }
    });

    // domain 为七牛空间（bucket)对应的域名，选择某个空间后，可通过"空间设置->基本设置->域名设置"查看获取

    // uploader 为一个 plupload 对象，继承了所有 plupload 的方法，参考http://plupload.com/docs

    ```

- 如果一个页面中有多个上传实例，可以如下操作

    ```JavaScript
    var option1 = {
        key : val ,
        ……
    };
    var uploader = Qiniu.uploader(option1);

    var Qiniu2 = new QiniuJsSDK();
    var option2 = {
        key : val ,
        ……
    };
    var uploader2 = Qiniu2.uploader(option2);

    ```

#### 对上传成功的图片进行数据处理

- watermark（水印）

    ```JavaScript

    // key 为每个文件上传成功后，服务端返回的json字段，即资源的最终名字，下同
    // key 可在每个文件'FileUploaded'事件被触发时获得

    var imgLink = Qiniu.watermark({
         mode: 1,  // 图片水印
         image: 'http://www.b1.qiniudn.com/images/logo-2.png', // 图片水印的Url，mode = 1 时 **必需**
         dissolve: 50,          // 透明度，取值范围1-100，非必需，下同
         gravity: 'SouthWest',  // 水印位置，为以下参数[NorthWest、North、NorthEast、West、Center、East、SouthWest、South、SouthEast]之一
         dx: 100,  // 横轴边距，单位:像素(px)
         dy: 100   // 纵轴边距，单位:像素(px)
     }, key);      // key 为非必需参数，下同

    // imgLink 可以赋值给 html 的 img 元素的 src 属性，下同

    // 若未指定key，可以通过以下方式获得完整的 imgLink，下同
    // imgLink  =  '<domain>/<key>?' +  imgLink
    // <domain> 为七牛空间（bucket)对应的域名，选择某个空间后，可通过"空间设置->基本设置->域名设置"查看获取

    ```

    或

    ```JavaScript

    var imgLink = Qiniu.watermark({
         mode: 2,  // 文字水印
         text: 'hello world !', // 水印文字，mode = 2 时 **必需**
         dissolve: 50,          // 透明度，取值范围1-100，非必需，下同
         gravity: 'SouthWest',  // 水印位置，同上
         fontsize: 500,         // 字体大小，单位: 缇
         font: '黑体',           // 水印文字字体
         dx: 100,               // 横轴边距，单位:像素(px)
         dy: 100,               // 纵轴边距，单位:像素(px)
         fill: '#FFF000'        // 水印文字颜色，RGB格式，可以是颜色名称
     }, key);

    ```

    具体水印参数解释见[水印（watermark）](https://developer.qiniu.com/dora/api/image-watermarking-processing-watermark)

- imageView2

    ```JavaScript

    var imgLink = Qiniu.imageView2({
       mode: 3,  // 缩略模式，共6种[0-5]
       w: 100,   // 具体含义由缩略模式决定
       h: 100,   // 具体含义由缩略模式决定
       q: 100,   // 新图的图像质量，取值范围：1-100
       format: 'png'  // 新图的输出格式，取值范围：jpg，gif，png，webp等
     }, key);

    ```
    具体缩略参数解释见[图片基本处理（imageView2）](https://developer.qiniu.com/dora/api/basic-processing-images-imageview2)

- imageMogr2

    ```JavaScript

    var imgLink = Qiniu.imageMogr2({
       auto-orient: true,       // 布尔值，是否根据原图EXIF信息自动旋正，便于后续处理，建议放在首位。
       strip: true,             // 布尔值，是否去除图片中的元信息
       thumbnail: '1000x1000'   // 缩放操作参数
       crop: '!300x400a10a10',  // 裁剪操作参数
       gravity: 'NorthWest',    // 裁剪锚点参数
       quality: 40,             // 图片质量，取值范围1-100
       rotate: 20,              // 旋转角度，取值范围1-360，缺省为不旋转。
       format: 'png',           // 新图的输出格式，取值范围：jpg，gif，png，webp等
       blur:'3x5'               // 高斯模糊参数
     }, key);

    ```

    具体高级图像处理参数解释见[图像高级处理（imageMogr2）](https://developer.qiniu.com/dora/api/the-advanced-treatment-of-images-imagemogr2)

- imageInfo

    ```JavaScript
    var imageInfoObj = Qiniu.imageInfo(key);
    ```
    具体 imageInfo 解释见[图片基本信息（imageInfo）](https://developer.qiniu.com/dora/api/pictures-basic-information-imageinfo)

    Ajax跨域限制，IE系列此函数只支持IE10+

- exif

    ```JavaScript
    var exifOjb = Qiniu.exif(key);
    ```

    具体 exif 解释见[图片EXIF信息（exif）](https://developer.qiniu.com/dora/api/photo-exif-information-exif)

    Ajax跨域限制，IE系列此函数只支持IE10+

- pipeline(管道操作）

    ```JavaScript

    var fopArr = [{
        fop: 'watermark', // 指定watermark操作
        mode: 2,          // 此参数同watermark函数的参数，下同。
        text: 'hello world !',
        dissolve: 50,
        gravity: 'SouthWest',
        fontsize: 500,
        font : '黑体',
        dx: 100,
        dy: 100,
        fill: '#FFF000'
    },{
        fop: 'imageView2', // 指定imageView2操作
        mode: 3,           // 此参数同imageView2函数的参数，下同
        w: 100,
        h: 100,
        q: 100,
        format: 'png'
    },{
        fop: 'imageMogr2',  // 指定imageMogr2操作
        auto-orient: true,  // 此参数同imageMogr2函数的参数，下同。
        strip: true,
        thumbnail: '1000x1000'
        crop: '!300x400a10a10',
        gravity: 'NorthWest',
        quality: 40,
        rotate: 20,
        format: 'png',
        blur:'3x5'
    }];

    // fopArr 可以为三种类型'watermark'、'imageMogr2'、'imageView2'中的任意1-3个
    // 例如只对'watermark'、'imageMogr2'进行管道操作，则如下即可
    // var fopArr = [{
    //    fop: 'watermark', // 指定watermark操作
    //    mode: 2, // 此参数同watermark函数的参数，下同。
    //    text: 'hello world !',
    //    dissolve: 50,
    //     gravity: 'SouthWest',
    //     fontsize: 500,
    //     font : '黑体',
    //     dx: 100,
    //     dy: 100,
    //     fill: '#FFF000'
    // },{
    //    fop: 'imageMogr2',  // 指定imageMogr2操作
    //    auto-orient: true,  // 此参数同imageMogr2函数的参数，下同。
    //    strip: true,
    //    thumbnail: '1000x1000'
    //    crop: '!300x400a10a10',
    //    gravity: 'NorthWest',
    //    quality: 40,
    //    rotate: 20,
    //    format: 'png',
    //    blur:'3x5'
    // }];


    var imgLink = Qiniu.pipeline(fopArr, key));

    ```

    具体管道操作解释见[管道操作](https://developer.qiniu.com/dora/manual/processing-mechanism)

<a id="demo"></a>
### 运行示例

1. 进入项目根目录，执行 `make install` 或 `npm install & bower install` 安装依赖第三方库
2. 进入 `demo` 目录，按照目录下的 `config.example` 示例，创建 `config.js` 文件，其中，`Access Key` 和 `Secret Key` 按如下方式获取

    * [开通七牛开发者帐号](https://portal.qiniu.com/signup)
    * [登录七牛开发者自助平台，查看 AccessKey 和 SecretKey](https://portal.qiniu.com/user/key) 。

    ```javascript

    module.exports = {
        'ACCESS_KEY': '<Your Access Key>',
        'SECRET_KEY': '<Your Secret Key>',
        'Bucket_Name': '<Your Bucket Name>',
        'Port': 19110,
        'Uptoken_Url': '<Your Uptoken_Url>', // demo 启动后会在本地 /uptoken 上提供获取 uptoken 的接口，所以这里可以填 'uptoken'
        'Domain': '<Your Bucket Domain>' // Bucket 的外链默认域名，在 Bucket 的内容管理里查看，如：'http://xxx.bkt.clouddn.com/'
    }

    ```
3. 进入项目根目录，执行 `make dev` 或 `node demo/server.js` 访问命令行打印出的 demo 地址。

<a id="note"></a>
### 说明

1. JS-SDK 依赖 Plupload，初始化之前请引入 Plupload。

2. JS-SDK 依赖 uptoken，可以直接设置 `uptoken`  、通过提供 Ajax 请求地址 `uptoken_url` 或者通过提供一个能够返回 uptoken 的函数 `uptoken_func` 实现。

3. 如果您想了解更多七牛的上传策略，建议您仔细阅读 [七牛官方文档-上传](https://developer.qiniu.com/kodo/manual/upload-types)。
   另外，七牛的上传策略是在后端服务指定的，JS-SDK 的 setOption API 只是设置 Plupload 的初始化参数，和上传策略无关。

4. 如果您想了解更多七牛的图片处理，建议您仔细阅读 [七牛官方文档-图片处理](https://developer.qiniu.com/dora/api/image-processing-api)

5. 如果是 https 网站，上传地址为 https://up.qbox.me 否则使用 http://upload.qiniu.com

6. JS-SDK 示例生成 uptotken 时，指定的 `Bucket Name` 为公开空间，所以可以公开访问上传成功后的资源。若您生成 uptoken 时，指定的 `Bucket Name` 为私有空间，那您还需要在服务端进行额外的处理才能访问您上传的资源。具体参见[下载凭证](https://developer.qiniu.com/kodo/manual/download-token)。JS-SDK 数据处理部分功能不适用于私有空间。

<a id="faq"></a>
### 常见问题

七牛提供基于 plupload 插件封装上传的 demo `http://jssdk.demo.qiniu.io/`，如果不需要 plupload 插件可以参考 `https://github.com/iwillwen/qiniu.js/tree/develop`,这里主要针对基于 plupload 插件的方式讲解遇到的一些问题，通过参考 plupload 文档资料，可以对七牛的 demo 进行修改，以满足自己的业务需求，plupload 插件的使用文档可以参考 `http://www.cnblogs.com/2050/p/3913184.html`

**1. 关于上传文件命名问题，可以参考：**

在 main.js 里面，unique_names 是 plupload 插件下面的一个参数，当值为 true 时会为每个上传的文件生成一个唯一的文件名，这个是 plupload 插件自动生成的，如果设置成 false，七牛这边是会以上传的原始名进行命名的。

1. 上传的 scope 为 bucket 的形式，unique_names 参数设置为false，上传后文件的 key 是本地的文件名 abc.txt
2. 上传的 scope 为 bucket 的形式，unique_names 参数设置为 true，plupload 插件会忽略本地文件名，而且这个命名也是没有规律的，上传后文件的 key 是 plupload 插件生成的，比如 Yc7DZRS1m73o.txt。
3. 上传的 scope 为 bucket:key 的形式，上传文件本地的名字需要和 scope 中的 key 是一致的，不然会报错 key doesn‘t match with scope, 注意，这种形式是不能设置 unique_names 为 true 的，因为即使上传文件本地名字为 abc.txt,但是 plupload 会给这个文件赋值另外一个文件名。
4. 上传的 scope 为 bucket，但是 token 中有设定 saveKey，这种形式 save_key 是应该设置为 true，并且上传的本地文件名也是需要和这个 savekey 文件名一致的。
5. 通过 JS 前端设置上传的 key，在 main.js 文件里面设置如下：

```
'Key': function(up, file) {
    var key = "";
    // do something with key
    return key
}
```

这个默认是注释的，若想在前端对每个文件的 key 进行个性化处理，可以配置该函数
该配置必须要在 unique_names: false , save_key: false 时才生效
取消注释后，其优先级要高于：qiniu.js 文件中 getFileKey。

**2. 设置自定义预览样式**

```
// 该设置在ui.js 文件里，默认为
var imageView =‘?imageView2/1/w/100/h/100’
// 可修改成
var imageView = ‘样式符+样式名’
```

**3. 关于设置取消上传可以参考：**

http://stackoverflow.com/questions/11014384/cancel-file-upload-listener
(文件 plupload.dev.js 1950行 removeFile : function(file) 方法)

**4. 限制上传文件的类型：**

这里又分为两种方法：

1. 通过在 token 中设定 mimeLimit 字段限定上传文件的类型，示例

“image/*“ 表示只允许上传图片类型；
“image/jpeg;image/png” 表示只允许上传 jpg 和 png 类型的图片；
“!application/json;text/plain” 表示禁止上传 json 文本和纯文本。（注意最前面的感叹号）

2. 通过 plupload 中设定 filter 参数直接在 JS 前端限定，如下

```
// 可以使用该参数来限制上传文件的类型，大小等，该参数以对象的形式传入，它包括三个属性：
filters : {
    max_file_size : '100mb',
    prevent_duplicates: true,
    // Specify what files to browse for
    mime_types: [
        {title : "flv files", extensions : "flv"} // 限定flv后缀上传格式上传
        {title : "Video files", extensions : "flv,mpg,mpeg,avi,wmv,mov,asf,rm,rmvb,mkv,m4v,mp4"}, // 限定flv,mpg,mpeg,avi,wmv,mov,asf,rm,rmvb,mkv,m4v,mp4后缀格式上传
        {title : "Image files", extensions : "jpg,gif,png"}, // 限定jpg,gif,png后缀上传
        {title : "Zip files", extensions : "zip"} // 限定zip后缀上传
    ]
},
```

**5. 设置每次只能选择一个文件**

通过 plupload 插件中的 multi_selection 参数控制，如下

```
// 设置一次只能选择一个文件
multi_selection: false,
```

**6. 设置取消上传，暂停上传**

在 index.html 中加入者两个控制按钮：

```
<a class="btn btn-default btn-lg " id="up_load"  href="#" >
     <span>确认上传</span>
</a>
<a class="btn btn-default btn-lg " id="stop_load"  href="#" >
     <span>暂停上传</span>
</a>
```

然后在 main.js 文件里面绑定这两个按钮，添加代码如下：

```
$('#up_load').on('click', function(){
   uploader.start();
});
$('#stop_load').on('click', function(){
   uploader.stop();
});
```

**7. 取消分片上传**

将 main.js 里面 `chunk_size: '4mb'` 设置 `chunk_size: '0mb'`，注意分片上传默认也只能是 4M，如果设置一个别的分片的大小会出现上传失败。

**8. 取消自动上传**

将 main.js 文件 `auto_start` 参数改成 `auto_start: false`

**9. 关于请求 token 出现跨域**

因为都是建议用户从后端 SDK 获取 token，然后在 main.js 设置参数 uptoken_url: '获取uptoken的url',  这里就有可能出现跨域的现象，此时在服务端添加 response.setHeader("Access-Control-Allow-Origin","*"); 相应头字段即可。

推荐一个关于 [CORS](http://enable-cors.org/) 的网站

<a id="contribute-code"></a>

**10.Android自带的Webview对JS SDK不支持 **
在Android自带的Webview里面引用JS SDK的demo(http://jssdk.demo.qiniu.io/) :
```
public class MainActivity extends Activity {
    private WebView webview;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        webview = (WebView) findViewById(R.id.wv);
        webview.getSettings().setJavaScriptEnabled(true);
        webview.setWebViewClient(new WebViewClient(){
            public boolean shouldOverrideUrlLoading(WebView view, String url){
                view.loadUrl(url);
                return true;
            }
        });
        webview.loadUrl("http://demos.qiniu.com/demo/simpleuploader/");
    }

}
```
但是点击选择文件按钮没有反应，这个是Webview对JS不是很支持造成的，解决方法可以引入这个Webview,jar包地址如下:
https://github.com/delight-im/Android-AdvancedWebView/blob/master/JARs/Android-AdvancedWebView.jar
使用的方法文档上都有写，比较简单：
```
private AdvancedWebView mWebView;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        mWebView = (AdvancedWebView) findViewById(R.id.webview);
        mWebView.setListener(this, this);
        mWebView.loadUrl("http://jssdk.demo.qiniu.io/");
    }
```

**11.关于多个按钮选择文件的Demo **

很多用户都在问JSSDK多文件选择的Demo，其实比较简单，只需要在main.js文件里面多new几个Uploader对象就可以了，然后在主页面上里面写好对应的上传的按钮就可以了
这里直接给出main.js和indxe.html里面需要改动的地方:
main.js里面多new几个uploader对象
```
$(function() {
    var uploader = Qiniu.uploader({
        runtimes: 'html5,flash,html4',
        browse_button: 'pickfiles',
        container: 'container',
        drop_element: 'container',
        max_file_size: '100mb',
        flash_swf_url: 'js/plupload/Moxie.swf',
        dragdrop: true,
        chunk_size: '4mb',
        uptoken:'um6IEH7mtwnwkGpjImD08JdxlvViuELhI4mFfoeL:79ApUIePTtKIdVGDHJ9D9BfBnhE=:eyJzY29wZSI6ImphdmFkZW1vIiwiZGVhZGxpbmUiOjE0NTk4ODMyMzV9Cg==',
        // uptoken_url: $('#uptoken_url').val(),  //当然建议这种通过url的方式获取token
        domain: $('#domain').val(),
        auto_start: false,
        init: {
            'FilesAdded': function(up, files) {
                $('table').show();
                $('#success').hide();
                plupload.each(files, function(file) {
                    var progress = new FileProgress(file, 'fsUploadProgress');
                    progress.setStatus("等待...");
                });
            },
            'BeforeUpload': function(up, file) {
                var progress = new FileProgress(file, 'fsUploadProgress');
                var chunk_size = plupload.parseSize(this.getOption('chunk_size'));
                if (up.runtime === 'html5' && chunk_size) {
                    progress.setChunkProgess(chunk_size);
                }
            },
            'UploadProgress': function(up, file) {
                var progress = new FileProgress(file, 'fsUploadProgress');
                var chunk_size = plupload.parseSize(this.getOption('chunk_size'));

                progress.setProgress(file.percent + "%", file.speed, chunk_size);
            },
            'UploadComplete': function() {
                $('#success').show();
            },
            'FileUploaded': function(up, file, info) {
                var progress = new FileProgress(file, 'fsUploadProgress');
                progress.setComplete(up, info);
            },
            'Error': function(up, err, errTip) {
                $('table').show();
                var progress = new FileProgress(err.file, 'fsUploadProgress');
                progress.setError();
                progress.setStatus(errTip);
            }
        }
    });

    uploader.bind('FileUploaded', function() {
        console.log('hello man,a file is uploaded');
    });

    $('#up_load').on('click', function(){
        uploader.start();
    });
    $('#stop_load').on('click', function(){
        uploader.stop();
    });

    var Q2 = new QiniuJsSDK();
    var uploader2 = Q2.uploader({
        runtimes: 'html5,flash,html4',
        browse_button: 'pickfiles2',
        container: 'container2',
        drop_element: 'container2',
        max_file_size: '100mb',
        flash_swf_url: 'js/plupload/Moxie.swf',
        dragdrop: true,
        chunk_size: '4mb',
        uptoken:'um6IEH7mtwnwkGpjImD08JdxlvViuELhI4mFfoeL:79ApUIePTtKIdVGDHJ9D9BfBnhE=:eyJzY29wZSI6ImphdmFkZW1vIiwiZGVhZGxpbmUiOjE0NTk4ODMyMzV9Cg==',
        // uptoken_url: $('#uptoken_url').val(),  //当然建议这种通过url的方式获取token
        domain: $('#domain').val(),
        auto_start: false,
        init: {
            'FilesAdded': function(up, files) {
                $('table').show();
                $('#success').hide();
                plupload.each(files, function(file) {
                    var progress = new FileProgress(file, 'fsUploadProgress');
                    progress.setStatus("等待...");
                });
            },
            'BeforeUpload': function(up, file) {
                var progress = new FileProgress(file, 'fsUploadProgress');
                var chunk_size = plupload.parseSize(this.getOption('chunk_size'));
                if (up.runtime === 'html5' && chunk_size) {
                    progress.setChunkProgess(chunk_size);
                }
            },
            'UploadProgress': function(up, file) {
                var progress = new FileProgress(file, 'fsUploadProgress');
                var chunk_size = plupload.parseSize(this.getOption('chunk_size'));

                progress.setProgress(file.percent + "%", file.speed, chunk_size);
            },
            'UploadComplete': function() {
                $('#success').show();
            },
            'FileUploaded': function(up, file, info) {
                var progress = new FileProgress(file, 'fsUploadProgress');
                progress.setComplete(up, info);
            },
            'Error': function(up, err, errTip) {
                $('table').show();
                var progress = new FileProgress(err.file, 'fsUploadProgress');
                progress.setError();
                progress.setStatus(errTip);
            }
        }
    });

    uploader2.bind('FileUploaded', function() {
        console.log('hello man 2,a file is uploaded');
    });
    $('#up_load2').on('click', function(){
        uploader2.start();
    });
    $('#stop_load2').on('click', function(){
        uploader2.stop();
    });
```
相应的index.html文件加入相关按钮:
```
  <div id="container">
        <a class="btn btn-default btn-lg " id="pickfiles" style="width:160px" href="#" >
            <i class="glyphicon glyphicon-plus"></i>
            <span>选择文件</span>
        </a>

        <a class="btn btn-default btn-lg " id="up_load" style="width:160px" href="#" >
            <span>确认上传</span>
        </a>

        <a class="btn btn-default btn-lg " id="stop_load" style="width:160px" href="#" >
            <span>暂停上传</span>
        </a>
  </div>

  <div id="container2">
        <a class="btn btn-default btn-lg " id="pickfiles2" style="width:160px" href="#" >
            <i class="glyphicon glyphicon-plus"></i>
            <span>选择文件</span>
        </a>

        <a class="btn btn-default btn-lg " id="up_load2" style="width:160px" href="#" >
            <span>确认上传</span>
        </a>

        <a class="btn btn-default btn-lg " id="stop_load2" style="width:160px" href="#" >
            <span>暂停上传</span>
        </a>
  </div>
```


### 贡献代码

1. 登录 https://github.com

2. Fork git@github.com:qiniu/js-sdk.git

3. 创建您的特性分支 (git checkout -b new-feature)

4. 提交您的改动 (git commit -am 'Added some features or fixed a bug')

5. 将您的改动记录提交到远程 git 仓库 (git push origin new-feature)

6. 然后到 github 网站的该 git 远程仓库的 new-feature 分支下发起 Pull Request

<a id="license"></a>
### 许可证

> Copyright (c) 2017 qiniu.com

### 基于 MIT 协议发布
