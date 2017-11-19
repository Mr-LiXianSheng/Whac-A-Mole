var Games = (function (_super) {
    function GameObj() {
        //改变this指向
        GameObj.super(this);
        // 存放地鼠数组
        this.moles = new Array;
        this.moleNum = 9;
        // 设置进度条的初始值
        this.timeBar.value = 1;
        // 设置分数的初始值
        this.score = 0;
        //创建回调函数
        this.hitCallBackHd = Laya.Handler.create(this, this.suBscore, null, false)
        // 循环每一个元素
        for (var i = 0; i < this.moleNum; i++) {
            this.box = this.getChildByName("item" + i);
            this.mole = new Moles(this.box.getChildByName("normal"), this.box.getChildByName("hil"), 21, this.hitCallBackHd, this.box.getChildByName("scoreImg"));
            this.moles.push(this.mole);
        }
        // this.mole = new Moles(this.normal, this.hil, 21);

        this.hammer = new Hammers();
        this.addChild(this.hammer);
        this.hammer.visible = false;
    }
    // 注册父类
    Laya.class(GameObj, "GameObj", _super);
    // 进度条
    GameObj.prototype.isShow = function () {
        this.timeBar.value -= (1 / 90);
        if (this.timeBar.value <= 0) {
            this.gameOver();
            return;
        }
        // this.mole.show();
        // 随机从树洞中出现地鼠
        this.index = Math.floor(Math.random() * this.moleNum);
        this.moles[this.index].show()
    };

    // 初始化游戏开始
    GameObj.prototype.gameStart = function () {
        // 设置进度条的初始值
        this.timeBar.value = 1;
        // 设置分数的初始值
        this.score = 0;
        this.updateScoreUI();
        this.hammer.visible = true;
        this.hammer.start();
        // 重复定时器
        Laya.timer.loop(500, this, this.isShow);
    }

    // 游戏结束
    GameObj.prototype.gameOver = function () {
        // 清除定时器
        Laya.timer.clear(this, this.isShow);
        // 隐藏小锤子
        this.hammer.visible = false;
        // 显示鼠标
        this.hammer.end();
        // console.log("本轮游戏结束！");
        if (!LayaSample.gameOver) {
            LayaSample.gameOver = new GameOvers();
        }
        LayaSample.gameOver.centerX = 0;
        LayaSample.gameOver.centerY = 0;
        LayaSample.gameOver.setScoreUI(this.score);
        Laya.stage.addChild(LayaSample.gameOver);
    }
    // 记录分数
    GameObj.prototype.suBscore = function (type) {
        this.score += (type == 1 ? -100 : 100);
        if (this.score <= 0) {
            this.score = 0;
        }
        //组件赋值
        this.updateScoreUI();
    }
    // 更新分数
    GameObj.prototype.updateScoreUI = function () {
        this.data = {}; //创建对象，用来存放数值
        this.temp = this.score; //分数变量
        for (var i = 9; i >= 0; i--) {
            this.data["item" + i] = {
                index: Math.floor(this.temp % 10)
            }
            this.temp /= 10;
        }
        this.scoreNums.dataSource = this.data;
    }
    return GameObj;
})(ui.GameUI);