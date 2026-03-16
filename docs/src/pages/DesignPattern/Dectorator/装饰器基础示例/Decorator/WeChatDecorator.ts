import { INotifier } from '../interface';
import { BaseDecorator } from './BaseDecorator';

export class WeChatDecorator extends BaseDecorator {
    private WeChatID: string
    constructor(WeChatID: string, wrappee: INotifier) {
        super(wrappee);
        this.WeChatID = WeChatID;
    }
    send(message: string): void {
        //先调用父类的send方法 然后在执行自己的
        super.send(`WeChat:${this.WeChatID} ${message}`);
        console.log(`2发送微信消息到${this.WeChatID}，内容为${message}，class:WeChatDecorator`);
    }


}