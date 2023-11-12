//html
const body = document.querySelector('html')

//icons
const sun = document.querySelector('#sun')
const moon = document.querySelector('#moon')
const categ = document.querySelector('#category')



sun.addEventListener('click', ()=>{
    body.classList.remove("dark")
    categ.src = "../images/icons/categoria.png"
})

moon.addEventListener("click", ()=>{
    body.classList.add("dark")
    categ.src = "../images/icons/categoria(1).png"
})