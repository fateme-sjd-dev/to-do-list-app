const Item = document.querySelector(".item");
const addBtn = document.querySelector(".add");
const clearBtn = document.querySelector(".clear");
let toDoList = document.querySelector('.to-do-list');


addBtn.addEventListener("click", function () {
    let listItem = document.createElement('li');
    listItem.setAttribute('class', 'list-item');
    let itemName = Item.value;
    const deleteBtn = document.createElement('butten');
    deleteBtn.appendChild(document.createTextNode('حذف'));
    deleteBtn.setAttribute('class', 'delete');
    const doneBtn = document.createElement('butten');
    doneBtn.appendChild(document.createTextNode('انجام شد'));
    doneBtn.setAttribute('class', 'done');

    listItem.appendChild(document.createTextNode(itemName));

    listItem.appendChild(deleteBtn);
    listItem.appendChild(doneBtn);
    toDoList.appendChild(listItem);

    deleteBtn.addEventListener("click", function(e){
        e.preventDefault();
        toDoList.removeChild(listItem);
    
    }); 
});

clearBtn.addEventListener("click", function(){
    const listItems = document.querySelectorAll('.list-item');
    listItems.forEach(function (listItem){
        toDoList.removeChild(listItem);
    })    
})


