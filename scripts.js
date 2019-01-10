
var tasks = [];



function initializenotes() {

    var backup = JSON.parse(localStorage.getItem("tasks"));
    if (backup.length > 0) {
        tasks = backup;
    }
    console.log(backup);
    console.log(tasks);
    document.getElementById("totalnotes").innerHTML = " " + tasks.length;
    for (var i = 0; i < backup.length; i++) {
        var container = document.getElementById("taskcontainer");
        var card = document.createElement("div");

        card.className = "taskcard";
        card.innerHTML = "<span class='taskstyle'>" + backup[i].task + "</span>" + "<span class='datestyle'>" + backup[i].date + "</span>" + "<span class='timestyle'>" + backup[i].time + "</span>" + "<i class='fas fa-times iconstyle' onclick='this.parentElement.remove();deletenote(" + backup[i].id + ")'>" + "</i>";

        container.append(card);
    }
}
initializenotes();



function add() {
    var task = document.forms["inputform"]["task"].value;
    var date = document.forms["inputform"]["date"].value;
    var time = document.forms["inputform"]["time"].value;
    var id = Math.floor(Math.random() * 1000000);

    if(idvalidation(id) == true){
        if (validation(task, date) == true) {
            tasks.push(createobj(task, date, time, id));
            localStorage.setItem("tasks", JSON.stringify(tasks));
            var taskindex = tasks.length - 1;
    
            var card = document.createElement("div");
            var container = document.getElementById("taskcontainer");
    
    
            card.className = "taskcard";
            card.innerHTML = "<span class='taskstyle'>" + tasks[taskindex].task + "</span>" + "<span class='datestyle'>" + tasks[taskindex].date + "</span>" + "<span class='timestyle'>" + tasks[taskindex].time + "</span>" + "<i class='fas fa-times iconstyle' onclick='this.parentElement.remove();deletenote(" + id + ")'>" + "</i>";
    
    
    
            container.append(card);
            document.getElementById("totalnotes").innerHTML = " " + tasks.length;
            document.getElementById("errormsg").innerHTML = "";
            var task = document.forms["inputform"]["task"].value = "";
            var date = document.forms["inputform"]["date"].value = "";
            var time = document.forms["inputform"]["time"].value = "";
        }
    }



}

function deletenote(id) {

    var taskindex = tasks.findIndex(function (tasks) {
        return tasks.id == id;
    })
    if (taskindex !== -1) {
        tasks.splice(taskindex, 1);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        document.getElementById("totalnotes").innerHTML = " " + tasks.length;
    }
    else {
        console.log("didnt find id");
    }



}

function clearallnotes() {
    if (confirm('Are you sure you want to clear all notes?')) {
        document.getElementById("taskcontainer").innerHTML = "";
        tasks.splice(0, tasks.length);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        document.getElementById("totalnotes").innerHTML = " " + tasks.length;
        var task = document.forms["inputform"]["task"].value = "";
        var date = document.forms["inputform"]["date"].value = "";
        var time = document.forms["inputform"]["time"].value = "";
    }
}



function createobj(task, date, time, id) {
    var obj = {
        task: task,
        date: date,
        time: time,
        id: id
    }
    return obj;
}

function validation(task, date) {
    if (task == "") {
        document.getElementById("errormsg").innerHTML = "Task empty";
        return false;
    }
    else if (date == "") {
        document.getElementById("errormsg").innerHTML = "Date required";
        return false;
    }
    else {
        return true;
    }
}

function idvalidation(id){
    if(tasks.length > 0){
        for(var i = 0; i<tasks.length; i++){
            if(id == tasks[i].id){
                id = Math.floor(Math.random() * 1000000);
                tasks[i].id = id;
                idvalidation(tasks[i].id);
            }
            else {
                return true;
            }
        }
    }
    else{
        return true;
    }
}