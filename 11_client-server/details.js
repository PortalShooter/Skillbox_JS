getDetailData()

async function getDetailData() {
  const id = window.location.search.slice(6)
  const response = await fetch(`https://gorest.co.in/public-api/posts/${id}`)
  const data = await response.json()
  const comments = await getComments(data.id)
  console.log('comments', comments);
  createPage(data.data, comments)
}

async function getComments(id) {
  const response = await fetch(`https://gorest.co.in/public-api/comments?post_id=${id}`)
  return await response.json()
}

function createPage(data, comments) {
  const body = document.querySelector('.container')

  const h1 = document.createElement('h1')
  h1.textContent = data.title
  body.append(h1)

  const p = document.createElement('p')
  p.textContent = data.body
  body.append(p)

  const commentsTitle = document.createElement('h2')
  commentsTitle.textContent = 'Комментарии';
  body.append(commentsTitle)

  const commentsList = document.createElement('ul')
  commentsList.classList.add('pagination')
  body.append(commentsList)


  comments.data.forEach((item) => {
    commentsList.insertAdjacentHTML('beforeEnd',
    `<li class="page-item">
           <p class="comment__name">
                Имя: ${item.name}
           </p>
           <p class="comment__email">
                Email: ${item.email}
           </p>
           <p class="comment__body">
                ${item.body}
           </p>
        </li>`
    );
  })



}



