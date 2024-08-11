# var、let、const、之间的区别

- 变量提升   var存在变量提升，let和const不存在变量提升
- 暂时性死区  var不存在暂时性死区，let个const存在暂时性死区，只有等到声明变量的那一行代码出现，才可以获取和使用该变量
- 块级作用域   var不存在块级作用域，let和cost存在块级作用域
- 重复声明    var允许重复声明，let统一作用域内不允许重复声明，const则完全不允许重复声明
- 修改声明的变量  var和let允许修改声明的变量，const不允许修改，但是可以修改其属性值
- 使用       能使用const应该尽量使用const ，如果不行就是用let，应尽量减少或者不使用var
  


# 扩展运算符“...” 将一个数组展开
例如：

128390812093809

```js
 const s=[1,2,3] 
 const b=[4,5,6]
 const k=[...s,...b]
//等同于
 const k=[1,2,3,4,5,6]
```

###  注意:
- 扩展运算符 是浅拷贝
- 如果扩展器运算符用于数组被赋值的名称，只能放在参数最后一位，否则会报错
  ```js
  const [...butLast, last] = [1, 2, 3, 4, 5];
      // 报错
  const [first, ...middle, last] = [1, 2, 3, 4, 5];
    //报错
   ```
# 数组的构造函数新增的方法
关于构造函数新增的方法如下：
- Array.from() : 将对象转换为数组  
- Array.of() ：将一组值转换为数组

### Array.from()  
接收两个参数，第一个参数是一个对象，是要被转换的对象，第二个参数用于对象的处理，然后将处理后的值放入返回后的数组当中
```js
let objS={
    a:1,
    b:2
    c:3
}
Array.from(objS,x=>x*x)
//输出
[1,4,9]
```
### Array.of()
用于将一组值转换为数组，当没有参数时，返回一个空数组
```js
Array.of(1,2,3) 
//返回
[1,2,3]
Array.of()
//返回
[]
```

# 数组的实例对象新增的方法
- copyWithin()：将指定位置的成员复制到其他位置（会覆盖原有成员），然后返回当前数组
- find()：用于找出第一个符合条件的成员
- finedIndex()：返回第一个符合条件的数组成员的下标，如果没有符合的，则返回-1
- fill()：使用一个既定值，以填充数组
- entries()： 返回当前数组的键值对
- keys()：返回当前数组的key（键名）
- values()：返回当前数组的value（值）
- includes(): 传递一个参数，用来判断数字中是否包含此项，返回true或者false
- flat()：对数组进行**默认一层**扁平化处理，对原数组没有影响
- flatMap()：对数组的每一个成员执行一遍Array.prototype.map(),然后在对返回的数组执行flat方法，不会改变原数组

####  copyWithin()
```js
// copyWithin(target,start,end)  
// 传递个参数 target（必填）：从该位置开始替换数据。如果为负值，表示倒数
// start(可选)：从该位置开始替换数据，默认为0，如果为负数，表示从末尾开始计算
//end（可选）：到该位置前停止读取数据，默认等于数组长度。如果为负值，表示从末尾开始计算
[1,2,3,4,5].copyWithin(0,3,4) [4,2,3,4,5]
```
#### find() 
```js
find() 
// 传入一个函数，函数有三个参数 val,index,arr 分别对应数组的 值、下标、数组本身 返回数组对应的value值
let s=[1,2,3,4,5].find((val,index,arr)=>val<3)
// s=1
let s=[1,2,3,4,5].find((val,index,arr)=>arr[index]>1)
// s=2
```
```js
// 传入一个函数，函数有三个参数 val,index,arr 分别对应数组的 值、下标、数组本身 返回数组对应的下标
let s=[1,2,3,4,5].find((val,index,arr)=>val<3)
// s=0
let s=[1,2,3,4,5].find((val,index,arr)=>arr[index]>1)
// s=1
```
#### fill()
```js
fill()
//接受三个参数，第一个参数用于填充当前数组，第二个参数用于指定填充的开始位置下标，第三个参数用于指定填充的结束下标
let s=[1,2,3,4,5].fill(1,2,3)
// s=[1,2,1,4,5]
```
### 注意：填充的类型如果是对象，那么则是浅拷贝

