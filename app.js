const alert = document.querySelector('.alert');
const container = document.querySelector('.container');
const form = document.querySelector('.post-form');
const post = document.getElementById('post');
const submitPostBtn = document.querySelector('.submit-post-btn');
const likeButton = document.querySelector('.like-btn');
const feed = document.querySelector('.news-feed');
const postContainer = document.querySelector('.post-container');
const scrolltopBtn = document.getElementById('scroll-to-top');
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
  const id = new Date().getTime()

  const postImageSrc = frame.src;

  if (value && frame.src.length > 32) {
    const element = document.createElement('article');
    // add styles class to element
    element.classList.add('post-container')

    // add post id
    const attr = document.createAttribute('post-id');
    attr.value = id;
    element.setAttributeNode(attr);
    element.innerHTML = `
    <img class="sidebar top" src="https://i.pravatar.cc/150?u=fake@pravatar.com 
    " alt='avatar'/>
      <div id="post-header" class="header">
        <p id="name">Bob</p>
        <p id="handle">@BOBSDa</p>
        <p id="created-at">${id}</p>
      </div>
      <p id="post-text" class="text">${value}</p>
      <img id="picture" class="content"
        src="${postImageSrc}" onerror="this.style.display='none'">
      <div id="post-footer" class="footer">
        <button id="like-btn">
          <i class="fa fa-heart" aria-hidden="true"></i>
        </button>
      </div>
    `
    console.log('post successfully created');
    form.appendChild(element);
    setBackToDefault();
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
  console.log('dsad')
  frame.src = URL.createObjectURL(event.target.files[0]);
}

// set form to default
function setBackToDefault() {
  post.value=  "";
  frame.src = ""
}

// scroll to top button

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    scrolltopBtn.style.display = "block";
  } else {
    scrolltopBtn.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
