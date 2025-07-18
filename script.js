const inputBox = document.getElementById('inputbox')
const listContainer = document.getElementById('list-container')

function AddTask(){
    if(inputBox.value ===''){
        alert('You need to write something !')
    }else{
        let li=document.createElement('li')
        li.innerHTML=inputBox.value
        listContainer.appendChild(li)

        let Span = document.createElement('span')
        Span.innerHTML="\u00d7";
        li.appendChild(Span) 

    }
    inputBox.value=""
    saveData()
}

listContainer.addEventListener('click', function(e){
    if(e.target.tagName=== 'LI'){
        e.target.classList.toggle('checked');
        saveData()
    }else if(e.target.tagName==='SPAN'){
        e.target.parentElement.remove()
        saveData()
    }
},false)

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML)
}

function showList(){
    listContainer.innerHTML=localStorage.getItem("data")
}
showList()