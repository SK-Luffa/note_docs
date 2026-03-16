import { INotifier } from './interface';
//基础的控制器 
export class Notifier implements INotifier {
    private emailAddresses: string[] = [];
    constructor(emails: string[]) {
        this.emailAddresses = emails;
    }
    send(message: string): void {
        //模拟发送邮件
        console.log(`发送消息到${this.emailAddresses.join(',')}，内容为${message}`);
    }
}