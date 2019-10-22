<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
		<script type="text/javascript">
			###数据类型
			基本数据类型：Number、String、Boolean、null、undefined，存储在栈内存，值不可改变
			引用数据类型：Function、Object、RegExp...，存储在堆内存中，值可以改变

			###构造函数
			通过new关键字调用的函数（构造函数逻辑顶端隐式创建this空对象，隐式返回this对象）
			返回值：默认返回实例对象，return值返回实例对象，return引用对象返回引用对象

			###继承的实现方式
			1、原型链继承
			2、拷贝式继承
			3、借用构造函数继承
			4、function inherit(Target,Origin){
					function F(){};
					F.prototype = Origin.prototype;
					Target.prototype = new F();
					Target.prototype.constructor = Target;
			}


			###作用域
			变量和函数起作用的区域，取决于定义变量的位置
			作用域链（[[scope]]属性中存储）指查找变量，当前作用域没有，则查找上一级作用域
			预编译发生在函数执行前一刻：创建AO对象，将形参和变量声明作为变量属性名赋值undefined，将形参和实参统一，找函数声明赋值函数体

			###模板字符串
			var b = function (){
				return "sample";
			}
			var a = `This is ${b()} of string 
						in another line
					`;

			###变量解构赋值
			var {x = 3} = {x:null};//x:null两边模式一致，但是null !== undefined

			###rest参数
			function q(...rest){
		        //验证args是不是数组？
		        console.log(rest instanceof Array);//true
		        console.log(Object.prototype.toString.call(rest));//"[object Array]"
		        console.log(Array.isArray(rest));   //true es5中的新方法
		        console.log(rest);
		    }

		    ###箭头函数
		    1、函数体内的this（无this，所以内部this指向外部代码块的this）对象，就是定义时所在的对象，而不是使用时所在的对象。
		    var p={
			        age:18,
			        //es6中对象方法的箭头函数表示形式
			        run:()=>{
			            setTimeout(()=>{
			                //this:window
			                console.log(this);//this是window
			            },100)
			        },
			        travel:function(){
			            //this:p
			            setTimeout(()=>{
			                console.log(this);//this是p
			            },100)
			        },
			        //推荐使用的方式☆☆☆：es6中对象方法的简写形式
			        say(){
			            console.log("say方法中的this：",this);
			            setTimeout(()=>{
			                console.log("say内部的延迟函数：",this);//this是p
			            },100)
			        },
			    }
			2、不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。
			3、不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替。
			4、不可以使用yield命令，因此箭头函数不能用作 Generator 函数。

			###Promise对象
			function F1(ms){
				return new Promise((resolve,reject) => {
					//异步操作
					setTimeout(() => {
						if (ms === 1000){
							resolve("ok");
						}else{
							reject("filure");
						}
					},ms);
				});
			}

			var promise = F1(2000);
			promise.then(res => { /*or (res,rejError) => {...}
				then返回的不是同一个promise对象*/console.log(res);
			}).catch(rejError => {
				console.log(rejError);
			});

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