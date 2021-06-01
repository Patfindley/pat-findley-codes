import idea_thumb from './assets/idea_thumb.gif'
import fitLit_thumb from './assets/fitLit_thumb.gif'
import whereTo_thumb from './assets/whereTo_thumb.gif'
import rancid_thumb from './assets/rancid_thumb.gif'
import refactor_thumb from './assets/refactor_thumb.gif'

const projectsData = [
  {
    name: "Idea Box",
    id: 10,
    date:'3/02/21',
    description: `"Idea Box" quarter 1 group project`,
    thumbnail: idea_thumb,
    gif: "https://media.giphy.com/media/uEnDw0eZALQEuoM5kz/giphy.gif",
    body: `<h3 class='project-title'> Idea Box</h3>
    <p class='post-body'><a href="https://github.com/Patfindley/ideabox-boilerplate">Idea Box</a>
    was a project given on week four of Turing, it was my third
    project in learning HTML, vanilla JS, and CSS, and worth mentioning, my second group project.
    The learning goals for this mostly revolved around getting JavaScript to work cohesively with
    HTML & CSS, while dipping our toes into JSON via local storage. We were given a comp, so that
    took some stress off of layout, but also being so new to HTML & CSS, put a lot of stress on
    layout. I think my most valuable take away from this though, was group dynamic. Planning and executing
    something solo is a completely different animal than paired and group programming.</p>`,
    tags:['JS', 'vanilla JS', 'JavaScript', 'html', 'html5', 'css', 'idea', 'ideaBox', 'box', 'project', 'mod 1', 'group']
  },
  {
    name: "Fitbit data mngmnt",
    id: 11,
    date: '4/06/21',
    description: "Paired project number 2",
    thumbnail: fitLit_thumb,
    gif: "https://media.giphy.com/media/mEvg9wL0dMJEXZiDUa/giphy.gif",
    body: "FitLit Body",
    tags:['shit']
  },
  {
    name: "Refactor Nightmare",
    id: 12,
    date: '4/20/21',
    description: "Group project number 3",
    thumbnail: refactor_thumb,
    gif: "https://github.com/AndieDrew/refactorTractor/blob/main/docs/fav_todo.gif?raw=true",
    body: "Refactor Body",
    tags:[]
  },
  {
    name: "Vacation Booker",
    id: 13,
    date: '4/27/21',
    description: "Qaurter 2 final project..",
    thumbnail: whereTo_thumb,
    gif: "https://media.giphy.com/media/LqOLXnOW9qLbR8nFFT/giphy.gif",
    body: "Travel Tracker Body",
    tags:[]
  },
  {
    name: "Movie Browser",
    id: 14,
    date: '5/24/21',
    description: "web application that utilizes API data to display movies for a user to browse through",
    thumbnail: rancid_thumb,
    gif: "https://user-images.githubusercontent.com/71860165/119421000-ecefa780-bcba-11eb-910e-f86ac8608b8a.gif",
    body: "Rancid Tomatillos is a web application that utilizes API data to display movies for a user to browse through",
    tags:['JS', 'JavaScript', 'React', 'html', 'css', 'API', 'html5', 'rancid tomatillos', 'imdb', 'rotten tomatoes', 'movie', 'paired', 'group', 'git', 'github']
  }
];


export default projectsData;
