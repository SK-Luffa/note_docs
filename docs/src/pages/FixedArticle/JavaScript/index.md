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