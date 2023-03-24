var i = 0;
var images = [];
var time = 3000;

// img list
images[0] = './images/bonzi.jpeg';
images[1] = './images/woman_portrait.jpeg';
images[2] = './images/Tree_best_scan.jpg';

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

