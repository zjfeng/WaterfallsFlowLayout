// // window.onload = function() {
// // 	Distribution("main", "box");
// // 	/*实现瀑布流布局*/
// // 	waterFall('main', 'box');
// // 	/*实现滚动刷新瀑布流*/
// // 	var dataInt = {
// // 		'data': [
// // 			{ 'src': '1.jpg' },
// // 			{ 'src': '2.jpg' },
// // 			{ 'src': '3.jpg' },
// // 			{ 'src': '4.jpg' },
// // 			{ 'src': '5.jpg' }
// // 		]
// // 	};
// // 	window.onscroll = function() {
// // 		/*刷新条件判断*/
// // 		if (freshOrNot()) {
// // 			/*满足条件，刷新*/
// // 			var oParent = document.getElementById("main");
// // 			for (var i = 0; i < dataInt.data.length; i++) {
// // 				var oPin = document.createElement('div'); //添加 元素节点
// // 				oPin.className = 'box'; //添加 类名 name属性
// // 				oParent.appendChild(oPin); //添加 子节点
// // 				var oBox = document.createElement('div');
// // 				oBox.className = 'pic';
// // 				oPin.appendChild(oBox);
// // 				var oImg = document.createElement('img');
// // 				oImg.src = './img/' + dataInt.data[i].src;
// // 				oBox.appendChild(oImg);
// // 			}
// // 		}
// // 		waterFall('main', 'box');
// // 	};
// // 	// waterFall('main','box');
// // }

// // function Distribution(parent, box) {
// // 	/*分散分布*/
// // 	var oParent = document.getElementById(parent);
// // 	var oBoxs = getByClassName(oParent, box);
// // 	var screenHeight = document.documentElement.clientHeight; //获得当前屏幕的高度
// // 	var screenWidth = document.documentElement.clientWidth;
// // 	for (var i = 0; i < oBoxs.length; i++) {
// // 		oBoxs[i].style.position = "absolute";
// // 		oBoxs[i].style.top = Math.floor((Math.random() * screenHeight / 5) + (screenHeight / 5)) + "px";
// // 		oBoxs[i].style.left = Math.floor((Math.random() * screenWidth / 4) + (screenWidth / 3.5)) + "px";
// // 		// console.log("oBoxs[i].offsetLeft  " + oBoxs[i].offsetLeft);
// // 	}
// // }

// // /**
// //  * 实现瀑布流布局
// //  * @param  {String对象} parent 布局操作对象的父元素
// //  * @param  {String} box    布局的操作对象
// //  */
// // function waterFall(parent, box) {
// // 	var oParent = document.getElementById(parent);
// // 	var oBoxs = getByClassName(oParent, box);
// // 	/*获取屏幕宽度，得到每行box个数*/
// // 	var screenWidth = document.documentElement.clientWidth; //获得当前屏幕宽度
// // 	var oBoxsOneWidth = oBoxs[0].offsetWidth; //获得每个box宽度
// // 	var colBoxCount = Math.floor(screenWidth / oBoxsOneWidth); //获得每行box个数
// // 	/*设置父级元素样式*/
// // 	oParent.style.cssText = 'width:' + (oBoxsOneWidth * colBoxCount) + 'px; margin:0 auto;';

