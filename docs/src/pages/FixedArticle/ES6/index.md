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
```js`
const s={foo:foo}
//等同于
const s={foo}
```



