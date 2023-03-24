var bonzi_images = [];
var doodleImages = [];
var womanImages = [];

var bonziCount = 0;
var womanCount = 0;
var doodleCount = 0;

var time = 3000;

// img list
bonzi_images[0] = './images/bonzi1.jpeg';
bonzi_images[1] = './images/bonzi2.jpeg';
bonzi_images[2] = './images/bonzi3.jpeg';

doodleImages[0] = './images/doodle1.jpg';
doodleImages[1] = './images/doodle2.jpg';
doodleImages[2] = './images/doodle3.jpg';

womanImages[0] = './images/woman1.jpeg';
womanImages[1] = './images/woman2.jpeg';
womanImages[2] = './images/woman3.jpeg';


function changeImage(){
// Bonzi Images Logic
    document.bonziSlide.src = bonzi_images[bonziCount];
    console.log("working")
  
    if (bonziCount < bonzi_images.length -1) {
      bonziCount++;
    } else{
      bonziCount = 0;
    }
// Doodle Images Logic
    document.doodleSlide.src = doodleImages[doodleCount];
  
    if (doodleCount < doodleImages.length -1) {
      doodleCount++;
    } else{
      doodleCount = 0;
    }
// Woman Images Logic
document.womanSlide.src = womanImages[womanCount];
  
if (womanCount < womanImages.length -1) {
  console.log(womanCount)
  womanCount++;
} else{
  womanCount = 0;
}
    // setTimeout("changeDoodleImage()", time);
    
    setTimeout("changeImage()", time);
}


window.onload = changeImage;
