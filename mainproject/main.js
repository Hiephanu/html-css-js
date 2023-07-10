//scroll to add class for navBar
window.addEventListener('scroll',()=>{
    if (
        document.body.scrollTop > 90 ||
        document.documentElement.scrollTop > 90
      ) {
        document.querySelector(".nav-bar").classList.add("active-nav");
      } else {
        document.querySelector(".nav-bar").classList.remove("active-nav");
      }
    }
)
//change background for nav-bar
const user=document.querySelector('.nav-user')
const userAction=document.querySelector('.user-action')
user.addEventListener('click',()=>{
  userAction.classList.toggle('user-show')
})
//scroll and change in header
const personImg=document.querySelector('.header-person')
const title=document.querySelector('.title')
window.addEventListener('scroll',()=>{
  let value=window.scrollY;
  if(value<150){
    title.style.transform = `translateY(${value * 2.0}px)`
    personImg.style.left= -value*2+'px'
  }
})


//animate element
function animate(className){
  const element = document.querySelector(className)
  const elementPosition = element.offsetTop;
  let isScrolledIntoView = false;

  function flyIn() {
    const scrollPosition = window.pageYOffset + window.innerHeight;

    if (!isScrolledIntoView && scrollPosition > elementPosition) {
      element.classList.add('active');
      isScrolledIntoView = true;
    }  else if (isScrolledIntoView && scrollPosition <= elementPosition) {
      element.classList.remove('active');
      isScrolledIntoView = false;
    }
}

window.addEventListener('scroll', flyIn);
}
animate('.place-title')
animate('.place-detail')

$(document).ready(function(){
  $('.your-class').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
  });