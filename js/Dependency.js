let Watcher = null; // 用来表明有没有监视器实例
var uid = 0; // 表明当前依赖实例的编号，便于区分不同的Dep
class Dep { // 把与一个变量相关的监听器都存在subs这个变量中
    constructor() {
        this.id = uid++;
        this.subs = [];
    }
    notify() {
        // 执行所有与变量相关的回调函数
        this.subs.forEach(sub => sub.update());
    }
    addSub(sub) {
        // 添加与变量相关的订阅回调
        this.subs.push(sub);
    }
}