// Variables
var addButton = document.querySelectorAll('button')[0];
var clearButton = document.querySelectorAll('button')[1];
var userInput = document.getElementById('userinput');
var ul = document.getElementById('shoppinglist')

// Functions
function addItemToList(event) {
    // Creating the new li and the new check/cross buttons:
    var li = document.createElement('li');
    var itemText = document.createElement('input');
    var quantity = document.createElement('input');
    var cross = document.createElement('button');
    var check = document.createElement('button');
    var checkIMG = document.createElement('img');
    checkIMG.src = 'check.png';
    var crossIMG = document.createElement('img');
    crossIMG.src = 'cross.png';
    // Customize itemText:
    itemText.setAttribute('type', 'text');
    itemText.setAttribute('value', userInput.value);
    itemText.setAttribute('spellcheck', 'false')
    itemText.classList.add('itemInput');
    itemText.scrollLeft = itemText.scrollWidth;
    // Customize quantity button:
    quantity.setAttribute('type', 'number');
    quantity.classList.add('quantInput');
    quantity.setAttribute('value', 1);
    // Add the cross/check img.
    check.classList.add('addon-buttons')
    cross.classList.add('addon-buttons')
    checkIMG.classList.add('buttons')
    crossIMG.classList.add('buttons')
    check.appendChild(checkIMG);
    cross.appendChild(crossIMG);
    // Add the text for <li>, taken from input.
    li.appendChild(itemText);
    // Add quantity input:
    li.appendChild(quantity);
    // li.appendChild(document.createTextNode(userInput.value));
    // Add the buttons to the <li>.
    li.appendChild(cross);
    li.appendChild(check);
    // Add event for clicking the list item and toggling class "done".
    check.addEventListener('click', ()=> itemText.classList.toggle('done'))
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
