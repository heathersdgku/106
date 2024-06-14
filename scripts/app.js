function saveTask(){
    console.log("Saving tasks");
    //get values from html
    const title = $("#txtTitle").val();
    const description = $("#txtDescription").val();
    const color = $("#selColor").val();
    const date = $("#selDate").val();
    const status = $("#selStatus").val();
    const budget = $("#numBudget").val();
    //build an object
    let taskToSave = new Task(title, description, color, date, status, budget);
    console.log(taskToSave);
    //save to server

    //display the info from the server
    displayTask(taskToSave);
    //create a function that clears all inputs onclick save

}

function displayTask(task){

    let syntax = `<div class='task'>
    <div class='info'>
        <h3>${task.title}</h3>
        <h5${task.description}</h5>
    </div>
        <label class="status">${task.status}</label>
        <div class="date-budget">
            <label>${task.date}</label>
            <label>${task.budget}</label>
        </div>
    </div>
        `
    $(".list-task").append(syntax);
    //add the rest of the inputs into syntax

}

function init(){
    console.log("task manager");

    //load data
    
    //hook the events
    
    $("#btnSave").click(saveTask);
}

window.onload = init;