#### entries()、keys()、values()
```js
entries()
for (let [index,ele] of ['a', 'b'].entries()) {
  console.log(index,ele);
}
// 输出：0 'a'  
//      1 'b'
keys()
for (let [index] of ['a', 'b'].keys()) {
  console.log(index);
}
// 输出 0，1
values()
for (let [index] of ['a', 'b'].values()) {
  console.log(index);
}
// 输出 a，b
```
#### includes()
```js
// 用于判断数组中是否包含某项 接受两个参数 第一个表示判断的值 ，第二个参数表示搜索的起始位置
[1,2,3,4].includes(2) //true
[1,2,3,4].includes(2,2)//false
```
#### flat()、flatMap() 
```js
// flat() 接受一个参数number，默认为1 表示需要拉平几层参数
[1,2,3,[1,2,[1,2,3]]].flat()
//  [1, 2,3, 1,2 [1,2,3]]
[1,2,3,[1,2,[1,2,3]]].flat(2)
//  [1, 2,3, 1,2 1,2,3]

// flatMap()  对数组的每一个成员执行一遍Array.prototype.map(),然后在对返回的数组执行flat方法，不会改变原数组
// 传递两个参数第一个参数表示 map里的函数，第二个参数表示this  

[1,2,3,[1,2,[1,2,3]]].flatMap(x=>[x,x*2])
// [1, 2, 2, 4, 3, 6, Array(3), NaN]
```
### 注意flatMap也是浅拷贝，并且只能设置  铺平一层

# 数组空位
空位是指，这个数组上没有任何值
- Es6明确将空位转换为undefined，包括 from、扩展运算符、conpyWithin、fill、entries、keys、values、find、findIndex

# 数组排序
将sort()设置为稳定的排序算法
```js
const arr = [
  'peach',
  'straw',
  'apple',
  'spork'
];

const stableSorting = (s1, s2) => {
  if (s1[0] < s2[0]) return -1;
  return 1;
};

arr.sort(stableSorting)
// ["apple", "peach", "straw", "spork"]
```

# 对象 属性的简写
在ES6当中如果对象的key与value是一致的，那吗就可以简写
```js
const s={foo:foo}
//等同于
const s={foo}
```
### 注意：简写方法不能用作构造函数，否则会报错
```js
const obj = {
  f() {
    this.foo = 'bar';
  }
};
new obj.f()
//TypeError: obj.f is not a constructor
```

# 属性名表达式
- ES6允许字面量定义对象时，将表达式放入括号内
```js
let lastword='last any'

const a={
  'first word':'hello'
  [lastword]:'world'
  a['first word']//"hello"
  a[lastword] //"world"
  a["last any"]//"world"
}
```
- 表达式还可以用于定义方法名:
```js
  let obj={
    ['a'+'ny'](){
      return 'hello'
    }
  }
  obj.any()//hello
```
### 注意：属性名表达式不能与简介表达式同时使用
```js
const foo='bar'
const baz={[foo]}//报错 SyntaxError: Unexpected token '['

const baz={[foo]:'bar'}//正确
```
#### 注意：属性名如果是一个对象，默认情况自动将对象转为字符串[object,object]
```js
const a={a:1}
const b={b:2}
const myObj={
  [a]:132,
  [b]:324
}
myObj//{[object Object]: 324}
```

# super 关键字  
this对象指向函数所在的当前对象，ES6新增了一个关键字“super” 指向当前对象的原型对象
```js
const proto={
  foo:"hello"
}
const obj={
  foo:'word',
  find(){
    return super.foo
  }
}
Object.setPrototypeOf(obj,proto)//设置obj的原型为proto
obj.find()//输出hello
```
# 对象属性的遍历 (五种)
- for...in：循环遍历自身和继承的可枚举属性（不包含symbol）
- Object.keys(obj)：返回一个数组，包含对象自身的（不包含继承的）所有可枚举属性（不包含symbol）的属性名
- Object.values（obj）：返回一个数组，包含对象自身的（不包含继承的）所有可枚举属性（不包含symbol）的属性值
- Object.getOwnPropertyNames(object)：返回一个数组，包含对象自身的所有属性（不包含symbol，但是包含不可枚举的属性）的属性名
- Object.getOwnPropertySymbol(object)：返回一个数组，包含对象自身的所有symbol属性的属性名
- Reflect.ownKeys(obj):返回一个数组，包含自身的(不包含继承的)所有的属性名，不论属性名是symbol或是字符串，还是不可枚举

### 上述遍历，都同样遵守属性遍历的次序规则
1. 首先遍历所有的数值(number)键名，按照数值的升序排列
2. 然后遍历所有的字符串(string)键名，按照加入的时间升序排列
3. 最后遍历所有的symbol键名，按照加入的时间升序排列
```js
Reflect.ownKeys({ [Symbol()]:0, b:0, 10:0, 2:0, a:0 })
//返回 ['2', '10', 'b', 'a', Symbol()]
```
# 函数的默认参数
- es6允许为函数参数设置一个默认值
```js
const s=(x=3)=>{
  console.log(x+1)
}
s()//输出4
s(0) //输出1
```
- 参数是默认声明的，所以不能使用let 或const重复声明

