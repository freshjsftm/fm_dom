'use strict';

const root = document.getElementById('root');
root.addEventListener('click', handlerList);
function handlerList({target}){
if(target.parentNode === root){
target.innerText += '!';
}
}
