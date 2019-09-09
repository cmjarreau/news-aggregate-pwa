// news api key = 717102b601a1474290e0afc6973c60a0

// headlines endpoint: /v2/top-headlines
// everything endpoint: /v2/everything
const apiKey = '717102b601a1474290e0afc6973c60a0';
const main = document.querySelector('main');

window.addEventListener('load', e => {
    updateNews();
    // updateSources();
});

async function updateNews() {
    const newsUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
    const resp = await fetch(newsUrl);
    const json = await resp.json();

    main.innerHTML = json.articles.map(createArticle).join('\n');
}

function createArticle(article) {
    return `
        <div class="article">
            <a href="${article.url}">
                <h2>${article.title}</h2>
                <img src="${article.urlToImage}"/>
                <p>${article.description}</p>
            </a>
        </div>
    `;
}