// // 	/*获得每列的高度, 找出合适位置插入box*/
// // 	var oBoxsHeight = new Array(); //用于每列的高度的数组
// // 	var json;
// // 	for (var i = 0; i < oBoxs.length; i++) { //遍历box的高度，存入数组
// // 		if (i < colBoxCount) {
// // 			oBoxsHeight.push(oBoxs[i].offsetHeight);
// // 			json = { top: 0, left: (Math.floor(i * oBoxsOneWidth) + 40) };
// // 			startMove(oBoxs[i], json);
// // 		} else {
// // 			/*找出box高度最小值，将后面的box放在其下*/
// // 			var minOBoxsHeight = Math.min.apply(null, oBoxsHeight); //一行box中高度的最小值
// // 			// console.log("minOBoxsHeight  " + minOBoxsHeight);
// // 			var minIndex = getMinIndex(oBoxsHeight, minOBoxsHeight); //获取高度最小值的索引
// // 			// console.log("minIndex  " + minIndex);
// // 			// var newBoxLeft = oBoxs[minIndex].offsetLeft;  //获取每一个box的左偏移量，用作新box的定位
// // 			var newBoxLeft = (Math.floor(minIndex * oBoxsOneWidth) + 40);
// // 			// console.log("newBoxLeft  " + newBoxLeft);
// // 			/*通过设置新box的样式，实现将新box放在合适位置*/
// // 			// oBoxs[i].style.position = "absolute";
// // 			// oBoxs[i].style.left = newBoxLeft + "px";
// // 			// oBoxs[i].style.top = minOBoxsHeight + "px";
// // 			json = { top: minOBoxsHeight, left: newBoxLeft };
// // 			startMove(oBoxs[i], json);
// // 			/*改变列高，适用其后box*/
// // 			oBoxsHeight[minIndex] += oBoxs[i].offsetHeight;
// // 		}
// // 	}
// // }
// // /**
// //  * 通过class获取元素
// //  * @param  {Dom对象} parent    要获取的元素的父元素
// //  * @param  {String对象} className 要获取的元素的class
// //  * @return {Array对象}           要获取的元素组成的数组
// //  */
// // function getByClassName(parent, className) {
// // 	var classArray = new Array();
// // 	var oClasses = parent.getElementsByTagName('*');
// // 	for (var i = 0; i < oClasses.length; i++) {
// // 		if (oClasses[i].className == className) {
// // 			classArray.push(oClasses[i]);
// // 		}
// // 	}
// // 	return classArray;
// // }
// // /**
// //  * 获得数组中最小值的索引
// //  * @param  {Array对象} array 要从中获得索引的数组
// //  * @param  {Arrya对象的最小值} min   数组中的最小值
// //  * @return {Int整型}       数组中最小值的索引
// //  */
// // function getMinIndex(array, min) {
// // 	for (var i = 0; i < array.length; i++) {
// // 		if (array[i] == min) {
// // 			return i;
// // 		}
// // 	}
// // }
// // /**
// //  * 判断是否符合刷新条件
// //  * @return {boolean} 是否符合刷新条件，是：true， 否：false
// //  */
// // function freshOrNot() {
// // 	var oParent = document.getElementById("main");
// // 	var oBoxs = getByClassName(oParent, 'box');
// // 	var lastBoxPo = oBoxs[oBoxs.length - 1].offsetTop + Math.floor(oBoxs[oBoxs.length - 1].offsetHeight / 1.5); //最后一个box的距离顶部的高度加上其高度的一半
// // 	var scrollTop = document.documentElement.scrollTop || document.body.scrollTop; //注意解决兼容性
// // 	var documentHeight = document.documentElement.clientHeight; //页面高度
// // 	var scrollPo = scrollTop + documentHeight;
// // 	return (lastBoxPo < scrollPo) ? true : false;
// // }





// window.onload = function() {
// 	oBoxsHeight = new Array(); //用于每列的高度的数组
// 	/*初始混乱分布*/
// 	Distribution();
// 	/*瀑布流布局*/
// 	// Waterfall();
// 	/*滚动加载*/
// 	window.onscroll = function() {
// 		// ScrollLoad();
// 	}
// }

