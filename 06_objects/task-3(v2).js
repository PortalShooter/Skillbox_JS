'use strict'

let arr1 = [
  24,
  3,
  'JJJJ',
  { value: 0, label: "Первый элемент"},
  { value: 1, label: "Второй элемент"},
  { value: 2, label: "Третий элемент"}]

let arr2 = {
  value1: "Первое значение",
  value2: "Второе значение",
  value3: "Третье значение",
}

function makeList(arr){
  let select = document.createElement('select');
  check(arr)
  function check(arr){
    if(Array.isArray(arr)){
      arr.forEach(element => {
        let opt = document.createElement('option')
        if(typeof(element)  === 'object'){
          opt.value = element;
          opt.text = element.label;
        } else (opt.text = element)
        select.appendChild(opt)
      })
    }
    else if(typeof(arr) === 'object'){
      for(let value in arr){
        let opt = document.createElement('option')
        let text = arr[value]
        opt.value = value;
        opt.text = text;
        select.appendChild(opt)
      }
    } else (opt.text = arr)
  }

  return select;
}

let container = document.querySelector('.container');
container.append(makeList(arr2))



