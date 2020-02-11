var listaElment = document.querySelector('#app ul');
var inputElement = document.querySelector( '#app input');
var buttonElement =document.querySelector('#app button');

var todos = [
    "fazer café",
    "jogar bola",
    "aprender JS"
];

function renderizar(){
    listaElment.innerHTML = '';
    for(todo of todos){
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        var linkTodo = document.createElement('a');
        linkTodo.setAttribute('href','#');

        var pos = todos.indexOf(todo);
        linkTodo.setAttribute('onclick', 'deleteTodo('+pos+')');
        var textLink = document.createTextNode('Excluir Todo');

        linkTodo.appendChild(textLink);

        todoElement.appendChild(todoText);
        todoElement.appendChild(linkTodo);
        listaElment.appendChild(todoElement);
    }

}
renderizar();

function addTodos(){
   
    var todoText = inputElement.value;
    todos.push(todoText);
    inputElement.value ='';
    renderizar();
}
buttonElement.onclick = addTodos;

function deleteTodo(pos){
    todos.splice(pos,1)
    renderizar();
}