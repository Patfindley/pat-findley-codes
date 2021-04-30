import './css/base.scss';
console.log('woooooohuh?')
import posts from './blogPosts.js';
console.log('post')

const blogGrid = document.getElementById('blogGrid');

window.onload = populateBlog()

function populateBlog() {
  console.log('hi!')
  posts.map(post => {
    blogGrid.innerHTML +=
    `<article class="blog-post">
      <section class="blog-top">
        <nav class="image-top">
          <img class="blog-image" src="${post.thumbnail}">
          <div class="time-stamp">
            3/02/20
          </div>
        </nav>
      </section>
      <section class="blog-bottom">
      My second group project at Turing, was a blast ...
    </section>
    </article>

    `
  })
}