// function Distribution() {
// 	var oParent = document.getElementById("main");
// 	var oBoxs = getByClassName(oParent, "box");
// 	var screenHeight = document.documentElement.clientHeight; //获得当前屏幕的高度
// 	var screenWidth = document.documentElement.clientWidth;
// 	var oBoxsOneWidth = oBoxs[0].offsetWidth; //获得每个box宽度
// 	var colBoxCount = Math.floor(screenWidth / oBoxsOneWidth); //获得每行box个数
// 	/*实现混乱分布*/
// 	for (var i = 0; i < oBoxs.length; i++) {
// 		oBoxs[i].style.position = "absolute";
// 		oBoxs[i].style.top = Math.floor((Math.random() * screenHeight / 5) + (screenHeight / 5)) + "px";
// 		oBoxs[i].style.left = Math.floor((Math.random() * screenWidth / 4) + (screenWidth / 3.5)) + "px";
// 	}
// 	/*设置父级元素样式*/
// 	oParent.style.cssText = 'width:' + (oBoxsOneWidth * colBoxCount) + 'px; margin:0 auto;';
// 	/*获得每列的高度, 找出合适位置插入box*/
// 	// var oBoxsHeight = new Array(); //用于每列的高度的数组
// 	// for (var i = 0; i < oBoxs.length; i++) { //遍历box的高度，存入数组
// 	// 	if (i < colBoxCount) {
// 	// 		oBoxsHeight.push(oBoxs[i].offsetHeight);
// 	// 		// startMove(oBoxs[i], { top: 0, left: (Math.floor(i * oBoxsOneWidth) + 40) });
// 	// 	} else {
// 	// 		/*找出box高度最小值，将后面的box放在其下*/
// 	// 		var minOBoxsHeight = Math.min.apply(null, oBoxsHeight); //一行box中高度的最小值
// 	// 		var minIndex = getMinIndex(oBoxsHeight, minOBoxsHeight); //获取高度最小值的索引
// 	// 		var newBoxLeft = (Math.floor(minIndex * oBoxsOneWidth) + 40);
// 	// 		startMove(oBoxs[i], { top: minOBoxsHeight, left: newBoxLeft });
// 	// 		/*改变列高，适用其后box*/
// 	// 		oBoxsHeight[minIndex] += oBoxs[i].offsetHeight;
// 	// 	}
// 	// }
// 	console.log(oBoxsOneWidth);
// }

// function getByClassName(parent, className) {
// 	var classArray = new Array();
// 	var oClasses = parent.getElementsByTagName('*');
// 	for (var i = 0; i < oClasses.length; i++) {
// 		if (oClasses[i].className == className) {
// 			classArray.push(oClasses[i]);
// 		}
// 	}
// 	return classArray;
// }

// function Waterfall() {
// 	var oParent = document.getElementById("main");
// 	var oBoxs = getByClassName(oParent, "box");
// 	/*获取屏幕宽度，得到每行box个数*/
// 	var screenWidth = document.documentElement.clientWidth; //获得当前屏幕宽度
// 	var oBoxsOneWidth = oBoxs[0].offsetWidth; //获得每个box宽度
// 	var colBoxCount = Math.floor(screenWidth / oBoxsOneWidth); //获得每行box个数
// 	/*设置父级元素样式*/
// 	oParent.style.cssText = 'width:' + (oBoxsOneWidth * colBoxCount) + 'px; margin:0 auto;';
// 	/*获得每列的高度, 找出合适位置插入box*/
// 	// var oBoxsHeight = new Array(); //用于每列的高度的数组
// 	for (var i = 0; i < oBoxs.length; i++) { //遍历box的高度，存入数组
// 		if (i < colBoxCount) {
// 			oBoxsHeight.push(oBoxs[i].offsetHeight);
// 			startMove(oBoxs[i], { top: 0, left: (Math.floor(i * oBoxsOneWidth) + 40) });
// 		} else {
// 			/*找出box高度最小值，将后面的box放在其下*/
// 			var minOBoxsHeight = Math.min.apply(null, oBoxsHeight); //一行box中高度的最小值
// 			var minIndex = getMinIndex(oBoxsHeight, minOBoxsHeight); //获取高度最小值的索引
// 			var newBoxLeft = (Math.floor(minIndex * oBoxsOneWidth) + 40);
// 			startMove(oBoxs[i], { top: minOBoxsHeight, left: newBoxLeft });
// 			/*改变列高，适用其后box*/
// 			oBoxsHeight[minIndex] += oBoxs[i].offsetHeight;
// 		}
// 	}
// 	console.log(oBoxsHeight.length);
// 	console.log(oBoxsHeight);
// }

