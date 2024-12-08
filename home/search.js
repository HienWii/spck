const articleContainer = document.querySelector(".container-body")
const searchInput = document.querySelector(".search-input")
let articlesList = null
fetch('https://674c31e354e1fca9290be25f.mockapi.io/Articles', {
    method: 'GET',
    headers: { 'content-type': 'application/json' },
}).then(res => {
    if (res.ok) {
        return res.json();
    }
    // handle error
}).then((articles) => {
    //update articlesList
    articlesList = articles
    // Do something with the list of tasks
    renderFunc(articles)
}).catch(error => {
    // handle error
})

function renderFunc(articles) {
    articleContainer.innerHTML = ""
    for (let i = 0; i < articles.length; i++) {
        const articleElement = document.createElement("div")
        articleElement.innerHTML = `
        <p class="title">${articles[i].title}</p>
        <img src=${articles[i].image}/>
        <p>${articles[i].createdAt}</p>
        `
        articleContainer.appendChild(articleElement)
    }
}
