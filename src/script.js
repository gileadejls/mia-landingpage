const body = document.querySelector('html')

//icons
const sun = document.querySelector('#sun')
const moon = document.querySelector('#moon')
const categ = document.querySelector('#category')
const menu = document.querySelector('#menu')
const close = document.querySelector('#close')


categ.addEventListener("click", ()=>{
    menu.classList.remove('translate-y-full')
    menu.classList.add('translate-y-0')
})

close.addEventListener("click", ()=>{
    menu.classList.remove('translate-y-0')
    menu.classList.add('translate-y-full')
})

sun.addEventListener('click', ()=>{
    body.classList.remove("dark")
})

moon.addEventListener("click", ()=>{
    body.classList.add("dark")
})

const backtop = document.querySelector("#backtotop")

window.addEventListener('scroll', ()=>{
    if(window.scrollY > 100){
        backtop.classList.remove('invisible')
        backtop.classList.remove('bottom-14')
        backtop.classList.add('visible')
        backtop.classList.add('bottom-20')

    }else{
        backtop.classList.remove('visible')
        backtop.classList.remove('botton-20')
        backtop.classList.add('bottom-14')
        backtop.classList.add('invisible')
    }
})