var GameOvers = (function (_super) {
    function GameOverObj() {
        GameOverObj.super(this);

        this.restartBtn.on(Laya.Event.CLICK, this, this.restartGame);

    }
    Laya.class(GameOverObj, "GameOverObj", _super);

    GameOverObj.prototype.restartGame = function () {
        this.removeSelf();
        LayaSample.game.removeSelf();
        Laya.stage.addChild(LayaSample.gameStart)
    }
    // 设置分数的显示
    GameOverObj.prototype.setScoreUI = function (score) {
        this.data = {}; //创建对象，用来存放数值
        this.temp = score; //分数变量
        for (var i = 9; i >= 0; i--) {
            this.data["item" + i] = {
                index: Math.floor(this.temp % 10)
            }
            this.temp /= 10;
        }
        this.scoreNums.dataSource = this.data;
    }
    return GameOverObj;
})(ui.GameOverUI)