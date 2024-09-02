# 盒模型
- 标准盒模型：
  content+padding+border+margin
- 怪异盒模型
  content(content+padding+border)+margin
- 设置IE怪异盒模型
   box-sizing：border-box
# css选择器
## 常用的css选择器
- id选择器(#box)：选择id为box的元素
- 类选择器（.one）：选择类名为one的所有元素
- 标签选择器（div）：选择标签为div的所有元素
- 后代选择器（#box div）：选择id为box元素内的所有的div元素
- 子选择器（.one>.one_1）：选择父元素为one的所有one_1元素
- 相邻同胞选择器（.one+.one）选择紧接在.one之后的所有one元素
- 群组选择器（div,p）,选择div、p的所有元素
- 伪类选择器：
```css
:link ：选择未被访问的连接
:visited ：选取已被访问的连接
:active ：选择活动连接
:hover ：鼠标指针浮动在上面的元素
:focus ：选择具有焦点的
:first-child ：父元素的首个元素
```
- 伪元素选择器
```css
:first-letter ：用于选取指定选择器的首字母
:first-line ：选取指定选择器的首行
:before ：选择器在被选元素的内容前面插入内容
:after ：选择器在被选元素的内容后面插入内容
```
- 属性选择器
```css
[attribute]：选择带有attribute属性的元素
[attribute=value]：选择所有使用attribute=value的元素
[attribute~=value]：选择attribute属性包含value的元素
[attribute|=value]：选择attribute属性以value开头的元素
```
在CSS3中新增的选择器有如下：
- 层次选择器（p～ul）,选择前面有P元素的每个ul元素
- 伪类选择器
```css
:first-of-type 表示一组同级元素中其类型的第一个元素
:last-of-type 表示一组同级元素中其类型的最后一个元素
:only-of-type 表示没有同类型兄弟元素的元素
:only-child 表示没有任何兄弟元素
:nth-child(n) 根据元素在一组同级中的位置匹配元素
:nth-last-of-type(n) 匹配给定类型的元素，基于他们在一组兄弟元素中的位置，从末尾开始计数
:last-child 表示一组兄弟元素中的最后一个元素
:root 设置HTML文档
:empty 指定空的元素
:enabled 选择可用元素
:disabled 选择被禁用的元素
:checked 选择选中的元素
:not(selector) 选择与<selector>不匹配的所有元素
```
- 属性选择器
```css
[attribute*=value] ：选择attribute属性值包含value的所有元素
[attribute^=value] ：选择attribute属性开头为value的所有元素
[attribute$=value] ：选择attribute属性结尾为valuye的所有元素
```
## 优先级
!important >内联>ID选择器>类选择器>标签选择器
