//Variable
const userBtn = document.querySelector(".user-nav")
const articleContainer = document.querySelector(".container-body")
const searchInput = document.querySelector(".search-input")
let articlesList = []
fetch('https://674c31e354e1fca9290be25f.mockapi.io/Articles', {
    method: 'GET',
    headers: { 'content-type': 'application/json' },
}).then(res => {
    if (!res.ok) {
        throw new Error('Network response was not ok');
    }
    return res.json();
    // handle error
}).then((articles) => {
    //update articlesList
    articlesList = articles
    // Do something with the list of tasks
    renderFunc(articles)
}).catch(error => {
    // handle error
})
//Render
function renderFunc(articles) {
    articleContainer.innerHTML = ""
    for (let i = 0; i < articles.length; i++) {
        const articleId = articles[i].id
        const articleElement = document.createElement("div")
        if (articleId / 2 == 0.5 || articleId % 2 == 1) {
            articleElement.innerHTML = `
            <div class="article-container row">
                <div class="col-8">
                    <div class="title-container-left">
                        <h2>${articles[i].title}</h2>
                        <h4>${articles[i].problem}</h4>
                            <p class="branch-1">${articles[i].branch1}</p>
                            <p class="branch-2">${articles[i].branch2}</p>
                            <p class="branch-3">${articles[i].branch3}</p>
                    </div>
                </div>
                <div class="col-4">
                    <img src=${articles[i].image}>
                </div>
            </div>
            <div class="space"></div>
        `
            articleContainer.appendChild(articleElement)
        } else if (articleId % 2 == 0) {
            articleElement.innerHTML = `
            <div class="articles-container row">
                <div class="col-4">
                    <img src=${articles[i].image}>
                </div>
                <div class="col-8">
                    <div class="title-container-right">
                        <h2>${articles[i].title}</h2>
                        <h4>${articles[i].problem}</h4>
                            <p class="branch-1">${articles[i].branch1}</p>
                            <p class="branch-2">${articles[i].branch2}</p>
                            <p class="branch-3">${articles[i].branch3}</p>
                    </div>
                </div>
            <div></div>
                    <div class="space"></div>
        `
            articleContainer.appendChild(articleElement)
        }

    }
}
//Search
function searchFunc() {
    const searchValue = searchInput.value.toLowerCase()
    const articleFilter = articlesList.filter(function (article) {
        return article.title.toLowerCase().includes(searchValue);
    })
    renderFunc(articleFilter)
}

//Button
userBtn.addEventListener("click", function () {
    window.location.href = "../user/user.html";
})


