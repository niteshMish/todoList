const Task = require("../models/tasks");

var toBeDeletedList =[];
var task_list  =[
    // {
    //     discription:'xyz',
    //     date:'10/3/2000',
    //     category:'xyz'
    // }
]

module.exports.home = function(request , response){

    Task.find({},function(err ,task){
        if(err){
            console.log('Error in fetching task');
            return;
        }
        return response.render('../views/home.ejs',{
              task:task
        });
    });
    
} 
module.exports.appended_list = function(request, response){

    Task.create({
        description: request.body.description,
        category: request.body.category,
        date: request.body.date
    },function(err, newTask){
        if(err){
            console.log('Error creating task',err);
            return;
        }
        return response.redirect('back');
    })
}
module.exports.deleted_item_todo_list = function(request,response){

    var id = request.query;
   
    //check no. of tasks to be deleted
    var count = Object.keys(id).length;
    for(let i=0; i<count; i++){
        Task.findByIdAndDelete(Object.keys(id)[i], function(err){
            if(err){
                console.log('Error deleting task',err);
            }
        })
    }
   
    return response.redirect('back');
}




