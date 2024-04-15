api = "https://api.quotable.io/random?maxLength=85";
var quote = document.getElementById("quote");
var author = document.getElementById("author");

const getquote = async () => {
  const fetchapi = await fetch(api);
  const resp = await fetchapi.json();
  quote.innerText = resp.content;
  author.innerText = `---${resp.author}`;
  console.log(resp);
};

getquote();
