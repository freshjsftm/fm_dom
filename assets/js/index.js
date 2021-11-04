'use strict';
/*
const promise = fetch('./assets/js/data.json');
promise.then((response)=>{
  const jsonPromise = response.json();
  jsonPromise.then((data)=>{
    console.table(data)
  })
})
*/
fetch('./assets/js/data.json')
  .then((response)=>response.json())
  .then((data)=>{
    //вывести в консоль только строковый параметр
    data.forEach((user)=>{
      console.log(user.name);
    });
  })
  .catch((error)=>{ console.log(error);})
  .finally(()=>{console.log('end');})