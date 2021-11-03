'use strict';

const btn = document.getElementById('btn');
btn.addEventListener('click', btnHanler);
function btnHanler(e){

}



const identificator = setTimeout(()=>{
  console.log('hi!')
},300)

clearTimeout(identificator);


/*
написать функцию, которая выводит последовательно числа 
в консоль от 1 до 10 через 0,5 секунды
*/
const c1 = counter();
function counter(){
  let i=1;
  return function(){
    const id = setInterval(()=>{
      console.log(i++)
      if(i>10){
        clearInterval(id);
      }
    }, 500)
  }
}
c1();