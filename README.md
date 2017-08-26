# 初始化package.json
- npm init -y
# 配置tsconfig.json
```json
{
  "compilerOptions": {
    "experimentalDecorators": true,
    "allowJs": true,
    "sourceMap":true
  }
}
```
# 配置.babelrc 
```
{
  "presets":["es2015","react","stage-0"],
  "plugins":[["import",{"libraryName":"antd","style":"css"}]]//按需加载antd组件
}
```
# 安装依赖

- webpack webpack-dev-server html-webpack-plugin
- babel-core babel-preset-es2015 babel-preset-stage-0 less-loader css-loader style-loader babel-loader babel-preset-react
- react react-dom redux react-redux less 
- antd babel-plugin-import
- fetch-jsonp es6-promise

# 用webpack启动服务
- yarn start
# 配置路由route.js
# 木偶组件登录页
"# react-manage-system" 
