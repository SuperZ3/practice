###语义化标签
1、<header></header>/<hgroup></hgroup>/<nav></nav>/<fotter></fotter>/<section></section>/<article></article>/
<aside></aside>/<figure></figure>/<figcaption></figcaption>/<time></time>/<datalist></datalist>/<details></details>/
<summary></summary>/<dialog></dialog>/<adddress></adddress>/<mark></mark>/<keygen></keygen>/<progress></progress>
2、<input type = "email/tel/url/search/range/number/color/datetime/time/date/week/month" plackhoder/autocomplete/autofocus/list/datalist/required//pattern/formaction />
3、invalidy事件validity对象：
            validity.valid --> 验证不通过返回false
			validity.valueMissing --> 值为空时返回true配合required属性
			validity.typeMismatch --> 值与预期类型不一致，返回true
			validity.patternMismatch --> 值不满足正则，返回true
			validity.tooLong --> 超过maxLength最大限制返回true
			validity.rangeOverflow --> 超过range最大值返回true
			validity.setCustomValidity() --> 自定义验证成功，validity.customError返回true


###3Dcanvas var oc = CanvasRenderingContext2D
1、oc.beginPath()/moveTo(x,y)/lineTo(x,y)/stroke()/closePath()/clearRect()/arc(x,y,r,startangle,endangle,direction)/arcTo(startx,starty,endx,endy)/lineWidth/lineStyle/fillStyle/lineCap/lineJoin/save()/restore()/bezierCurveTo(firstx,firsty,secondx,secondy,endx,endy)/rotate(Math.PI)/scale(x,y)/translate(x,y)
2、oc.createLinearGradient(startx,starty,endx,endy)/createRadialGradient(startx,starty,startr,endx,endy,endr)/addColorStop(0.5,color)/drawImage(obj)/createPattern(obj)/fillText(str,x,y)/font="60px fontfamily"/measureText(font).width/textBaseline="middle/top"/shadowOffsetX/shadowOffsetY/shadowBlur
3、oc.getImageData(starx,stary,w,h)/createImageData(w,h)/putImageData(ImageData,startx,starty)/ImageData.width|height|data
4、oc.globalAlpha=0.5/globalCompoisteOperation = "xor/source-over/destination/isPointInPath(x,y);

###H5新特性
1、obj.classList.length||add()||remove()||toggle()/JSON.parse()||stringify()/data-name:dataset.name/defer||async/onhashchange/history.pushState(data,[title],[address])||popstate事件event.data/
2、draggable="true"/dragstart||drag||dragend/dragenter||dragover||dragleave||drop/dataTransfer.setData(key,value)||getDate(key)||efectAllowed||setDragImage(ele,x,y)||dataTransfer.files --> filesList/new FileReader().readAsDataURL(fileList[i])||new FileReader().onload(this.result);

###音频视频
<audio controls/autoplay/loop/currentTime/duration/volume/muted/autobuffer/paused/ended/error/currentSrc/play()/pause()/load()></audio>/<video></video>/<source></source>

###地理位置本地存储
1、navigator.geolocation.watchPosition(success,error,json)||clearWatch||getCurrentPositon(success(p),error(e),{json})/p.coords.longitude||latitude||accurance
2、window.sessionStorage||localStorage.getItem(key)||setItem(key,value)||removeItem(key)||clear()/storage事件e.key||newValue||oldValue||sotrageArea||url

		//window.sessionStorage.setItem("name",123);
        //单次定位请求
        // navigator.geolocation.getCurrentPosition(function(position){
        //     console.log(1);
        //     mt.value += "经度" + position.coords.longitude;
        //     mt.value += "纬度" + position.coords.latitude;
        //     mt.value += "准确度" + position.coords.accuracy;
        //     mt.value += "海拔" + position.coords.altitude;
        //     mt.value += "海拔准确度" + position.coords.altitudeAccuracy;
        //     mt.value += "行进方向" + position.coords.heading;
        //     mt.value += "地面速度" + position.coords.speed;
        //     mt.value += "时间戳" + position.timestamp;
        // },function(error){
        //     err.code //-->0,1 reject,2 not open,3 timeout
        // },{
        //     enableHighAccuracy:true,//更精确查找
        //     timeout:5000,//允许最长时间
        //     maximumAge:0//可缓存最大时间
        // });
        // //多次定位请求,移动设备触发,frequency设置更新频率
        // var timer = navigator.geolocation.watchPosition(success,error,{json});
        // //清除请求
        // navigator.geolocation.clearWatch(timer);

		}
		se.onclick = function(){
			window.localStorage.setItem("name",sh.value);
		}
		re.onclick = function(){
			window.localStorage.removeItem("name");
		} 
		window.addEventListener("storage",function(e){
			//当前页面不会触发事件
			console.log(111);
			console.log(e.key);
			console.log(e.newValue);
			console.log(e.oldValue);
			console.log(e.storageArea);
			console.log(e.url);
		},false);


