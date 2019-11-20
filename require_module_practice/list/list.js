define([],function(){
    var item = [{name:"fish",price:100},{name:"meat",price:50}];
    return {
        getitem(){
            return item;
        },
        add(name,price){
            item.push({name,price});
        }
    }
})