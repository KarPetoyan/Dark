const burger = document.querySelector(".burger")
const burgerLine1 = document.querySelector(".burger1")
const burgerLine2 = document.querySelector(".burger2")
const burgerLine3 = document.querySelector(".burger3")
const burgerMenu = document.querySelector(".burger_menu")
const burgerMenuLi = document.querySelectorAll(".burger_li")

burger.addEventListener("click", ()=>{
    burgerLine1.classList.toggle("burger1-js")
    burgerLine2.classList.toggle("burger2-js")
    burgerLine3.classList.toggle("burger3-js")
    burgerMenu.classList.toggle("burger_menu-js")
})

burgerMenuLi.forEach((item)=>{
    item.addEventListener("click", ()=>{
        burgerLine1.classList.remove("burger1-js")
        burgerLine2.classList.remove("burger2-js")
        burgerLine3.classList.remove("burger3-js")
        burgerMenu.classList.remove("burger_menu-js")
    })
})
