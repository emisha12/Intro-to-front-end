var ToDoManager = function () {
    this.toDoList = {};
    this.cloneItems = {};
}

ToDoManager.prototype.init = function () {
    const todoActionBar = new ToDoActionBar();
    todoActionBar.init(this);
}

ToDoManager.prototype.createItem = function (todoText) {
    const todoItem = new ToDoItem(todoText);
    var cloneItem = todoItem.createItem(this);

    this.cloneItems[todoItem.id] = cloneItem;
    this.toDoList[todoItem.id] = todoItem;
    render(this);
}

ToDoManager.prototype.deleteItem = function (todoId) {
    delete this.toDoList[todoId];
    delete this.cloneItems[todoId];
    render(this);
}

const render = function (todoManager) {
    var todoContainer = document.getElementById('todo-list-wrapper');
    todoContainer.innerHTML = "";

    for (var todoId in todoManager.cloneItems) {
        todoContainer.appendChild(todoManager.cloneItems[todoId]);
    }
}

/*************************************************************************************************/
var ToDoItem = function (todoText) {
    this.id = new Date().getTime();
    this.text = todoText;
    this.status = false;
    this.checked = false;
}

ToDoItem.prototype.createItem = function (todoManager) {
    var cloneElement;
    cloneElement = document.querySelector('.template').cloneNode(true);
    cloneElement.classList.remove("template");
    cloneElement.querySelector('.todo-text').innerHTML = this.text;
    cloneElement.setAttribute('id', this.id);
    var that = this;
    cloneElement.addEventListener('click', function () {
        onToDoItemClick(event, that, todoManager);
    });
    return cloneElement;
}

const onToDoItemClick = function (event, todoItem, todoManager) {
    var clickedButton = event.target.getAttribute('todo-action');
    switch (clickedButton) {
        case 'mark-done':
            todoItem.status = !todoItem.status;
            renderIndividual(todoItem);
            break;
        case 'select-item':
            todoItem.checked = !todoItem.checked;
            renderIndividual(todoItem);
            break;
        case 'delete-item':
            todoManager.deleteItem(todoItem.id);
            break;
        case 'update-item':
            updateToDoItem(todoItem);
            renderIndividual(todoItem);
            break;
    }
}

const renderIndividual = function (todoItem) {
    var todoElement = event.currentTarget;
    var todoText = todoElement.querySelector('.todo-text');
    todoText.innerHTML = todoItem.text;

    if (todoItem.status) {
        todoText.classList.toggle('completed');
        todoText.classList.remove('not-completed');
        todoElement.querySelector('.done-btn').textContent = "Not Done";
    } else {
        todoText.classList.toggle('not-completed');
        todoText.classList.remove('completed');
        todoElement.querySelector('.done-btn').textContent = "Done";
    }
}

const updateToDoItem = function (todoItem) {
    var todoElement = event.currentTarget;
    var todoTextElement = todoElement.querySelector(".todo-text");
    todoTextElement.setAttribute("contenteditable", "true");
    todoTextElement.classList.add("edit-todo-text");

    todoTextElement.onkeypress = function (event) {
        if (event.keyCode === 13) {
            updateContent();
        }
    }

    todoTextElement.onblur = function () {
        updateContent();
    }

    function updateContent() {
        todoTextElement.classList.remove("edit-todo-text");
        todoTextElement.removeAttribute("contenteditable");
        todoItem.text = todoTextElement.textContent;
    }
}
/****************************************************************************/
var ToDoActionBar = function () { }

ToDoActionBar.prototype.init = function (todoManager) {
    document.getElementById('add-btn').addEventListener('click', function () {
        addNewItem(todoManager);
    });
    document.getElementById('delete-selected-btn').addEventListener('click', function () {
        deleteSelectedItem(todoManager);
    });
    document.getElementById('delete-completed-btn').addEventListener('click', function () {
        deleteCompletedItem(todoManager);
    });
}

const addNewItem = function (todoManager) {
    var toDoInput =  document.getElementById('input-todo-text');
    var todoText =toDoInput.value;
    if (!todoText) {
        alert("pls enter some content");
    } else {
        if (!checkExistance(todoText, todoManager)) {
            todoManager.createItem(todoText);
            toDoInput.value = "";
        }
    }
}

const deleteCompletedItem = function (todoManager) {
    for(var todoId in todoManager.toDoList){
        if(todoManager.toDoList[todoId].status){
            todoManager.deleteItem(todoId);
        }
    }
}

const deleteSelectedItem = function (todoManager) {
    for(var todoId in todoManager.toDoList){
        if(todoManager.toDoList[todoId].checked){
            todoManager.deleteItem(todoId);
        }
    }
}

const checkExistance = function (todoText, todoManager) {
    var exists;
    var toDoInput = document.getElementById("input-todo-text"); 
    for(var todoId in todoManager.toDoList){
        console.log("in for");
        if(todoManager.toDoList[todoId].text === todoText) {
            console.log("in if");
            toDoInput.value = "";
            alert("This already exists in the To Do List. Please enter another event.");
            exists = 1;
            break;
        }else {
            console.log("in else");
            exists = 0;
        }
    }
    return exists;
}


function main() {
    const todoManager = new ToDoManager();
    todoManager.init();
}
main();