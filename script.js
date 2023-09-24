const RANDOM_QUOTE_API_URL = "http://api.quotable.io/random";

function getRandomQuote() {
    return fetch (RANDOM_QUOTE_API_URL)
    .then(response => response.json())
    .then(data => data.content)
}