import idea_thumb from './idea_thumb.gif'
import fitLit_thumb from './fitLit_thumb.gif'
import whereTo_thumb from './whereTo_thumb.gif'
import rancid_thumb from './rancid_thumb.gif'
import refactor_thumb from './refactor_thumb.gif'
import synth_thumb from './synth.jpeg'
import rick_mort_thumb from './rick_mort_thumb.gif'

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
    technology:['JavaScript', 'HTML', 'CSS', 'React', 'React-Router'],
    gitHub: 'https://github.com/bhohnco/Rancid-Tomatillos',
    deploy: '',
    tags:['JS', 'JavaScript', 'React', 'html', 'css', 'API', 'html5', 'rancid tomatillos', 'imdb', 'rotten tomatoes', 'movie', 'paired', 'group', 'git', 'github']
  }, 
  {
    name: "Poly Synth",
    id: 15,
    date: '6/8/21',
    description: "interactive Web-based synthesizer in a 3-d environment",
    thumbnail: synth_thumb,
    gif: "https://github.com/Patfindley/codename-dolphin/raw/main/src/assets/synth_main.gif",
    body: "This interactive application is both an auditory and visual experience that was created by utilizing the Web Audio API in tandem with various animation technologies. You can control your perspective within the 3D environment, and also manipulate audio by playing the in-app synthesizer with either clicks or the keyboard. Tweak the sounds to your liking by using the on-screen effects; these interactions have also been paired up with multiple visualizations for instant feedback.",
    technology:['JavaScript', 'HTML', 'CSS', 'React', 'React-Router', 'GSAP', 'WebGL', 'Styled Components', 'Web Audio API', 'Tone.js'],
    gitHub: 'https://github.com/Patfindley/codename-dolphin',
    deploy: 'http://bright-bucket.surge.sh/',
    tags:['JS', 'JavaScript', 'React', 'html', 'css', 'API', 'html5', 'Codename Dolphin', 'Poly Synth', 'music', 'gsap', 'webgl', '3d', 'group', 'git', 'github']
  },
  {
    name: "Rick and Morty",
    id: 16,
    date: '6/14/21',
    description: "sort and filter through Rick and Morty characters, episodes, and locations with some visual bells and whistles",
    thumbnail: rick_mort_thumb,
    gif: "https://camo.githubusercontent.com/56c22cd8e3d47ca9ba37b8c962faa58c854b6716d5031fde007239799d3ba32a/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f366b51634c4730647545754e59654b5652782f67697068792e676966",
    body: "",
    technology:['JavaScript', 'HTML', 'CSS', 'React', 'React-Router', 'GSAP', 'Styled Components'],
    gitHub: 'https://github.com/Patfindley/Dimension-34.5N',
    deploy: '',
    tags:['JS', 'JavaScript', 'React', 'html', 'css', 'API', 'html5', 'Rick and Morty', 'Rick & Morty', 'silly', 'gsap', 'wubba lubba dub dub', 'animation', 'solo', 'git', 'github']
  }
];


export const shortAboutMe = {
  id: 0,
  body: `<p>Hey! Im <a href='/about'>Pat Findley</a>, <br/> 
    Im currently a student at <a href="https://turing.io/"> Turing School of Software and Design</a>. <br/>
    I like to consider myself a "creator of non-tangible things", and my goal for my little nook of the internet is to creatively apply what I\'m currently learning, have fun, and grow a little through experience!</p>`
}

