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
# 数组的常用方法
增删改查
## 增加  前三者会对原数组产生影响(改变)，第四个不会对原数组产生影响(不变)
 - push()      **接受一个或者多个参数将其添加到数组末尾，返回数组的最新状态**

 - unshift()  **接受一个或者多个参数将其添加到数组开头，返回数组的最新状态**

 - splice()   **传入三个参数，开始位置，0（要删除元素的个数），插入的元素，返回一个空数组**

 - concat()   **会创建一个副本，然后再把它自己的参数添加到副本末尾，最后返回这个新构建的数组，不会影响原始数组**

## 删除   前三者会对原数组产生影响(改变)，第四个不会对原数组产生影响（不变）
- pop()    **删除数组最后一项，并返回被删除的项**

- shift()  **删除数组的第一项，并返回被删除的项**

- splice()  **传入两个参数，开始位置、删除元素的数量，返回包含删除元素的数组**
  
- slice   **用于创建一个包含原有数组中一个或多个元素的新数组，不会影响原数组。传入两个参数：第一个参数是开始索引，第二个参数是结束索引(但不包括该索引)**

## 修改
- splice()   **传入三个参数，开始位置，0（要删除元素的个数），插入的元素，返回一个空数组**
## 查找
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