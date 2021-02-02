'use strict'
let input = document.createElement('input');
let h2 = document.createElement('h2');

let task2 = document.querySelector('.task-2')

task2.append(input)
task2.append(h2)





let h2js = document.querySelector('.h2js')
let inputjs = document.querySelector('.inputjs')

function assign() {
  setTimeout(console.log('timer'), 2000)
}

let btn = document.querySelector('.btn')
btn.addEventListener('click', assign)
