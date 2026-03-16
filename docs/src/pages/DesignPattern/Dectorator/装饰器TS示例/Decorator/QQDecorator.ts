export function QQDecorator(QQID: string):ClassDecorator {
    return function (constructor:Function){
        const send= constructor.prototype.send 
       constructor.prototype.send=function(message:string){
        send.apply(this, arguments)
        console.log(`发送QQ消息执行 QQID:${QQID} message:${message}`);
       }

    }
}