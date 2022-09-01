const loadQuotes = () => {
  fetch("https://api.kanye.rest")
    .then((res) => res.json())
    .then((quotes) => displayQuote(quotes));
};

const displayQuote = (quote) => {
  console.log(quote);
  const blockQuote = document.getElementById("quote");
  blockQuote.innerText = quote.quote;
};
