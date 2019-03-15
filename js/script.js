/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing

var quotes = [
  {
    quote: "I don't care about wars, I wish all people in world become friends",
    source: "Some guy I met on the side of the road",
    citation: "Vietnam",
    year: "2019"
  },
  {
    quote: "Bran thought about it. 'Can a man still be brave if he's afraid?' 'That is the only time a man can be brave,' his father told him.",
    source: 'George RR Martin'
  },
  {
    quote: "Whatever comes, don’t push it away. When it goes, do not grieve.",
    source: 'Mooji'
  },
  {
    quote: "Life begins where fear ends.",
    source: 'Osho'
  },
  {
    quote: "Live as if you were to die tomorrow. Learn as if you were to live forever.",
    source: 'Ghandi'
  }
];

function getRandomQuote() {
  //using quote.length just in case amount of quotes is modified.
  var randomNumber = Math.floor(Math.random() * quotes.length);
  //this adds the random number to the first '[]' of quotes, picking the object.
  return quotes[randomNumber];
};

console.log(getRandomQuote());





function printQuote() {
  var results = getRandomQuote();
  var theHTML = '<p class="quote">' + results.quote + '</p>' +
                '<p class="source">' + results.source;
                if (results.citation !== undefined) {
                theHTML += '<span class="citation">' + results.citation + '</span>'
                } if (results.year !== undefined) {
                theHTML += '<span class="year">' + results.year + '</span>' +
                '</p>';
                };
document.getElementById('quote-box').innerHTML = theHTML;

};


document.getElementById('loadQuote').addEventListener("click", printQuote, false);

printQuote();
// Put printQuote() here so that it would show my quote rather than the default one :)
