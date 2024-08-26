# javaScript数据中的类型
## 基本数据类型
- Number
- String
- Bigint
- Boolean
- Symbol
- Null
- Undefined
## 引用数据类型
复杂类型统称为Object，主要是以下三种
- Object
- Array
- Function
## 其他类型
- Date
- RegEXP
- Map
- Set等
## 存储区别
- 基本类型存储在栈中
- 引用类型的对象存储在堆中
# 数组的常用方法（操作、排序、转换、迭代）
## 增删改查
### 增加  前三者会对原数组产生影响(改变)，第四个不会对原数组产生影响(不变)
 - push()      **接受一个或者多个参数将其添加到数组末尾，返回数组的最新状态**

 - unshift()  **接受一个或者多个参数将其添加到数组开头，返回数组的最新状态**

 - splice()   **传入三个参数，开始位置，0（要删除元素的个数），插入的元素，返回一个空数组**

 - concat()   **会创建一个副本，然后再把它自己的参数添加到副本末尾，最后返回这个新构建的数组，不会影响原始数组**

### 删除   前三者会对原数组产生影响(改变)，第四个不会对原数组产生影响（不变）
- pop()    **删除数组最后一项，并返回被删除的项**

- shift()  **删除数组的第一项，并返回被删除的项**

- splice()  **传入两个参数，开始位置、删除元素的数量，返回包含删除元素的数组**
  
- slice   **用于创建一个包含原有数组中一个或多个元素的新数组，不会影响原数组。传入两个参数：第一个参数是开始索引，第二个参数是结束索引(但不包括该索引)**

### 修改
- splice()   **传入三个参数，开始位置，0（要删除元素的个数），插入的元素，返回一个空数组**
### 查找
- indexOf() **返回要查找元素在对应数组中的下标，没有返回-1**
  
- includes()  **查找参数是否包含在当前数组中，找到返回true 否则返回 false**
-  find()    **传入一个函数，函数包含三个参数，第一个参数为item，第二个参数是index，第三个参数是array（数组本身），如果满足条件 就返回满足条件的item**
```js
const people = [
    {
        name: "Matt",
        age: 27
    },
    {
        name: "Nicholas",
        age: 29
    }
];
people.find((element, index, array) => element.age < 28) // // {name: "Matt", age: 27}
```

## 排序
- reverse()  ***将数组元素方向反转***
- sort()   **默认按照字母升序排序，或者数字升序排序。也可以接受一个函数**
```js
function compare(value1, value2) {
    if (value1 < value2) {
        return -1;
    } else if (value1 > value2) {
        return 1;
    } else {
        return 0;
    }
}
let values = [0, 1, 5, 10, 15];
values.sort(compare);
alert(values); // 0,1,5,10,15
```

## 转换方法
- join()  接受一个参数，即数组每一项之间的分隔符，返回包含所有项的字符串，（去掉[] 并转换为字符串）

## 迭代方法
- some()   **接受一个函数 (item,index,arr)=>item>1 设置一个表达式，依次对数组的每一个值进行比较，只要有一个满足就返回true，否则返回false** 
  
- every()   **接受一个函数 (item,index,arr)=>item>1 设置一个表达式，依次对数组的每一个值进行比较，必须每一项都满足才会返回true，否则返回false** 

- forEach() **接受一个函数 (item,index,arr)=>{} 进行循环，然后自定义功能** 
- filter()   **接受一个函数 (item,index,arr)=>item>1 函数返回true的项会组成一个数组最后返回**
- map()   **接受一个函数 (item,index,arr)=>item>1 返回每次函数调用的结果组成的数组**

# 字符串常用品方法 （操作、转换、模板匹配）

## 操作（增删改查）

### 增加 (不会对原有字符串进行改变)
- concat() **用于将一个或多个字符串拼接在一起组成一个新的字符串** 
### 删除 (不会对原有字符串进行改变)
这三个方法都返回调他们的字符串的一个子字符串，并且都接受一个或两个字符串 不过需要注意的是，subsrt在传入两个参数时候，是包含第二个参数在字符串中的下标位置的
- slice()   
- substr()
- substring()
```js
let stringValue = "hello world";
console.log(stringValue.slice(3)); // "lo world"
console.log(stringValue.substring(3)); // "lo world"
console.log(stringValue.substr(3)); // "lo world"
console.log(stringValue.slice(3, 7)); // "lo w"
console.log(stringValue.substring(3,7)); // "lo w"
console.log(stringValue.substr(3, 7)); // "lo worl"
```
### 修改 (不会对原有字符串进行改变)
- trim()、trimLeft()、trimRight()  **分别表示：删除开头和结尾的空格、删除开头的空格、删除结尾的空格、 并返回一个新的字符串**

- repeat()  **接受一个整数参数，表示将当前字符串复制参数倍，组成一个的字符串并返回**

- padStart()、padEnd() **接受一个或者两个参数,第一个参数是复制多少倍，第二个参数是要被复制的值，只有一个参数的话默认第二个参数为空格，start是添加到开头，end则是结尾**

- toLowerCase()、toUpperCase() **两个方法是对字符串进行大小写转换，前者是将大写转换为小写，后者是将小写转换为大写**
### 查询
除了通过索引的方式可以进行查询以外还包括以下方法：

- charAt() **接受一个参数，返回指定位置的字符**

- indexOf() **接受一个参数，查询字符串中是否存在，如果存在返回下标，不存在返回-1**

- startWith()  **接受一个参数，参数必须是字符串，查询字符串是否是以参数作为开头的，如果是就返回true，否则返回false**

- endsWith()  **接受一个参数，参数必须是字符串，查询字符串是否是以参数作为结尾的，如果是就返回true，否则返回false**

- includes() **接受一个参数，参数必须是字符串，查询字符串中是否包含参数，如果有就返回true，否则返回false**

## 转换方法
- split **把字符串按照指定的分隔符，拆分成数组的每一项，如果传入空字符串，则每一个字符都会被拆解成数组的每一项**

## 模板匹配方法
针对正则表达式，字符串设计了几个方法：

- match()  **接受一个参数，可以是一个正则表达式，也可以是一个RegExp对象，返回一个数组**

- search() **接受一个参数，可以是一个正则表达式，也可以是一个RegExp对象,如果找到则返回匹配索引，否则返回-1**
  
- replace() **接受两个参数，第一个参数为匹配的内容，第二个参数则是要替换的元素**

# 类型转换

常见的类型转换
- 强制类型转换(显式转换)
- 自动转换（隐式转换）

## 显式转换
- Number()   **将参数值转换为数字**
- parseInt() **和Number类似，但是只要是以数值开头的都能转换，遇到非数字的会直接返回已经被转换的**
- String()    **将参数转换为字符串**
- Boolean()   **将参数转换为布尔值**

## 隐式转换
隐式转换发生的两种场景
- 比较运算(== 、!=、>、< ) if、 while 需要布尔值的地方
- 算术运算(+、-、*、/、% )

### 自动转换为布尔值
- undefined
- null
- false
- +0
- -0
- NaN
- ""
  除了上面的会被转换为false其他情况会被转换为true
### 自动转换为字符串
- 规则：先将复合类型的值转换为原始类型的值，再将原始类型的值转换为字符串，通常会出现在连接符号"+" 运算中，并且一方为字符串
### 自动转换为Number
- 除了“+”有可能把运算符转换为字符串，其他运算符都会把运算子 自动转换为数值

