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
    body: `"fitLit" was a Trojan horse of a project, approaching this involved planning a UI to effectively display a user's tracked fitness statistics, progress, as well as comparisons to friends stats. After digging in we quickly realized this data was a mess, and the array algorithm challenges came pouring out. "FitLit" project turned out to be an effective practice in managing and organizing double datasets, and less flashy progress ring animations than I had originally hoped for. `,
    technology:['JavaScript', 'HTML', 'CSS', 'Mocha', 'Chai'],
    gitHub: 'https://github.com/battan40/fit-for-life',
    deploy: '',
    tags:['JavaScript', 'vanilla javascript', 'js', 'HTML', 'CSS', 'gotcha', 'group', 'fit', 'fitlit', 'fitbit', 'fitness', 'tdd', 'mocha', 'chai']
  },
  {
    name: "Refactor Nightmare",
    id: 12,
    date: '4/20/21',
    description: "Quarter 2 Group project",
    thumbnail: refactor_thumb,
    gif: "https://github.com/AndieDrew/refactorTractor/blob/main/docs/fav_todo.gif?raw=true", 
    body: `This meal planning application presents users with a host of recipe options that they can choose to favorite and/or add to a to-do list. Users can only add a recipe to their to-do list if they have the required ingredients, then ingredients' amounts are subtracted from their pantry when doing so; conversely, removing a recipe from the to-do list replaces the ingredients' amounts in the user's pantry. The gotcha in this project was starting with local data, and switching to data fetched from an API. easy peasy until we find out the objects being fetched were all SLIGHTLY different, thus becoming a "refactor nightmare" or "refactor tractor" as Turing branded it.`,
    technology:['JavaScript', 'HTML', 'CSS', 'Mocha', 'Chai'],
    gitHub: 'https://github.com/AndieDrew/refactorTractor',
    deploy: '',
    tags:['JavaScript', 'vanilla javascript', 'js', 'HTML', 'CSS', 'group', 'gotcha', 'api', 'food', 'refactor', 'wtf', 'tdd', 'mocha', 'chai']
  },
  {
    name: "Vacation Booker",
    id: 13,
    date: '4/27/21',
    description: "Qaurter 2 final project..",
    thumbnail: whereTo_thumb,
    gif: "https://media.giphy.com/media/LqOLXnOW9qLbR8nFFT/giphy.gif",
    body: `Where To is an application designed to plan trips for users, and manage trip bookings by travel agents. Users can log in with their unique ID and password, choose a destination, trip duration, and amount of travelers before submitting a request to an agent, who can approve/deny requests. All data is fetched from multiple API's for both type of users, and posted as well.`,
    technology:['JavaScript', 'HTML', 'CSS', 'Sass', 'Mocha', 'Chai'],
    gitHub: 'https://github.com/Patfindley/where-in-the-world',
    deploy: '',
    tags:['JavaScript', 'vanilla javascript', 'js', 'HTML', 'CSS', 'solo', 'vacation planner', 'trip booker', 'tdd', 'mocha', 'chai']
  },
  {
    name: "Movie Browser",
    id: 14,
    date: '5/24/21',
    description: "web application that utilizes API data to display movies for a user to browse through",
    thumbnail: rancid_thumb,
    gif: "https://user-images.githubusercontent.com/71860165/119421000-ecefa780-bcba-11eb-910e-f86ac8608b8a.gif",
    body: `"Rancid Tomatillos" was the first of MANY react applications built in quarter 3 of Turing. The name suggests it to be a clone of "Rotten Tomatoes", but the API being fetched from was missing some key pieces of data to really solidify that feel. This project was an excellent tool to get some experience and make some mistakes while learning React, React-Router, Cypess Testing, and fetching multiple end-points to create what feels like a multi-page application.`,
    technology:['JavaScript', 'HTML', 'CSS', 'React', 'React-Router', 'Cypress'],
    gitHub: 'https://github.com/bhohnco/Rancid-Tomatillos',
    deploy: 'http://ranc-tomats.surge.sh/',
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
    technology:['JavaScript', 'HTML', 'CSS', 'React', 'React-Router', 'GSAP', 'WebGL', 'Styled Components', 'Web Audio API', 'Tone.js', 'Cypress'],
    gitHub: 'https://github.com/Patfindley/codename-dolphin',
    deploy: 'http://bright-bucket.surge.sh/',
    tags:['JS', 'JavaScript', 'React', 'html', 'css', 'API', 'html5', 'Codename Dolphin', 'Poly Synth', 'music', 'gsap', 'webgl', '3d', 'group', 'git', 'github', 'Cypress']
  },
  {
    name: "Rick and Morty",
    id: 16,
    date: '6/14/21',
    description: "Sort and filter through Rick and Morty characters, episodes, and locations with some visual bells and whistles",
    thumbnail: rick_mort_thumb,
    gif: "https://camo.githubusercontent.com/56c22cd8e3d47ca9ba37b8c962faa58c854b6716d5031fde007239799d3ba32a/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f366b51634c4730647545754e59654b5652782f67697068792e676966",
    body: `“I’ll tell you how I feel about school, Jerry: It’s a waste of time. Bunch of people runnin’ around bumpin’ into each other, got a guy up front says, ‘Two plus two,’ and the people in the back say, ‘Four.’ Then the bell rings and they give you a carton of milk and a piece of paper that says you can go take a dump or somethin’. I mean, it’s not a place for smart people, Jerry. I know that’s not a popular opinion, but that’s my two cents on the issue.” — Rick`,
    technology:['JavaScript', 'HTML', 'CSS', 'React', 'React-Router', 'GSAP', 'Styled Components', 'Cypress'],
    gitHub: 'https://github.com/Patfindley/Dimension-34.5N',
    deploy: '',
    tags:['JS', 'JavaScript', 'React', 'html', 'css', 'API', 'html5', 'Rick and Morty', 'Rick & Morty', 'silly', 'gsap', 'wubba lubba dub dub', 'animation', 'solo', 'git', 'github', 'cypress']
  }
];


export const shortAboutMe = {
  id: 0,
  body: `<p className='aside-about-me'>Hey! I'm <a href='/about'>Pat Findley</a>, <br/> 
    Im currently a student at <a href="https://turing.io/"> Turing School of Software and Design</a>. <br/>
    <br/>
    I like to consider myself a <br/>
    "creator of non-tangible things".<br>
    This website is one of those things; a never complete, playground to log my progress and try new things <br>
    <br>
    Click around the projects to see what I've been building, breaking, and re-building, when your finished <a href='/contact'>reach out</a> and say hi!`
}

