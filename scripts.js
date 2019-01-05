
var tasks = [];

// onclick='this.parentElement.remove()'

function initializenotes(){
    var backup = JSON.parse(localStorage.getItem("tasks"));
    if(backup.length>0){
        tasks = backup;
    }
    console.log(backup);
    console.log(tasks);
    for(var i = 0; i < backup.length; i++){
        var container = document.getElementById("taskcontainer");
        var card = document.createElement("div");
    
    
    
        card.className = "taskcard";
        card.innerHTML = "<span class='taskstyle'>" + backup[i].task + "</span>" +"<span class='datestyle'>" + backup[i].date + "</span>" + "<span class='timestyle'>" + backup[i].time + "</span>" + "<i class='fas fa-times iconstyle' onclick='this.parentElement.remove();deletenote("+backup[i].id+")'>" + "</i>";
    
    
    
        container.append(card);
    }
}
initializenotes();



function add(){
    var task = document.forms["inputform"]["task"].value;
    var date = document.forms["inputform"]["date"].value;
    var time = document.forms["inputform"]["time"].value;
    var id = Math.floor(Math.random() * 1000000);


    if(validation(task, date) == true){
    tasks.push(createobj(task, date, time, id));
    localStorage.setItem("tasks", JSON.stringify(tasks));
    var taskindex = tasks.length -1;

    var card = document.createElement("div");
    var container = document.getElementById("taskcontainer");


    card.className = "taskcard";
    card.innerHTML = "<span class='taskstyle'>" + tasks[taskindex].task + "</span>" +"<span class='datestyle'>" + tasks[taskindex].date + "</span>" + "<span class='timestyle'>" + tasks[taskindex].time + "</span>" + "<i class='fas fa-times iconstyle' onclick='this.parentElement.remove();deletenote("+id+")'>" + "</i>";



    container.append(card);
    document.getElementById("errormsg").innerHTML = "";
    var task = document.forms["inputform"]["task"].value = "";
    var date = document.forms["inputform"]["date"].value = "";
    var time = document.forms["inputform"]["time"].value = "";
    }
    
}

function deletenote(id){
    
    var x = tasks.findIndex(function(task){
        return task.id == id
    })
    if(x !== -1){
        tasks.splice(x,1);
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }
    else{
        console.log("didnt find id");
    }



}



function createobj(task, date, time, id){
    var obj = {
        task:task,
        date:date,
        time:time,
        id:id
    }
    return obj;
}

function validation(task,date){
    if(task == ""){
        document.getElementById("errormsg").innerHTML = "Task required";
        return false;
    }
    else if(date == ""){
        document.getElementById("errormsg").innerHTML = "Date required";
        return false;
    }
    else{
        return true;
    }
}