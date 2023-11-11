//html
const body = document.querySelector('html')

//icons
const sun = document.querySelector('#sun')
const moon = document.querySelector('#moon')


sun.addEventListener('click', ()=>{
    body.classList.remove("dark")
})

moon.addEventListener("click", ()=>{
    body.classList.add("dark")
})