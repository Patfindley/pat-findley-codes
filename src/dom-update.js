import posts from './blogPosts.js';

const domUpdate = {

  populateBlog() {
    blogGrid.innerHTML = '';
    posts.map(post => {
      blogGrid.innerHTML +=
      `<article class="blog-post ${post.id}">
        <section class="blog-top">
          <nav class="image-top">
            <img class="blog-image" src="${post.thumbnail}">
            <div class="time-stamp">${post.date}</div>
          </nav>
        </section>
        <section class="blog-bottom">${post.description}</section>
      </article>
      `
    })
  },

  readPost(e) {
    const blogArea = document.getElementById('blogArea')
    // console.log(posts[0].id)
    console.log(e.target.id)
    let selectedPost = posts.find(post => post.id === e.target.id);
    blogGrid.classList.toggle('hidden');
    console.log(selectedPost, 'selected post');
    blogArea.innerHTML = selectedPost.body;
  }

}

export default domUpdate
