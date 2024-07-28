const quotes = [
    { quote: "Life is far more complicated and beautiful than we plan.", author: "J.K. Rowling" },
    { quote: "Success is the sum of small efforts repeated day in and day out.", author: "Robert Collier" },
    { quote: "Failure is simply the opportunity to begin again, this time more intelligently.", author: "Henry Ford" },
    { quote: "Believe in yourself. You are capable of more than you know.", author: "Virginia Woolf" },
    { quote: "Never put off till tomorrow what you can do today.", author: "Benjamin Franklin" },
    { quote: "Successful people think and act differently.", author: "Steve Jobs" },
    { quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { quote: "All great achievements start with small steps.", author: "Martin Luther King Jr." },
    { quote: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { quote: "Well begun is half done.", author: "Aristotle" }
  ];
  
const quote = document.querySelector('#quote span:first-child')
const author = document.querySelector('#quote span:last-child')

const todaysQuotes = quotes[Math.floor(Math.random()*quotes.length)]
quote.innerText = todaysQuotes.quote
author.innerText = todaysQuotes.author