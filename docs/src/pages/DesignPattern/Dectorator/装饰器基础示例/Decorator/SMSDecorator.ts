import { INotifier } from '../interface';
import { BaseDecorator } from './BaseDecorator';

export class SMSDecorator extends BaseDecorator {
    private SMSID:string
     constructor(SMSID:string,wrappee: INotifier) {
        super(wrappee);
        this.SMSID = SMSID;
    }
    send(message: string): void {
        //先调用父类的send方法 然后在执行自己的
        super.send(`SMS:${this.SMSID} ${message}`);
         console.log(`发送短信执行1`);
    }
   
   
}