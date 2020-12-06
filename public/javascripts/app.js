function deleteTodo(id) {
    var deleteTodo = confirm('do you want delete TODO ?')
    if (deleteTodo){
        window.location.href = `/delete/${id}`;
    }
}

function editTodo(id, editedTodo) {
    let todo = prompt("Edit todo", editedTodo);
    if (todo === null || todo === "") {
        alert('todo must be');
    } else {
        window.location.href = `/update/${id}/${todo}`;
    }
}

function addTodo() {
    var todo = document.getElementById('todo').value;
    if (todo.length === 0){
        alert('todo must be');
        return;
    }
    window.location.href = `/add/${todo}`;
}

function complete(id, completed) {
    window.location.href = `/complete/${id}/${completed}`;
}
