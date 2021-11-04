'use strict';

function loadImage(path){
  const image = new Image();
  image.src = path;
  return new Promise((resolve, reject)=>{
    image.addEventListener('load', ()=>{
      resolve(image);
    })
    image.addEventListener('error', ()=>{
      reject(new Error('path invalid'))
    })
  })
}


loadImage('https://friendofthesea.org/public/news/blue-ocean-28668-2560x1600.jpg')
.then((elem)=>{
  document.body.prepend(elem);
})
.catch((err)=>{
  console.log(err)
})