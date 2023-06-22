const quotes = [
  {
    quote:
      "Carry out a random act of kindness, with no expectation of reward, safe in the knowledge that one day someone might do the same for you.",
    author: "-Princess Diana",
  },
  {
    quote: "I believe life is an intelligent thing: that things aren't random.",
    author: "-Steve Jobs",
  },
  {
    quote:
      "Self-control means wanting to be effective at some random point in the infinite radiations of my spiritual existence.",
    author: "-Franz Kafka",
  },
  {
    quote:
      "In all natural disasters through time, man needs to attach meaning to tragedy, no matter how random and inexplicable the event is.",
    author: "-Nathaniel Philbrick",
  },
  {
    quote:
      "There should be a law that no ordinary newspaper should be allowed to write about art. The harm they do by their foolish and random writing it would be impossible to overestimate - not to the artist, but to the public, blinding them to all but harming the artist not at all.",
    author: "Oscar Wilde",
  },
  {
    quote:
      "I was taught over and over again that the accumulation of random mutations led to evolutionary change - led to new species. I believed it until I looked for evidence.",
    author: "-Lynn Margulis",
  },
];

function generateQuote() {
  const random = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[random];

  const quoteElement = document.getElementById("quote");
  const authorElement = document.getElementById("author");
  quoteElement.textContent = randomQuote.quote;
  authorElement.textContent = randomQuote.author;
}

const generateButton = document.getElementById("generate");
generateButton.addEventListener("click", generateQuote);

generateQuote();
