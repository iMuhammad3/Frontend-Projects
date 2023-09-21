const themeToggleBtn = document.getElementById('themeToggleBtn')
const todoInput = document.getElementById('todo-input')
const todoContainer = document.querySelector('.todo-container')
const filters = document.querySelector('.filters')
const itemsLeftEl = document.getElementById('items-left')


themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark')
    document.querySelectorAll('main header svg').forEach(svg => {
        svg.classList.toggle('hidden')
    })
})

todoInput.addEventListener('submit', (e) => {
    e.preventDefault();

    const inputValue = todoInput.querySelector('input').value
    createTodo(inputValue)
    todoInput.querySelector('input').value = ''
    // display number of items left at the bottom of list
    itemsLeftEl.textContent = `${document.querySelectorAll('.todos > li').length} items left`
})

todoContainer.addEventListener('click', (e) => {
    const element = e.target
    if(element.classList.contains('removeBtn')){
        element.parentElement.classList.add('fade-out')
        setTimeout(()=>{
            element.parentElement.remove()
            itemsLeftEl.textContent = `${document.querySelectorAll('.todos > li').length} items left`
        }, 500)
    } else if(element.tagName === 'LI'){
        element.classList.toggle('completed')
    } else if(element.tagName === 'P' || element.classList.contains('circle')){
        element.parentElement.classList.toggle('completed')
    }
})

// filters.addEventListener('click', (e) => {
//     switch (e.target.id){
//         case 'filter-all' : 
//     }
// })


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