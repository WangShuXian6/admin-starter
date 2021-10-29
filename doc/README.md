# 项目

## 目录结构

.
└── assets                                 
    ├── css                             和业务相关的通用 css 样式(例如某几个组件共用的样式、mixin 等,不会被压缩，在容器化部署中可以外挂出来随时更改，而不用重新打包。
    └── 
└── doc                                 文档
    ├── README.md                       概览
    └── .md
└── environments                        环境变量
    ├── .env                            所有情况下都会加载
    ├── .env.local                      所有情况下都会加载，但会被 git 忽略
    ├── .env.[mode]                     只在指定模式下加载
    ├── .env.[mode].local               只在指定模式下加载，但会被 git 忽略
    ├── .env.development                开发 适用dev分支 / 基于dev的分支
    ├── .env.staging                    预发布|预上线 适用于 uat 分支
    └── .env.production                 生产 适用于 master 分支
├── node_modules                        依赖
├── projects                       库项目文件
├── dist                                执行 umi build 后，产物默认会存放在这里。
├── mock                                存储 mock 文件，此目录下所有 js 和 ts 文件会被解析为 mock 文件。
├── public                              此目录下所有文件会被 copy 到输出路径。
└── src
    └── component                                
        ├── css                         和业务相关的通用 css 样式(例如某几个组件共用的样式、mixin 等
        └──                     
    ├── core                            只会在 AppModule 中被导入,纯服务类模块，通常会放HTTP 拦截器、路由守卫等一些全局性的服务
    ├── shared                          与core相反,不应该包含服务，因为shared会在不同业务模块中导入，一旦包含了服务，就会产生不同的实例
        ├── models                          数据类型定义 对应 请求/响应
    ├── layout                          布局
    ├── pages                            组织视图层的展示和服务计算数据的收集
    ├── routes                          路由
    ├── service                         应用的数据操作和数据交互
    ├── layouts/index.tsx               约定式路由时的全局布局文件。
    ├── store                         全局共享状态
    ├── useAuthModel.ts                 全局用户授权状态
    ├── pages                           所有路由组件存放在这里。
        ├── 404.less
        ├── 404.less
        ├── document.ejs                默认模板
        ├── index.less
        └── index.tsx
    ├── wrappers                        配置路由的高阶组件
        ├── auth.ts                     路由级别的权限校验
        └──
    ├── access.ts                       权限定义文件 导出的方法会在项目初始化时被执行
    ├── global.css                      全局样式，如果存在此文件，会被自动引入到入口文件最前面
    └── main.ts                      应用的主要切入点
├── styles                          全局性的变量、通用的 css 样式（和业务无关的样式，例如 css reset、自适应相关的全局样式）   
├── package.json