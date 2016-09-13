window.onload = function() {
    /*散乱分布*/
    groupMove();

    /*加载的数据块*/
    var dataInt = {
        'data': [
            { 'src': '1.jpg' },
            { 'src': '2.jpg' },
            { 'src': '3.jpg' },
            { 'src': '4.jpg' },
            { 'src': '5.jpg' }
        ]
    };
    /*滚动条滚动事件*/
    window.onscroll = function() {
        if (checkScrollSlide()) {    //判断是否符合加载数据的条件
            var oParent = document.getElementById("main");
            for (var i = 0; i < dataInt.data.length; i++) {
                var oPin = document.createElement('div'); //添加 元素节点
                oPin.className = 'box'; //添加 类名 name属性
                oParent.appendChild(oPin); //添加 子节点
                var oBox = document.createElement('div');
                oBox.className = 'pic';
                oPin.appendChild(oBox);
                var oImg = document.createElement('img');
                oImg.src = './img/' + dataInt.data[i].src;
                oBox.appendChild(oImg);
            }
            /*瀑布流布局*/
            waterfall();
        }
    }
};
/**
 * 获得指定类名的元素
 * @param  {DOM} parent 指定类名元素的父节点
 * @param  {String} child  指定的类名
 * @return {Array}        指定类名的元素组成的数组
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
 * 实现散乱分布并动画复原
 * @return {None} None
 */
function groupMove() {
    var parent = document.getElementById("main");
    var boxs = getByClassName(parent, "box");

    for (var i = 0; i < boxs.length; i++) {
        boxs[i].style.position = "absolute";
        var bheight = document.documentElement.clientHeight;
        var bwidth = document.documentElement.clientWidth;
        var otop = Math.floor(bheight / 2) + (Math.random() * 10 > 5 ? 1 : (-1)) * 5 * i - Math.floor(boxs[i].offsetHeight / 2);
        var oleft = Math.floor(bwidth / 2) + (Math.random() * 10 > 5 ? 1 : (-1)) * 5 * i - Math.floor(boxs[i].offsetWidth / 2);
        boxs[i].style.top = otop + "px";
        boxs[i].style.left = oleft + "px";
    }

    var w = boxs[0].offsetWidth;
    var bwidth = document.documentElement.clientWidth;
    var cols = Math.floor(bwidth / w);
    parent.style.width = (w * cols) + "px";
    parent.style.margin = "0 auto";
    var hArr = new Array();

    setTimeout(function() {
        var json = null;
        for (var i = 0; i < boxs.length; i++) {
            var h = boxs[i].offsetHeight;
            if (i < cols) {
                hArr[i] = h;
                json = {
                    top: 0,
                    left: (i * w)
                };
                startMove(boxs[i], json);
            } else {
                var minH = Math.min.apply(null, hArr);
                var minHIndex = getMinIndex(hArr, minH);
                json = {
                    top: minH,
                    left: (minHIndex * w)
                };
                startMove(boxs[i], json);
                hArr[minHIndex] += boxs[i].offsetHeight;
            }
        }
    }, 10)
}

function getMinIndex(array, min) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] == min) {
            return i;
        }
    }
}

function waterfall() {
    var parent = document.getElementById("main");
    var boxs = getByClassName(parent, "box");
    var w = boxs[0].offsetWidth;
    var bwidth = document.documentElement.clientWidth;
    var cols = Math.floor(bwidth / w);
    parent.style.width = (w * cols) + "px";
    parent.style.margin = "0 auto";
    var hArr = new Array();
    for (var i = 0; i < boxs.length; i++) {
        var h = boxs[i].offsetHeight;
        if (i < cols) {
            hArr[i] = h;
        } else {
            var minH = Math.min.apply(null, hArr);
            var minHIndex = getMinIndex(hArr, minH);
            boxs[i].style.position = "absolute";
            boxs[i].style.top = minH + "px";
            boxs[i].style.left = (minHIndex * w) + "px";
            hArr[minHIndex] += boxs[i].offsetHeight;
        }
    }
}

function checkScrollSlide() {
    var parent = document.getElementById("main");
    var boxs = getByClassName(parent, "box");
    var lastBox = boxs[boxs.length - 1];
    var lastBoxDis = parseInt(lastBox.style.top) + Math.floor(lastBox.offsetHeight / 2);
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop; //注意解决兼容性
    var documentH = document.documentElement.clientHeight; //页面高度
    return (lastBoxDis < (scrollTop + documentH)) ? true : false;
}

function getStyle(obj, attr) {
    if (obj.currentStyle) {
        return obj.currentStyle[attr];
    } else {
        return getComputedStyle(obj, null)[attr];
    }
}

function startMove(obj, json, fun) {
    var finishFlag = true;
    clearInterval(obj.timer);
    obj.timer = setInterval(function() {
        flag = true;
        var speed = 0,
            currStyle = null;
        for (var attr in json) {
            if (attr == 'opacity') {
                var isOpacity = true;
                currStyle = Math.round(parseFloat(getStyle(obj, attr)) * 100);
            } else {
                currStyle = parseInt(getStyle(obj, attr));
            }
            speed = (json[attr] - currStyle) / 8;
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
            if (currStyle != json[attr]) {
                finishFlag = false;
            }
            if (isOpacity) {
                obj.style.filter = 'alpha(opacity:' + (currStyle + speed) + ')';
                obj.style[attr] = (currStyle + speed) / 100;
            } else {
                obj.style[attr] = currStyle + speed + 'px';
            }
            if (finishFlag) {
                clearInterval(obj.timer);
                if (fun) {
                    fun();
                }
            }
        }
    }, 30);
}
