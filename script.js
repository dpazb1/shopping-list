// Global Variables
const addButton = document.querySelectorAll('button')[0];
const clearButton = document.querySelectorAll('button')[1];
const userInput = document.getElementById('userinput');
const ul = document.getElementById('shoppinglist')

// Functions
function addItemToList(event) {
    // Creating the new variables for each added item:
    const hr = document.createElement('hr'); // Line between each item
    const li = document.createElement('li'); // List item
    const itemText = document.createElement('input'); // Input where item will be
    const quantity = document.createElement('input');  // Number input to specify quantity
    const cross = document.createElement('button');  // Delete button
    const crossIMG = document.createElement('img');  // Image for delete button
    crossIMG.src = 'cross.png';
    const check = document.createElement('button');  // Mark as ready button
    const checkIMG = document.createElement('img');  // Image for check button
    checkIMG.src = 'check.png';
    const quantityX = document.createTextNode('x');  // The 'x' before the number input.
    const bulletPoint = document.createTextNode('\u00A0' + '-'+' ');
    // Customize itemText, the input box of every added item:
    itemText.setAttribute('type', 'text');
    itemText.setAttribute('value', userInput.value);
    itemText.setAttribute('spellcheck', 'false')
    itemText.classList.add('itemInput');
    itemText.scrollLeft = itemText.scrollWidth;
    // Customize quantity button:
    quantity.setAttribute('type', 'number');
    quantity.classList.add('quantInput');
    quantity.setAttribute('value', 1);
    // Customize the check and delete buttons:
    check.classList.add('addon-buttons');
    check.classList.add('move-right');  // Only needed in check button, to create space in between
    checkIMG.classList.add('buttons');
    cross.classList.add('addon-buttons');
    crossIMG.classList.add('buttons');
    // Customize horizontal line:
    hr.classList.add('custom-hr');
    // Add the image source:
    check.appendChild(checkIMG);
    cross.appendChild(crossIMG);
    // Add the bullet point separate so it doesn't get a line-through when class 'done' is applied:
    // bulletPoint.classList.add('bullet-point');
    li.appendChild(bulletPoint);
    // Add the text for <li>, taken from the input:
    li.appendChild(itemText);
    // Add the 'x':
    li.appendChild(quantityX);
    // Add quantity input:
    li.appendChild(quantity);
    // Add the buttons to the <li>:
    li.appendChild(cross);
    li.appendChild(check);
    // Add the HR:
    li.appendChild(hr);
    // Add event for clicking the list item and toggling class "done".
    check.addEventListener('click', ()=> itemText.classList.toggle('done'))
    // Add event for clicking delete button, that makes its parent element(<li>) disappear.
    cross.addEventListener('click', ()=> cross.parentElement.remove())
    // Add <li> to the <ul>
    ul.appendChild(li);
    // Reset the user input to nothing.
    userInput.value = '';
}

// Accepting button click or enter key to add a new item: 
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
    document.getElementById("shoppinglist").innerHTML='<li class="list-top">List:</li>
    <hr class="custom-hr">';
});
