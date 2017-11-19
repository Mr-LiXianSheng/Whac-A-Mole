(function () {
    (function () {
        // 初始化舞台
        Laya.init(800, 600);
        // 屏幕适配
        Laya.stage.scaleMode = Laya.Stage.SCALE_NOSCALE;
        Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
        Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE;
        Laya.stage.screenMode=Laya.Stage.SCREEN_NONE;
        // 背景颜色
        Laya.stage.bgColor = '#ffcccc';
        // 加载元素
        Laya.loader.load('res/atlas/comp.json', Laya.Handler.create(this, onLoaded), null, Laya.Loader.ATLAS)
    })();
    function onLoaded() {
        // var game = new Games();    
        // Laya.stage.addChild(game);

        LayaSample.gameStart = new GameStarts();
        Laya.stage.addChild(LayaSample.gameStart);

    }
})(window.LayaSample || (window.LayaSample = {}));

