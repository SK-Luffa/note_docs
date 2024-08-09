# var、let、const、之间的区别

- 变量提升   var存在变量提升，let和const不存在变量提升
- 暂时性死区  var不存在暂时性死区，let个const存在暂时性死区，只有等到声明变量的那一行代码出现，才可以获取和使用该变量
- 块级作用域   var不存在块级作用域，let和cost存在块级作用域
- 重复声明    var允许重复声明，let统一作用域内不允许重复声明，const则完全不允许重复声明
- 修改声明的变量  var和let允许修改声明的变量，const不允许修改，但是可以修改其属性值
- 使用       能使用const应该尽量使用const ，如果不行就是用let，应尽量减少或者不使用var
  


# 扩展运算符“...” 将一个数组展开
例如：
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
 