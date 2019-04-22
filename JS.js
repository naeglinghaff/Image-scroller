var slideImages = document.querySelectorAll('.slide');
var arrowL = document.querySelector ('#arrow-left');
var arrowR = document.querySelector('#arrow-right');
var buttonPause = document.getElementById('pausebutton');
var displayIndex = 0; //index of image we want displayed

//hides all images
function reset() {
     for(let i = 0; i < slideImages.length; i++){
       slideImages[i].style.display = 'none';
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
     slideImages[ret].style.display = 'none';
     ret = previous(ret);
     slideImages[ret].style.display = 'inline-block';
}

//left arrow click event
arrowL.addEventListener('click', function(){
     slideLeft();
});

//show the next image
function slideRight(){
     var ret = previous();
     slideImages[ret].style.display = 'none';
     slideImages[displayIndex].style.display = 'inline-block';
     displayIndex = next();
}

//right arrow click event
arrowR.addEventListener('click', function(){
     slideRight();
});

//loops to the right
function alwaysSlideRight() {
    slideRight();
    tControl = setTimeout (alwaysSlideRight, 1500);
}

//pauses the loop
function pause() {
    if (tControl)
        clearTimeout(tControl);
}
//button pause click event

buttonPause.addEventListener('click',pause);
 
startSlide();

var tControl = setTimeout (alwaysSlideRight, 1500);
