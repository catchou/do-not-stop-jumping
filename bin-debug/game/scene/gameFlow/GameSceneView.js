var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// TypeScript file
var GameSceneView = (function (_super) {
    __extends(GameSceneView, _super);
    function GameSceneView(displayContainerObject) {
        var _this = _super.call(this) || this;
        GameSceneView._gameScene = _this;
        _this._gamePauseView = new GamePauseView(displayContainerObject);
        _this.initView(displayContainerObject);
        return _this;
    }
    GameSceneView.prototype.initView = function (displayContainerObject) {
        //this.gameSceneContainer = new egret.Sprite();
        //this.addChild(this.gameSceneContainer);
        var shape = new egret.Shape();
        shape.graphics.beginFill(0x00ff00);
        shape.graphics.drawRect(0, 0, displayContainerObject.stage.stageWidth, displayContainerObject.stage.stageHeight);
        shape.graphics.endFill();
        this.addChild(shape);
        /*
        var pinkBtn:egret.Bitmap;
        pinkBtn = ResourceUtils.createBitmapByName("pinkBtn_png");
        pinkBtn.x = 0;
        pinkBtn.y = 0;
        this.addChild(pinkBtn);
        */
        var PointerCenter;
        var pointer;
        var PointerCenterData;
        PointerCenter = ResourceUtils.createBitmapByName("pointerCenter_png");
        PointerCenterData = new egret.BitmapData(PointerCenter);
        PointerCenter.x = 320 - PointerCenterData.width / 2.0;
        PointerCenter.y = 568 - PointerCenterData.height / 2.0;
        console.log("PointerCenterData width:" + PointerCenterData.width + " height:" + PointerCenterData.height);
        this.addChild(PointerCenter);
    };
    GameSceneView.prototype.play = function () {
        //this.removeChildren();
        var shape = new egret.Shape();
        shape.graphics.beginFill(0x0000ff);
        //shape.graphics.drawRect(0, 0, , 200);
        shape.graphics.endFill();
        this.addChild(shape);
    };
    GameSceneView.prototype.gameOver = function () {
        var gameOverView = new GameOverView(0, 0);
        this.addChild(gameOverView);
    };
    return GameSceneView;
}(egret.Sprite));
__reflect(GameSceneView.prototype, "GameSceneView");
//# sourceMappingURL=GameSceneView.js.map