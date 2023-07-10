const galleryimg = document.querySelector('.gallery_img')
const left =document.querySelector('.gallery_control_left')
const right =document.querySelector('.gallery_control_right')
const imgs=document.querySelectorAll('.img')
const gallery=document.querySelector('.gallery')
const galleryControlClose=document.querySelector('.gallery_control_close')
const arr=[
   'https://www.nodemy.vn/projects/html-css-js/image-gallery/img1.jpeg',
   'https://www.nodemy.vn/projects/html-css-js/image-gallery/img2.jpeg',
   'https://www.nodemy.vn/projects/html-css-js/image-gallery/img3.jpeg',
   'https://www.nodemy.vn/projects/html-css-js/image-gallery/img4.jpeg',
   'https://www.nodemy.vn/projects/html-css-js/image-gallery/img5.jpeg',
   'https://www.nodemy.vn/projects/html-css-js/image-gallery/img6.jpeg',
   'https://www.nodemy.vn/projects/html-css-js/image-gallery/img7.jpeg',
   'https://www.nodemy.vn/projects/html-css-js/image-gallery/img8.jpeg'
]
imgs.forEach((currentValue,index,array)=>{
   currentValue.addEventListener('click',()=>{
      galleryimg.src=arr[index]
      gallery.classList.toggle('show')
      currentIndex=index;
   })
})
galleryControlClose.addEventListener('click',()=>{
   gallery.classList.toggle('show')})
left.addEventListener('click',()=>{
   if(currentIndex==-1){
      currentIndex=7;
      galleryimg.src=arr[7]
   }
   else{
      galleryimg.src=arr[currentIndex]
      currentIndex--
   }
   console.log('1');
})
right.addEventListener('click',()=>{
   if(currentIndex==8){
      currentIndex=0;
      galleryimg.src=arr[0]
   }
   else{
      galleryimg.src=arr[currentIndex]
      currentIndex++
   }
})
fetch('https://api.weatherapi.com/v1/forecast.json?key=482c4a4a1050482ab0e135208231406&q=hanoi&days=4')
.then((data)=>{
   console.log(data.json());  
})