# ==和===
## 等于操作符 （==）
等于操作符(==)在比较中会先进行类型转换，再确定操作数是否相等，并且遵循一下规则：
- 两个都为简单类型，字符串和布尔值都会转换为数值，再进行比较
- 简单类型和引用类型进行比较，对象则会转换成其原始类型的值，在进行比较
- 如果两个都是引用类型，则比较它们是否指向同一个对象
- Null和Undefined相等
- 存在NaN则返回false
## 全等操作符(===)
- 即在等于操作符（==）的基础之上添加了类型判断，并且不允许进行类型转换

## 区别
- 相等操作符（==）会做类型转换再进行比较，全等操作符（===）则不允许类型转换
- null与Undefined 相等操作符（==）为true 全等操作符(===)为false

# 深拷贝和浅拷贝的区别，以及如何实现一个深拷贝

- 需要明白一点，浅拷贝只存在于引用对象中， 基本数据类型不存在浅拷贝
  
## 什么是浅拷贝
- 浅拷贝指的是创建新的数据，这个数据有着原始数据是性质的一份精确拷贝，如果属性是基本类型，拷贝的就是基本类型的值。如果属性是引用类型，拷贝的就是内存地址
- 浅拷贝是拷贝一层，深层次的引用类型则共享内存地址
####   在js中存在浅拷贝的现象有：
- Object.assign
- slice()  concat()
-  使用扩展运算符实现的复制

## 什么是深拷贝
- 深拷贝开辟一个新的栈，两个对象属性完全相同，但是对应两个不同的地址，修改一个对象的属性，不会改拜年另一个对象的属性
 常见的深拷贝方式有：
 - _.cloneDeep()
 - JQuery.extend()
 - JSON.stringify()
 - 手写一个循环递归
## 总结
- 浅拷贝是拷贝一层，属性为对象时，浅拷贝是复制，两个对象只想同一个地址
- 深拷贝是递归拷贝深层次，属性为对象时，深拷贝时新开栈，两个对象指向不同的地址

# 闭包
## 解释
 存在子父级函数，子函数访问父级函数的变量就会产生闭包
## 使用场景
- 创建私有变量
- 延长变量的生命周期
# 作用域链
## 作用域
- 作用域：变量（变量作用域又称上下文）或函数生效的区域集合 
作用域的划分：
- 全局作用域：**任何不再函数或是大括号“{}”中声明的变量，都属于全局作用域，全局作用域可以在任意地方被访问**
- 块级作用域：**ES6引入了let和const关键字，和var不同，在大括号内部“{}”使用let和const声明的变量和就存在于块级作用域内，大括号外部不能访问**
- 函数作用域：**函数作用域也叫局部作用域，如果一个变量实在函数内部声明的它就在一个函数作用域下面，这些变量就只能在函数内部被访问，函数外部则不能访问**
## 词法作用域
词法作用域又叫静态作用域，变量被创建时就已经确定好了，而非执行阶段确定的。也就是说我们写好代码时它的作用域就已经确定了，JavaScript遵循的就是词法作用域
### 作用域链
当在JavaScript中使用一个变量时，首先js引擎会尝试在当前作用域内查找改变量，如果没有找到，他会向当前作用域的上层作用域，也就是外部去寻找，以此类推，直到全局作用域，如果在全局作用域找不到，那么直接报错，is not defined  这种一层一层查找变量规则的机制，就是作用域连
# 原型，原型链
## 原型
- js是一种基于原型的语言，每个对象都拥有一个原型对象
- 当试图访问一个变量上的属性时，它不仅仅在该对象上搜寻，还会搜寻该对象的原型，以及该对象原型的原型，依次层层向上搜索，直到找到一个名称匹配的属性或者到达原型链的末尾
- 准确的说这些属性和方法定义在Object的构造器函数只上的Prototype属性上，而非实例对象本身
函数可以有属性，每一个函数都有一个特殊的属性叫作“原型”（prototype） 原型对象上有一个自有属性 constructor，这个属性指向该函数
## 原型链
- 原型对象可能也拥有自己的原型，并从中继承方法和属性，一层一层，以此类推，这种关系尝尝被称之为原型链，它解释了一个对象为什么会拥有定义在其他对象上的属性和方法
- 在对象实例和他的构造器之间建立了一个链接（__proto__属性，是构造函数的prototype派生的），之后通过上溯原型链，在构造器中找到这些属性和方法
### 分析 （首先存在构造函数Person）
- 构造函数Person存在原型对象Person.prototype
- 构造函数生成实例对象person，person的__proto__指向构造函数Person的原型对象 也就是指向Person.prototype
- Person.prototype的__proto_指向内置对象，因为Person.prototype是个对象，默认是由Object函数作为类创建的，而Object.prototype 为内置对象
- Person的__proto__指向内置匿名函数anonymous，因为Person是个函数对象，默认由Function作为类创建
- Function.prototype和Function.__proto__同时指向内置匿名函数anonymous，这样原型链的终点就是null
## 总结
概念：
- __proto__作为不同对象之间的桥梁，用来指向创建它的构造函数的原型对象的
- 每个对象的__proto__都是指向它的构造函数的原型对象 prototype的
```js
person1.__proto__===Person.prototype
```
- 构造函数是一个函数对象，是通过Function构造器产生的
```js
Person.__proto__===Function.prototype
```
- 所有的构造器都是函数对象，函数对象都是由Function构造产生的
```js
Object.__proto__===Function.prototype
```
- 原型对象本身是一个普通对象，而普通对象的构造函数都是Object
```js
Person.prototype.__proto__===Object.Prototype
```
- Function的原型同样是一个普通对象，所以__proto__也会指向Object的原型
```js
Function.prototype.__proto__===Object.prototype
```
- Object的原型也有__proto__属性，指向null，null是原型链的顶端
```js
Object.prototype.__proto__ === null
```
总结：
- 一切对象都继承自Object对象，Object对象直接继承根源对象 null
- 一切函数对象(包括object对象)，都继承自Function 对象
- Object对象直接继承自Function对象
- Function对象的__prop__会指向自己的原型对象，最终还是继承自Object对象
 
