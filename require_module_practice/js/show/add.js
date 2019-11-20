define(["jquery","list","require","./first"],function($,list,require){
    return function(){     
        var str = `
            <form>
                <label> name: </label><input type="text" id="name" >
                <label> price: </label><input type="text" id="value">
                <button type="submit">submit</button>
            </form>
    `;
    
    var thisform = $(str); 
        //get input
        $("#main #right").html(thisform);
        thisform.on("submit",function(e){
            e.preventDefault();
            //get input value;
            var name = $("#name").val();
            var value = $("#value").val();
            //add to list
            list.add(name,value);
            //refresh
            require("./first")();
       });
        console.log("add");
    }
})