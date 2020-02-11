var listaElment = document.querySelector('#app ul');
var inputElement = document.querySelector( '#app input');
var buttonElement =document.querySelector('#app button');

var todos = [
    "fazer café",
    "jogar bola",
    "aprender JS"
];

function renderizar(){

    for(todo of todos){
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        todoElement.appendChild(todoText);
        listaElment.appendChild(todoElement);
    }

}
renderizar();

function addTodos(){
    listaElment.innerHTML = '';
    var todoText = inputElement.value;
    todos.push(todoText);
    inputElement.value ='';
    renderizar();
}
buttonElement.onclick = addTodos;