# 继承
## 继承是什么？
- 继承是面向对象软件的一个概念，如果一个类别B继承自另一个类别A，就把B称为A的子类， 而把A称之为B的父类别，也可以称A是B的超类
### 优点
- 继承可以使子类具有父类的所有方法和属性，但不需要重新编码，
- 在子类继承父类时，可以对属性和方法重新进行定义
- 可以批量生产处具有父类方法和属性的子类
## 实现方式
- 原型链继承
- 构造函数继承（借助call）
- 组合继承
- 原型式继承
- 寄生式继承
- 寄生组合式继承 
# 执行上下文和执行栈
## 执行上下文
- 执行上下文是对JavaScript代码执行环境的一种抽象概念，也就是说只要有JavaScript代码运行，那么他就一定是运行在执行上下文中
执行上下文分为三种：
- 全局执行上下文：只有一个，在浏览器中就是window对象，在node中是global
- 函数执行上下文 ：存在无数个，只有函数被调用时才会创建，每次调用函数都会创建一个新的执行上下文
- Eval函数执行上下文：指的是运行在函数Eval的代码，很少用并且不建议使用
## 生命周期
- 执行上下文的生命周期包含三个阶段：创建阶段 - 执行阶段 - 回收阶段
### 创建阶段 指函数被调用，但未执行任何内部代码之前
创建阶段做了三件事：
- 确定this值，也被称之为 This Binding
- Lexical(词法环境) 组件被创建 
- VariableEnvironment（变量环境）词法被创建
执行阶段
- 在这个阶段，执行变量赋值、代码执行
- 如果JavaScript引擎在源代码中声明的实际位置找不到变量的值，那么将其分配为Undefined
回收阶段
- 执行上下文出栈等待虚拟机回收执行上下文
## 执行栈
- 执行栈，也叫调用栈，具有LIFO(后进先出) 结构，用于存储代码在执行期间创建的所有执行期上下文
- 当JavaScript引擎开始执行你的第一行脚本代码时，他就会创建一个全局执行上下文，然后将它压到执行栈中
- 每当引擎碰到一个函数的时候，他就会创建一个函数执行上下文，然后将这个函数执行上下文压到执行栈中
- js引擎会执行位于执行栈栈顶的执行上下文（一般是函数执行上下文），当该函数执行结束后，对应的执行上下文就会被弹出，然后控制流程到达执行栈的下一个上下文
  
# javaScript中的事件模型
## 事件与事件流
javascript中的事件，可以理解就是在HTML文档或者浏览器中发生的一种交互操作，使得网页具备互动性，常见的有加载时间、鼠标事件、自定义事件等

由于DOM是一个树结构，如果在父子节点绑定事件的时候，当触发子节点的时候，就存在一个顺序问题，这就涉及到了事件流的概念

事件流都会经历三个阶段：
- 事件捕获阶段
- 处于目标阶段
- 事件冒泡阶段 
 ### 事件冒泡
 事件冒泡是从下往上的传播方式，由最具体的元素（触发节点）然后逐渐向上传播到最不具体的那个节点，也就是DOM中最高层的父节点

## 事件模型
事件模型可以分为三种：
- 原始事件模型（DOM0级）
- 标准事件模型（DOM2级）
- IE事件模型（基本不用）
  
### 原始事件模型
事件绑定监听函数比较简单，有两种方式：
- HTML代码中直接绑定
- 通过JS代码绑定
#### 特性
- 绑定速度快
      DOM0级事件具有很好的跨浏览器优势，会以最快的速度绑定，但由于绑定的速度太快，可能页面还未完全加载出来，以至于事件可能无法正常执行
- 只支持冒泡，不支持捕获
- 同一个类型的的事件只能绑定一次
- 删除DOM0级事件  btn.onclick=null
### 标准事件模型
在该事件模型中，一次事件共有三个过程
- 事件捕获阶段：事件从document 一直向下传播到目标元素，依次检查经过的节点是否绑定了事件监听函数，如果有则执行
- 事件处理阶段：事件到达目标元素，触发目标元素的监听函数
- 事件冒泡阶段：事件从目标元素冒泡到document，一次检查经过的节点是否绑定了事件监听函数，如果有，则执行
### IE事件模型
IE事件模型共有两个过程：
- 事件处理阶段： 事件到达目标元素，触发目标元素的监听函数
- 事件冒泡阶段：事件从目标元素冒泡到document，一次检查应该的节点是否绑定了事件监听函数，如果有，则执行
# typeof和instanceof
## typeof
typeof 操作服返回一个字符串，表示未经计算的操作数的类型
- 使用方法如下：
```js
typeof a
typeof(a)
```
a 表示对象或原始值的表达式，其类型将被返回
#### 存在的问题
- 引用数据类型如果用typeof来判断的话，除了function会被识别以外，其他都返回object
- typeof null  返回的为object
## instanceof
instanceof运算符用于检测构造函数的prototype 属性是否出现在某个实例对象的原型链上

## 区别
typeof和instanceof都是判断数据类型的方法，区别如下：
- typeof会返回一个变量的基本类型，instanceof返回的是一个布尔值
- instanceof可以准确地判断负责引用数据类型，但是不能正确判断基础数据类型
- 而typeof也存在弊端，他虽然可以判断基础数据类型（null除外），但是引用数据类型中，除了function之外，其他的也无法判断
- 所以如果需要进行类型判断，建议使用Object.prototype.toString.call()方法来进行判断
# 事件代理及其应用场景
## 什么是事件代理
- 事件代理，通俗的讲，就是把一个元素的响应事件（click、keydown 。。。。。）的函数委托到另一个元素上，前面讲到，事件流都会经过三个阶段：捕获阶段->目标阶段->冒泡阶段，而事件委托就是在冒泡阶段完成的
- 事件委托，会把一个或者一组元素的事件委托到他的父层或者更外层的元素上，真正绑定事件的是外层元素，而不是目标元素。当事件相应到目标元素上时，会通过冒泡事件极致从而触发他的外层元素上的绑定事件上，然后在外层元素上去执行函数
## 应用场景
当一个元素内存在大量子元素，并且子元素执行的事件大部分是相同的，这个时候我门就可以通过事件冒泡将事件委托到父元素上，从而减少重复代码的书写

## 总结
-  适合事件委托的事件有：click、mousedown、mouseup、keydown、keyup、keypress、
从上面应用场景中，我们就可以看到使用事件委托存在的两大优点：
- 减少整个页面所需的内存，提升整体性能
- 动态绑定，减少重复工作
使用事件委托的局限性：
- focus、blur这些事件没有冒泡机制，所以无法进行委托绑定事件
- mousemove、mouseout 这样的事件，虽然有事件冒泡，但是只能不断通过位置去计算定位，对性能消耗比较高，因此也不适合用事件委托
- 如果把所有事件都用事件代理，可能会出现事件误判，即本不应该被触发的事件被绑定上了事件

# new 操作符
## 什么是new 操作符
在javascript中，new操作符是用于创建一个给定构造函数的实例对象
- 通过new操作符构造出来的实例可以访问构造函数中的属性
- 通过new操作符构造出来的实例可以访问构造函数原型连中的属性
## 流程
new 操作符主要做了一下工作：
- 创建一个新的对象 object
- 将对象与构造函数通过原型连链接起来
- 将构造函数中的this绑定到新构建的对象object上
- 根据构造函数返回类型作判断，如果是原始值则被忽略，如果事返回对象，需要正常处理
## 手写一个new 功能
```js
function func(funcx,...arg){
  const obj={}
  obj.__proto__=funcx.tyototype
    const s= funcx.apply(obj,arg)
    return s instamceof Object?s:obj
}
```

# AJAX原理，如何实现

## ajax是什么？

- ajax（异步的javascript与XML） 是一种创建交互式网页应用的网页开发技术，可以在不重复加载整个网页的情况下，与服务器进行数据交换，并且更新部分网页
- ajax的原理简单来说就是 通过XmlHttpRequest对象来向服务器发送异步请求，从服务器获得数据，然后用javascript来操作dom更新页面
## 实现过程
  实现ajax异步交互需要服务器逻辑进行配合，需要完成以下步骤：
