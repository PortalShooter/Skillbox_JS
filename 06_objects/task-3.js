'use strict'
let array = [
  { value: 0, label: "Первый элемент"},
  { value: 1, label: "Второй элемент"},
  { value: 2, label: "Третий элемент"}
  ];

let arr2 = [24, 3, 'JJJJ',{ value: 0, label: "Первый элемент"},
{ value: 1, label: "Второй элемент"},
{ value: 2, label: "Третий элемент"}]

let arr3 = {
  value1: "Первое значение",
  value2: "Второе значение",
  value3: "Третье значение",
}
function makeList(arr){

  let select = document.createElement('select');

  function createOption(i){
    let opt = document.createElement('option')
    if(typeof(i) == 'number' || typeof(i) == 'string'){
      opt.text = i;
    } else if(typeof i === "object"){
      opt.value = i;
      opt.text = i.label;
    }
    select.appendChild(opt)
  }
  if(Array.isArray(arr)){
    arr.forEach(element => {
      if(typeof(element) == 'number' || typeof(element) == 'string') {
        createOption(element)
      } else {
        createOption(element)
      }
    })
  }
  else if((typeof element === "object")){
    arr.forEach(element => {
      let opt = document.createElement('option');
      opt.value = element.value
      opt.text = element.label

      select.appendChild(opt)
    })
  }
  return select;
}

let container = document.querySelector('.container');
container.append(makeList(arr2));
container.append(makeList(arr3))


