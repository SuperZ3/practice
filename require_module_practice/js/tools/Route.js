//库定义
define([],function(){
    function Route(routers){
                this.routers = routers;
                this.init();
            }

    Route.prototype = {
        constructor:Route,
        init(){           
            window.addEventListener("hashchange",()=>{
                var hash = location.hash.substring(1);
                console.log(hash);
                this.routers.forEach(function(item,index){
                    if(item["path"] == hash){
                        item["method"]();
                    };
                })
            })  
        },
        push({path}){
            var route = this.routers.find(v => {
               return v.path === path
            });
            if(route){
                route.method();
            }
            
        }
    }

    return function(){
        return Route;
    }

})