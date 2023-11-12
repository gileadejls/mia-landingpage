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

const backtop = document.querySelector("#backtotop")

window.addEventListener('scroll', ()=>{
    if(window.scrollY > 100){
        console.log("aaaaaaa")
        backtop.classList.remove('invisible')
        backtop.classList.remove('bottom-14')
        backtop.classList.add('bottom-20')
        backtop.classList.add('visible')
    }else{
        backtop.classList.remove('visible')
        backtop.classList.add('invisible')
        backtop.classList.remove('bottom-20')
        backtop.classList.add('bottom-14')
    }
})