```js
const s=(x=3)=>{
  const s=123
  console.log(x+1)
}
s()//error
s(0) //error
```
- 默认参数可以和结构一起使用
```js
  const s=({a,x=3})=>{

  console.log(a+x)
}
s()//error a is undefined
s(0) //3
s(0,1)//1
```
### 参数的默认值应该是函数的尾参数，如果不是非尾部参数，那么这个参数是没有办法省略的，也就是说 非尾部参数默认参数无效
# 函数的属性
## length属性
- length将返回没有指定默认参数的参数个数
```js
  const s=({a,x=3})=>{

  console.log(a+x)
}
s.length //1
```
- 剩余参数不会被计入到lenth
```js
  const s=(...a)=>{
  }
  
s.length //0
```
- 如果默认参数不是尾参数，那么只会计数默认参数之前的非默认参数的个数
```js
 const s=(a,b,s=3,d)=>{
  }
  
s.length //2
```
## name属性
- 返回该函数的名称
```js
 const s=(a,b,s=3,d)=>{
  }
  
s.name //s
```
- 如果将一个具名函数赋值给一个变量，则name属性会返回这个具名函数原本的名字
```js
 function s(){
  }
  const a=s
  
a.name //s
```
- Funtion 的构造函数的name属性为：'anonymous'
```js
(new Function).name
//'anonymous'
```
- bind返回的函数，name属性值会在返回值前面添加 "bound" 前缀
```js
const s=()=>{}
s.bind({}).name//"bound s"
(()=>{}).bind({}).name //"bound"

```
# 函数作用域
- 一旦设置了参数的默认值，函数进行声明初始化时，参数就会形成单独的一个作用域
- 等初始化结束，这个作用域就会消失，这种语法行为在不设置默认参数时是不会出现的
```js
let x=1
function s(y=x){
  x=2,
  console.log(y)
}
s()//1
```
# 严格模式
- 只要函数参数使用了默认值、解构赋值、或者扩展运算符，那么函数内部就不能显式设定为严格模式，否则会报错
```js
// 报错
function doSomething(a, b = a) {
  'use strict';
  // code
}

// 报错
const doSomething = function ({a, b}) {
  'use strict';
  // code
};

// 报错
const doSomething = (...a) => {
  'use strict';
  // code
};

const obj = {
  // 报错
  doSomething({a, b}) {
    'use strict';
    // code
  }
};
```
# 箭头函数
- 使用“=>”定义函数 如果函数表达式内部只有一行，则可以省略“{}” 如果函数的参数只有一个也可以省略“()”
```js
cosnt s=s=>console.log(s) 
s(1)//1

```
- 箭头函数本身没有this，this将会指向函数的外部 
```js
var s=123
const p=()=>{console.log(s)}
p()//123
```
## 箭头函数的特点：
- 函数体内的this对象就是定义时的对象 ,而不是使用时的对象
- 不可以当做构造函数，所以不能使用new关键字，否则报错
- 不可以使用arguments对象，该函数体内不存在，如果要使用可以使用rest(剩余参数)关键字代替
- 不可以使用yieid命令，因此箭头函数不能用作 Generator 函数

# Set和Map
- Set是一种叫做集合的数据结构，Map是一种叫做字典的数据结构
### 集合与字典
- 集合：是由一堆无序的、相关联的，且不重复的内存结构（数学中称之为元素）组成的组合
- 字典：是一些元素的组合。每一个元素有一个称作key的域，不同元素的key各不相同
#### 区别？
- 共同点：集合、字典都可以存储不重复的值
- 不同点：集合是以[值,值]的形式存储元素，字典是以[键,值]的形式存储
## Set
- Set是es6新增的数据结构，类似于数组，但是成员的值都是唯一的，没有重复的值，我们一般称为集合
- Set本身是一个构造函数，用来生成Set数据结构
  ```js
  const s=new Set();
  ```