- 创建Ajax的核心对象XMLHttpRequest对象
- 通过XMLHttpRequest对象的open()方法与服务端进行连接
- 构件请求所需的数据内容，并通过XMLHttpRequest对象的send() 方法发送给服务器端
- 通过XMLHttpRequest对象提供的onreadystatechange事件监听服务器端你的通信状态
- 接受并处理服务端向客户端相应的数据结果
- 将处理结果更新到HTML页面当中
# bind、call、apply的区别
## 作用 
 bind、call、apply的作用都是改变this指向的
## 区别
### apply
- apply接受两个参数，第一个参数是this的指向，第二个参数是函数接受的参数，以数组的形式传入
- 改变this后原函数会立即执行，且此方法只是临时改变this指向一次
```js
function fn(...args){
    console.log(this,args);
}
let obj = {
    myname:"张三"
}

fn.apply(obj,[1,2]); // this会变成传入的obj，传入的参数必须是一个数组；
fn(1,2) // this指向window
```
- 当第一个参数为null、undefined的时候，默认this指向window（浏览器中）
###  call
- call方法的第一个参数也是this的指向，后面传入是一个参数列表
- 跟apply方法一样，改变this指向后原函数会立即执行，且此方法只是临时改变this指向一次
```js
function fn(...args){
    console.log(this,args);
}
let obj = {
    myname:"张三"
}

fn.call(obj,1,2); // this会变成传入的obj，传入的参数必须是一个数组；
fn(1,2) // this指向window
```
- 同样的，当第一个参数为null或者undefined的时候，this就会指向window
### bind
- bind方法和call方法很相似，第一个参数也是this的指向，后面传入的也是一个参数列表（但是这个参数列表可以分多次传入）
- 改变this指向后不会立即执行，而是返回一个永久改变this指向的函数
```js
function fn(...args){
    console.log(this,args);
}
let obj = {
    myname:"张三"
}

const bindFn = fn.bind(obj); // this 也会变成传入的obj ，bind不是立即执行需要执行一次
bindFn(1,2) // this指向obj
fn(1,2) // this指向window
```
###  区别
从上面可以看到 apply、call、bind三者的区别在于：
- 相同点： 
     - 三者都可以改变韩式this的指向
     - 三者第一个参数都是this要指向的对象，如歌没有这个参数或者参数为null、 undefined，则默认指向全局window
- 不同点：
     - 三者都可以穿参，但是apply是数组，而call是参数列表，且apply和call是一次性传入单数，而bind可以分为多次传入
     - bind是返回绑定this之后的函数，apply、call则是立即执行 
# 正则表达式
## 什么是正则表达式？
正则表达式是用来匹配字符串的强有力的规则
- 它的设计思想是一种描述性的语言定义一个规则，凡是符合规则的字符串，我们就认为它匹配了，否则改字符串就是不合法的
在JavaScript中，正则表达式也是对象，构建正则表达式有两种方式：
1. 字面量创建，其由包含在斜杠之间的模式组成  
```js
const re=/\d+/g;
```
2. 调用RegExp对象的构造函数
```js
const re=new RegExp("\\d","g")
const rul='\\d+'
const re1=new RegExp(rul,'g')
```
- 使用构建函数创建，第一个参数可以是一个变量，遇到特殊字符“\”需要使用“\\”进行转义
## 匹配规则

常见的校验规则如下：

| 规则        | 描述                                                  |
| ----------- | ----------------------------------------------------- |
| \           | 转义                                                  |
| ^           | 匹配输入的开始                                        |
| $           | 匹配输入的结束                                        |
| *           | 匹配前一个表达式 0 次或多次                           |
| +           | 匹配前面一个表达式 1 次或者多次。等价于 `{1,}`        |
| ?           | 匹配前面一个表达式 0 次或者 1 次。等价于`{0,1}`       |
| .           | 默认匹配除换行符之外的任何单个字符                    |
| x(?=y)      | 匹配'x'仅仅当'x'后面跟着'y'。这种叫做先行断言         |
| (?<=y)x     | 匹配'x'仅当'x'前面是'y'.这种叫做后行断言              |
| x(?!y)      | 仅仅当'x'后面不跟着'y'时匹配'x'，这被称为正向否定查找 |
| (?<!*y*)*x* | 仅仅当'x'前面不是'y'时匹配'x'，这被称为反向否定查找   |
| x\|y        | 匹配‘x’或者‘y’                                        |
| `{n}`         | n 是一个正整数，匹配了前面一个字符刚好出现了 n 次     |
| `{n,} `       | n是一个正整数，匹配前一个字符至少出现了n次            |
| `{n,m}`       | n 和 m 都是整数。匹配前面的字符至少n次，最多m次       |
| [xyz\]      | 一个字符集合。匹配方括号中的任意字符                  |
| [^xyz\]     | 匹配任何没有包含在方括号中的字符                      |
| \b          | 匹配一个词的边界，例如在字母和空格之间                |
| \B          | 匹配一个非单词边界                                    |
| \d          | 匹配一个数字                                          |
| \D          | 匹配一个非数字字符                                    |
| \f          | 匹配一个换页符                                        |
| \n          | 匹配一个换行符                                        |
| \r          | 匹配一个回车符                                        |
| \s          | 匹配一个空白字符，包括空格、制表符、换页符和换行符    |
| \S          | 匹配一个非空白字符                                    |
| \w          | 匹配一个单字字符（字母、数字或者下划线）              |
| \W          | 匹配一个非单字字符                                    |

### 正则表达式标记

| 标志 | 描述                                                      |
| :--- | :-------------------------------------------------------- |
| `g`  | 全局搜索。                                                |
| `i`  | 不区分大小写搜索。                                        |
| `m`  | 多行搜索。                                                |
| `s`  | 允许 `.` 匹配换行符。                                     |
| `u`  | 使用`unicode`码的模式进行匹配。                           |
| `y`  | 执行“粘性(`sticky`)”搜索,匹配从目标字符串的当前位置开始。 |

### 贪婪模式
在了解贪婪模式之前，首先举个例子
```js
const reg=/ab{1,3}c/
```
在匹配过程中，尝试可能的顺序是从多往少的方向去尝试，首先会尝试`bbb` ，然后再看整个正则是否能匹配，不能匹配时，吐出一个`b`，即在`bb`的基础上在进行尝试，以此重复

如果多个贪婪词挨着，则深度优先搜索
```js
const string='132456'
const regx=/(\d{1,3})(\d{1,3})/
console.log(string.match(regx))
// ['12345', '123', '45', index: 0, input: '12345', groups: undefined]
```
其中前面的 `\d{1,3}`匹配的是 123 后面的 `\d{1,3}` 匹配的是45

### 懒惰模式
惰性量词就是在贪婪量词之后加一个问号，表示尽可能少的匹配
```js
let string ='12345'
let regx=/(\d{1,3}?)(\d{1,3})/
console.log(string.match(regx))
// ['1234', '1', '234', index: 0, input: '12345', groups: undefined]
```
其中 `\d{1,3}`只匹配到一个字符1，而后面的 \d{1,3}匹配了234

### 分组
- 分组主要是通过`()`来进行实现的，比如beyond{3} 是匹配d字母3次，而 (beyond){3}则表示匹配beyond字母三次
- 在 `()`内使用`|`能达到或的效果，例如`(doc|xxx)`可以匹配doc或者xxx
- 反向引用，巧用`$`分组捕获
```js
let str="John Smith"
/ 交换名字和姓氏
console.log(str.replace(/(john) (smith)/i, '$2, $1')) // Smith, John
```

