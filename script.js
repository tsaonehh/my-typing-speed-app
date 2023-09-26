const RANDOM_QUOTE_API_URL = 'http://api.quotable.io/random'
const quoteDisplayElement = document.getElementById('quoteDisplay')

function getRandomQuote() {
    return fetch (RANDOM_QUOTE_API_URL)
    .then(response => response.json())
    .then(data => data.content)
}

async function renderNextQuote(){
    const quote = await getRandomQuote()
    quoteDisplayElement.innerText = quote
}

renderNextQuote()