<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
		<div id="d3">d3</div>
			<div id="d2">d2</div>
				<div id="d1">d1</div>
			
		
		<script type="text/javascript">
			
			// ###数据类型
			// 基本数据类型：Number、String、Boolean、null、undefined，存储在栈内存，值不可改变
			// 引用数据类型：Function、Object、RegExp...，存储在堆内存中，值可以改变

			// ###构造函数
			// 通过new关键字调用的函数（构造函数逻辑顶端隐式创建this空对象，隐式返回this对象）
			// 返回值：默认返回实例对象，return值返回实例对象，return引用对象返回引用对象

			// ###继承的实现方式
			// 1、原型链继承
			// 2、拷贝式继承
			// 3、借用构造函数继承
			// 4、function inherit(Target,Origin){
			// 		function init(){};
			// 		init.prototype = Origin.prototype;
			// 		Target.prototype = new init();
			// 		Target.prototype.constructor = Target;
			// }


			// ###作用域
			// 变量和函数起作用的区域，取决于定义变量的位置
			// 作用域链（[[scope]]属性中存储）指查找变量，当前作用域没有，则查找上一级作用域
			// 预编译发生在函数执行前一刻：创建AO对象，将形参和变量声明作为变量属性名赋值undefined，将形参和实参统一，找函数声明赋值函数体

			// ###模板字符串
			// var b = function (){
			// 	return "sample";
			// }
			// var a = `This is ${b()} of string 
			// 			in another line
			// 		`;

			// ###变量解构赋值
			// var {x = 3} = {x:null};//x:null两边模式一致，但是null !== undefined

			// ###rest参数
			// function q(...rest){
		 //        //验证args是不是数组？
		 //        console.log(rest instanceof Array);//true
		 //        console.log(Object.prototype.toString.call(rest));//"[object Array]"
		 //        console.log(Array.isArray(rest));   //true es5中的新方法
		 //        console.log(rest);
		 //    }

		 //    ###箭头函数
		 //    1、函数体内的this（无this，所以内部this指向外部代码块的this）对象，就是定义时所在的对象，而不是使用时所在的对象。
		 //    var p={
			//         age:18,
			//         //es6中对象方法的箭头函数表示形式
			//         run:()=>{
			//             setTimeout(()=>{
			//                 //this:window
			//                 console.log(this);//this是window
			//             },100)
			//         },
			//         travel:function(){
			//             //this:p
			//             setTimeout(()=>{
			//                 console.log(this);//this是p
			//             },100)
			//         },
			//         //推荐使用的方式☆☆☆：es6中对象方法的简写形式
			//         say(){
			//             console.log("say方法中的this：",this);
			//             setTimeout(()=>{
			//                 console.log("say内部的延迟函数：",this);//this是p
			//             },100)
			//         },
			//     }
			// 2、不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。
			// 3、不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替。
			// 4、不可以使用yield命令，因此箭头函数不能用作 Generator 函数。

			// ###Promise对象
			// function F1(ms){
			// 	return new Promise((resolve,reject) => {
			// 		//异步操作
			// 		setTimeout(() => {
			// 			if (ms === 1000){
			// 				resolve("ok");
			// 			}else{
			// 				reject("filure");
			// 			}
			// 		},ms);
			// 	});
			// }

			// var promise = F1(2000);
			// promise.then(res => { /*or (res,rejError) => {...}
			// 	then返回的不是同一个promise对象*/console.log(res);
			// }).catch(rejError => {
			// 	console.log(rejError);
			// });

			// ###封装库
			//1、要封装的这个库应该是一个独立的单元：模块化
		    //a、不依赖任何其他第三方库
		    //b、里面的东西大部分也是与世隔绝的，只有:$、jQuery
			(function (global){
				function mjquery(elements){
					return new mjquery.prototype.init(elements);
				}

				mjquery.fn = mjquery.prototype = {
					constructor:mjquery,
					init:function(ele){//简写形式报错 
						if($.type(ele) == "string"){
							var ele = document.querySelectorAll(ele);
							for(var i = 0;i<ele.length;i++){
								this[i] = ele[i];
							}
							this.length = ele.length;
						}else if(ele.nodeType){
							//1->Element,2->Attr,3->Text,9->document
							this[0] = ele;
							this.length = 1;
						}
					},
					deepclone(target,obj){
						for(var item in obj){
							if(typeof item == "object"){
								if(Object.prototype.toString.call(obj[item]) == "[object Array]"){
									target[item] = [];
									deepclone(obj[item]);
								}else{
									target[item] = {};
									deepclone(obj[item]);    
								}
							}else{
								target[item] = obj[item];
							}
						}
					}
				}

				mjquery.fn.extend = mjquery.extend = function (...args){
					//匿名函数会导致this指向window
					//$.extend({obj1},{obj2},{obj3}) --> {obj1,obj2,obj3}
					//$.extend({f1(){},f2(){}}); --> $.f1,$.f2
					//$.fn.extend() --> 将属性和方法添加到原型上
					var fobj,
					    source = [...args];
					if(this === mjquery){	//作为方法调用
						var sfirst = Object.keys(source[0])[0];// 获取实参对象中第一个属性是函数or对象，不用JSON.stringify,因为不能字符串函数
						(typeof source[0][sfirst] == "function") ? fobj = mjquery : fobj = source.shift(); 
					}else{
						fobj = this; //指向对象实例
					}
					//调用deep clone
					for(var i = 0;i<source.length;i++){
						mjquery.fn.deepclone(fobj,source[i]);
					}
					//用对象扩展运算符实现
					// source.forEach(function(item){
					// 	Object.keys(item).forEach(function(key){
					// 		fobj = {...fobj,...item};//防止fobj本身被替换
					// 	});
					// });			
					return fobj;
				}

				// ###封装Each方法
				// input:Array-like
				// output:new Array-like
				// $.each({0:a,1:b,length:2},function(item,index){});
				// $("div").each(function(){});
				mjquery.extend({
					each(obj,fn){
						//判断是否是Arraylike对象
						if(obj.length && obj.length>=0){
							for(var i=0;i<obj.length;i++){
								fn.call(obj[i],i,obj[i]);//this指向对象属性
							}
						}else{
							for(var k in obj){//会获取到继承的属性，可考虑Object.keys();
								fn.call(obj[i],k,obj[k]);
							}
						}
					},
					type(obj){
						var type = Object.prototype.toString.call(obj);
						//"[object Array]" --> "array"
						return type.match(/[A-Z]\w+[^\]]/)[0].toLowerCase();
					}
				});

				mjquery.fn.extend({
					each(fn){
						//$("div").each(fn(){});
						$.each(this,fn);
					},
					css(...args){
						// $("div").css("color")，获取第一个元素的color
						// $("div").css("color","pink")，设置所有元素的color
						// $("div").css({folat:left,color:black})，设置所有元素的color
						//var arg = [...args];
						var len = args.length;
						if(len == 1){
							if(typeof args[0] == "string"){
								return window.getComputedStyle(this[0],null)[args[0]];//IE6-8 dom.currentStyle
							}else{
								this.each(function(){ //this--> init实例
								// 	//var keys = Object.keys(args[0]);
								// 	//for(var i = 0;i<keys.length;i++){
								// 	//this --> 元素div
									$.each(args[0],(k,value) => { 
										this.style[k] = value;
									});
								// 	//}
								});
								//a better way
								// $.each(args[0],(value,k) => { 
								// 		this.css(k,value);
								// 	});
							}
						}else{
							this.each(function(){ //this是init对象
								this.style[args[0]] = args[1];//args[0]是字符串
							});
						}	

					},
					on(type,fn){
						this.each(function(index,ele){
							ele["obj"] += `ele:${ele},type:${type},callback:${fn}undefined`;
							//console.log(ele.obj);
					//undefinedtype:click,ele:[object HTMLDivElement],callback:function(){console.log("d1");}undefined
							ele.addEventListener(type,fn,false);
						});
					},
					off(type){
						
						this.each(function(index,ele){
							
						})
					}
				});

				mjquery.fn.init.prototype = mjquery.prototype;

				global.$ = global.mjquery = mjquery;

			})(window);

			function a(){
				console.log(arguments.callee);
			}

			var b = `1${a}`;
			b.substring(1)();
			
			$("div").on("click",function(){
				console.log("alldiv");
			});
		 //    $("#d1").on("click",function(){
		 //        console.log("d1");
		 //    });

		 //    $("#d1").on("mouseover",function(){
		 //        console.log("d1mouse");
		 //    });
			// $("#d3").on("click",function(){
			//     console.log("d3");
			// })

		    //实现解绑d1元素的click事件
		    $("#d1").off("click"); //找到该元素该类型的事件总和
			//var p = {ae:20};
			// $.fn.extend({fn1(){
			// 	return "haha";
			// }});
			// console.dir($.fn);
			// $.fn.extend({
			// 	f1(){},
			// 	f2(){}
			// });
			// $("div").each(function(){
			// 	console.log(this);
			// })
			//$("div").css("color");//，获取第一个元素的color
			//$("div").css("color","pink")//，设置所有元素的color
			//$("div").css({color:'pink',fontSize:"50px",backgroundColor:"black"});//，设置所有元素的color
			//$.each({0:'a',1:'b',length:2},function(item,index){console.log(this)});
			//console.log($.type({}));

			//###deep clone
			// function clone(target,source){
			// 	var source = source || {};
			// 	for(var item in source){
			// 		var type = Object.prototype.toString.call(source[item]);
			// 		if(type == "[object Array]"){
			// 			for(var i = 0;i<source[item].length;i++){
			// 				target[item] = [];
			// 				clone(target[item],source[item][i]);
			// 				target[item].push(source[item][i]);
			// 			}
			// 		}else if(type == "[object Object]"){
			// 			for(var k in source[item]){
			// 				target[item] = {};
			// 				clone(target[item],source[item][k]);
			// 				target[item][k] = source[item][k];
			// 			}
			// 		}else {
			// 			target[item] = source[item];
			// 		}
			// 	}
			// 	return target;
			// }

			// function once(str){
			// 	var len = str.length,
			// 		pre = pres = "";
			// 		for(var i = 0;i<len;i++){
			// 			pres = str[i];
			// 			pre = str.substring(0,i)+str.substring(i+1,len);
			// 			if(pre.search(pres)>0){
			// 				continue;
			// 			}else {
			// 				console.log(pres);
			// 				return;
			// 			}
			// 		}
			// }
			// var str = "alldkfjefowefnjwwnefsauicfsjfwjfa";
			// once(str);
		</script>
</body>
</html>