## 匹配方法
正则表达式常被用于某些方法，我们可以分为两类：
- 字符串（str）方法：math、mathAll、search、replace、split
- 正则对象下（regexp）的方法：test、exec


| 方法     | 描述                                                         |
| :------- | :----------------------------------------------------------- |
| exec     | 一个在字符串中执行查找匹配的RegExp方法，它返回一个数组（未匹配到则返回 null）。 |
| test     | 一个在字符串中测试是否匹配的RegExp方法，它返回 true 或 false。 |
| match    | 一个在字符串中执行查找匹配的String方法，它返回一个数组，在未匹配到时会返回 null。 |
| matchAll | 一个在字符串中执行查找所有匹配的String方法，它返回一个迭代器（iterator）。 |
| search   | 一个在字符串中测试匹配的String方法，它返回匹配到的位置索引，或者在失败时返回-1。 |
| replace  | 一个在字符串中执行查找匹配的String方法，并且使用替换字符串替换掉匹配到的子字符串。 |
| split    | 一个使用正则表达式或者一个固定字符串分隔一个字符串，并将分隔后的子字符串存储到数组中的 `String` 方法。 |

### str.match(regexp)
`str.match(regexp)` 方法在字符串str中找到匹配`regexp`的字符

- 如果`regexp` 不带有`g`标记，则它以数组的形式返回第一个匹配项，其中包含分组和属性`index`（匹配项的位置）、 input（输入字符串，等于`str`）
```js
let str = "I love JavaScript";

let result = str.match(/Java(Script)/);

console.log( result[0] );     // JavaScript（完全匹配）
console.log( result[1] );     // Script（第一个分组）
console.log( result.length ); // 2

// 其他信息：
console.log( result.index );  // 7（匹配位置）
console.log( result.input );  // I love JavaScript（源字符串）
```
- 如果`regexp`带有`g`标记，则将它所有匹配项的数组作为字符串返回，而不包含分组和其他详细信息
```js
let str = "I love JavaScript";

let result = str.match(/Java(Script)/g);

console.log( result[0] ); // JavaScript
console.log( result.length ); // 1
```
- 如果没有匹配项，则无论是否带有标记`g` ,都将返回null
```js
let str = "I love JavaScript";

let result = str.match(/HTML/);

console.log(result); // null
```
### str.matchAll(regexp)
- 返回一个包含所有匹配正则表达式的结果及分组捕获组的迭代器
```js
const regexp = /t(e)(st(\d?))/g;
const str = 'test1test2';

const array = [...str.matchAll(regexp)];

console.log(array[0]);
// expected output: Array ["test1", "e", "st1", "1"]

console.log(array[1]);
// expected output: Array ["test2", "e", "st2", "2"]
```
### str.search(regexp)
- 返回第一个匹配项的位置。如果未找到就返回 -1
```js
let str = "A drop of ink may make a million think";

console.log( str.search( /ink/i ) ); // 10（第一个匹配位置）
```
- 这里需要注意，search仅查找第一个匹配项

### str.replace(regexp)
- 替换与正则表达式匹配的字符串，并返回替换后的字符串，在不设置全局匹配 `g`的时候，只替换第一个匹配成功的字符串片段
```js
const reg1=/javascript/i;
const reg2=/javascript/ig;
console.log('hello Javascript Javascript Javascript'.replace(reg1,'js'));
//hello js Javascript Javascript
console.log('hello Javascript Javascript Javascript'.replace(reg2,'js'));
//hello js js js
```
### str.split(regexp)
- 使用正则表达式（或子字符串）作为分隔符来分割字符串
```js
console.log('12, 34, 56'.split(/,\s*/)) // 数组 ['12', '34', '56']
```
### regexp.exec(str)
- `regexp.exec(str)` 方法返回字符串`str`中的 `regexp` 匹配项，与以前的方法不同，它是在正则表达式而不是字符串上调用的
- 根据正则表达式是否带有标志`g`,它的行为有所不同
- 如果没有`g`那么`regexp.exec(str)`返回的第一个匹配项与`str.match(regexp)`完全相同
- 如果有标记`g`,调用`regexp.exec(str)`会返回第一个匹配项，并将紧随其后的位置保存在属性 `regexp.lastIndex`中。下一次同样的调用会从位置 `lastIndex`开始搜索，返回下一个匹配项，并将其后的位置保存在 `regexp.lastIndex`中
```js
let str = 'More about JavaScript at https://javascript.info';
let regexp = /javascript/ig;

let result;

while (result = regexp.exec(str)) {
  console.log( `Found ${result[0]} at position ${result.index}` );
  // Found JavaScript at position 11
  // Found javascript at position 33
}
```
### regexp.test(str)
- 查找匹配项，然后返回true/false 表示是否存在
```js
let str = "I love JavaScript";

// 这两个测试相同
console.log( /love/i.test(str) ); // true
```
# 事件循环（event loop）
## 什么是事件循环
- 首先，js是一门单线程语言，意味着同一时间内只能做一件事情，但是这并不意味着单线程就阻塞，而实现单线程非阻塞的方法就是事件循环（Event Loop）
在js中所有任务都可以分为：
- 同步任务：立即执行的任务，同步任务一般会直接进入到主线程中执行
- 异步任务：异步执行的任务，例如ajax请求，settimeout、promise.then()等

 ### 过程：
 1. 首先任务会进入任务栈，判断是同步还是异步
 2. 如果是同步就推入主线程进行执行，如果是异步任务就放入事件队列当中
 3. 当同步任务执行完毕，就会去事件队列中读取对应的异步任务推入到主线程，然后判断当前异步内是同步还是异步，以此往复知道全部事件执行完毕
## 宏任务和微任务
- 在异步任务中，可以将任务划归为两类，一类是宏任务，一类是微任务
### 微任务
- 一个需要异步执行的函数，执行时机是在主函数执行结束之后、当前宏任务结束之前
常见的微任务有：
- promise.then
- MutaionObserver
- Object.Observer(已废弃，Proxy对象代替)
- process.nextTick（Node.js）
### 宏任务
- 宏任务的事件粒度比较大，执行的时间间隔是不能精确控制的，对于一些高 实时性的需求就不太符合

常见的宏任务有：
- script(可以理解为外层同步代码)
- setTimeout/setinterVal
- UI rendering/UI 事件
- postMassage、MessageChannel
- setImmediate、I/O（Node.js）

### 执行顺序
1. 先执行一个宏任务
2. 在执行一个微任务，直到整个微队列为空
3. 再去执行下一个宏任务
4. 重复以上过程

## async与await
- `async`是异步的意思。`await`则可以理解为 `async wait` 所以可以理解`async`就是用来声明一个异步方法，而`await`是用来等待异步方法执行
### async
- `async`函数返回一个`promise`对象,下面两种方法是等效的
```js
function f() {
    return Promise.resolve('TEST');
}

// asyncF is equivalent to f!
async function asyncF() {
    return 'TEST';
}
```  
### await
- 正常情况下，`await`命令后面是一个promise对象，返回该对象的结果，如果不是Promise对象，就直接返回对应的值
```js
async function f(){
    // 等同于
    // return 123
    return await 123
}
f().then(v => console.log(v)) // 123
```
不管 await 后面跟的是什么，await 都会阻塞后面的代码
```js
async function fn1 (){
    console.log(1)
    await fn2()
    console.log(2) // 阻塞
}

async function fn2 (){
    console.log('fn2')
}

fn1()
console.log(3)
```

