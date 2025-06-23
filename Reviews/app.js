// local reviews data
const reviews = [
  {
    id: 1,
    name: 'Harry Potter',
    job: 'The Boy Who Lived',
    img: 'https://hips.hearstapps.com/hmg-prod/images/hp_cropped_gettyimages-113941726.jpg?resize=980:*',
    text: "I don't go looking for trouble. Trouble usually finds me. You're the weak one. And you'll never know love, or friendship. And I feel sorry for you.",
  },
  {
    id: 2,
    name: 'Hermione Granger',
    job: 'The Intelligent One',
    img: 'https://contentful.harrypotter.com/usf1vwtuqyxm/4tNCXEveHBZWp1AgccZg52/39c30ab4bc67842362b78ca5ab8e0eef/HP-F4-goblet-of-fire-hermione-great-hall-smiling-book-web-landscape?w=1200&fit=fill&f=top',
    text: "It's LeviOsa, not LevioSA! Books! And cleverness! There are more important things — friendship and bravery.",
  },
  {
    id: 3,
    name: 'Ron Weasley',
    job: 'The Chess Master & a Weasley',
    img: 'https://artinsights.com/wp-content/uploads/2013/11/20121107103325.jpg',
    text: "Don't let him in, he's trying to get us killed! Why spiders? Why couldn't it be 'follow the butterflies'?",
  },
  {
    id: 4,
    name: 'Albus Dumbledore',
    job: 'The Headmaster',
    img: 'https://contentful.harrypotter.com/usf1vwtuqyxm/5ocauY6zAsqGiIgeECw06e/72cc7d0b0652fff896544082c89a3752/AlbusDumbledore_WB_F1_DumbledoreSmiling_Still_080615_Port.jpg',
    text: 'Happiness can be found, even in the darkest of times, if one only remembers to turn on the light.',
  },
];
// select items
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener('DOMContentLoaded', function () {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
});

// show person based on item
function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}
// show next person
nextBtn.addEventListener('click', function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});
// show prev person
prevBtn.addEventListener('click', function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});
// show random person
randomBtn.addEventListener('click', function () {
  console.log('hello');

  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
});
