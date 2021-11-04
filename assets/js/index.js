'use strict';

const user = {
  name:'Elon',
  sname:'Musk',
  age:50,
  getFullName(){
    return `${this.name} ${this.sname}`;
  },
  children:['one', 'two'],
  isAdult: true,
  hasPet: undefined,
  isUkrain: null,
  [Symbol('test')]:123,
  friends:{
    friend1:'Tom',
    friend2:'Tim',
  },
}
console.log(user)

const serializeUser = JSON.stringify(user);
console.log(serializeUser)

const deSerializeUser = JSON.parse(serializeUser)
console.log(deSerializeUser)