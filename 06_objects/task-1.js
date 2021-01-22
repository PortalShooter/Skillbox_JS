'use strict'
let fullName = [
  { name: 'Василий', surname: 'Васильев' },
  { name: 'Иван', surname: 'Иванов' },
  { name: 'Пётр', surname: 'Петров' }
  ];

function search(array, key, value){
  for(let obj of array){
    if(obj[key] == value){
      console.log(obj)
    }
  }
}
search(fullName, 'surname', 'Иванов')
