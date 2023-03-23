var i = 0;
var images = [];
var time = 3000;

// img list
images[0] = './images/bonzi1.jpeg';
images[1] = './images/bonzi2.jpeg';
images[2] = './images/bonzi3.jpeg';

function changeImage(){
  document.slide.src = images[i];

  if (i < images.length -1) {
    i++;
  } else{
    i = 0;
  }
  setTimeout("changeImage()", time);
}

window.onload = changeImage;