### Set的增删改查：Set的实例关于增删改查的方法
- size 成员个数
- add() 增加
- delete() 删除
- has() 修改
- clear() 查询
#### size 
- 查询当前Set 实例中成员的个数
```js
  const s=new Set();
  s.add(1).add(2)
   s.size//2
```
#### add()
- 添加某个值，返回Set结构本身
- 当添加的实例中已经存在该元素，Set不会进行处理添加
```js
const s=new Set();
s.add(1).add(2).add(1);//1只会被添加一次
```
#### delete()
- 删除某个值，返回一个布尔值，表示是否删除
```js
const s=new Set();
const p= s.add(1).add(2).delete(1); //s为{2}  p=true
```
#### has() 
- 返回一个布尔值，判断该值是否为Set成员
```js
const s=new Set();
const p= s.add(1).add(2).delete(1).has(2); //s为{2}  p=true
```
#### clear()
- 清除所有成员，没有返回值
```js
const s=new Set();
s.add(1).add(2).delete(1)
s.clear(2); //s为空
```
### 遍历
Set实例的遍历的方法如下：
- keys(): 返回键名的遍历器
- values(): 返回键值的遍历器
- entries(): 返回键值对的遍历器
- forEach(): 使用毁掉函数遍历每个对象
##### Set的遍历顺序就是插入顺序
- keys、values、entries 方法返回的都是遍历器对象
```js
let set=new Set(['red','green','blue'])
for(let item in set.keys()){
  consoel.log(item)
}
// red green blue
for(let item in set.values()){
  consoel.log(item)
}
// red green blue
for(let item in set.entyies()){
  consoel.log(item)
}
// ['red','red']['green','green']['blue','blue']
```
- forEach() 用于对每个成员执行某种操作，没有返回值，键值，键名都相等，同样的forEach方法有第二个参数，用于绑定处理函数的this
```js
let set=new Set([1,2,3])
set.forEach((value,key)=>console.log(key+""+value))
// 11  22 33
```
- 扩展运算符和Set相结合实现数组或者字符串去重
```js
//数组
let arr=[1,2,3,3,2,4,4]
let unique=[...new Set(arr)]//【1,2,3,4】
//字符串
let s='abaaccb'
let uniqure=[... new Set(s)].join('')//abc
```
- 实现并集、交集、差集
```js
let a= new Set([1,2,3])
let b= new Set([4,3,2])
// 并集(指自身和对象重复的和不重复的，重复的指记作一个)
let uni=new Set([...a,...b])
// Set(4) {1, 2, 3, 4}

//交集(指所共同拥有的)
let inter=new Set([...a].filter(x=> b.has(x)))
//Set(2) {2, 3}

// （a 相对于 b 的）差集
let difference = new Set([...a].filter(x => !b.has(x)));
// Set {1}

```

## Map
- map类型是键值对的有序列表，而键和值都可以是任意类型
- Map本身是一个构造函数，用来生成Map数据结构
  
### 增删改查
Map实例针对增删改查有以下属性和操作方法
- size属性 Map的数据长度
- set()  Map写入
- get() Map的读取
- has()
- delete()
- clear
#### size
- size属性返回Map结构成员的总数
```js
const map=new Map()
map.set('foo',true)
map.set('bar',false)
map.size //2
```
#### set
- 向Map写入数据，传递两个参数 第一个参数为“键名”，第二个参数为“键值”
- 如果“键名”重复，则更新当前“键值”
- 如果当前是一个Map对象，则支持链式调用
```js
const s=new Map()
s.set('1',1)//Map(1) {'1' => 1}
s.set('1',2)//Map(1) {'1' => 2}
s.set(0,1).set(undefined,123).set(null,"ss")//Map(4) {'1' => 2, 0 => 1, undefined => 123, null => 'ss'}
```

#### get
- get方法读取key对应的键值，如果找不到key，就返回undefined
```js
const s=new Map()
s.set('1',1)
s.get('1')//1
s.get(1)//undefined
```
#### has()
- 返回一个布尔值，用于判断传入的参数是否包含在当前Map对象的“键名”中
```js
const s=new Map()
s.set('1',1)
s.has('1')// true
s.has(1)//false
```
#### delete()
- delete方法删除某个键，删除成功返回true，否则返回false  参数为“键名”
```js
const s=new Map()
s.set('1',1)
s.delete('1')// true
s.has(1)//false
```
#### clear() 
- 清除Map对象内的所有成员，没有返回值
```js
const s=new Map()
s.set('1',1)
s.clear() 
s//Map(0) {size: 0}
```

### 遍历
map结构提供三个遍历器生成函数和一个遍历方法
- keys()  ：返回键名的遍历器
- values()：返回键值的遍历器
- entries()：返回键值对的遍历器
- forEach()：遍历Map的所有成员
  
