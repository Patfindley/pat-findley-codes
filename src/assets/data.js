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
    description: `Quarter 1 group project`,
    thumbnail: idea_thumb,
    gif: "https://media.giphy.com/media/uEnDw0eZALQEuoM5kz/giphy.gif",
    body: `Every developer has more ideas than time. As David Allen likes to say "the human brain is for creating ideas, not remembering them." In this project, my group built one of our first applications to record and archive ideas (good and bad alike).
    Throughout the project, one of our focuses was on providing a fluid and responsive client-side interface. To this end, we relied on JavaScript to implement snappy filtering in the browser, and localStorage to persist our wonderful ideas between sessions.`,
    technology:['JavaScript', 'HTML', 'CSS'],
    gitHub: 'https://github.com/Patfindley/ideabox-boilerplate',
    deploy: '',
    tags:['JS', 'vanilla JS', 'JavaScript', 'html', 'html5', 'css', 'idea', 'ideaBox', 'box', 'project', 'mod 1', 'group']
  },
  {
    name: "Fitbit data mngmnt",
    id: 11,
    date: '4/06/21',
    description: "Quarter 2 Paired Project",
    thumbnail: fitLit_thumb,
    gif: "https://media.giphy.com/media/mEvg9wL0dMJEXZiDUa/giphy.gif",
    body: `This was a Trojan horse of a project, approaching this involved planning a UI to effectively display a user's tracked fitness information. After digging in we quickly realized this data was a mess, and the array algorithm challenges came pouring out. The "FitLit" project turned out to be an effective practice in managing and organizing double datasets, and less flashy progress ring animations than I had originally hoped for. `,
    technology:['JavaScript', 'HTML', 'CSS'],
    gitHub: 'https://github.com/battan40/fit-for-life',
    deploy: '',
    tags:['JavaScript', 'vanilla javascript', 'js', 'HTML', 'CSS', 'gotcha']
  },
  {
    name: "Refactor Nightmare",
    id: 12,
    date: '4/20/21',
    description: "Quarter 2 Group project",
    thumbnail: refactor_thumb,
    gif: "https://github.com/AndieDrew/refactorTractor/blob/main/docs/fav_todo.gif?raw=true", 
    body: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
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
    body: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
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
    body: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
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
    body: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    technology:['JavaScript', 'HTML', 'CSS', 'React', 'React-Router', 'GSAP', 'Styled Components'],
    gitHub: 'https://github.com/Patfindley/Dimension-34.5N',
    deploy: '',
    tags:['JS', 'JavaScript', 'React', 'html', 'css', 'API', 'html5', 'Rick and Morty', 'Rick & Morty', 'silly', 'gsap', 'wubba lubba dub dub', 'animation', 'solo', 'git', 'github']
  }
];


export const shortAboutMe = {
  id: 0,
  body: `<p className='aside-about-me'>Hey! I'm <a href='/about'>Pat Findley</a>, <br/> 
    Im currently a student at <a href="https://turing.io/"> Turing School of Software and Design</a>. <br/>
    <br/>
    I like to consider myself a <br/>
    "creator of non-tangible things".<br> 
    Click around to see what I've been building, breaking, and re-building!`
}

