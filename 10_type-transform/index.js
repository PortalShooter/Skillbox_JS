'use strict'
let students = [
  {
    name: 'Илья',
    surname: 'Куцевалов',
    patronymic: 'Андреевич',
    dob: new Date(1999, 11, 25),
    dateOfLearning: 2017,
    faculty: 'Машинное обучение',
  },
  {
    name: 'Анна',
    surname: 'Сорокина',
    patronymic: 'Александровна',
    dob: new Date(2001, 0, 6),
    dateOfLearning: 2019,
    faculty: 'Прикладная информатика',
  },
  {
    name: 'Даниил',
    surname: 'Власенко',
    patronymic: 'Алексеевич',
    dob: new Date(1976, 5, 14),
    dateOfLearning: 2017,
    faculty: 'История',
  },
  {
    name: 'Кирилл',
    surname: 'Ясониди',
    patronymic: 'Олегович',
    dob: new Date(1997, 3, 20),
    dateOfLearning: 2015,
    faculty: 'Логистика',
  },
  {
    name: 'Дмитрий',
    surname: 'Сариев',
    patronymic: 'Алексеевич',
    dob: new Date(1985, 8, 6),
    dateOfLearning: 2020,
    faculty: 'Энергетика',
  },
];

function createTable() {
  const table = document.createElement('table')
  table.classList.add('table')
  document.body.append(table)
  createTitle()
  createRow('search')
  createRow('header')
  students.forEach(student => {
    createRow(student)
  })

  function createTitle() {
    const title = document.createElement('caption')
    title.textContent = 'Список студентов';
    title.classList.add('title')
    table.append(title)
  }

  function createRow(student) {
    const row = document.createElement('tr')
    table.append(row)
    createColumn(row, student)

    function createColumn(row, student) {
      for (let i = 0; i < 4; i++) {
        let column
        const header = ['ФИО студента', 'Факультет', 'Дата рождения', 'Годы обучения']
        if(student === 'search') {
          column = document.createElement('th')
          column.append(document.createElement('input'))
        } else if (student === 'header') {
          column = document.createElement('th')
          column.classList.add('header-column')
          column.textContent = header[i]
        }
        else {
          let startYears =  new Date().getFullYear() - student.dateOfLearning
          if(startYears > 4 || startYears == 4 && new Date().getMonth() > 8) startYears = 'Закончил'
          column = document.createElement('td')
          if(i === 0) column.textContent = `${student.surname} ${student.name} ${student.patronymic}`
          else if(i === 1) column.textContent = `${student.faculty}`
          else if(i === 2) column.textContent = `${student.dob.getDate()}.${student.dob.getMonth() + 1}.${student.dob.getFullYear()} ${new Date().getFullYear() - student.dob.getFullYear()}`
          else if(i === 3) column.textContent = `${student.dateOfLearning}-${student.dateOfLearning + 4} (${startYears})`
        }
        row.append(column)
      }
    }
  }
}

createTable()

const headerColumn = document.querySelectorAll('.header-column')
headerColumn.forEach(el => {
  el.addEventListener('click', () => {
    console.log(123);
  })
})
