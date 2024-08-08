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
