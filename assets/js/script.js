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

var image = document.getElementById('image');
var counter = 1;

var timer = setInterval(changeImage, 1000);

function changeImage() {
  if (counter == 1) {
    image.src = images[0];
  } else if (counter == 2) {
    image.src = images[1];
  } else if (counter == 3) {
    image.src = images[2];
  } else if (counter == 4) {
    image.src = images[3];
  } else if (counter == 5) {
    image.src = images[4];
  } else if (counter == 6) {
    image.src = images[5];
  } else if (counter == 7) {
    image.src = images[6];
  } else if (counter == 8) {
    image.src = images[7];
  } else if (counter == 9) {
    image.src = images[8];
  } else {
    counter = 1;
    image.src = images[0];
  }
  counter++;
}