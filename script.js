// @@@@@@@@@@@@@@@@@@@@@@@@@@ Manipulating-the-DOM.indexJS @@@@@@@@@@@@@@@@@@@@@@@@@@

let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  //@@@@@@@@@@@@@ Doing all of your work inside the document.addEventListener @@@@@@@@@@@@@

  //@@@@@@@@@@@@@ Part 1
mainTitle = document.getElementById('main-title');
mainTitle.textContent = 'Dom Toretto Homepage';

  //@@@@@@@@@@@@@ Part 2
const body = document.querySelector('body');
body.style.backgroundColor = ('orange');


  //@@@@@@@@@@@@@ Part 3
favThings = document.getElementById('favorite-things');
favThings.lastElementChild.remove('lastElementChild');
console.log(favThings);

  //@@@@@@@@@@@@@ Part 4
specialTitle = document.querySelectorAll('.special-title');
console.log(specialTitle);
specialTitle.forEach(title => {
  title.style.fontSize = '2rem';
});

  //@@@@@@@@@@@@@ Part 5
const pastRaces = document.getElementById('past-races');
console.log(pastRaces);
// pastRaces.lastElementChild.previousElementSibling.previousElementSibling.remove();
pastRaces.children[3].remove();

  //@@@@@@@@@@@@@ Part 6
const li = document.createElement('li');
li.textContent = 'Africa';
console.log(li);
pastRaces.appendChild(li);

  //@@@@@@@@@@@@@ Part 7
const africaDiv = document.createElement('div');
africaDiv.className = ('blog-post');
const africaHeader = document.createElement('h1');
africaHeader.textContent = 'Welcome to Africa';

const africaPara = document.createElement('p');

africaPara.textContent = 'Welcome to Africa, the city of big engines cars are very much love and the races are taking root. Enjoy yourself, but be careful. WARNING! Still respect the cultures';
africaDiv.append(africaHeader);
africaDiv.append(africaPara);
console.log(africaDiv);
console.log(africaHeader);
console.log(africaPara);
main = document.getElementsByClassName('main')[0];

main.append(africaDiv);

  //@@@@@@@@@@@@@ Part 8
const quoteTitle = document.getElementById('quote-title');
quoteTitle.addEventListener('click', randomQuote);

  //@@@@@@@@@@@@@ Part 9
const blogPost = document.querySelectorAll('.blog-post');
console.log(blogPost);
blogPost.forEach(div => {
  div.addEventListener('mouseout', function(event){
    event.target.classList.toggle('purple');
  } )
  div.addEventListener('mouseenter', function(event){
    event.target.classList.toggle('red');
})


});
})