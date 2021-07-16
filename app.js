const container = document.querySelector('.container');
const form = document.querySelector('.form');
const submitPost = document.querySelector('submit-post');
const likeButton = document.querySelector('like-button');
const alert = document.querySelector('.alert');
const newsFeed = document.querySelector('.feed');

const postData = [ 
  { 
  "user": {
    "name": "Salar Taeb",
    "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@Salar12313",
    },
  "content": {
      "text": "this is a post with an image",
      "image": "https://i.imgur.com/73hZDYK.png",
    },
  "created_at": 1461116232227
},
{ 
  "user": {
    "name": "John Doe",
    "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@JohnDoe",
    },
  "content": {
      "text": "This is a post without an image",
      "image": ""
    },
  "created_at": 1461116232227
},
];