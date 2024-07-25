# 什么是VUE？ 
- vue是一个用于创建用户界面的JavaScript开源框架，也是一个用于创建单页应用的web应用框架。
# vue核心特性
### 数据驱动（MVVM:Model-view-viewModel）
- Model: 模型层，负责处理业务逻辑以及和server端（服务端）进行交互
- View：视图层，负责将数据模型转化为UI界面展示出来
- ViewModel：视图模型层，用来链接Model和View，是Model和View之间的通信桥梁
### 组件化 
 把图形和非图形的各种逻辑均抽象出来形成一个统一的概念（组件）来实现开发的模式 
 - 优点：
    * 降低代码的耦合度，提高开发效率
    * 方便调试
    * 提高可维护性
### 指令系统
  常用的一些vue指令
   - v-if：判断
   - v-show：判断 display
   - v-model：  input实现双向绑定
   - v-for：  循环
   - v-slot：  插槽
   - v-on：  事件
   - v-blind：  双向绑定
   - v-html：  转为html
   - v-text：  转为文本
   - v-pre： 跳过该元素及其子元素的编译
   - v-once：只渲染一次，并跳过之后的更新
   - v-cloak: 用来隐藏尚未编译完成的dom模板
# vue和原生开发的区别
- vue所有的界面事件，都只是去操作数据的，原生则是操作dom
- vue所有见面的变动，都是根据数据自动更新出来的，原生的则是操作dom
# vue和React的区别
  - 相同点：
     - 都是组件化开发
     - 都支持服务端渲染 SSR
     - 都有v-dom
     - 数据驱动视图
     - 都对TS友好
     - 单项数据流
  - 不同点：
     - 数据绑定方式  vue是双向数据绑定，react采用单项数据绑定
     - 写法不同，vue更流行sfc组件的写法  react则更偏向jsx写法
     - 粒度不同， vue粒度略粗  react粒度更细
     - 核心思想不同  vue降低门槛，灵活易用   react则是声明式和组件化 



  