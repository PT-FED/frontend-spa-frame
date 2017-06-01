# frontend-spa-frame
 基于 vue + webpack 搭建的一套spa前端框架

### 环境安装

 本项目依赖 node.js， 使用前先安装 node.js 和 cnpm（显著提升依赖包的下载速度）。

 1. 自行下载并安装 node.js： https://nodejs.org/en/download/

 2. 然后安装 cnpm 命令(安装 cnpm 提高速度)：

        npm install -g cnpm --registry=https://registry.npm.taobao.org

 3. 安装依赖

        npm install 或者 cnpm install

 4. 执行构建并启动服务

        npm start

 5. 打开浏览器查看

        http://localhost:9000

### 基础命令

 1. iconfont生成工具

        npm run icon

 2. 编译iconfont + 本地构建 + 启动服务器

        npm start

 3. 本地开发构建

        npm run dev

 4. 生产构建(未完成)

        npm run prod

---------------------------------- 下面请忽略 ------------------------------
### Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```


css (autoprefixer)

图片 上线前要无损压缩

文档管理

前端框架 es6 + (移动端适配) + 国际化

开发 / 测试 / 线上 构建 (如何支持oem, 首屏和按需)

mock模拟数据 restful

test测试 restful

数据联调 restful

持续部署 /  持续集成

changelog

@feature
增量更新
灰度上线(A/B测试)
!!对市场和产品友好!!
数据可视化
运营平台
Jenkins
element
highchart 图表库
d3 图表库
GIS系统
对docker友好
seleminu自动化测试


@bug
 清理package.json依赖
 prod的模式切换

