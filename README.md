<!--
 * @Author: dfh
 * @Date: 2022-12-29 14:34:47
 * @LastEditors: dfh
 * @Modified By: dfh
 * @describe: 
-->
# uniapp脚手架

> 为了多人开发的高效性，同时为了避免每个人`vscode`中代码格式的多样化，基于`uni/cli`搭建一套工程化脚手架

## 项目使用说明

### 1.下载代码
git地址：https://github.com/xiyunanhai1028/uniapp-cli-project.git

### 2.安装依赖

```shell
yarn
```

### 3.eslint更加便捷

> 在根目录下创建 .vscode/settings.json文件,这样在我们保存代码的时候就会自动格式化掉

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

## 2.支持各种平台打包

### 2.1.微信小程序

```shell
yarn build:mp-weixin
yarn dev:mp-weixin
```

### 2.2.支付宝小程序

```shell
yarn build:mp-alipay
yarn dev:mp-alipay
```

### 2.3.百度小程序

```shell
yarn build:mp-baidu
yarn dev:mp-baidu
```

### 2.4.字节跳动小程序

```shell
yarn build:mp-toutiao
yarn dev:mp-toutiao
```

### 2.5.飞书小程序

```shell
yarn build:mp-lark
yarn dev:mp-lark
```

### 2.6.QQ 小程序

```shell
yarn build:mp-qq
yarn dev:mp-qq
```


### 2.7.快手小程序

```shell
yarn build:mp-kuaishou
yarn dev:mp-kuaishou
```

### 2.8.快应用(webview)

```shell
yarn build:quickapp-webview
yarn dev:quickapp-webview
```

### 2.9.快应用联盟

```shell
yarn build:quickapp-webview-union
yarn dev:quickapp-webview-union
```

### 2.10.快应用华为

```shell
yarn build:quickapp-webview-huawei
yarn dev:quickapp-webview-huawei
```

### 2.11.360 小程序

```shell
yarn build:mp-360
yarn dev:mp-360
```

### 2.12.App 平台

```shell
yarn build:app-plus
yarn dev:app-plus
```

**vue3项目**
```shell
yarn build:app
yarn dev:app
```

### 2.13.H5

```shell
yarn build:h5
yarn dev:h5
```

## 3.支持eslint + prettier校验

## 4.支持husky代码提交校验 

### git提交规范

| 类型     | 描述                                                   |
| :------- | ------------------------------------------------------ |
| build    | 编译相关的修改，例如发布版本、对项目构建或者依赖的改动 |
| chore    | 其他修改, 比如改变构建流程、或者增加依赖库、工具等     |
| ci       | 持续集成修改                                           |
| docs     | 文档修改                                               |
| feature  | 新特性、新功能                                         |
| fix      | 修改 bug                                               |
| perf     | 优化相关，比如提升性能、体验                           |
| refactor | 代码重构                                               |
| revert   | 回滚到上一个版本                                       |
| style    | 代码格式修改                                           |
| test     | 测试用例修改                                           |


## 5.支持部分类似`tailwindcss`功能

> 基于scss的`each`实现部分类似于`tailwindcss`功能

### 5.1.flex布局

| 类名                          | 描述                              |
| ----------------------------- | --------------------------------- |
| .flex                         | flex布局                          |
| .flex-center                  | flext布局，水平排布，垂直水平剧中 |
| .flex-row                     | flext布局，水平排布               |
| .flex-col                     | flext布局，垂直排布               |
| .flex-row-reverse             | flext布局，水平反向排布           |
| .flex-col-reverse             | flext布局，垂直反向排布           |
| .flex-1,.flex-2,flex-3,flex-4 | flex:1 、flex:2、flex:3、flex:4   |
| .jc-start，...其他类似        | justify-content:flex-start;       |
| .ai-start，...其他类似        | align-items: flex-start;          |

### 5.2.文字相关

- 支持字体 ：12rpx ～ 48rpx；
- 字体粗细：400 ～ 900;

| 类名                | 描述                |
| ------------------- | ------------------- |
| .txt-12             | font-size:12rpx     |
| .txt-14             | font-size:14rpx     |
| ...其他字体大小同理 | ...其他字体大小同理 |
| .txt-w-4            | font-weight: 400    |
| .txt-w-5            | font-weight: 500    |

### 5.3.边距

- 支持内边距：4rpx-98rpx;
- 支持外边距：4rpx-98rpx;
- 支持水平边距：4rpx-98rpx;
- 支持垂直边距：4rpx-98rpx;

| 类名  | 描述                                  |
| ----- | ------------------------------------- |
| .m-4  | margin:4rpx;                          |
| .ml-4 | margin-left:4rpx;                     |
| .mr-4 | margin-right:4rpx;                    |
| .mt-4 | margin-top:4rpx;                      |
| .mb-4 | margin-bottom:4rpx;                   |
| .mx-4 | margin-left:4rpx;margin-right:4rpx;   |
| .my-4 | margin-top:4rpx;margin-bottom:4rpx;   |
| .p-4  | padding:4rpx;                         |
| .pl-4 | padding-left:4rpx;                    |
| .pr-4 | padding-right:4rpx;                   |
| .pt-4 | padding-top:4rpx;                     |
| .pb-4 | padding-bottom:4rpx;                  |
| .px-4 | padding-left:4rpx;padding-right:4rpx; |
| .py-4 | padding-top:4rpx;padding-bottom:4rpx; |

