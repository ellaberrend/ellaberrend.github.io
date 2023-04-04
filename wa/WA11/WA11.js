const button = document.querySelector("#js-new-quote");
button.addEventListener('click', getQuote);

const copyButton = document.querySelector("#js-copy");
copyButton.addEventListener('click', copyQuote);

const endpoint = "https://ron-swanson-quotes.herokuapp.com/v2/quotes";

async function getQuote() {
  try {
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw Error(response.statusText);
    }
    const [quote] = await response.json();
    displayQuote(quote);
  } 
    catch (err) {
    console.log(err);
    alert('Failed to fetch new quote');
  }
}

function displayQuote(quote) {
  const quoteText = document.querySelector("#js-quote-text");
  quoteText.textContent = quote;
}

function copyQuote() {
  const quoteText = document.querySelector("#js-quote-text");
  const quote = quoteText.textContent;
  navigator.clipboard.writeText(quote)
    .then(() => {
      alert(`Quote copied to clipboard: ${quote}`);
    })
    .catch(err => {
      console.error('Failed to copy quote to clipboard', err);
    });
}

getQuote();