遍历的顺序就是插入的顺序
```js
const s=new Map()
s.set(1,1).set(2,3).set(3,2)

for(let item of s.keys()){
  console.log(item)
}
//1 2 3

for(let item of s.values()){
  console.log(item)
}
//1 3 2

for(let item of s.entries() ){
  console.log(item)
}
//[1,1] [2,3] [3,2]

s.forEach((value,key,map)=>{
  console.log(key,value,map)
})
// 1 1 Map(3) {1 => 1, 2 => 3, 3 => 2}
// 2 3 Map(3) {1 => 1, 2 => 3, 3 => 2}
// 3 2 Map(3) {1 => 1, 2 => 3, 3 => 2}
```
# WeakSet和WeakMap
## weakSet
创建实例
```js
const ws=new WeakSet()
```
WeakSet 可以接受一个具有**Iterable** 接口的对象作为参数
```js
const a=[[1,2],[3,4]]
const wk=new WeaSet(a)
// WeakSet {[1,2],[3,4]}
```
在API中Set和MapSet的区别
- 没有遍历操作的API
- 没有size属性
WeakSet成员只能是引用数据类型，不能是其他类型的值
```js
let ws=new WeakSet()
//成员不是引用类型
let weakSet=new WeakSet([2,3]);
console,lig(weakSet) //报错

//成员为引用类型
let obj1={name:1}
let obj2={name:2}
let ws=new WeakSet([obj1,obj2]); 
console.log(ws)
```
weakSet里面的引用只要在外部消失，它在WeakSet里面的引用也会自动消失
## WeackMap
WeakMap结构与Map结构类似，也是用于生成键值对的集合
#### 在API中WeakMap与Map有两个区别
- 没有遍历操作的API
- 没clear方法
```js
// WeakMap 可以使用 set 方法添加成员
const wm1 = new WeakMap();
const key = {foo: 1};
wm1.set(key, 2);
wm1.get(key) // 2
wm1 //WeakMap {{…} => 2}


// WeakMap 也可以接受一个数组，
// 作为构造函数的参数
const k1 = [1, 2, 3];
const k2 = [4, 5, 6];
const wm2 = new WeakMap([[k1, 'foo'], [k2, 'bar']]);
wm2 // WeakMap {Array(3) => 'bar', Array(3) => 'foo'}
```
### weakMap 只接受对象作为参数名(null除外)，不接受其他类型的值作为参数名
```js
const map = new WeakMap();
map.set(1, 2)
// TypeError: 1 is not an object!
map.set(Symbol(), 2)
// TypeError: Invalid value used as weak map key
map.set(null, 2)
```
- WeakMap的键名所指向的对象，一旦不需要，里面的键名对象和所对应的键值会自动消失，不用手动去删除

# Promise
- promise是一种异步编程的解决方案，比传统的解决方案(回调函数)更加合理、更加强大
## promise的优点：
- 使用链式操作，降低了编码的难度
- 代码的可读性增强
## promise的状态
promise有且仅有三种状态
- pedding (进行中)
- fulfilled (已成功)
- rejected (已失败)
## 特点：
- 对象的状态不受外界影响。只有异步操作的结果，可以决定当前是哪一种状态
- 一旦状态发生改变（从pending变为fulfilled或者从pending变为rejected），就不会再变，任何时候都必须满足这个条件
## 用法
Promise对象是一个构造函数，用来生成Promise实例
```js
const promise=new Promise((res,rej)=>{});
```
Promise构造函数接受一个函数作为参数，该函数的两个参数分别是resolve和reject
- resolve 函数的作用是：将promise对象的状态从“未完成” 变为“成功”
- reject  函数的作用是：将promise对象的状态从“未完成”变为“失败”

### 实例方法
Promise 构建出来的实例存在以下方法：
.then()
.catch()
.finally()
#### .then()
- then是实例状态发生改变时的回调函数，第一个参数是resolved状态的回调函数，第二个参数是rejected状态的回调函数
- then方法返回的是一个新的Promise实例，也就是Promise能链式书写的原因
```js
getJSON("/posts.json").then(function(json) {
  return json.post;
}).then(function(post) {
  // ...
});
```
#### .catch
catch()方法是.then(null,rejection)或.then(undefined,rejection)的别名，用于指定发生错误的回调函数
```js
getJSON('/posts.json').then(function(posts) {
  // ...
}).catch(function(error) {
  // 处理 getJSON 和 前一个回调函数运行时发生的错误
  console.log('发生错误！', error);
});
```
- Promise对象的错误具有“冒泡”性质，会一直向后传递，直到被捕获为止
- 一般来说，使用catch方法代替.then()的第二个参数

- promise对象抛出的错误不会传递到外层代码，即，外部代码不会有任何反应
```js
const asyncThing=()=>{
  return new Promise((res,rej)=>{
    res(x+2) //会报错，因为x没有声明
  })
}
``` 
浏览器运行到这一行，会打印出错误提示 ReferenceError：x is not defined，但是不会退出进行catch()方法之中，还能再抛出错误，通过后面的catch方法捕获

