// news api key = 717102b601a1474290e0afc6973c60a0

// headlines endpoint: /v2/top-headlines
// everything endpoint: /v2/everything
const apiKey = '717102b601a1474290e0afc6973c60a0';
const main = document.querySelector('main');
const sources = document.querySelector('#sources');
const defaultSource = 'the-washington-post';

window.addEventListener('load', async e => {
    updateNews();
    await updateSources();

    sources.value = defaultSource;

    sources.addEventListener('change', e => {
        updateNews(e.target.value);
    })
});

async function updateNews(source = defaultSource) {
    const newsUrl = `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`;
    const resp = await fetch(newsUrl);
    const json = await resp.json();

    main.innerHTML = json.articles.map(createArticle).join('\n');
}

async function updateSources() {
    const sourcesUrl = `https://newsapi.org/v2/sources?apiKey=${apiKey}`;
    const resp = await fetch(sourcesUrl);
    const json = await resp.json();

    sources.innerHTML = json.sources.map(source => `<option value="${source.id}">${source.name}</option>`).join('\n');
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