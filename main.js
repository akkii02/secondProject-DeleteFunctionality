var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// form submit event
form.addEventListener('submit',addItem);
itemList.addEventListener('click',removeItem);
filter.addEventListener('keyup',filterItem)


function addItem(e){
    e.preventDefault();
    //get input value
    var newItem = document.getElementById('item').value;
    var newDis = document.getElementById('description').value;
    //create new li element 
    var li = document.createElement('li');
    li.className = 'list-group-item';
    // console.log(li)
    //Add text node with input value
    const newText = document.createTextNode(newItem);
    const descriptionNode = document.createTextNode(' ' + newDis);
   li.appendChild(newText)
   li.appendChild(descriptionNode);
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
  //  console.log(text)
   var items =  itemList.getElementsByTagName('li');
   Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    var itemLast = item.childNodes[1].textContent
   // console.log(itemLast)
    if(itemName.toLowerCase().indexOf(text)!= -1 || itemLast.toLowerCase().indexOf(text)!= -1){
        item.style.display = 'block';
    }else{
        item.style.display = 'none';
    }
   });
} 