#### finally()
finally() 方法用于指定不管Promise对象最后状态如何，都会执行的操作
```js
promise
.then()
.catch()
.finally()
```
### 构造函数方法
Promise构造函数存在以下方法：
- all()
- rece()
- allSettled()
- resolve()
- reject()
- try()
#### all()
- Promise.all()方法用于将多个Promise实例，包装成一个新的Promise实例
```js
const p=Promise.all([p1,p2,p3]);
```
##### 接受一个数组(迭代对象)作为参数，数组成员都应为Promise实例
##### 实例p的状态又 p1、p2、p3 决定，分为两种：
- 只有p1、p2、p3 的状态都变成 fulfilled(成功)，p的状态才会变成 fulfilled（成功），此时 p1、p2、p3 的返回值组成一个数组，专递给p的回调函数
- 只要p1 、p2、p3 之中有任何一个被rejected（失败），p的状态就变成了 rejected（失败），测试第一个被reject的实例的返回值，会传递给p的回调函数
  
### 注意，如果作为参数的 Promise实例，自己定义了catch方法，那么它一旦被rejected，并不会触发 Promise.all()的catch方法

```js
const p1 = new Promise((resolve, reject) => {
  resolve('hello');
})
.then(result => result)
.catch(e => e);

const p2 = new Promise((resolve, reject) => {
  throw new Error('报错了');
})
.then(result => result)
.catch(e => console.log('只会触发这里',e));

Promise.all([p1, p2])
.then(result => console.log(result))
.catch(e => console.log("错哪里了？",e));
// 只会触发这里 Error: 报错了
//     at <anonymous>:8:9
//     at new Promise (<anonymous>)
//     at <anonymous>:7:12
// VM2160:14 (2) ['hello', undefined]
// Promise {<fulfilled>: undefined}

// 这里如果p2没有catch方法那么就会触发Promise.all() 自己的catch方法
```
### race()
- Promise.race()方法同样是将多个Promise实例，包装成一个新的promise实例
- 只要p1、p2、p3之中有一个实例率先改变状态，p的状态就跟着该改变
```js
const p=Promise.race([p1,p2,p3])
```
- 率先改变的Promise实例的返回值则传递给p的回调函数
```js
const p=Promise.race([
    fetch('/resource-that-may-take-a-while'),
  new Promise(function (resolve, reject) {
    setTimeout(() => reject(new Error('request timeout')), 5000)
  })
])
p.then(console.log(123)).catch(console.error)
```
### allSettled()
Promise.allSettled()方法接受一组Promise实例作为参数，包装成一个新的Promise实例，只有等到所有的这些参数实例都返回结果以后，不管是fulfilled还是rerjcted，包装实例才会结束
```js
const promises=[fetch('/api-1'),fetch('/api-2'),fetch('/api-2')]
const x= Promise.allSettled(promises)
x.then(()=>{
  console.log("ok")
})
```
### resolve()
将当前对象转换为Promise对象
```js
Promise().resolve('foo')
//等价于
new Promise(resolve=>resolve('foo'))
```
参数可以分成以下四种情况：
- 参数是一个Promise实例，promise.resolve将不做任何修改、原封不动地返回这个实例
- 参数是一个thenable对象，promise.resove会将这个对象转换为Promise对象，然后立即执行thenable对象的then()方法
- 参数不是具有then()方法的对象，或者根本就不是对象，Promise.resolve() 会返回一个新的Promise对象，状态为resolved
- 没有参数时，直接返回一个resolved状态的Promise对象

### reject()
Promise.reject(reason)方法也会返回一个新的Promise实例，该实例的状态为rejected
```js
const p=Promise.reject('出错了')
//等价于
const p =new  Promise((res,rej)=>rej('出错了'))
//
p.then(null,(s)=>{
  console.log(s)
})
//出错了
```
Promise.reject()方法的参数，会原封不动地变成后续方法的参数
```js
Promise.reject('出错了')
.catch(e=>{
  console.log(e==="出错了")
})
//true
```

