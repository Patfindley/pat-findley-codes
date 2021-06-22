import idea_thumb from './idea_thumb.gif'
import fitLit_thumb from './fitLit_thumb.gif'
import whereTo_thumb from './whereTo_thumb.gif'
import rancid_thumb from './rancid_thumb.gif'
import refactor_thumb from './refactor_thumb.gif'
// import me_photo from './me_photo.JPG'

export const projectsData = [
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
    technology:['JavaScript', 'HTML', 'CSS'],
    gitHub: 'https://github.com/Patfindley/ideabox-boilerplate',
    deploy: '',
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
    technology:['JavaScript', 'HTML', 'CSS'],
    gitHub: 'https://github.com/battan40/fit-for-life',
    deploy: '',
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
    technology:['JavaScript', 'HTML', 'CSS'],
    gitHub: 'https://github.com/AndieDrew/refactorTractor',
    deploy: '',
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
    technology:['JavaScript', 'HTML', 'CSS', 'Sass'],
    gitHub: 'https://github.com/Patfindley/where-in-the-world',
    deploy: '',
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
    technology:['JavaScript', 'React', 'React-Router', 'HTML', 'CSS'],
    gitHub: 'https://github.com/bhohnco/Rancid-Tomatillos',
    deploy: '',
    tags:['JS', 'JavaScript', 'React', 'html', 'css', 'API', 'html5', 'rancid tomatillos', 'imdb', 'rotten tomatoes', 'movie', 'paired', 'group', 'git', 'github']
  }
];


export const shortAboutMe = {
  id: 0,
  body: '<p>Hey! Im Pat Findley, Im currently a student at <a href="https://turing.io/"> Turing School of Software and Design</a>. I like to consider myself a "creator of non-tangible things", and aspiring optimist. My goal for my little nook of the internet is to creatively apply what I\'m currently learning, have fun, and grow through experience!</p>'
}

export const aboutMe = {
  id: 1,
  body: `<div className='me-picture-container>
    <img src={me_photo} alt='alleged photo of "Pat Findley"' />
    </div>
    <p> I'm a web developer, father, husband, service industry veteran, <a href='https://herenowband.com/' target='_blank'>musician</a>, creator, doer, and (aspiring) optimist.<br>
    <br>
    When the world started shutting down in 2020, Everything I had spent the previous years building and working on came to a screeching halt.<br>
    Restaurants closed, I was out of work. I had just released an album, stocked merchandise, the tours got cancelled.<br>
    <br>
    <strong>I saw an opportunity.</strong><br>
    <br>
    I spent some time with my daughter, who was 1 at the time, and I started thinking about who I was, and what else I was capable of. <br>
    13 years in the service industry felt like enough.<br>
    I looked into web development, dipped my toes in the water with some <a href='https://www.codecademy.com/' target='_blank'>codecademy</a> courses <br>
    and found something that I never thought would fit me, but checked every box.<br>
    Deep <br>
    Creative <br>
    Collaboritive <br>
    I enrolled in <a href="https://turing.io/" target='_blank'> Turing School of Software and Design's</a> Front-End program and can't believe what I was able to learn in such a short time.

  </p>`
}
