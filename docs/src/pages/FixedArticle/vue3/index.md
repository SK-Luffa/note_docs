
# vue3 新特性
- framents 多个根组件
- Teleport Teleport 是一种能够将我们的模板移动到 DOM 中 Vue app 之外的其他位置的技术
- createRender 能够构建自定义渲染器，我们能够将 vue 的开发模型扩展到其他平台  我们可以将其生成在canvas画布上
- composition Api 更加容易维护我们的代码，将相同功能的变量进行一个集中式的管理
- 
# vue3的设计目标

### 面临的问题
- 随着功能的增长，复杂组件的代码变得越来越难以维护
- 缺少一种比较“干净”的在多个组件之间提取和复用逻辑的机制
- 类型推断不够友好
- bundle的事件太长了
### 目标
- 更快 ：diff算法的优化、静态提升、事件监听缓存、SSR优化
- 更小：移除了一些不常用的API。加入了three-shaking
- 对typescript更友好的支持 
- API设计的一致性 
- 提高自身的可维护性
- 开放更多底层功能
  
# vue3性能优化体现在哪些方面
- 编译阶段
- 源码体积
- 响应式系统

### 编译阶段
- diff算法优化  ：vue3相比较vue2在diff算法上增加了静态标记
- 静态提升 ：vue3中对于不参与更新的元素，会做一个静态提升，只会被创建一次，渲染时直接复用
- 事件监听缓存
- SSR优化 ：vue3中当静态内容大到超过一定量级，createStaticVNode方法在客户端生成一个static node，这些静态node会被直接innerHtml，就不需要创建对象，再根据对象渲染了
### 源码体积
- vue3相比较vue2 移除了一些不常用的api，当然最主要的是得益于rollup实现vite的tree-shaking功能（只有被使用的功能才会被打包，未使用的功能和代码打包的时候将会被删除）从而减小包的体积
### 响应式系统
- 将双向数据绑定从object.defineproperty更换为proxy模式了 解决了数组等一系列深度监听带来的困扰，实现了
        - 可以监听动态属性的添加
        - 可以监听数组的索引和数组的length属性
        - 可以监听删除属性
# 为什么使用proxy代替object.defineProperty

### object.defineProperty
- 定义：object.defineProperty()方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回此对象
  ###### 为什么能实现响应式？ 
     主要通过defineProperty的两个属性来实现 get(只读)和set(只写)
     - get：属性的getter函数，当访问该属性时，会调用此函数，执行时不传入任何参数，但是会传入this对象（由于继承关系，这里的this并不一定是定义该函数的对象）。该函数的返回值会被用作属性的值
     - set：属性的setter函数，当属性值被修改时，会调用此函数。该方法接收一个参数（也就是被新赋予的值）会传入赋值时的this对象。默认为undefined
- 劣势：
     1. 检测不到对象属性的添加和删除
     2. 数组的API方法无法检测到
     3. 需要对每个属性进行遍历监听，如果嵌套对象，需要深层监听，造成性能问题
### proxy
- 定义：proxy的监听是针对对象的，这个对象的所有操作都会被监听  ，那么就可以代理所有对象了
 Proxy有多达13种拦截方法,不限于apply、ownKeys、deleteProperty、has等等
 - 劣势：
    1. 不支持ie
    2. 没有polyfill
# 选项式API（options）和组合式API(composition)的区别
- 在逻辑组织和复用性方面，组合式API优于选项式API
- 组合式api几乎都是函数，因此可以有更好的类型推断，（对ts更友好）
- 组合式APi对three-shaking更友好
- 组合式api不使用this关键字，减少了代码复杂度和心智负担