# Generator
- Generator函数是ES6提供的一种异步编程的解决方案
## Generator函数
执行Generator函数 会返回一个遍历器对象，可以一次遍历Generator函数内部的每一个状态。形式上，Generator函数是一个普通的函数，但是具有两个特征：
- funtion关键字与函数名之间有一个星号
- 函数体内部使用yield表达式，定义不同的内部状态
```js
function* GeneratorHell0(){
  yield 'hello'
  yield 'world'
  return 'ending'
}
```
## 使用
Generator函数会返回一个遍历器对象，即具有Symbol.iterator属性，并且返回给自己
```js
funtion* gen(){
  //some code
}
const g=gen()
g[Symbol.iterator]()===g
//true
```
通过yield关键字可以暂停generator函数返回的遍历器对象的状态
```js
function* helloworldGenerator(){
  yield 'hello'
  yield 'world'
  yield 'ending'
}
let hw= helloworldGenerator();
```
上述三个状态； hello、world、return、通过next方法才会遍历到下一个内部状态，器运行的逻辑如下：
- 遇到yield表达式，就暂停执行后面的状态，并将紧跟在yield后面的那个表达式的值，作为返回的对象的value属性值。
- 下一次调用next方法时，再继续往下执行，直到遇到下一个yield表达式
- 如果没有遇到新的yield表达式，就一直运行到函数结束，直到return语句为止，并将return语句后面的表达式的值，作为返回的对象的value属性值
- 如果该函数没有return语句，则返回的对象的value属性指为undefined
```js
hw.next()
//{value:'hello',done :false}
hw.next()
// {value:'world',done :false}
hw.next()
// {value:'ending',done :true}
hw.next()
// {value:undefined,done :true}
```
- done 用来判断是否存在下个状态，value对应状态值
- yield 表达式本身没有返回值，说着说总是返回undefined
- 通过调用next方法可以带一个参数，该参数就会被当作上一个yield表达式的返回值
```js
function* foo(x) {
  var y = 2 * (yield (x + 1));
  var z = yield (y / 3);
  return (x + y + z);
}

var a = foo(5);
a.next() // Object{value:6, done:false}
a.next() // Object{value:NaN, done:false}
a.next() // Object{value:NaN, done:true}

var b = foo(5);
b.next() // { value:6, done:false }
b.next(12) // { value:8, done:false }
b.next(13) // { value:42, done:true }
```
正因为Generator函数返回iterator对象，因此我们还可以通过for...of进行遍历
```js
function* foo() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
  return 6;
}
for (let v of foo()) {
  console.log(v);
}
// 1 2 3 4 5
```
原生函数没有遍历接口，通过Generator函数为它加上这个接口，就能使用for...of进行遍历了
```js
function* objectEntries(obj){
let propKeys=Reflect.ownKeys(obj)
for(let propKey of propkeys){
  yield [propkey,obj[propkey]]
}
let jane ={first:'jone',last:'done'}
for (let item of jane){
  console.log(item)
}
}
```
## 异步解决方案
回顾之前展开异步的解决方案：
- 回调函数
- Promise对象
- generator函数
- async/await
#####  这里通过文件读取案例，将几种异步解决的方案进行一个比较
- 回调函数
  所谓回调函数，就是把任务的第二段单独写在一个函数里面，等到重新执行这个任务的时候，在调用这个函数
```js
fs.readFile('/etc.fstab',(err,data)=>{
  if(err) throw err
  console.log(data)
  fs.redfile('/etc/shells',(err,data)=>{
    if(err) throw err;
    console.log(data)
  })
})
```
readFile函数的第三个参数，就是回调函数，等到操作系统返回了 /etc/passwd 这个文件以后，回调函数才会执行

- Promise 
  promise就是为了解决回调地狱而产生的，将回调函数的嵌套，改为链式调用
```js
const fs = require('fs');

const readFile = function (fileName) {
  return new Promise(function (resolve, reject) {
    fs.readFile(fileName, function(error, data) {
      if (error) return reject(error);
      resolve(data);
    });
  });
};


readFile('/etc/fstab').then(data =>{
    console.log(data)
    return readFile('/etc/shells')
}).then(data => {
    console.log(data)
})
```
这种链式操作形式，使得异步任务的两段执行更清楚了，但是也存在了很明显的问题，代码变得冗余，语义话并不强
- Generator
  yield表达式可以暂停函数的执行，next方法用于恢复函数的执行，这使得Generator函数非常适合将异步任务同步化
```js
const gen = function* () {
  const f1 = yield readFile('/etc/fstab');
  const f2 = yield readFile('/etc/shells');
  console.log(f1.toString());
  console.log(f2.toString());
};
```
- async/await
  将上面Generator函数改成 async/await 形式，更为简洁，语义话更强了
```js
const asyncReadFile=async ()=>{
    const f1 = await readFile('/etc/fstab');
  const f2 = await readFile('/etc/shells');
  console.log(f1.toString());
  console.log(f2.toString());
}
```
### 区别
通过上述代码分析，将promise、Generator、async/await 进行比较：
- promise和async/await 是专门用来处理异步操作的
- Generator并不是为异步而设计出来的，他还有其他功能（对象迭代、控制输出、部署Interator接口...）
- promise编写代码相比Generator、async 更为复杂化，且可读性也稍差
- Generator、async 需要与promise 对象搭配处理异步情况
- async实质是Generator的语法糖，相当于会自动执行 Generator函数
- async使用上更为简洁，将异步代码以同步的形式进行编写，是处理异步函数的最终方案
## 使用场景
Generator 是异步解决的一种方案，最大特点则是将异步操作同步化表达出来
```js
function* loadUI(){
  showLoadingScreen()
  yield loadUIDataAsynchronously();
  hideLoadingScreen()
}
let loader=loadUI()
//加载UI
loader.next()
//卸载UI
loader.next()
```
包括redux-saga中间件也充分利用了Generator的特性

