'use strict';
const state = [];
const form = document.getElementById('root-form');
const list = document.getElementById('list');

form.addEventListener('submit', (e)=>{
  e.preventDefault();
  const {target: { textInput: {value: inputText} }} = e;
  const inputValue = inputText.trim();
  const validatorName = /^[A-Z][a-z]{2,12}$/;
  if(validatorName.test(inputValue) && !state.includes(inputValue)){
    state.push(inputValue);
    form.reset();
    const li = createElement('li', {classNames:['item']}, document.createTextNode(inputValue));
    const btn = createElement('button', 
      {typeEvent:'click', onClick:deleteHandler.bind(li), dataValue:inputValue}, 
      document.createTextNode('X'));
    li.append(btn);
    list.append(li);
  }
  console.dir(state);
})
/*
добавить кнопку удаления для каждого пункта списка
по нажатию на кнопку удалять
- пункт списка сос траницы
- значение из массива
*/
function deleteHandler({target:{dataset:{value}}}){
  this.remove();
  state.splice(state.indexOf(value),1);
}
function createElement(type, {dataValue = '', classNames=[], typeEvent='', onClick=null}, ...children){
  const elem = document.createElement(type);
  if(dataValue){
    elem.dataset.value = dataValue;
  }
  if(classNames.length){
    elem.classList.add(...classNames);
  }
  elem.addEventListener(typeEvent, onClick);//for example
  elem.append(...children);
  return elem;
}