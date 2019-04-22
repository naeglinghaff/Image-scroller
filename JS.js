var slideImages = document.querySelectorAll('.slide');
var arrowL = document.getElementById ('arrow-left');
var arrowR = document.getElementById('arrow-right');
var buttonPause = document.getElementById('pausebutton');
var buttonPlay = document.getElementById('playbutton');
var displayIndex = 0; //index of image we want displayed

//hides all images
function reset() {
     for(let i = 0; i < slideImages.length; i++){
       //slideImages[i].style.display = 'none';
       slideImages[i].style.opacity = 0;
     }
}

//to get to next image index
function next() {
    var ret;
    ret = displayIndex + 1;
    if (ret >= slideImages.length)
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
        ret = slideImages.length - 1;
    return ret;
}

//starts the slide
function startSlide() {
     reset();
     alwaysSlideRight;
   }

//returns to the last image
function slideLeft (){
     var ret = previous();
     displayIndex = ret;
     hide(ret);
     ret = previous(ret);
     show(ret);
}

//left arrow click event
arrowL.addEventListener('click', function(){
     slideLeft();
});

//show the next image
function slideRight(){
     var ret = previous();
     hide(ret);
     show(displayIndex);
     displayIndex = next();
}

//shows the image with effect
function show(ind){
    //slideImages[ind].style.display = 'inline-block';
    slideImages[ind].classList.remove('imgoff');
    slideImages[ind].classList.add('imgon');
    slideImages[ind].style.opacity = 1;
}

//hides the image with effect
function hide(ind){
    //slideImages[ind].style.display = 'none';
    slideImages[ind].classList.remove('imgon');
    slideImages[ind].classList.add('imgoff');
    slideImages[ind].style.opacity = 0;
}

//right arrow click event
arrowR.addEventListener('click', function(){
     slideRight();
});

//loops to the right
function alwaysSlideRight() {
    slideRight();
    tControl = setTimeout (alwaysSlideRight, 2500);
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

var tControl = setTimeout (alwaysSlideRight, 2500);
