const navBarBtn = document.querySelector('#navBarBtn');

navBarBtn.addEventListener('click', () => {
    document.querySelector('.nav-mobile').classList.toggle('hidden')
})