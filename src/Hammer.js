var Hammers = (function (_super) {
    function HammerObj() {
        // 改变this指向
        HammerObj.super(this)
    }

    // 注册父类
    Laya.class(HammerObj, "HammerObj", _super)

    // 开始使用
    HammerObj.prototype.start = function () {
        Laya.Mouse.hide();// 隐藏鼠标
        // 添加事件监听器
        Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.onMouseDown);
        Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.onMouseMove);
        this.onMouseMove();
    }
    // 结束使用
    HammerObj.prototype.end = function () {
        Laya.Mouse.show();// 显示鼠标
        // 删除事件监听器
        Laya.stage.off(Laya.Event.MOUSE_DOWN, this, this.onMouseDown);
        Laya.stage.off(Laya.Event.MOUSE_MOVE, this, this.onMouseMove);
    }
    // 鼠标点击
    HammerObj.prototype.onMouseDown = function () {
        this.hit.play(0, false);
    }
    // 鼠标移动
    HammerObj.prototype.onMouseMove = function () {
        this.pos(Laya.stage.mouseX - this.width / 2, Laya.stage.mouseY - this.height / 2);
    }
    return HammerObj;
})(ui.HammerUI)