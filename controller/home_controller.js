
var toBeDeletedList =[];
var task_list  =[
    // {
    //     discription:'xyz',
    //     date:'10/3/2000',
    //     category:'xyz'
    // }
]

module.exports.home = function(request , response){
    return response.render('../views/home.ejs',{
        todo_task_list:task_list
    });
} 
module.exports.appended_list = function(request, response){

    task_list.push(request.body);
    return response.render('../views/home.ejs',{
        todo_task_list:task_list
     });
        
}
module.exports.deleted_item_todo_list = function(request,response){

   console.log(request.body);
    return response.render('../views/home.ejs',{
        todo_task_list:task_list
    });
} 
module.exports.check_box = function(request,response){

    return response.end('done');
}



