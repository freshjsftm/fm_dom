'use strict';

fetch('./assets/js/data.json')
  .then((response)=>response.json())
  .then((data)=>{
    //вывести в консоль только строковый параметр
    data.forEach((user)=>{
      console.log(user.name);
    });
  })
  .catch((error)=>{ console.log(error);})
  .finally(()=>{console.log('end');});


  const myFirstPromise = new Promise(executor);
  function executor(resolve, reject){
    Math.random()>0.5?resolve('ok'):reject('lose');
  }

  myFirstPromise
  .then((data)=>{console.log(data)})
  .catch((err)=>{console.log(err)})

  //setTimeout(callback, 200)
  //timeout(ms).then(callback)

  function timeout(ms){
    return new Promise((resolve, reject)=>{
      setTimeout(()=>{reject('error!!!!!!')}, ms)
    })
  }

  timeout(1000)
  .then(()=>{console.log(1)})
  .catch((err)=>{console.log(err)})
  .finally(()=>{console.log(3)})