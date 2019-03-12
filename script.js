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
    source: "999",
    citation: "888",
    year: "777"
  },
  {
    quote: "Bran thought about it. 'Can a man still be brave if he's afraid?' 'That is the only time a man can be brave,' his father told him.",
    source: 'George RR Martin',
    // Entering false for citation and year properties for the if statement down below
    citation: false,
    year: false
  },
  {
    quote: "Whatever comes, don’t push it away. When it goes, do not grieve.",
    source: 'Mooji',
    citation: false,
    year: false
  },
  {
    quote: "Life begins where fear ends.",
    source: 'Osho',
    citation: false,
    year: false
  },
  {
    quote: "Live as if you were to die tomorrow. Learn as if you were to live forever.",
    source: 'Ghandi',
    citation: false,
    year: false
  }
];



/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number
   - Cse the random number to `return` a random quote object from the `quotes` array.
***/

var randomNumber;
var selectedQuote;
var selectedSource;
var selectedCitation;
var selectedYear;

function getRandomQuote() {
  randomNumber = Math.floor(Math.random() * 5);
  selectedQuote = quotes[0 * randomNumber].quote;
  selectedSource = quotes[0 * randomNumber].source;
  selectedCitation = quotes[0 * randomNumber].citation;
  selectedYear = quotes[0 * randomNumber].year;
  return selectedQuote, selectedSource, selectedCitation, selectedYear;
};



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
  if (selectedCitation === false) {
    selectedCitation.style.display = "none";
  }
  if (selectedYear === false) {
    selectedYear.style.display = "none";
  }
  var theHTML = results;
                '<p class="quote">' + selectedQuote + '</p>'
                '<p class="source">' + selectedSource +
                '<span class="citation">' + selectedCitation + '</span>'
                '<span class="year">' + selectedYear + '</span>' +
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
