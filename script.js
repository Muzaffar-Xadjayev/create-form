let form=document.querySelector('#addForm')
let itemList=document.getElementById('items');

form.addEventListener('submit',runEvent)

function runEvent(e){
    e.preventDefault()  //serverga malumotlarni otkazmasligi uchun;
    
    let newItem=document.getElementById('item').value;
    let deleteBtn=document.createElement('button')
    deleteBtn.className='btn btn-danger btn-sm float-end delete';
    deleteBtn.appendChild(document.createTextNode('X'))
    // console.log(deleteBtn);
    let li=document.createElement('li')
    li.className='list-group-item';
    li.appendChild(deleteBtn);
    li.appendChild(document.createTextNode(newItem));
    itemList.appendChild(li)
}

itemList.addEventListener('click',removeItem)

function removeItem(e){
    // console.log(e.target.textContent);
    // console.log(e.target.classList);
    if(e.target.classList.contains('delete')){
        if(confirm('siz rostdan ham bu elementni o\'chirmoqchimisiz ?')){
            let li=e.target.parentElement;
            itemList.removeChild(li)
        }
    }else{
        console.log('error');
    }
}


let filter=document.getElementById('filter');
filter.addEventListener('keyup',filterItems);

function filterItems(e){
    let txt=e.target.value.toLowerCase();
    // console.log(txt);
    let items=itemList.getElementsByTagName('li');
    // console.log(items);
    Array.from(items).forEach((item) => {
        let itemName=item.firstChild.textContent;
        // console.log(itemName);
        if(itemName.toLowerCase().indexOf(txt)!=-1){
            item.style.display='block'
        }else{
            item.style.display='none'
        }
    })
}