// function getMinIndex(array, min) {
// 	for (var i = 0; i < array.length; i++) {
// 		if (array[i] == min) {
// 			return i;
// 		}
// 	}
// }

// function ScrollLoad() {
// 	var dataInt = {
// 		'data': [
// 			{ 'src': '15.jpg' },
// 			{ 'src': '25.jpg' },
// 			{ 'src': '35.jpg' },
// 			{ 'src': '45.jpg' },
// 			{ 'src': '55.jpg' }
// 		]
// 	};
// 	/*刷新条件判断*/
// 	if (freshOrNot()) {
// 		/*满足条件，刷新*/
// 		var oParent = document.getElementById("main");
// 		var oBoxs = getByClassName(oParent, "box");
// 		var oBoxsOneWidth = null,
// 			minOBoxsHeight = null,
// 			minIndex = null,
// 			newBoxLeft = null;
// 		for (var j = 0; j < oBoxs.length; j++) { //遍历box的高度，存入数组
// 			/*找出box高度最小值，将后面的box放在其下*/
// 			oBoxsOneWidth = oBoxs[0].offsetWidth; //获得每个box宽度
// 			minOBoxsHeight = Math.min.apply(null, oBoxsHeight); //一行box中高度的最小值
// 			minIndex = getMinIndex(oBoxsHeight, minOBoxsHeight); //获取高度最小值的索引
// 			newBoxLeft = (Math.floor(minIndex * oBoxsOneWidth) + 40);
// 			// startMove(oBox, { top: minOBoxsHeight, left: newBoxLeft });
// 			/*改变列高，适用其后box*/
// 			// oBoxsHeight[minIndex] += oBoxs[j].offsetHeight;
// 		}
// 		console.log("oBoxsOneWidth  " + oBoxsOneWidth);
// 		console.log("minOBoxsHeight  " + minOBoxsHeight);
// 		console.log("minIndex  " + minIndex);
// 		console.log("newBoxLeft  " + newBoxLeft);
// 		for (var i = 0; i < dataInt.data.length; i++) {
// 			var oBox = document.createElement('div'); //添加 元素节点
// 			oBox.className = 'boxI'; //添加 类名 name属性
// 			oParent.appendChild(oBox); //添加 子节点
// 			var oPic = document.createElement('div');
// 			oPic.className = 'pic';
// 			oBox.appendChild(oPic);
// 			var oImg = document.createElement('img');
// 			oImg.src = './img/' + dataInt.data[i].src;
// 			oPic.appendChild(oImg);
// 		}
// 		// oBox.style.position = "absolute";
// 		// 	startMove(oBox, {top : minOBoxsHeight, left : newBoxLeft});
// 		// 	oBoxsHeight[minIndex] += oBox.offsetHeight;
// 	}
// }

// function freshOrNot() {
// 	var oParent = document.getElementById("main");
// 	var oBoxs = getByClassName(oParent, 'box');
// 	var lastBoxPo = oBoxs[oBoxs.length - 1].offsetTop + Math.floor(oBoxs[oBoxs.length - 1].offsetHeight / 1.5); //最后一个box的距离顶部的高度加上其高度的一半
// 	var scrollTop = document.documentElement.scrollTop || document.body.scrollTop; //注意解决兼容性
// 	var documentHeight = document.documentElement.clientHeight; //页面高度
// 	var scrollPo = scrollTop + documentHeight;
// 	return (lastBoxPo < scrollPo) ? true : false;
// }