# Dom 常见操作

## Dom常见操作分为以下几种
- 创建节点
- 查询节点
- 更新节点
- 添加节点
- 删除节点

## 创建节点
- createElement : 创建新元素，接受一个参数，即要创建元素的标签名
```js
const divEl = document.createElement("div");
```
- createTextNode：创建一个文本节点
```js
const textEl = document.createTextNode("content");
```
- createDocumentFragment： 用来创建一个文档碎片，他表示一种轻量级的文档，主要是用来存储临时节点，然后把文档碎片的内容一次性添加到`DOM`中
```js
const fragment = document.createDocumentFragment();
```
当请求把一个 `DocumentFragment` 插入到文档树时，插入的不是 `DocumentFragment`自身，而是他的所有子孙节点
- createAttribute：创建属性节点，可以是自定义属性
```js
const dataAttribute = document.createAttribute('custom');
consle.log(dataAttribute);
```
## 获取节点
- querySelector ：传入任何有效的Css选择器，即可选中首个`dom`元素。如果页面上没有指定元素，则返回null
```js
document.querySelector('.element')
document.querySelector('#element')
document.querySelector('div')
document.querySelector('[name="username"]')
document.querySelector('div + p > span')
```
- querySelectorAll：返回一个包含节点子树内所有与之相匹配的`Element`节点列表，如果没有相匹配的，则返回一个空节点列表
```js
const notLive = document.querySelectorAll("p");
```
需要注意的是，该方法返回的是一个 NodeList的静态实例，它是一个静态的“快照”，而非“实时”的查询
### 关于获取dom元素还有以下方法：
- document.getElementById('id属性值')：返回拥有指定id的对象的引用
- document.getElementsByClassName('class属性值')：返回拥有指定class的对象集合
- document.getElementsByTagName('标签名')：返回拥有指定标签名的对象集合
- document.getElementsByName('name属性值')： 返回拥有指定名称的对象结合
- document/element.querySelector('CSS选择器')：  仅返回第一个匹配的元素
- document/element.querySelectorAll('CSS选择器')：   返回所有匹配的元素
- document.documentElement：  获取页面中的HTML标签
- document.body： 获取页面中的BODY标签
- document.all['']：  获取页面中的所有元素节点的对象集合型
## 更新节点
### innerHTML 
- 不但可以修改一个dom节点的文本内容，还可以直接通过HTML片段修改 DOM 节点的内部子树
```js
// 获取<p id="p">...</p >
var p = document.getElementById('p');
// 设置文本为abc:
p.innerHTML = 'ABC'; // <p id="p">ABC</p >
// 设置HTML:
p.innerHTML = 'ABC <span style="color:red">RED</span> XYZ';
// <p>...</p >的内部结构已修改
```
### innerText,textContent
- 自动对HTML进行字符串编码，保证无法设置任何HTML标签
```js
// 获取<p id="p-id">...</p >
var p = document.getElementById('p-id');
// 设置文本:
p.innerText = '<script>alert("Hi")</script>';
// HTML被自动编码，无法设置一个<script>节点:
// <p id="p-id">&lt;script&gt;alert("Hi")&lt;/script&gt;</p >
```
- 两者的区别在于读取属性时，innerText不返回隐藏元素的文本，而textContent返回所有的文本

### style
- DOM节点的style属性对应所有的css，可以直接获取或设置，遇到 `-` 需要转换为驼峰命名
```js
// 获取<p id="p-id">...</p >
const p = document.getElementById('p-id');
// 设置CSS:
p.style.color = '#ff0000';
p.style.fontSize = '20px'; // 驼峰命名
p.style.paddingTop = '2em';
```
## 添加节点
### innerHTML
- 如果这个dom节点是空的，例如`<div></div>`，那么直接使用`innerHTML=<span>child</span>`就可以修改dom节点的内容，相当于添加了新的dom节点
- 如果这个节点不是空的，那就不能这么做，因为innerHTML会直接替换掉原来的所有子节点

### appendChild
- 把一个子节点添加到一个父节点的最后一个子节点
### insertBefore
- 把子节点插入指定位置
  ```js
  parentElement.insertBefore(newElement, referenceElement)
  ```
### setAttribute
- 在指定元素中添加一个属性节点，如果元素中已有该属性，则改变属性值
```js
const div = document.getElementById('id')
div.setAttribute('class', 'white');//第一个参数属性名，第二个参数属性值。
```
## 删除节点
- 删除一个节点。首先要获得该节点本身以及他的父节点，然后调用父节点的removeChild把自己删除掉
```js
// 拿到待删除节点:
const self = document.getElementById('to-be-removed');
// 拿到父节点:
const parent = self.parentElement;
// 删除:
const removed = parent.removeChild(self);
removed === self; // true
```
- 删除后的节点虽然在文档树种不存在了，但其实它还在内存中，可以随时再被添加到别的位置