# Proxy
## 介绍
- 定义：用于定义基本操作的自定义行为
- 本质：修改的是程序默认行为，就形同于在编程语言层面上做修改，属于元编程（meta programming）
   -  元编程：Metaprogramming，又叫做超编程，是指某类计算机程序的编写，这类计算机程序编写或者操纵其他程序（或者自身）作为他们的数据，或者在运行时完成部分本应在编译时完成的工作
一段代码来理解
```js
!/bin/bash
# metaprogram
echo '#!/bin/bash' >program
for ((I=1; I<=1024; I++)) do
    echo "echo $I" >>program
done
chmod +x program
```
这段程序每执行一次能帮我们生成一个名为program的文件，文件的内容为1024行 echo，如果我们手动来写1024行代码，效率显然低下
- 元编程的优点：与手工编写全部代码相比，程序员可以获得更高的工作效率，或者给予程序更大的灵活性去处理新的情形而无需重新编译

Proxy 亦是如此，用于创建一个对象的代理，从而实现基本操作的拦截和自定义（如属性查找、赋值、枚举、函数调用等）
## 用法
proxy 为构造函数，用来生成Proxy实例
```js
const proxy=new Proxy(target,handler)
```
#### 参数
- target 表示所有拦截的目标对象（任何类型的对象，包括原生数组，函数，甚至是另一个代理）
- handler 通常以函数作为属性的对象，各属性中的函数分别定义了在执行各种操作时代理对象的行为
### handler解析
关于handler拦截属性，有如下：
- get(target,propKey,receiver): 拦截对象属性的读取
- set(target,propKey,value,receiver): 拦截对象属性的设置
- has(target,propKey): 拦截propKey in proxy 的操作，返回一个布尔值
- deleteProperty(target,propKey)：拦截delete Proxy[propKey]d的操作，返回一个布尔值
- ownKey(traget): 拦截Object.key(proxy)、for...in 等循环，返回一个数组
- getOwnPropertyDescriptor(target,propKey)：拦截 Object.getOwnPropertyDescriptor(proxy,propKey)，返回一个布尔值
- definProperty(target,propKey,propDesc)：拦截Object.defineProperty(proxy,propKey,propDesc), 返回一个布尔值
- preventExtensions(target):拦截Object.preventExtensions(proxy),返回一个布尔值
- getPrototypeOf(target):拦截Object.getPrototypeOf(proxy)，返回一个对象
- isExtensible(target)：拦截Object.isExtensible(proxy),返回一个布尔值
- setPrototypeOf(target,proto)：拦截Object.setPrototypeOf(proxy,proto)，返回一个布尔值
- apply(target,object,args): 拦截Proxy 实力作为函数调用的操作
- construct(target,args)：拦截Proxy 实例作为构造函数调用的操作

### Reflect
- 若需要在proxy内部调用对象的默认行为，建议使用Reflect ，他是ES6中操作对象而提供的新的API
 基本特点：
 - 只要proxy对象具有的代理方法，Reflect对象全部具有，已静态方法的形式存在
 - 修改某些Object方法的返回结果，让其变得更合理（定义不存在属性行为的时候不报错，而是返回false）
 - 让Object操作都变成函数行为
Proxy的几种用法
- get()
  get接受三个参数，以此为目标对象、属性名和peoxy实例本身，最后一个参数可选
  ```js
  const person={
    name:'站三'
  }
  const proxy=new Proxy(person,{
    get:(target,propKey)=>{
      return Reflect.get(target,propKey)
    }
  })
  proxy.name //张三
  ```
  get 能够对数组增删改查进行拦截
  ```js
  function createArray(...elements) {
  let handler = {
    get(target, propKey, receiver) {
      let index = Number(propKey);
      if (index < 0) {
        propKey = String(target.length + index);
      }
      return Reflect.get(target, propKey, receiver);
    }
  };

  let target = [];
  target.push(...elements);
  return new Proxy(target, handler);
}

let arr = createArray('a', 'b', 'c');
arr[-1] // c
```
注意：如果一个属性不可匹配(configurable)且不可写（writable），则Proxy不能修改改属性，否则会报错
```js
const target = Object.defineProperties({}, {
  foo: {
    value: 123,
    writable: false,
    configurable: false
  },
});

const handler = {
  get(target, propKey) {
    return 'abc';
  }
};

const proxy = new Proxy(target, handler);

proxy.foo
// TypeError: Invariant check failed
```
### set()
- set 方法用来拦截某个属性的复制操作，可以接受四个参数，依次为目标对象、属性名、属性值和Proxy实例本身
- 假定Person对象有一个age属性，该属性应该是一个不大于200的整数，那么可以使用Proxy保证age的属性值符合要求
  
