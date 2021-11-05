'use strict';

console.log('start'); //

setTimeout(()=>{
  console.log('setTimeout');
}, 0)

const pr1 = new Promise((resolve, reject)=>{
  console.log('Promise start');
  true ? resolve(): reject();
  console.log('Promise end');
  // for(let i=0; i<1000000; i++){console.log(i);}
  // setTimeout(()=>{
  //   console.log('setTimeout 2');
  // }, 0)
})

pr1
  .then(()=>{
    console.log('resolve');
  })
  .catch(()=>{
    console.log('reject');
  })
  .finally(()=>{
    console.log('finally');
  })

console.log('end');




