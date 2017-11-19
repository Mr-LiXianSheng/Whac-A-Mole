var GameStarts = (function (_super) {
    function GameStartObj() {
        // 改变this指向
        GameStartObj.super(this);

        // 点击事件
        this.startBtn.on(Laya.Event.CLICK, this, this.onStartGame);

    }
    // 注册父类
    Laya.class(GameStartObj, "GameStartObj", _super);

    GameStartObj.prototype.onStartGame = function () {
        // 从父容器删除自己，如已经被删除不会抛出异常
        this.removeSelf();
        if (!LayaSample.game) {
            LayaSample.game = new Games();
        }
        // 游戏开始调动gameStart()
        LayaSample.game.gameStart();
        LayaSample.game.stage.addChild(LayaSample.game);
    }

    return GameStartObj;
})(ui.GameStartUI)