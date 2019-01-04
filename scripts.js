
var tasks = [];



function add(){
    var task = document.forms["inputform"]["task"].value;
    var date = document.forms["inputform"]["date"].value;
    var time = document.forms["inputform"]["time"].value;

    if(validation(task, date) == true){

    var container = document.getElementById("taskcontainer");
    var card = document.createElement("div");





    card.className = "taskcard";
    card.innerHTML = "<span class='taskstyle'>" + task + "</span>" +"<span class='datestyle'>" + date + "</span>" + "<span class='timestyle'>" + time + "</span>";



    container.append(card);
    document.getElementById("errormsg").innerHTML = "";
    var task = document.forms["inputform"]["task"].value = "";
    var date = document.forms["inputform"]["date"].value = "";
    var time = document.forms["inputform"]["time"].value = "";
    }

    
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