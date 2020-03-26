# vue-framework-wz #


[![TeamCity CodeBetter](https://img.shields.io/teamcity/codebetter/bt428.svg)]() [![npm](https://img.shields.io/npm/dw/localeval.svg)]() [![npm](https://img.shields.io/npm/v/npm.svg)]() [![Chrome Web Store](https://img.shields.io/chrome-web-store/stars/nimelepbpejjlbmoobocpfnjhihnpked.svg)]()[![Sourcegraph for Repo Reference Count](https://img.shields.io/sourcegraph/rrc//github.com/gorilla/mux.svg)]()[![GitHub watchers](https://img.shields.io/github/watchers/badges/shields.svg?style=social&label=Watch)]()

**[立即体验(国内)](http://herozhou.coding.me/vue-framework-wz/#/dashboard)**

**[online-website](https://herozhou.github.io/vue-framework-wz/)**

**[Englist Document](https://github.com/herozhou/vue-framework-wz/wiki/English-Document)**

**本项目是后台管理框架，集成了权限管理、登录功能、UI组件、七牛上传等功能，建议直接使用。**
> **注意**：便于前端调试，所以数据请求都是用了mockjs模拟。**在需要请求外部api时请移除mock文件**。

## 有话要说 

```javascript
非常感谢大家喜欢这个项目，但是由于工作太忙实在是没时间维护这个项目，所以耽搁了一大段时间，给大家带来的麻烦我非常抱歉。
接下来我会抽时间维护这个项目，有什么问题可以随时找我，或者提issue，我看到就会直接回。
并且我在开发一系列新的开源项目，目的是帮助大家提升生产力，解放双手。
我建了一个qq群 1051755653 ，方便大家交流，提升前端技能，分享招聘信息等等。
```
## Features 特性
- **👍wz脚手架👍**（脚手架助你安装/卸载组件更方便）
- **工业化UI组件**（上手即用，无需自己造轮子）
- **自适应布局**（完美适配大中小屏）
- `登录/注销`
- `权限验证`
- **👉多TAB导航**（没有多TAB怎么能称为后台管理界面呢？）
- `Markdown 编辑器`
- `动态侧边栏`（支持多级路由）
- 面包屑导航
- JSON展示组件
- echartjs图表
- 404错误页面
- **表格数据直接导出cvs**
- `多环境发布`
- mock数据
- 炫酷hover特效


## Preview 效果图

#### 自适应布局

![自适应布局](https://user-images.githubusercontent.com/16045604/77675345-cc00c900-6fc7-11ea-93a6-f6356a3d2bc5.png)
![手机端](https://user-images.githubusercontent.com/16045604/77676100-cc4d9400-6fc8-11ea-8b89-d16412ba3569.png)
#### 多TAB效果

![第二个Tab](https://user-images.githubusercontent.com/16045604/77675425-e3d84d00-6fc7-11ea-995f-6220b28f137e.png)


#### 炫酷登录界面

![炫酷登录界面](https://user-images.githubusercontent.com/16045604/77675279-b390ae80-6fc7-11ea-850f-893bdc3fbde7.png)

#### 炫酷图表

![炫酷图表](https://user-images.githubusercontent.com/16045604/77675475-f783b380-6fc7-11ea-94ae-0ffdf153089b.png)


#### 编辑器

![丰富功能表格](https://user-images.githubusercontent.com/16045604/77675616-1e41ea00-6fc8-11ea-9a1c-cb5d8b122682.png)



**[更多demo](http://herozhou.coding.me/vue-framework-wz/#/dashboard)**

## Run 开发 
```bash
    # 克隆项目
    git clone https://github.com/herozhou/vue-framework-wz.git

    # 安装依赖
    npm install
    //or 
    npm install --registry=https://registry.npm.taobao.org


    # 本地开发 开启服务
    npm run dev


```
浏览器访问 http://localhost:9001

## wz脚手架 （随意开发，不建议使用）

> 为了便于大家使用和精简体积 故开发了基于node的命令行构建工具，可安装/删除插件，比如你所开发的项目无需Tinymce插件就
```wz remove -p Tinymce ```删除Tinymce 。需要请求外部API就 执行``` wz remove -p Mockjs```，并根据提示修改相应的api地址

**请在项目初期对结构改动不大时使用cli**

```
    # 如需使用脚手架在npm install 之后执行
    npm link
   
    # 随后即可使用wz脚手架
    wz remove -p Tinymce  //卸载Tinymce插件
    wz remove -p Mockjs  //卸载Mock.js插件
    wz  -h 查看命令帮助
```
当前可卸载的插件有 Tinymce|Markdown|Mockjs|Jsontree
不久会支持卸载更多插件，便于开发精简体积

## Build 发布
```bash
    # 发布测试环境 带webpack ananalyzer
    npm run build:sit-preview

    # 构建生成环境
    npm run build:prod
```

## FileTree 目录结构
```shell
├── bin                       // node 命令行构建工具 
├── build                      // 构建相关  
├── config                     // 配置相关
├── src                        // 源代码
│   ├── api                    // 所有请求
│   ├── components             // 全局UI组件
│   ├── mock                   // mock数据
│   ├── router                 // 路由
│   ├── store                  // 全局store管理
│   ├── utils                  // 全局公用方法
│   ├── containers              // 自适应布局组合
│   ├── view                   // view界面
│   │    ├── charts             //图表组件
│   │    ├── components         //首页组件
│   │    ├── login              //登录界面
│   │    ├── errorPages           //错误界面
│   │    └── permission        //权限测试界面
│   ├── App.vue                // 入口页面
│   └── main.js                // 入口 加载组件 初始化等
├── static                     // 静态资源
│   ├── bower_components        //七牛SDK
│   ├── css                     //css
│   ├── js                      //js
├── .babelrc                   // babel-loader 配置
├── eslintrc.js                // eslint 配置项
├── .gitignore                 // git 忽略项
├── favicon.ico                // favicon图标
├── index.html                 // html模板
└── package.json               // package.json

```

## License

MIT