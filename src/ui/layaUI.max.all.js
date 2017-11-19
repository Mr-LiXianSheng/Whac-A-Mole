var CLASS$=Laya.class;
var STATICATTR$=Laya.static;
var View=laya.ui.View;
var Dialog=laya.ui.Dialog;
var GameUI=(function(_super){
		function GameUI(){
			
		    this.timeBar=null;
		    this.scoreNums=null;

			GameUI.__super.call(this);
		}

		CLASS$(GameUI,'ui.GameUI',_super);
		var __proto__=GameUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(GameUI.uiView);
		}
		GameUI.uiView={"type":"View","props":{"width":800,"height":600},"child":[{"type":"Image","props":{"y":25,"x":25,"skin":"comp/back.png"}},{"type":"Box","props":{"y":195,"x":157,"name":"item0"},"child":[{"type":"Image","props":{"y":1,"x":3,"skin":"comp/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":9,"x":9,"width":111,"skin":"comp/mouse_hit_1.png","rotation":3,"name":"hil","height":104}},{"type":"Image","props":{"y":83,"x":0,"skin":"comp/mask-01.png"}},{"type":"Image","props":{"y":14,"x":62,"width":86,"skin":"comp/score_2.png","name":"scoreImg","height":30,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":194,"x":345,"name":"item1"},"child":[{"type":"Image","props":{"y":1,"x":3,"skin":"comp/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":9,"x":9,"width":111,"skin":"comp/mouse_hit_1.png","rotation":3,"name":"hil","height":104}},{"type":"Image","props":{"y":83,"x":0,"skin":"comp/mask-02.png"}},{"type":"Image","props":{"y":14,"x":62,"width":86,"skin":"comp/score_2.png","name":"scoreImg","height":30,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":199,"x":542,"name":"item2"},"child":[{"type":"Image","props":{"y":1,"x":3,"skin":"comp/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":9,"x":9,"width":111,"skin":"comp/mouse_hit_1.png","rotation":3,"name":"hil","height":104}},{"type":"Image","props":{"y":83,"x":0,"skin":"comp/mask-03.png"}},{"type":"Image","props":{"y":14,"x":62,"width":86,"skin":"comp/score_2.png","name":"scoreImg","height":30,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":286,"x":130,"name":"item3"},"child":[{"type":"Image","props":{"y":1,"x":3,"skin":"comp/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":9,"x":9,"width":111,"skin":"comp/mouse_hit_1.png","rotation":3,"name":"hil","height":104}},{"type":"Image","props":{"y":83,"x":0,"skin":"comp/mask-04.png"}},{"type":"Image","props":{"y":14,"x":62,"width":86,"skin":"comp/score_2.png","name":"scoreImg","height":30,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":288,"x":347,"name":"item4"},"child":[{"type":"Image","props":{"y":1,"x":3,"skin":"comp/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":9,"x":9,"width":111,"skin":"comp/mouse_hit_1.png","rotation":3,"name":"hil","height":104}},{"type":"Image","props":{"y":83,"x":0,"skin":"comp/mask-05.png"}},{"type":"Image","props":{"y":14,"x":62,"width":86,"skin":"comp/score_2.png","name":"scoreImg","height":30,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":286,"x":546,"name":"item5"},"child":[{"type":"Image","props":{"y":1,"x":3,"skin":"comp/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":9,"x":9,"width":111,"skin":"comp/mouse_hit_1.png","rotation":3,"name":"hil","height":104}},{"type":"Image","props":{"y":83,"x":0,"skin":"comp/mask-06.png"}},{"type":"Image","props":{"y":14,"x":62,"width":86,"skin":"comp/score_2.png","name":"scoreImg","height":30,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":383,"x":122,"name":"item6"},"child":[{"type":"Image","props":{"y":1,"x":3,"skin":"comp/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":9,"x":9,"width":111,"skin":"comp/mouse_hit_1.png","rotation":3,"name":"hil","height":104}},{"type":"Image","props":{"y":83,"x":0,"skin":"comp/mask-07.png"}},{"type":"Image","props":{"y":14,"x":62,"width":86,"skin":"comp/score_2.png","name":"scoreImg","height":30,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":388,"x":345,"name":"item7"},"child":[{"type":"Image","props":{"y":1,"x":3,"skin":"comp/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":9,"x":9,"width":111,"skin":"comp/mouse_hit_1.png","rotation":3,"name":"hil","height":104}},{"type":"Image","props":{"y":83,"x":0,"skin":"comp/mask-08.png"}},{"type":"Image","props":{"y":14,"x":62,"width":86,"skin":"comp/score_2.png","name":"scoreImg","height":30,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":389,"x":565,"name":"item8"},"child":[{"type":"Image","props":{"y":1,"x":3,"skin":"comp/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":9,"x":9,"width":111,"skin":"comp/mouse_hit_1.png","rotation":3,"name":"hil","height":104}},{"type":"Image","props":{"y":83,"x":0,"skin":"comp/mask-09.png"}},{"type":"Image","props":{"y":14,"x":62,"width":86,"skin":"comp/score_2.png","name":"scoreImg","height":30,"anchorY":0.5,"anchorX":0.5}}]},{"type":"ProgressBar","props":{"y":5,"x":5,"var":"timeBar","skin":"comp/progress_time.png"}},{"type":"Box","props":{"y":39,"x":41,"var":"scoreNums"},"child":[{"type":"Clip","props":{"skin":"comp/clip_number.png","name":"item0","clipX":10,"autoPlay":false}},{"type":"Clip","props":{"x":18,"skin":"comp/clip_number.png","name":"item1","clipX":10,"autoPlay":false}},{"type":"Clip","props":{"x":36,"skin":"comp/clip_number.png","name":"item2","clipX":10,"autoPlay":false}},{"type":"Clip","props":{"x":54,"skin":"comp/clip_number.png","name":"item3","clipX":10,"autoPlay":false}},{"type":"Clip","props":{"x":72,"skin":"comp/clip_number.png","name":"item4","clipX":10,"autoPlay":false}},{"type":"Clip","props":{"x":90,"skin":"comp/clip_number.png","name":"item5","clipX":10,"autoPlay":false}},{"type":"Clip","props":{"x":108,"skin":"comp/clip_number.png","name":"item6","clipX":10,"autoPlay":false}},{"type":"Clip","props":{"x":126,"skin":"comp/clip_number.png","name":"item7","clipX":10,"autoPlay":false}},{"type":"Clip","props":{"x":144,"skin":"comp/clip_number.png","name":"item8","clipX":10,"autoPlay":false}},{"type":"Clip","props":{"x":162,"skin":"comp/clip_number.png","name":"item9","clipX":10,"autoPlay":false}}]}]};
		return GameUI;
	})(View);
var GameOverUI=(function(_super){
		function GameOverUI(){
			
		    this.restartBtn=null;
		    this.scoreNums=null;

			GameOverUI.__super.call(this);
		}

		CLASS$(GameOverUI,'ui.GameOverUI',_super);
		var __proto__=GameOverUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(GameOverUI.uiView);
		}
		GameOverUI.uiView={"type":"View","props":{"width":800,"height":600},"child":[{"type":"Image","props":{"y":0,"x":0,"width":801,"skin":"comp/overBg.png","height":601,"sizeGrid":"19,19,19,19"}},{"type":"Image","props":{"y":80,"x":80,"skin":"comp/total Score.png"}},{"type":"Button","props":{"y":476,"x":311,"var":"restartBtn","stateNum":2,"skin":"comp/btn_restart.png"}},{"type":"Box","props":{"y":288,"x":310,"var":"scoreNums"},"child":[{"type":"Clip","props":{"skin":"comp/clip_number.png","name":"item0","clipX":10,"autoPlay":false}},{"type":"Clip","props":{"x":18,"skin":"comp/clip_number.png","name":"item1","clipX":10,"autoPlay":false}},{"type":"Clip","props":{"x":36,"skin":"comp/clip_number.png","name":"item2","clipX":10,"autoPlay":false}},{"type":"Clip","props":{"x":54,"skin":"comp/clip_number.png","name":"item3","clipX":10,"autoPlay":false}},{"type":"Clip","props":{"x":72,"skin":"comp/clip_number.png","name":"item4","clipX":10,"autoPlay":false}},{"type":"Clip","props":{"x":90,"skin":"comp/clip_number.png","name":"item5","clipX":10,"autoPlay":false}},{"type":"Clip","props":{"x":108,"skin":"comp/clip_number.png","name":"item6","clipX":10,"autoPlay":false}},{"type":"Clip","props":{"x":126,"skin":"comp/clip_number.png","name":"item7","clipX":10,"autoPlay":false}},{"type":"Clip","props":{"x":144,"skin":"comp/clip_number.png","name":"item8","clipX":10,"autoPlay":false}},{"type":"Clip","props":{"x":162,"skin":"comp/clip_number.png","name":"item9","clipX":10,"autoPlay":false}}]}]};
		return GameOverUI;
	})(View);
var GameStartUI=(function(_super){
		function GameStartUI(){
			
		    this.startBtn=null;

			GameStartUI.__super.call(this);
		}

		CLASS$(GameStartUI,'ui.GameStartUI',_super);
		var __proto__=GameStartUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(GameStartUI.uiView);
		}
		GameStartUI.uiView={"type":"View","props":{"width":800,"height":600},"child":[{"type":"Image","props":{"y":55,"x":38,"skin":"comp/help.png"}},{"type":"Button","props":{"y":428,"x":311,"var":"startBtn","stateNum":2,"skin":"comp/btn_start.png"}}]};
		return GameStartUI;
	})(View);
var HammerUI=(function(_super){
		function HammerUI(){
			
		    this.hit=null;

			HammerUI.__super.call(this);
		}

		CLASS$(HammerUI,'ui.HammerUI',_super);
		var __proto__=HammerUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(HammerUI.uiView);
		}
		HammerUI.uiView={"type":"View","props":{"width":100,"height":100},"child":[{"type":"Image","props":{"y":60,"x":55,"width":98,"skin":"comp/hammer.png","rotation":-20,"pivotY":49,"pivotX":54,"height":77},"compId":3}],"animations":[{"nodes":[{"target":3,"keyframes":{"y":[{"value":60,"tweenMethod":"linearNone","tween":true,"target":3,"key":"y","index":0},{"value":61,"tweenMethod":"linearNone","tween":true,"target":3,"key":"y","index":1}],"x":[{"value":58,"tweenMethod":"linearNone","tween":true,"target":3,"key":"x","index":0},{"value":57,"tweenMethod":"linearNone","tween":true,"target":3,"key":"x","index":1}],"rotation":[{"value":-20,"tweenMethod":"linearNone","tween":true,"target":3,"key":"rotation","index":0},{"value":20,"tweenMethod":"linearNone","tween":true,"target":3,"key":"rotation","index":1}]}}],"name":"hit","id":1,"frameRate":24,"action":0}]};
		return HammerUI;
	})(View);