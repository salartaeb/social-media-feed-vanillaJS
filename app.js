const alert = document.querySelector('.alert');
const container = document.querySelector('.container');
const form = document.querySelector('.post-form');
const post = document.getElementById('post');
const submitPostBtn = document.querySelector('.submit-post-btn');
const likeButton = document.querySelector('.like-btn');
const feed = document.querySelector('.news-feed');

const postContainer = document.querySelector('.post-container');
// const name = getElementById('name');
// const handle = getElementById('handle');
// const createdAt = getElementById('created-at');

form.addEventListener('submit', submitPost);



// ****** EVENT LISTENERS *****************


// ****** FUNCTIONS ***********************

function submitPost(e) {
  e.preventDefault();
  const value = post.value;
  const id = new Date().getTime().toString();

  if (value) {
    const element = document.createElement('article');

    // add styles class to element
    element.classList.add('post-container')

    // add id
    const attr = document.createAttribute('post-id');
    attr.value = id;
    element.setAttributeNode(attr);
    element.innerHTML = `
    <div id="post-header">
      <img src="https://i.pravatar.cc/150?u=fake@pravatar.com
      " alt='avatar' />
      <p id="name">Bob</p>
      <p id="handle">@BOBSDa</p>
      <p id="created-at">Created At</p>
    </div>
    <img id="picture"
    src="https://image.shutterstock.com/image-photo/mountain-landscape-lake-range-large-260nw-1017466240.jpg"
    alt="post-img">
    <p id="post-text">Here is a nice picture of a mountain i took this weekend</p>
    <div class="post-footer" style="display: flex; justify-content: space-around;">
      <button id="like-btn">
        <i class="fas fa-heart"></i>
      </button>
      <button>
        <i class="fas fa-heart"></i>
      </button>
      <button>
        <i class="fas fa-heart"></i>
      </button>
      <button>
        <i class="fas fa-heart"></i>
      </button>
     </div>
    `
    console.log('post successfully created');
    feed.appendChild(element);
  }
  else {
    console.log('please enter a value')
  }
}

// ****** LOCAL STORAGE ***********************


// ****** FUNCTIONS ***********************

function displayAlert(text, action) {
  alert.textContent = text;
}







































// const postData = [ 
//   { 
//   "user": {
//     "name": "Salar Taeb",
//     "avatars": "https://i.imgur.com/73hZDYK.png",
//       "handle": "@Salar12313",
//     },
//   "content": {
//       "text": "this is a post with an image",
//       "image": "https://i.imgur.com/73hZDYK.png",
//     },
//   "created_at": 1461116232227
// },
// { 
//   "user": {
//     "name": "John Doe",
//     "avatars": "https://i.imgur.com/73hZDYK.png",
//       "handle": "@JohnDoe",
//     },
//   "content": {
//       "text": "This is a post without an image",
//       "image": ""
//     },
//   "created_at": 1461116232227
// },
// ];

// Populate news Feed