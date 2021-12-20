async function getData (page = 1) {
  const response = await fetch(`https://gorest.co.in/public-api/posts?page=${page}`)
  const data = await response.json()
  creatArticles(data)
}
getData()
async function creatArticles(data) {
  console.log(data);
  const body = document.querySelector('.container')
  body.innerHTML = '<h1 class="display-3 pb-2">Список статей</h1>'

  const articlesList = document.createElement('ul')
  articlesList.classList.add('list-group')
  body.append(articlesList)
  data.data.forEach(el => {
    articlesList.insertAdjacentHTML('beforeEnd',
      `<li class="list-group-item">
                <a href="https://gorest.co.in/public-api/posts?page=${el.id}">${el.title}</a>
            </li>`
    );
  })

  const pagination = document.createElement('nav')
  pagination.classList.add('pt-5', 'd-flex', 'justify-content-center')
  pagination.setAttribute('aria-label', 'Page navigation example')
  body.append(pagination)

  const paginationList = document.createElement('ul')
  paginationList.classList.add('pagination')
  pagination.append(paginationList)
  const numberPages = data.meta.pagination.pages
  const activePages = data.meta.pagination.page

  for (let i = activePages - 5 < 0 ? 1 : activePages - 5; i <= (activePages + 5 > numberPages ? numberPages : activePages + 5); i++) {

    paginationList.insertAdjacentHTML('beforeEnd',
      `<li class="page-item ${activePages === i && 'active'}"><button class="page-link" onclick="getData(${i})">${i}</button></li>`
    );
  }
}
