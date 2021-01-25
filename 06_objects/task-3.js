'use strict'
let array = [
  { value: 0, label: "Первый элемент"},
  { value: 1, label: "Второй элемент"},
  { value: 2, label: "Третий элемент"}
  ];

let arr2 = [24, 3, 'JJJJ',{ value: 0, label: "Первый элемент"},
{ value: 1, label: "Второй элемент"},
{ value: 2, label: "Третий элемент"}]

function makeList(arr){

  let select = document.createElement('select');

  if(arr.constructor === Array){
    arr.forEach(element => {
      if(typeof(element) == 'number' || typeof(element) == 'string') {
      let opt = document.createElement('option');
        opt.text = element
        select.appendChild(opt)
      } else {
        let opt = document.createElement('option');
        opt.value = element.value
        opt.text = element.label
        select.appendChild(opt)
      }
    })
  }
  return select;
}

let container = document.querySelector('.container');
container.append(makeList(arr2));
