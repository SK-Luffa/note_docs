//基础装饰器
import { INotifier } from '../interface';

export class BaseDecorator implements INotifier {
    //这个基础的装饰器类，是不能够单独使用的
    // 在进行初始化的时候需要传递一个INotifier的实例
    private wrappee: INotifier;
    constructor(wrappee: INotifier) {
        this.wrappee = wrappee;
    }
    send(message: string): void {
        this.wrappee.send(message);
    }


}
