const inputBox = document.querySelector('#input-box')

const listContainer = document.querySelector('#list-container')

const btn = document.getElementById('btn')

btn.addEventListener('click', (e) => {
    if(inputBox.value === '') {
        alert("You must write something!")
    }else {
        let li = document.createElement('li')
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li)

        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span)
    }
    inputBox.value = "";
    saveData()
}, false)

inputBox.addEventListener('keydown', (e) => {
    if(e.key === 'Enter') {
        if(inputBox.value === '') {
            alert("You must write something!")
        }else {
            let li = document.createElement('li')
            li.innerHTML = inputBox.value;
            listContainer.appendChild(li)

            let span = document.createElement('span')
            span.innerHTML = "\u00d7"
            li.appendChild(span)
        }
        inputBox.value = "";
        saveData()
    }

}, false)


listContainer.addEventListener('click', (e) => {
    if(e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
    }else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
    }
    saveData()
}, false)


// Use Local Storage for store data
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML)
}

function showData() {
    listContainer.innerHTML = localStorage.getItem("data")
}

showData()