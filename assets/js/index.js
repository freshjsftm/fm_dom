'use strict';

//try{}catch{}
//try{}finally{} 


console.log('start');

try{
  console.log('try 1');
  if(!true){
    throw new Error();
  }
  console.log('try 2');
  console.log('try 3');
}catch{
  console.log('catch error');
}finally{
  console.log('finally');
}

console.log('end');