# BOM
## 什么是BOM
- bom是浏览器对象模型，只存在于浏览器中，提供了独立于内容与浏览器窗口进行交互的对象
- 其作用就是跟浏览器做一些交互效果，比如如何进行页面的后退，前进，刷新，浏览器的窗口发生变化，滚动条的滚动，以及获取客户的一些信息：浏览器品牌版本，屏幕的分辨率
## dom和bom的区别
- dom是文档对象模型，bom是浏览器对象模型
- dom就是把文档当做对象来看待，bom则是把浏览器当做对象来看待
- dom的顶级对象是document，bom的顶级对象是window
- dom学习的是操作页面元素，bom学习的是浏览器窗口交互的一些对象
- dom是w3c标准规范，bom则是浏览器厂商在各自浏览器上定义的，兼容性比较差
## window
- bom的核心对象是window，它表示浏览器的一个实例
- 在浏览器中window对象具有双重角色，既是浏览器窗口的一个接口，又是全局对象
- 因此，在所有全局作用域内生命的函数、变量都会变成window的属性和方法
###  窗口控制方法
- `moveBy(x,y)`：从当前位置水平移动窗体x个像素，垂直移动y个像素。x为负数向左移动，y为负数则向上移动窗体。
- `moveTo(x,y)`：移动窗体左上角相对于屏幕左上角的(x,y)点
- `resizeBy(w,h)`：相对窗体当前的大小，宽度调整w个像素，高度调整h个像素。如果参数为负值，将缩小窗体，反之扩大窗体
- `scrollTo(x,y)`：如果有滚动条，将横向滚动条移动到相对于窗体宽度为x个像素单位的位置。将纵向滚动条移动到相对于窗体高度为y个像素单位的位置
- `scrollBy(x,y)`：如果有滚动条，将横向滚动条向右移动x个像素的位置，将纵向滚动条向下移动y个像素的位置
### `window.open`：既可以打开一个新的窗口，也可以导航到一个特定的url地址
- 如果window.open()传递了第二个参数，且该参数是已有窗口或者框架的名称，那么就会在目标窗口加载第一个参数指定的URL
- window.open()会返回新窗口的引用，也就是新窗口的window对象
###  `window.close()` ：关闭当前窗口
## location：获取当前URL地址信息
它具有以下属性：
- hash：获取url中`#` 后面的字符串,如果没有，则返回空字符串
- host：获取服务器名称和端口号
- hostname：获取域名，不带端口号
- href：获取完整的url
- pathname：获取服务器下的文件路径
- port：url的端口号，没有则为空
- protocol：获取使用的协议
- search：url的查询字符串，通常为`?`后面的内容
除了`hash`之外，修改location任意一个属性，都会触发页面重新加载url
- `location.reload()`，此方法可以重新刷新当前页面。这个方法会根据最有效的方法刷新页面，如果页面自上一次请求以来没有发生过改变，那么页面就会从浏览器缓存中重新加载。如果要强制从服务器中重新进行加载，需要传递一个参数`true`
## navigator
- navigator 对象主要是用来获取浏览器的属性，区分浏览器类型，属性比较多
## screen
- 保存的纯粹是客户端能力信息，也就是浏览器窗口外面的客户端显示器的信息
## history
- `history`主要是用来操作浏览器URL的历史记录，可以通过参数向前，向后，或者指定URL进行跳转
常用的属性如下：
- history.go()：接受一个整数的数字或者字符串作为参数。如果参数是字符串：向最近的一个记录中包含指定字符串的页面进行跳转。如果参数是数字：为正数则向前跳转指定的页面，如果为负数则向后跳转指定的页面。如果为0 则刷新当前页面
- history.forward() :向前跳转一个页面
- history.back()：向后跳转一个页面
- history.length():获取历史记录数量
# 递归和尾递归
## 递归
- 指在函数的定义中使用自身的方法
- 如果一个函数在内部调用自身本身，那么他就是一个递归函数
- 其核心思想是把一个大型复杂的问题层层转化为一个与原问题相似的规模较小的问题来解决
- 递归需要有边界条件（否则就是无限递归，类似死循环）：递归前进阶段和递归返回阶段，当边界条件不满足时，递归前进，当递归边界满足时，递归返回
## 尾递归
- 即在函数尾位置调用自身（或是一个尾调用本身的其他函数等等。）尾递归也是递归的一种特殊情形，尾递归是一种特殊的尾调用，即在尾部直接调用自身的递归函数
### 尾递归在普通尾调用的基础上多出了两个特征：
- 在尾部调用的是自身函数
- 可通过优化，使得计算仅占用常量栈空间

在递归调用过程中系统为每一层的返回点、局部变量等，开辟了栈来存储，递归的次数过多容易造成栈溢出，那么这个时候我们就可以使用尾递归，即一个函数中所有递归形式的调用都出现在函数的末尾，对尾递归来说，由于只存在一个调用记录，所以永远不会发生`栈溢出`错误
## 应用场景
- 斐波那契数列
- 数组求和
- 数组扁平化
- 数组对象格式化
- 深度克隆
# 内存泄露
## 什么是内存泄露
- 是指在计算机中，由于疏忽或者错误造成程序未能释放已经不在使用的内存
## 垃圾回收机制
- js中有自动垃圾回收机制，也就是说，执行环境会负责管理代码执行过程中使用的内存
### 原理：垃圾回收机制会定期(周期性)地找出那些不再继续使用的变量，然后释放其内存
通常情况下有两种实现方法：
- 标记清除
- 引用计数

### 标记清除
 是js最常用的垃圾回收机制
- 当变量进入环境时，就标记这个变量为“进入环境”。进入环境的变量所占用的内存就不能被释放，当变量离开环境时，则将其标记为“离开环境”
- 在垃圾回收机制运行的时候，会标记内存中所有的变量，然后，它会将所有在上下文中的变量，以及被在上下文中的变量引用的变量的标记去掉
- 再次之后再被加上标记的变量就是待删除了，原因是任何上下文中的变量都访问不到他们了
- 随后垃圾回收程序做一次内存清理，销毁所有带标记的值并回收他们的内存
### 引用计数：
- 语言引擎有一张“引用表”，保存了内存当中所有的资源（通常是各种值）的引用次数，如果一个值的引用次数是0，就表示这个值不再被用到了，因此就可以将这块内存进行释放
- 如果一个值不再被需要，并且引用数不为零，那么垃圾回收机制就无法释放这块内存，从而导致内存泄漏
## 常见的内存泄漏情况
- 意外的全局变量
- 定时器
- 闭包
- 没有清理的对dom元素的引用
- 事件监听
# js本地存储
## 本地存储的方式
主要分为以下四种：
1. cookie
2. sessionStorage
3. localStorage
4. indexedDB

### cookie  
- cookie类型为 小型文本文件 指的是某些网站为了辨别用户身份而存储在用户本地终端上的数据，是为了解决http无状态导致的问题
- 作为一段不超过4kb的小型文本数据，它是由一个名称（Name）、一个值（Value）和其他几个用于控制`cookie`有效期、安全性、适用范围的可选属性组成
- 但是cookie每次请求时都会被发送，如果不使用https对其进行加密，其保存的信息非常容易被窃取，从而导致安全风险
#### cookie常用的一些属性
- Expires 用于设置cookie的过期时间
- Max-Age 用于设置在cookie失效之前需要经过的秒数（优先级比Rxpires 高）
- Domain 指定了Cookie可以送达的主机名
- Path指定了一个URL路径，这个路径必须出现在要请求的资源的路径中才可以发送Cookie首部
- 标记为 Secure的Cookie只应通过被HTTPS协议加密过的请求发送给服务端
  
`通过上述标准，我们可以看到Cookie一开始的作用并不是为了缓存而设计出来的，只是借用了cookie的特性实现缓存`
### localStorage
HTML5新方法，IE8及以上浏览器都兼容
#### 特点
- 生命周期：持久化的本地存储，除非主动删除数据，否则数据永远是不会过期的
- 存储的信息在同一域中是共享的
- 当本页操作（新增、修改、删除）了localStorage的时候，本页面永远不会触发storage事件，但是别的页面会触发storage事件
- 大小：5M（跟浏览器厂商有关）
- loaclStorage本质上是对字符串的读取，如果存储内容多的话，会消耗内存空间，导致页面变卡
- 会受到同源策略的限制

#### 使用：
- 设置：
```js
loaclStorage.setItem('name','value')
```
- 获取
```js
localStorage.getItem('name')
```
- 获取键名
```js
loaclStorage.key(0) //获取第一个键名
```
- 删除
```js
localStorage.removeItem('username')
```
- 一次性清除所有存储
```js
localStorage.clear()
```
#### 缺点：
- 无法像Cookie 一样设置过期时间
- 只能存入字符串，无法直接存对象

### sessionStorage
SessionStorage 和 localStorage 使用方法基本一致，唯一不同的是生命周期，一旦页面（会话）关闭，sessionStorage 将会删除数据

