function Change(){
    const p = document.querySelector('#changeText')
    p.innerHTML = "Du hast diesen Text hier geändert"
}

function Verify(){
    const input = document.querySelector('#name').value 
    let l = input.length;

    if(l > 5){
        alert("erfolg")
    }else{
        alert("muss größer als 5 sein")
    }
}

function Calc(){
    let num1 = parseInt(document.querySelector('#num1').value)
    let num2 = parseInt(document.querySelector('#num2').value)
    let opt  = document.querySelector('#select').value
    let val = document.querySelector('#val')

    switch(opt){
        case "addition":
            val.innerHTML = num1 + num2
            break;
        case "subtraktion":
            val.innerHTML = num1 - num2
            break;
        case "multiplikation":
            val.innerHTML = num1 * num2
            break;
        case "division":
            val.innerHTML = num1 / num2
            break;
    }
}

function add(){
    let text = document.querySelector('#text').value
    document.querySelector('#text').value = "";
    
    const ul = document.querySelector('#list')

    let li = document.createElement('li')
    li.innerHTML = text

    let del = document.createElement('button')
    del.addEventListener("click", ()=>{
        let par = del.parentElement;
        par.remove();
    })
    del.innerHTML = "Delete"

    let edit = document.createElement('button')
    edit.addEventListener("click", ()=>{
        let par = edit.parentElement;
        par.innerHTML = "";
        
        par.innerHTML = prompt("neuer Text")
        par.append(edit)
        par.append(del)
    })
    edit.innerHTML = "Edit"

    li.appendChild(edit)
    li.appendChild(del)

    ul.append(li)
}

