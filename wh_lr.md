###DOM
a:writable = false
    1、dom.clientWidth/clientHeight = padding+context;
    2、dom.offsetWidth/offsetheight = border+padding+context;
    3、dom.clientLeft/clientTop = border width;
    4、dom.offsetLeft/offsetTop = offsetParent->border
    5、dom.scrollWidth/scrollHeight = context real width/height with scrollbar;
    6、dom.getClientRect()/getBoundClientRect() --> left top right bottom with windows;
b:writable = true
    7、dom.scrollLeft/scrollTop -->scroll distance

###Event
1、e.clientX/clientY --> mouse distance with windows
2、e.screenX/screenY --> mouse distance with screen
3、e.offsetX/offsetY||layerX/layerY --> mouse distance with e.target
4、e.pageX/pageY --> mouse distance width windows + scrll distance   