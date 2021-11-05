'use strict';



function handlePromise(promise){
  return promise.then((data)=>{
    console.log('in function: ', data)
  })
  .catch((err)=>{
    console.log('in function: ', err)
  })
}

const number = Promise.resolve(10);
handlePromise(number);
handlePromise(Promise.reject('error'));



