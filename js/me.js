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

var CreateMeDiv = function(){
	
	document.head.appendChild(ImportAnimationCss("./css/walking.css"));
	
	/*left leg div code*/
	var left_toes = document.createElement('div');left_toes.className = 'left toes';
	var left_foot = document.createElement('div');left_foot.className = 'left foot';
	left_foot.appendChild(left_toes);

	var left_shin = document.createElement('div');left_shin.className = 'left shin';
	left_shin.appendChild(left_foot);

	var left_thigh = document.createElement('div');left_thigh.className = 'left thigh';
	left_thigh.appendChild(left_shin);

	var left_leg = document.createElement('div');left_leg.className = 'left leg';
	left_leg.appendChild(left_thigh);

	/*right leg div code*/
	var right_toes = document.createElement('div');right_toes.className = 'right toes';
	var right_foot = document.createElement('div');right_foot.className = 'right foot';
	right_foot.appendChild(right_toes);

	var right_shin = document.createElement('div');right_shin.className = 'right shin';
	right_shin.appendChild(right_foot);

	var right_thigh = document.createElement('div');right_thigh.className = 'right thigh';
	right_thigh.appendChild(right_shin);

	var right_leg = document.createElement('div');right_leg.className = 'right leg';
	right_leg.appendChild(right_thigh);

	/*left arm div code*/
	var left_forearm = document.createElement('div');left_forearm.className = 'left forearm';
	var left_bicep = document.createElement('div');left_bicep.className = 'left bicep';
	left_bicep.appendChild(left_forearm);

	var left_arm = document.createElement('div');left_arm.className = 'left arm';
	left_arm.appendChild(left_bicep);

	 /*right arm div code*/
	var right_forearm = document.createElement('div');right_forearm.className = 'right forearm';
	var right_bicep = document.createElement('div');right_bicep.className = 'right bicep';
	right_bicep.appendChild(right_forearm);

	var right_arm = document.createElement('div');right_arm.className = 'right arm';
	right_arm.appendChild(right_bicep);

	/*torso div code*/
	var torso = document.createElement('div');torso.className = 'torso';
	torso.appendChild(left_leg);torso.appendChild(right_leg);
	torso.appendChild(left_arm);torso.appendChild(right_arm);

	/*me div code*/
	var me = document.createElement('div');me.className = 'me';
	me.appendChild(torso);

	return me;
}