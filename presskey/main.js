const wrapper= document.querySelector('.wrapper')
const content=document.querySelector('.content')
const content_number=document.querySelector('.content_number')
const content_key=document.querySelector('.content_key')
const content_location=document.querySelector('.content_location')
const content_which=document.querySelector('.content_which')
const content_code=document.querySelector('.content_code')

document.addEventListener('keydown',e=>{
    wrapper.classList.add('hide')
    content.classList.remove('hide')
    content_number.innerHTML=e.which
    content_key.innerHTML= e.key
    content_location.innerHTML=e.location
    content_which.innerHTML=e.which
    content_code.innerHTML=e.code
})