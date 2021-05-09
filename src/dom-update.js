import posts from './blogPosts.js';

const domUpdate = {

  populateBlog() {
    const blogGrid = document.getElementById('blogGrid')

    blogGrid.innerHTML = '';
    posts.sort((a, b) => b.id - a.id).map(post => {
      blogGrid.innerHTML +=
        `<article class="blog-post" id="${post.id}">
        <section class="blog-top" id="${post.id}">
          <nav class="image-top" id="${post.id}">
            <img class="blog-image" id="${post.id}" src="${post.thumbnail}">
            <div class="time-stamp" id="${post.id}">${post.date}</div>
          </nav>
        </section>
        <section class="blog-bottom" id="${post.id}">${post.description}</section>
      </article>
      `
    })
  },

  renderHome() {
    const blogGrid = document.getElementById('blogGrid')
    // blogGrid.classList.remove('hidden');

    console.log('hi!');
    // blogGrid.innerHTML = '';
    domUpdate.populateBlog();
  },

  readPost(e) {
    const blogArea = document.getElementById('blogArea')

    let selectedPost = posts.find(post => post.id === Number(e.target.id));
    if (selectedPost) {
      blogGrid.classList.toggle('hidden');
      blogArea.innerHTML = selectedPost.body;
    }
  }

}

export default domUpdate