#### 扩展的前端存储方式
- indexedDB 是一种低级API，用于客户端存储大量结构化数据（包括，文件/blobs）。该API使用索引来实现对该数据的高性能搜索
- 虽然 web Storage对于存储较少量的数据很有用，但是对于存储更大量的数据结构化程序来说，这种方法不太有用，indexDB提供了一个解决方案
#### 优点
- 存储量理论上没有上限
- 所有的操作都是异步的，相比于LocalStorage 同步操作性更高，尤其是数据量较大时
- 支持存储原生JS的对象
- 是个正经的数据库，意味着数据库能干的事，它也能干
#### 缺点：
- 操作非常繁琐
- 本身有一定门槛
关于 indexedDB的使用基本步骤如下：
- 打开一个数据库。并开始一个事务
- 创建一个`object store`
- 构件一个请求来执行一些数据库操作，像增加或提取数据等。
- 通过监听正确类型等dom事件以等待操作完成
- 在操作结果上执行一些操作（可以在request对象中找到）
## 区别
关于 cookie、loaclStorage、sessionStorage三者的区别主要如下：
- 存储大小：cookie数据大小不能够超过4k，sessionStorage和localStorage虽然也有存储大小的限制，但是比cookie大的多，可以到5M或者更大
- 有效时间：localStorage 存储持久的数据，浏览器关闭之后数据不会丢失，除非主动删除；session Storage数据在当前浏览器窗口关闭后自动删除；cookie设置的cookie过期时间之前会一直有效，即使窗口或浏览器关闭
- 数据与服务器之间的交互方式：cookie的数据会自动地传递到服务器，服务端也可以写cookie到客户端：sessionStorage和loaclStorage不会自动把数据发送给服务器，仅存在本地
## 应用场景
- 标记用户与跟踪用户行为的情况，推荐使用cookie
- 适合长期保存在本地的数据（令牌），推荐使用 LocationStorage
- 敏感账号一次性登陆，推荐使用sessionStorage
- 存储大量数据的情况、在线文档（富文本编辑器）
# 函数式编程
## 什么是函数式编程
- 函数式编程是一种编程范式，一种编写程序的方法论
- 主要的编程范式有三种：命令式编程，声明式编程，函数式编程
- 相比命令式编程，函数式编程更加强调程序执行的结果而非过程，倡导利用若干简单的执行单元，让计算结果不断渐进，逐层推导复杂的运算，而非设计一个复杂的实行过程
## 概念
### 纯函数
- 函数式编程旨在尽可能的提高代码的无状态性和不变性，要做到这一点，就要学会使用无副作用的函数，也就是纯函数
- 纯函数式给定的输入返回相同输出的函数，并且要求你所有的内部数据都是不可变的，纯函数=无状态+内部数据不可变(无副作用)
#### 特性：
- 函数内部传入指定的值，就会返回确定唯一的值
- 不会造成超出作用域的变化，例如：修改全局变量或引用传递的参数
#### 优势：
- 使用纯函数，我们可以产生可测试的代码
- 不依赖外部环境计算，不会产生副作用，提高函数的复用性
- 可读性更强，函数不管是否是纯函数，都会有一个语义化的名称，更便于阅读
- 可以组装成复杂任务的可能性。符合模块化概念及单一性原则
### 高阶函数
- 在编程中，我们需要处理的其实只有两种：数据与关系，而关系就是函数
- 高阶函数：就是以函数作为输入或输出的函数被称之为高阶函数
### 柯里化
- 柯里化是把一个多参数函数转化为一个嵌套的一元函数的过程
#### 意义：
- 让纯函数更纯，每次接受一个参数，松散解耦
- 惰性执行
### 组合与管道
- 组合函数，目的是将多个函数组合成一个函数
- 意义：可以把很多小函数组合起来完成更复杂的逻辑
## 优缺点
### 优点：
- 更好的管理状态：因为他的宗旨就是无状态，或者说更少的状态，能最大程度减少这些未知、优化代码、减少出错情况
- 更简单的复用：固定输入 -> 固定输出，没有其他外部变量影响，并且无副作用。这样代码复用时，完全不需要考虑它的内部实现和外部影响
- 更优雅的组合：往大的说，网页是由各个组件组成的。往小的说，一个函数也有可能是多个小函数组成的，更强的复用性带来更强大的组合性
- 隐形好处。减少代码量，提高维护性
### 缺点：
- 性能：函数式编程相对于指令性编程，性能绝对是一个短板，因为他往往会对一个方法进行过度包装，从而产生上下文切换的性能开销
- 资源占用：在js中为了实现对象状态的不可变，往往会创建新的对象，因此，它对垃圾回收所产生的压力远远超过其他编程方式
- 递归陷阱：在函数式编程中，对了实现迭代，通常会采用递归操作。
# 函数缓存
## 什么是函数缓存
- 函数缓存就是将函数运算的结果进行缓存，本质上就是利用空间（缓存存储）换时间（计算过程），常用语缓存数据计算结果和缓存对象。缓存只是一个临时的数据存储，它保存数据，以便将来对该数据的请求能够更快的得到处理
## 如何实现
实现数据缓存主要依靠以下方法
- 闭包
- 柯里化
- 高阶函数
## 应用场景
- 虽然使用缓存效率非常高，但并不是所有场景都适用，因此一定不要滥用函数缓存
  以下几种情况，适合使用缓存：
- 对于昂贵的函数调用，执行负责计算的函数
- 对于具有有限且高度重复输入范围的函数
- 对于具有重复输入值的递归函数
- 对于纯函数，即每次使用特定输入调用时返回想通输入的函数

# js数字精度丢失
```js
0.1+0.2===0.3//false
```
## 原因
0.2和0.1 都会先被转化为二进制，然后进行运算，然后运算结果再被转换为十进制
- 计算机存储双精度浮点数需要先把十进制数转换为二进制的科学计数法的形式，然后计算机以自己的规则{符号位+（指数位+指数偏移量的二进制）+小数部分}存储二进制的科学计数法
- 因为存储时有位数限制(64位)，并且某些十进制的浮点数在转换为二进制时会出现无限循环，会造成二进制的舍入操作（0舍1入），再转换为十进制时就会产生误差
## 解决方案
1. 使用toPrecision 凑整并parseFloat转成数字后再显示
```js
function strip(num, precision = 12) {
  return +parseFloat(num.toPrecision(precision));
}
```
2. 对于运算类，入加减乘除这一类，则需要先转换为整数，然后进行运算
3. 可以使用蒂萨方库，例如 Math.js BigDecimal.js等
# 防抖和节流
## 什么是防抖和节流
- 本质上是优化高频率执行代码的一种手段
  定义：
- 节流：n秒内只运行一次，若n秒内重复触发，只有一次生效
- 防抖，在n秒后执行该事件，若在n秒内被重复触发，则重新计时
## 区别
相同点：
- 都可以通过setTimeout实现
- 目的都是为了降低会调执行频率，节省计算资源
  不同点：
- 函数防抖，在一段连续操作结束后，处理回调函数，利用clearTimeout和setTimeout实现。函数节流，在一段连续的操作中，每一段时间只执行一次，在频率较高的事件中使用来提高性能
- 函数防抖关注一段时间连续触发的事件，只在最后一次执行，而函数节流是一段时间内只执行一次
## 应用场景
防抖在连续的事件，只需触发一次会调的场景有:
- 搜索框搜索输入。只需用户最后一次输入完，再发送请求
- 手机号、邮箱验证输入检测
- 窗口大小，只需要窗口调整完成之后，计算窗口大小，防止重复渲染
  节流在间隔一段时间执行一次会调的场景有：
- 滚动加载：加载更多或滚到底部监听
- 搜索框，搜索联想功能
