import './css/base.scss';
import domUpdate from "./dom-update.js"

const blogGrid = document.getElementById('blogGrid');

window.onload = domUpdate.populateBlog()

blogGrid.addEventListener('click', () => {
  domUpdate.readPost(event)
})
