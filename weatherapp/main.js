const wrapper=document.querySelector('.wrapper')
const search=document.querySelector('.input')
const title=document.querySelector('.title')
const time=document.querySelector('.time')
const temperture=document.querySelector('.temperture')
const state=document.querySelector('.state')
const visibility=document.querySelector('.visibility')
const speed =document.querySelector('.speed')
const humidity=document.querySelector('.humidity')
const input=document.querySelector('input')
const body=document.querySelector('body')
const timeUpdate= new Date();
try {
    async function getApi(input){
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=d78fd1588e1b7c0c2813576ba183a667`)
        const weather = await res.json()
        console.log(weather);
        title.innerHTML=weather.name
        time.innerHTML=timeUpdate.toLocaleDateString('vn')
        temperture.innerHTML=weather.main.temp
        state.innerHTML=weather.weather[0].main
        visibility.innerHTML=weather.visibility
        speed.innerHTML=weather.wind.speed
        humidity.innerHTML=weather.main.humidity;
        if(weather.main.temp<15){
            wrapper.classList.add('background_cold')
            wrapper.classList.remove('background_hot')
            body.classList.add('background_cold_body')
            body.classList.remove('background_hot_body')
        }
        else{
            wrapper.classList.add('background_hot')
            wrapper.classList.remove('background_cold')
            body.classList.add('background_hot-body')
            body.classList.remove('background_cold_body')
        }
    }
    input.addEventListener('focus',()=>{
        input.classList.add('input_active')
    })
    input.addEventListener('keypress',(e)=>{
        if(e.which==13){
            getApi(e.target.value)
        }
})
    getApi('Ha Noi')
} catch (error) {
    console.log(error);
}


