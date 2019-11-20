define(["jquery","./add","list"],function($,add,list){ 
    return function(){
                var str = `
                <div>
                    <button type="button" id="add" value= "add">add</button>
                    <button type="button" value= "goto">goto</button>
                    <table>
                        <tr>
                            <th>name</th>
                            <th>price</th>
                        </tr>
                        ${list.getitem().map(function(item){                   
                            return "<tr><th>"+item.name+"<th>"+item.price+"</th></td>";
                        }).join("")}            
                    </table>  
                </div>      
            `;

                var first = $(str);      
                $("#main #right").html(first);
                first.on("click","#add",function(){
                    add();
                });  

                console.log("first");
    }
})