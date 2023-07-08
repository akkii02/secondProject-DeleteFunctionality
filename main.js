var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');


// form submit event
form.addEventListener('submit',addItem);
itemList.addEventListener('click',removeItem);
filter.addEventListener('keyup,filterItem')


function addItem(e){
    e.preventDefault();
    //get input value
    var newItem = document.getElementById('item').value;
    //create new li element 
    var li = document.createElement('li');
    li.className = 'list-group-item';
    // console.log(li)
    //Add text node with input value
    li.appendChild(document.createTextNode(newItem));
    //create delete button element

    var deleteBtn = document.createElement('button')
    //add classes to delete btn

    deleteBtn.className= 'btn btn-danger btn-sm float-right delete'
    // append text to delet btn

    deleteBtn.appendChild(document.createTextNode('x'));
    li.appendChild(deleteBtn);
  var editBtn = document.createElement('button');
  editBtn.className = 'btn btn-primary btn-sm float-right edit';
  editBtn.appendChild(document.createTextNode('Edit'));
  li.appendChild(editBtn);
  
 
    itemList.appendChild(li)


}

function removeItem(e){
if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
        var li = e.target.parentElement;
        itemList.removeChild(li)
    }
   // console.log(1)
}
} 

function filterItem(e){
    var text = e.target.value.toLowerCase();
    console.log(text)
} 

