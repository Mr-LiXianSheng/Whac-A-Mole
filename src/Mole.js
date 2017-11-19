var Moles = (function () {
    function MoleObj(normalState, hitState, downY, hitCallBackHd, scoreImg) {
        this.normalState = normalState;
        this.hitState = hitState;
        this.downY = downY;
        this.upY = this.normalState.y;
        this.hitCallBackHd = hitCallBackHd;
        this.scoreImg = scoreImg;
        this.scoreY = this.scoreImg.y;
        this.reset();
        // 点击事件
        this.normalState.on(Laya.Event.CLICK, this, this.hit);
    };
    // 重置
    MoleObj.prototype.reset = function () {
        this.normalState.visible = false;
        this.hitState.visible = false;
        this.isVctive = false;
        this.isShow = false;
        this.isHit = false;
        this.scoreImg.visible = false;
    };
    // 显示
    MoleObj.prototype.show = function () {
        if (this.isVctive) {
            return;
        }
        this.isVctive = true;
        this.isShow = true;
        //随机地鼠类型
        this.type = (Math.random() < 0.3 ? 1 : 2);
        this.normalState.skin = 'comp/mouse_normal_' + this.type + '.png';
        this.hitState.skin = 'comp/mouse_hit_' + this.type + '.png';
        this.scoreImg.skin = 'comp/score_' + this.type + '.png';
        this.normalState.y = this.downY;
        this.normalState.visible = true;
        Laya.Tween.to(this.normalState, { y: this.upY }, 500, Laya.Ease.backOut, Laya.Handler.create(this, this.showComplete))
    };
    // 停留
    MoleObj.prototype.showComplete = function () {
        if (this.isShow && !this.isHit) {
            Laya.timer.once(1000, this, this.hide);
        }
    };
    // 消失
    MoleObj.prototype.hide = function () {
        if (this.isShow && !this.isHit) {
            this.isShow = false;
            Laya.Tween.to(this.normalState, { y: this.downY }, 300, Laya.Ease.backIn, Laya.Handler.create(this, this.reset))
        }
    };
    // 受击
    MoleObj.prototype.hit = function () {
        if (this.isShow && !this.isHit) {
            this.isShow = false;
            this.isHit = true;
            this.hitCallBackHd.runWith(this.type);
            Laya.timer.clear(this, this.hide);
            this.normalState.visible = false;
            this.hitState.visible = true;
            Laya.timer.once(500, this, this.reset);
            this.showScore();
        }
    };
    // 显示飘字效果
    MoleObj.prototype.showScore = function () {
        this.scoreImg.y = this.scoreY + 30;
        this.scoreImg.scale(0, 0);
        this.scoreImg.visible = true;
        Laya.Tween.to(this.scoreImg, {
            y: this.scoreY,
            scaleX: 1,
            scaleY: 1
        }, 300, Laya.Ease.backInOut);
    }
    return MoleObj;
})();