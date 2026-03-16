import { Notifier } from './Notifier';
import { QQDecorator } from './Decorator/QQDecorator';
import { SMSDecorator } from './Decorator/SMSDecorator';
import { WeChatDecorator } from './Decorator/WeChatDecorator';

const baseNotifier = new Notifier(['123@qq.com']);



const SMSDecoratorsX = new SMSDecorator('123456', baseNotifier);
SMSDecoratorsX.send('hello world sms');
console.log('------------------');

const WeChatDecoratorss = new WeChatDecorator('123456', SMSDecoratorsX);
WeChatDecoratorss.send('hello world wechat');
console.log('------------------');
const QQDecoratorss = new QQDecorator('123456', WeChatDecoratorss);
QQDecoratorss.send('hello world qq');




