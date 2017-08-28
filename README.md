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
# 音乐列表展示
- Table组件dataSource,columns属性注入数据后自动形成带分页的展示页，同时该组件提供了pagination属性来获取当前显示的页码，每页显示的条数
- 在对每行数据的操作时，遇到了组件的生命周期的问题：组件完成componentDidMount之后，父组件的props发生了改变，应该使用componentWillRecieveProps(nextProps){}周期函数来更改子组件的state

