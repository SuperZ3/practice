require.config({
    baseUrl:"js",
    paths:{
        jquery:"./lib/jquery-3.3.1",
        require:"./lib/require",
        list:"../list/list",
        router:"./tools/router"
    }
})


require(["jquery","require","./show/first","router"],function($,require,first,router){
    $("#left").on("click","li",function(e){
        if(e.target.innerHTML === "菜单"){
            router.push({path:"/show/first"});
        }else if(e.target.innerHTML === "食谱"){

        }else if(e.target.innerHTML === "做法"){

        }else{
            return null;
        }
    });

    router;

    //$("body").ready(function(){first()});
}) 