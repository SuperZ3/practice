//用户定义
define(["./tools/Route","./show/add","./show/first"],function(Route,add,first){
    var Route = Route();
    var routers = [
        {path:"/show/add",method:add},
        {path:"/show/first",method:first}
    ];
    return new Route(routers);
})