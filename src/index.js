import './css/base.scss';
import domUpdate from "./dom-update.js"

const blogGrid = document.getElementById('blogGrid');
const navHome = document.getElementById('navHome');

window.onload = domUpdate.populateBlog()

navHome.addEventListener('click', () => {
  domUpdate.renderHome();
});

blogGrid.addEventListener('click', () => {
  domUpdate.readPost(event);
});
