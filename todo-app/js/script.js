const themeToggleBtn = document.getElementById('themeToggleBtn')

themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark')
    document.querySelectorAll('main header svg').forEach(svg => {
        svg.classList.toggle('hidden')
    })
})

function replace(str, regex, newstr){
    return str.replaceAll(regex, newstr)
}
