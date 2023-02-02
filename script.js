// Variables
var addButton = document.querySelectorAll('button')[0];
var clearButton = document.querySelectorAll('button')[1];
var userInput = document.getElementById('userinput');
var ul = document.getElementById('shoppinglist')

// Functions
function addItemToList(event) {
    // Creating the new li and the new check/cross buttons:
    var li = document.createElement('li');
    var cross = document.createElement('button');
    var check = document.createElement('button');
    // Add the text and the class for cross/check buttons.
    check.appendChild(document.createTextNode('✔'));
    cross.appendChild(document.createTextNode('x'));
    check.classList.add('check-button')
    cross.classList.add('delete-button')
    // Add the text for <li>, taken from input.
    li.appendChild(document.createTextNode(userInput.value));
    // Add the buttons to the <li>.
    li.appendChild(cross);
    li.appendChild(check);
    // Add event for clicking the list item and toggling class "done".
    check.addEventListener('click', ()=> li.classList.toggle('done'))
    // Add event for clicking delete button, that makes its parent element(<li>) disappear.
    cross.addEventListener('click', ()=> cross.parentElement.remove())
    // Add <li> to the <ul>
    ul.appendChild(li);
    // Reset the input to nothing.
    userInput.value = '';
}

// Add / Enter 
addButton.addEventListener('click', function () {
    if (userInput.value !== '') {
        addItemToList();
    };
});

userInput.addEventListener('keypress', function (event) {
    if (userInput.value !== '' && event.which === 13) {
        addItemToList();
    };
});

// Clear button
clearButton.addEventListener('click', function () {
    document.getElementById("shoppinglist").innerHTML='';
});
