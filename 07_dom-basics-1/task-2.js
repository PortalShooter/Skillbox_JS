'use strict'
let input = document.createElement('input');
let h2 = document.createElement('h2');

let task2 = document.querySelector('.task-2')

task2.append(input)
task2.append(h2)

let timeout = setTimeout(assign, 5000)

function textOutput() {
  let momentValue = input.value

  setInterval(check, 1000)
  function check() {
    if(momentValue != input.value){
      momentValue = input.value;
      clearTimeout(timeout.timeoutID)
    }
  }
}
function assign() {
  h2.textContent = input.value;
  console.log('123')
}
textOutput()
