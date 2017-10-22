# ReactFluxTodosDemo

## 使用 flux 实现的 todos demo

<img src="http://static.ptbird.cn/usr/uploads/2017/10/2772486735.png"/>

主要功能：

- 增加新的todo
- 删除某个todo
- 更改某个todo的完成状态
- 更改所有的togo的完成状态
- 更新某个todo的内容
- 获取未做的todo的数量

## 代码结构：

```bash
|—— src
  |—— actions
    |—— TodoActions.js   // flux action
  |—— components
    |—— TodoComponents   // todo组件
      |—— TodoApp.jsx    // 整体组件
      |—— TodoFooter.jsx // 底部组件
      |—— TodoHeader.jsx // 头部组件
      |—— TodoItem.jsx   // 单个todo
      |—— TodoList.jsx   // todo list
      |—— TodoTextInput.jsx // 头部输入框组件
  |—— constants
    |—— TodoConstants.js // 常量存储   
  |—— dispatcher
    |—— TodoDispatcher.js// dispatcher
  |—— stores
    |—— TodoStores.js    // store
  |—— stylesheets
  |—— App.jsx            // 总组件
  |—— main.js            // 入口文件  
```

## 介绍文章地址：

http://www.ptbird.cn/react-flux-demo-todos.html


## 项目构建使用 webpack-react-development

https://github.com/postbird/webpack-react-development

## 使用方式：

- git clone xxxx
- npm install
- npm run dev
