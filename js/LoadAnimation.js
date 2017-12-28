//
// 导入加载使用的css文件
// 参数path：添加该css文件的html页面的相对路径
//
var ImportAnimationCss = function(path){
	var css1 = document.createElement("link");
	css1.rel = "stylesheet";
	css1.href = path;
	return css1;
}


function LoadAnimation(){

	//1. html head元素引入动画css文件
	document.head.appendChild(ImportAnimationCss("./css/animations.css"));
}


LoadAnimation.prototype = {
	createRotateLoading: function(){
		var result = document.createElement('div');
		result.className = 'circleload';
		return result;
	},
	createPillarLoading: function(){
	    var result = document.createElement('div');
		result.className = 'lineload';
		for(var i = 0; i < 5; i++){
			var node = document.createElement('span');
			node.className = 'lines';
			result.appendChild(node);
		}
		return result;
	},
	createPointLoading: function(){
		var result = document.createElement('div');
		result.className = 'circlesload';
		for(var i = 0; i < 8; i++){
			var node = document.createElement('span');
			node.className = 'point';
			result.appendChild(node);
		}
		return result;
	}
}