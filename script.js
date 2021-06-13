const inputField = document.querySelector('.add-task input')
const btnAddTask = document.querySelector('.add-task button')
const placeholders = document.querySelectorAll('.placeholder')
const items = document.querySelectorAll('.item')

let target;

btnAddTask.addEventListener('click', addTask)

function addTask() {
    if (inputField.value) {
        const div = document.createElement('div')
        div.classList.add('item')
        div.innerHTML = inputField.value
        div.draggable = true
        div.addEventListener('dragstart', dragstart)
        div.addEventListener('dragend', dragend)
        placeholders[0].append(div)
        inputField.value = ''
    }
}

items.forEach(item => {
    item.addEventListener('dragstart', dragstart)
    item.addEventListener('dragend', dragend)
})

placeholders.forEach(placeholder => {
    placeholder.addEventListener('dragover', dragover)
    placeholder.addEventListener('dragenter', dragenter)
    placeholder.addEventListener('dragleave', dragleave)
    placeholder.addEventListener('drop', drop)
})

function dragstart(event) {
    event.target.className = 'item hold active'
    setTimeout(() => event.target.classList.add('hide'), 0)
    target = event.target
}

function dragend(event) {
    event.target.className = 'item active'
}


function dragover(event) {
    event.preventDefault()
}

function dragenter(event) {
    event.target.classList.add('hovered')
}

function dragleave(event) {
    event.target.classList.remove('hovered')
}

function drop(event) {
    if (event.target.classList.contains('placeholder')) {
        event.target.classList.remove('hovered')
        event.target.append(target)
    }
}