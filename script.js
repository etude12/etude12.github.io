let counter = 0; 
let arrImages = []; 
let btnNextImg = document.body.getElementsByTagName('button')[0];
window.onload = function () { 
    for (let i = 0; i < 5; i++) { 
        arrImages[i] = new Image(); 
        arrImages[i].src = "img/" + i + ".jpg"; 
    }
    btnNextImg.addEventListener("click", nextImage, false); 
} 

function nextImage() { 
    counter++; 
    if (counter > 5) { counter = 0; }
    document.pic.src = arrImages[counter].src; 
}