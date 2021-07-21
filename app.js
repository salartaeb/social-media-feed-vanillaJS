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

//submit post
function submitPost(e) {
  e.preventDefault();
  const value = post.value;
  const id = new Date().getTime().toString();
  const postImageSrc = frame.src;
  
  if (value) {
    console.log(e.src, 'this is frame src')
    const element = document.createElement('article');
  
    // add styles class to element
    element.classList.add('post-container')

    // add post id
    const attr = document.createAttribute('post-id');
    attr.value = id;
    element.setAttributeNode(attr);
    element.innerHTML = `
    <img class="sidebar" src="https://i.pravatar.cc/150?u=fake@pravatar.com
    " alt='avatar' />
      <div id="post-header" class="header">
     
        <p id="name">Bob</p>
        <p id="handle">@BOBSDa</p>
        <p id="created-at">${id}</p>
      </div>
      <img id="picture" class="content"
        src="${postImageSrc}">
      <p id="post-text" class="content">${value}</p>
      <div id="post-footer" class="footer">
        <button id="like-btn">
          Hello
        </button>
      </div>
    `
    console.log('post successfully created');
    container.appendChild(element);
  }
  else {
    console.log('please enter a value')
  }
}

// ****** LOCAL STORAGE ***********************


// ****** FUNCTIONS ***********************

//display alert 
function displayAlert(text, action) {
  alert.textContent = text;
}

//preview image upload\
function preview() {
  frame.src=URL.createObjectURL(event.target.files[0]);
}

//







































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