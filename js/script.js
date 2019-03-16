
//The quotes and their properties that will show up on the webpage
var backGroundColor = [ 'red', 'blue', 'yellow', 'purple', 'black'];
var quotes = [
  {
    quote: "I don't care about wars, I wish all people in world become friends",
    source: "Some guy I met on the side of the road",
    citation: "Vietnam",
    year: "2019",
    category: ", Food for Thought"
  },
  {
    quote: "Bran thought about it. 'Can a man still be brave if he's afraid?' 'That is the only time a man can be brave,' his father told him.",
    source: 'George RR Martin',
    category: ', Courage'
  },
  {
    quote: "Whatever comes, don’t push it away. When it goes, do not grieve.",
    source: 'Mooji',
    category: ', Courage'
  },
  {
    quote: "Life begins where fear ends.",
    source: 'Osho',
    category: ', Curiosity'
  },
  {
    quote: "Live as if you were to die tomorrow. Learn as if you were to live forever.",
    source: 'Ghandi',
    category: ', Courage'
  }
];

//This function will get the random number assigned to each quote, which is how printQuote() will know what to display.
function getRandomQuote() {
  var randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
};
//this function will assign the random color for printQuote to display
function getRandomColor() {
  var randomColor = Math.floor(Math.random()* backGroundColor.length);
  return backGroundColor[randomColor];
}




//This function will run when the button is clicked, causing the new quotes and properties to show on the page, depending on the number chosen by getRandomQuote() and getRandomColor.
function printQuote() {
  var results = getRandomQuote();
  var theHTML = '<p class="quote">' + results.quote + '</p>' +
                '<p class="source">' + results.source;
                if (results.citation !== undefined) {
                theHTML += '<span class="citation">' + results.citation + '</span>';
                } if (results.year !== undefined) {
                theHTML += '<span class="year">' + results.year + '</span>';
              } if (results.category !== undefined) {
                theHTML += '<span class="category">' + results.category + '</span>';
              }
                theHTML += '</p>'
document.getElementById('quote-box').innerHTML = theHTML;
document.body.style.backgroundColor = getRandomColor();
};
setTimeout(printQuote(), 200);




document.getElementById('loadQuote').addEventListener("click", printQuote, false);

printQuote();
// Put printQuote() here so that it would show my quote rather than the default one :)
