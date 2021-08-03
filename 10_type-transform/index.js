'use strict'
let students = [
  {
    name: 'Илья',
    surname: 'Куцевалов',
    patronymic: 'Андреевич',
    dob: new Date(1999, 11, 25),
    dateOfLearning: new Date(2017),
    faculty: 'Машинное обучение',
  },
  {
    name: 'Анна',
    surname: 'Сорокина',
    patronymic: 'Александровна',
    dob: new Date(2001, 0, 6),
    dateOfLearning: new Date(2019),
    faculty: 'Прикладная информатика',
  },
  {
    name: 'Даниил',
    surname: 'Власенко',
    patronymic: 'Алексеевич',
    dob: new Date(1999, 5, 14),
    dateOfLearning: new Date(2017),
    faculty: 'История',
  },
  {
    name: 'Кирилл',
    surname: 'Ясониди',
    patronymic: 'Олегович',
    dob: new Date(1999, 3, 20),
    dateOfLearning: new Date(2015),
    faculty: 'Логистика',
  },
  {
    name: 'Дмитрий',
    surname: 'Сариев',
    patronymic: 'Алексеевич',
    dob: new Date(1999, 8, 6),
    dateOfLearning: new Date(2020),
    faculty: 'Энергетика',
  },
];

function createTable() {
  const table = document.createElement('table')
  table.classList.add('table')
  document.body.append(table)
  createTitle()
  createRow()

  function createTitle() {
    const title = document.createElement('caption')
    title.textContent = 'Список студентов';
    table.append(title)
  }

  function createRow() {
    const row = document.createElement('tr')
    table.append(row)
    createColumn(row)

    function createColumn() {
      for(let i = 0; i < 4; i++) {
        const column = document.createElement('td')
        column.textContent = 
        row.append(column)
      }
    }
  }
  

}

createTable()



