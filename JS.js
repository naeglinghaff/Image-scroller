var slide = document.getElementById('mainimage');
var arrowL = document.getElementById ('arrow-left');
var arrowR = document.getElementById('arrow-right');
var buttonPause = document.getElementById('pausebutton');
var buttonPlay = document.getElementById('playbutton');
var iList = ["Images/image1.JPG", "Images/image2.jpg", "Images/image3.jpg", "Images/image4.jpg"];
var displayIndex = 0; //index of current image we are displaying

//hides all images
function reset() {
    //slide.style.opacity = 0;
}

//to get to next image index
function next() {
    var ret;
    ret = displayIndex + 1;
    if (ret >= iList.length)
        ret = 0;
    return ret;
}
//to get to previous image index
function previous(now) {
    var ret;
    if (typeof now === 'undefined') {
        ret = displayIndex - 1;
    } else {
        ret = now - 1;   
    }
    if (ret < 0)
        ret = iList.length - 1;
    return ret;
}

//starts the slide
function startSlide() {
     reset();
     alwaysSlideRight;
   }

//returns to the last image
function slideLeft (){
     hide(displayIndex);
    displayIndex = previous();
     show(displayIndex);
}

//left arrow click event
arrowL.addEventListener('click', function(){
     slideLeft();
});

//show the next image
function slideRight(){
     hide(displayIndex);
     displayIndex = next();
     show(displayIndex);
}

//shows the image with effect
function show(ind){
    slide.src = iList[ind];
    slide.classList.remove('imgoff');
    slide.classList.add('imgon');
    //slide.style.opacity = 1;  
}

//hides the image with effect
function hide(){
    slide.classList.remove('imgon');
    slide.classList.add('imgoff');
    //slide.style.opacity = 0; 
}

//right arrow click event
arrowR.addEventListener('click', function(){
     slideRight();
});

//loops to the right
function alwaysSlideRight() {
    slideRight();
    tControl = setTimeout (alwaysSlideRight, 3000);
}

//pauses the loop
function pause() {
    if (tControl)
        clearTimeout(tControl);
}
//button pause click event
buttonPause.addEventListener('click',pause);

//plays the loop
function play() {
    alwaysSlideRight();
}
//button play click event
buttonPlay.addEventListener('click',play);

 
startSlide();

var tControl = setTimeout (alwaysSlideRight, 3000);
