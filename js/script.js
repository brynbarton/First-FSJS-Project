/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/***
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
***/
var randomNumber;
var selectedQuote;
var quotes = [
  {
    quote: "Don't cry because it's over, smile because it happened.",
    source: "test1",
    citation: "test2",
    year: "test3"
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



/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number
   - Cse the random number to `return` a random quote object from the `quotes` array.
***/

var randomNumber;

function getRandomQuote() {
  randomNumber = Math.floor(Math.random() * 5);
  //this adds the random number to the first '[]' of quotes, picking the object.
  return quotes[randomNumber];
};

console.log(getRandomQuote());



/***
  Create the `printQuote` function to:
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string.
***/

function printQuote() {
  var results = getRandomQuote();
  var x = document.getElementsByClassName("citation").innerHTML;
  var y = document.getElementsByClassName('year').innerHTML;
  var theHTML = '<p class="quote">' + results.quote + '</p>' +
                '<p class="source">' + results.source;
                if (x !== undefined) {
                '<span class="citation">' + results.citation + '</span>'
              } if (y !== undefined) {
                '<span class="year">' + results.year + '</span>'
              }
                '</p>';
  return theHTML;
}



document.getElementById('quote-box').innerHTML = printQuote();




/***
  When the "Show another quote" button is clicked, the event listener
  below will be triggered, and it will call, or "invoke", the `printQuote`
  function. So do not make any changes to the line of code below this
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.
