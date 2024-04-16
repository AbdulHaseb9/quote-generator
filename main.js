var api = "https://api.quotable.io/random?maxLength=85";
var quote = document.getElementById("quote");
var author = document.getElementById("author");

const getquote = async () => {
  const fetchapi = await fetch(api);
  const resp = await fetchapi.json();
  quote.innerText = resp.content;
  author.innerText = `---${resp.author}`;
};

getquote();

// This function speak quote
const speak = () => {
  const synth = window.speechSynthesis;
  const voice = new SpeechSynthesisUtterance(quote.innerHTML);
  synth.speak(voice);
};

// this function share Tweet on twitter
const tweet = () => {
  window.open(
    `https://twitter.com/intent/tweet?text=${quote.innerText}`,
    "Tweet Window",
    "width=600 , height=300"
  );
};

// this function copy quote
function copytext() {
  // Create a range object
  const range = document.createRange();
  // Select the text inside the quote element
  range.selectNodeContents(quote);

  // Remove any existing selection
  window.getSelection().removeAllRanges();
  // Add the new range to the selection
  window.getSelection().addRange(range);

  try {
    // Execute the copy command
    document.execCommand("copy");
    console.log("Text copied to clipboard!");
  } catch (err) {
    console.error("Failed to copy text to clipboard:", err);
  }

  // Clear the selection
  window.getSelection().removeAllRanges();
}
