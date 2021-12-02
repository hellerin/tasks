

// user input form
const form = document.querySelector("form")
form.addEventListener("submit", addTask)

// Task list
const taskList = document.querySelector("ul");
taskList.addEventListener("click", delTask)

// delete button-link
const deleteBtn = document.querySelector("#delete-tasks")
deleteBtn.addEventListener("click", delTasks)

function delTasks(){
    // taskList.innerHTML = ""
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild)
    }
    removeStorage()
}

//delTask
function delTask(event){
    if(event.target.textContent === "x"){
        if(confirm("Do you really want to delete this task?")){
            event.target.parentElement.remove()
            let task = event.target.parentElement.textContent.slice(0, -1)
            removeStorage(task)
        }
    }
}
//removeStorage(task)
function removeStorage(task){
    let tasks
    if(localStorage.getItem("tasks") === null){
        tasks = []
    } else {
        tasks = JSON.parse(localStorage.getItem("tasks"))
    }
    tasks.forEach(function(taskFormLS, taskIndex){
    if(taskFromLS === task){
        tasks.splice(taskIndex, 1)
    }
})
localStorage.setItem("tasks", JSON.stringify(tasks))
}


//removeAllStorage
function removeAllStorage(){
    localStorage.removeItem("tasks")
}

//Page reload
document.addEventListener("DOMContentLoaded", getTasks)

// getTasks
function getTasks(){
    //get data from local storage
    let tasks
    if(localStorage.getItem("tasks") === null){
        tasks = []
    } else {
        tasks = JSON.parse(localStorage.getItem("tasks"))
    }
    // for each task in tasks - create li and add to taskList
    tasks.forEach(function(taskFromLS){
        //create li and add to taskList
        // create element to DOM
        const li = document.createElement("li")
        // add css class
        li.className = "collection-item"
        // add text to element
        const text = document.createTextNode(taskFromLS)
        li.appendChild(text)
        // create link
        const link = document.createElement("a")
        // add css style
        link.className = "secondary-content"
        // add text
        link.appendChild(document.createTextNode("x"))
        // add href attribute
        link.setAttribute("href", "#")
        // add link to list items
        li.appendChild(link)
        // add li to taskList
        taskList.appendChild(li)
    })
}

//addTask function
function addTask(event){
    // get task value from form input
    const task = document.querySelector("#task").value
    // get element from DOM
    const taskList = document.querySelector("ul");
    // create element to DOM
    const li = document.createElement("li")
    // add css class
    li.className = "collection-item"
    // add text to element
    const text = document.createTextNode(task)
    li.appendChild(text)
    // create link
    const link = document.createElement("a")
    // add css style
    link.className = "secondary-content"
    // add text
    link.appendChild(document.createTextNode("x"))
    // add href attribute
    link.setAttribute("href", "#")
    // add link to list items
    li.appendChild(link)
    // add li to taskList
   taskList.appendChild(li)
    // save task to localStorage
    taskStorage(task)
    // clear form input value
    document.querySelector("#task").value = ""
    event.preventDefault()
}

function taskStorage(task){
    let tasks
    if(localStorage.getItem("tasks") === null){
        tasks = []
    } else {
        tasks = JSON.parse(localStorage.getItem("tasks"))
    }
    tasks.push(task)
    localStorage.setItem("tasks", JSON.stringify(tasks))
}


