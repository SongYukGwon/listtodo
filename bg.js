const body = document.querySelector("body");

const IMG_NUMBER = 3;


function paintImage(imgNumber){
    const image = new Image();
    image.src = `./image/${imgNumber}.jpg`;
    image.classList.add('bgImage');
    body.appendChild(image);
}

function genRandom(){
    const number = Math.floor(Math.random()*5+1);
    return number;
}

function init(){
    const randomNumber =genRandom();
    paintImage(randomNumber);
}

init();