window.onload = function() {
		/*获取元素*/
		oMain = document.getElementById("main");
		oBoxs = getByClassName(oMain, "box");
		/*信息反馈*/
		console.log("所有class为box的元素：  ");
		console.log(oBoxs);
		/*获取窗口宽度、高度*/
		bWidth = document.documentElement.clientWidth;
		bHeight = document.documentElement.clientHeight;
		/*信息反馈*/
		console.log("窗口宽度：  " + bWidth);
		console.log("窗口高度：  " + bHeight);
		/*混乱分布、恢复排列*/
		oBoxsHeight = new Array(); //存放每列box的总高度
		Distribution();
		/*滚动加载数据*/
		/*存在bug*/
		window.onscroll = function() {
			ScrollLoad();
		}
	}
	/*
	 * 通过class获取元素，返回指定class的元素组成的数组
	 * @param  {DOM对象} parent 指定class元素的父元素
	 * @param  {String} child  指定的className
	 * @return {数组}        指定class元素组成的数组
	 */
function getByClassName(parent, child) {
	var allTag = parent.getElementsByTagName('*');
	var tarClass = new Array();
	for (var i = 0; i < allTag.length; i++) {
		if (allTag[i].className == child) {
			tarClass.push(allTag[i]);
		}
	}
	return tarClass;
}
/**
 * 实现混乱分布初始化，并恢复正常排列
 */
function Distribution() {
	/*实现混乱分布*/
	for (var i = 0; i < oBoxs.length; i++) {
		oBoxs[i].style.position = "absolute";
		oBoxs[i].style.top = Math.floor((Math.random() * bHeight / 5) + (bHeight / 5)) + "px";
		oBoxs[i].style.left = Math.floor((Math.random() * bWidth / 4) + (bWidth / 3.5)) + "px";
	}

	/*恢复正常分布*/
	setTimeout(function() {
		var oBoxWidth = oBoxs[0].offsetWidth; //获得box宽度
		var colBoxCount = Math.floor(bWidth / oBoxWidth); //获得每行box个数
		/*信息反馈*/
		console.log("每个box宽度为： " + oBoxWidth);
		console.log("每行box个数为： " + colBoxCount);
		/*修改父元素样式， 使行列数固定*/
		oMain.style.cssText = 'width:' + (oBoxWidth * colBoxCount) + 'px; margin:0 auto;';
		var json = null; //存放动画参数
		// var oBoxsHeight = new Array(); //存放每列box的总高度
		var oBoxHeight = null; //存放单个box的高度
		var minIndex = null; //存放总高度最小列的索引
		for (var i = 0; i < oBoxs.length; i++) {
			if (i < colBoxCount) {
				oBoxHeight = oBoxs[i].offsetHeight;
				oBoxsHeight.push(oBoxHeight);
				json = { top: 0, left: ((i * oBoxWidth) + 40) };
				startMove(oBoxs[i], json);
			} else {
				oBoxHeight = oBoxs[i].offsetHeight;
				minIndex = getMinIndex(oBoxsHeight);
				/*信息反馈*/
				console.log("最小值的索引： " + minIndex);
				json = { top: oBoxsHeight[minIndex], left: (minIndex * oBoxWidth) + 40 };
				/*信息反馈*/
				console.log("left： " + (minIndex * oBoxWidth));
				startMove(oBoxs[i], json);
				/*更新oBoxsHeight*/
				oBoxsHeight[minIndex] += oBoxHeight;
				/*信息反馈*/
				console.log("更新后的Height： " + oBoxsHeight);
			}
		}
		/*信息反馈*/
		console.log("每列box的总高度： " + oBoxsHeight);
	}, 1000);
}
/**
 * 获得数组中的最小值的索引
 * @param  {数组} array 需要获取索引的数组
 * @return {int}       最小值的索引
 */
function getMinIndex(array) {
	var min = Math.min.apply(null, array); //获取数组中的最小值
	/*遍历数组，获得最小值的索引*/
	for (var i = 0; i < array.length; i++) {
		if (array[i] == min) {
			return i;
		}
	}
}

