const themeToggleBtn = document.getElementById('themeToggleBtn')
const todoInput = document.getElementById('todo-input')
const todoContainer = document.querySelector('.todo-container')
const filters = document.querySelector('.filters')
const itemsLeftEl = document.getElementById('items-left')
const completedArr = []


themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark')
    document.querySelectorAll('main header svg').forEach(svg => {
        svg.classList.toggle('hidden')
    })
})

todoInput.addEventListener('submit', (e) => {
    e.preventDefault();

    const inputValue = todoInput.querySelector('input').value
    if(inputValue.trim()){
        createTodo(inputValue)
    }
    todoInput.querySelector('input').value = ''

    updateItemsLeft(document.querySelectorAll('.todos > li'))
})

todoContainer.addEventListener('click', (e) => {
    const element = e.target
    if(element.classList.contains('removeBtn')){
        element.parentElement.classList.add('fade-out')
        setTimeout(()=>{
            element.parentElement.remove()
            updateItemsLeft(document.querySelectorAll('.todos > li'))
        }, 500)
    } else if(element.tagName === 'LI'){
        checkAsComplete(element)
    } else if(element.tagName === 'P' || element.classList.contains('circle')){
        checkAsComplete(element.parentElement)
    }
})

filters.addEventListener('click', (e) => {
    switch (e.target.id){
        case 'filter-completed' : filter(completedArr, e.target)
            break;
        case 'filter-all' : filter(Array.from(document.querySelectorAll('.todos li')), e.target)
            break;
        case 'filter-active' : 
            const array = Array.from(document.querySelectorAll('.todos li'))
            const filtered = array.filter(item => !completedArr.includes(item))
            filter(filtered, e.target);
    }
})


function createTodo(text){
    const todosEl = document.querySelector('.todos')
    const li = document.createElement('li')
    li.innerHTML = `
        <div class="circle"></div>
        <p>${text}</p>
        <svg class="removeBtn" xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="#494C6B" fill-rule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/></svg>
    `
    todosEl.insertBefore(li, document.querySelector('.filters'))
}

function checkAsComplete(element){
    if(element.classList.contains('completed')){
        element.classList.remove('completed')
        completedArr.splice(completedArr.indexOf(element), 1)
    } else {
        element.classList.add('completed')
        completedArr.push(element)
    }
    console.log(completedArr)
}

function filter(array, element){
    const lis = Array.from(document.querySelectorAll('.todos li'));

    lis.forEach(li => {
        li.style.display = 'none';
    });

    array.forEach(completedItem => {
        completedItem.style.display = 'flex';
    });

    // add 'active' class
    document.querySelectorAll('.filters > div > span').forEach(span => {
        span.classList.remove('active')
    })
    element.classList.add('active')

    updateItemsLeft(array)
}

function updateItemsLeft(itemsLeft){
    itemsLeftEl.textContent = `${itemsLeft.length} items left`
}

// todo
// filters
// localStorage
// drag drop