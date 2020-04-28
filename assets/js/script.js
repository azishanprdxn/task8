// JavaScript here
var images = [ // Storing images in array
  './assets/images/1.jpeg',
  './assets/images/2.jpg',
  './assets/images/3.jpg',
  './assets/images/4.jpg',
  './assets/images/5.jpg',
  './assets/images/6.jpg',
  './assets/images/7.png',
  './assets/images/8.jpeg',
  './assets/images/9.png',
]
var imagesLength = images.length;

var image = document.getElementById('image');
var counter = 0;
var timer = setInterval(changeImage, 1000);

function changeImage() {
  for (var i = 0; i < imagesLength; i++) {
    if (counter == i) {
      image.src = images[i];
    }
  }
  counter++;
  if (counter > images.length - 1) {
    counter = 0; // Resets the counter when all the image is traversed
  }
}