function ScrollLoad() {
	/*加载的数据*/
	var dataInt = {
		'data': [
			// { 'src': '15.jpg' },
			// { 'src': '25.jpg' },
			// { 'src': '35.jpg' },
			// { 'src': '45.jpg' },
			{ 'src': '55.jpg' }
		]
	};
	/*判断是否符合刷新加载数据条件*/
	var isok = freshOrNot();
	/*信息反馈*/
	console.log("是否可以刷新：" + isok);
	if (isok) {
		/*加载节点*/
		for (var i = 0; i < dataInt.data.length; i++) {
			var oBox = document.createElement('div'); //添加 元素节点
			oBox.className = 'box'; //添加 类名 name属性
			oMain.appendChild(oBox); //添加 子节点
			var oPic = document.createElement('div');
			oPic.className = 'pic';
			oBox.appendChild(oPic);
			var oImg = document.createElement('img');
			oImg.src = './img/' + dataInt.data[i].src;
			oPic.appendChild(oImg);
		}
		/*瀑布流分布*/
		Waterfall();
	}
}

function freshOrNot() {
	var lastBoxPo = oBoxs[oBoxs.length - 1].offsetTop + Math.floor(oBoxs[oBoxs.length - 1].offsetHeight / 1.5); //最后一个box的距离顶部的高度加上其高度的一半
	var scrollTop = document.documentElement.scrollTop || document.body.scrollTop; //注意解决兼容性
	var scrollPo = scrollTop + bHeight;
	/*信息反馈*/
	console.log("最后一个box的位置：" + lastBoxPo);
	console.log("滚动条滚动长度：" + scrollTop);
	console.log("页面的高度：" + bHeight);
	console.log("滚动条位置：" + scrollPo);
	return (lastBoxPo < scrollPo) ? true : false;
}

function Waterfall() {
	/*获取元素*/
	oMain = document.getElementById("main");
	oBoxs = getByClassName(oMain, "box");
	/*恢复正常排列*/
	var oBoxWidth = oBoxs[0].offsetWidth; //获得box宽度
	var colBoxCount = Math.floor(bWidth / oBoxWidth); //获得每行box个数
	/*信息反馈*/
	console.log("每个box宽度为： " + oBoxWidth);
	console.log("每行box个数为： " + colBoxCount);
	/*修改父元素样式， 使行列数固定*/
	oMain.style.cssText = 'width:' + (oBoxWidth * colBoxCount) + 'px; margin:0 auto;';
	// var oBoxsHeight = new Array(); //存放每列box的总高度
	var oBoxHeight = null; //存放单个box的高度
	var minIndex = null; //存放总高度最小列的索引
	for (var i = 0; i < oBoxs.length; i++) {
		oBoxHeight = oBoxs[i].offsetHeight;
		minIndex = getMinIndex(oBoxsHeight);
		/*信息反馈*/
		console.log("@最小值的索引： " + minIndex);
		/*信息反馈*/
		console.log("@left： " + ((minIndex * oBoxWidth) + 40));
		console.log("@oBoxHeight:  " + oBoxHeight);
		console.log("@oBoxs:  " + oBoxs.length);
		console.log("@oBoxs[minIndex].offsetWidth:  " + oBoxs[minIndex].offsetWidth);
		/*设置样式*/
		oBoxs[i].style.position = "absolute";
		oBoxs[i].style.top = oBoxsHeight[minIndex] + "px";
		oBoxs[i].style.left = ((minIndex * oBoxWidth) + 40) + "px";
		/*更新oBoxsHeight*/
		oBoxsHeight[minIndex] += oBoxHeight;
		/*信息反馈*/
		console.log("@更新后的Height： " + oBoxsHeight);
	}
	/*信息反馈*/
	console.log("@每列box的总高度： " + oBoxsHeight);
}
