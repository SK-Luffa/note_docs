## 创建型模式-单例模式

定义：保证一个类只有一个实例对象，并且提供一个全局访问点来访问该实例

后端：缓存池，全局缓存
前端：window对象 vue中的APP对象

- js: 如果是js的话最常见的实现方式是写一个辅助方法（代理方法），通过该方法将一个类转换为单例类

```js
// 单例模式
class parsen { //这里是一个解析类 用于解析价格
  private price: number;
  constructor(price: number) {
    this.price = price;
  }
  getname() {
    return this.price;
  }
}
const isOne = (fn: new (...args: any) => parsen) => {
  // 先定义一个变量未来判断是否是唯一的
  private static instance: parsen;
  return (...args: any) => {
    if (instance) {
      //如果存在instance 那么就说明已经创建好了 直接返回就行
      return instance;
    } else {
      instance = new fn(...args);
      return instance;
    }
  };
};
const p1 = isOne(parsen)(100);
const p2 = isOne(parsen)(200);
p1 == p2; //true
```
```ts
```
 
### 场景和举例
在开发应用的时候，需要加载和使用许多全局配置
- API的基础URl（通用）
- 第三方服务的密钥
- 应用的主题设置
  
这些配置在应用的不同部分被多次读取，但是这些配置只需要加载一次

* 实际场景
```ts
class APPCinfig {
    private static instance: APPCinfig;
    public readonly apiConfig: string
    public readonly apiKey: string
    private constructor() {
        this.apiConfig = 'http://localhost:3000'
        this.apiKey = 'sajkdljaslkdjl12123sadjklas'
    }
    public static getinstance(): APPCinfig {
        if (!APPCinfig.instance) {
            APPCinfig.instance = new APPCinfig()
        }
        return APPCinfig.instance
    }
}
const ac1 = APPCinfig.getinstance();
const ac2 = APPCinfig.getinstance();
(() => {
    console.log(ac1 === ac2)
})()
```