getDetailData()

async function getDetailData() {
  const id = window.location.search.slice(6)
  const response = await fetch(`https://gorest.co.in/public-api/posts/${id}`)
  const data = await response.json()
  console.log(data);
  createPage(data.data)
}

async function getComments(id) {
  const response = await fetch(`https://gorest.co.in/public-api/comments?post_id=${id}`)
  return await response.json()
}

function createPage(data) {
  const body = document.querySelector('.container')

  const h1 = document.createElement('h1')
  h1.textContent = data.title
  body.append(h1)

  const p = document.createElement('p')
  p.textContent = data.body
  body.append(p)

  const comments = getComments(data.id)

}



