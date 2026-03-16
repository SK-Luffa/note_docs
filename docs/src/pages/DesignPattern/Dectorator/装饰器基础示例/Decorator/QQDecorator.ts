import { INotifier } from '../interface';
import { BaseDecorator } from './BaseDecorator';


export class QQDecorator extends BaseDecorator {
    private QQID:string
    constructor(QQID:string,wrappee: INotifier) {
        super(wrappee);
        this.QQID = QQID;
    }
    //部分重写父类send方法
    send(message: string): void {
        //先调用父类的send方法 然后在执行自己的
        super.send(`QQ:${this.QQID} ${message}`);
         console.log(`发送QQ消息执行`);
    }
  
   
}