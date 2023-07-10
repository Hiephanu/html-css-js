const mainButton= document.querySelector('.main_button')
const card=document.querySelector('.card')
const contentButton=document.querySelector('.content_button')
const wrapperCard= document.querySelector('.wrapper_card')
mainButton.addEventListener('click',()=>{
    card.classList.toggle('active')
    wrapperCard.classList.add('wrappercard')
})
contentButton.addEventListener('click',()=>{
    card.classList.toggle('active')
    wrapperCard.classList.remove('wrappercard')
})
