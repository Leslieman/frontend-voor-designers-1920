const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

//buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

let counter = 1;
const size = carouselImages[0].clientWidth;


carouselSlide.style.transform = 'translateX('+(-size*counter)+'px)';

// button listeners
nextBtn.addEventListener('click', ()=>{
    if(counter >= carouselImages.length -1) return;
    carouselSlide.style.transition = "transform 0.4s ease";
    counter++;
     //verplaatst de slide naar de afmetingen van het beeld. bijvoorbeeld (-800*2)px
    carouselSlide.style.transform = 'translateX('+(-size*counter)+'px)'; 
});

prevBtn.addEventListener('click', ()=>{
    if(counter <= 0) return;
    carouselSlide.style.transition = "transform 0.4s ease";
    counter--;
    carouselSlide.style.transform = 'translateX('+(-size*counter)+'px)';
});

//keypress listeners
window.addEventListener('keyup', (e)=>{
switch(e.key){
    case 'ArrowLeft':
        if(counter <= 0) return;
        carouselSlide.style.transition = "transform 0.4s ease";
        counter--;
        carouselSlide.style.transform = 'translateX('+(-size*counter)+'px)';
        break;
     case 'ArrowRight':
        if(counter >= carouselImages.length -1) return;
        carouselSlide.style.transition = "transform 0.4s ease";
        counter++;
        carouselSlide.style.transform = 'translateX('+(-size*counter)+'px)';
}

});


// carousel loop - je herlaadt de beelden niet maar springt ongezien terug naar foto waar je begon.

carouselSlide.addEventListener('transitionend', ()=>{
if(carouselImages[counter].id === 'lastClone'){
    carouselSlide.style.transition = "none";
    counter = carouselImages.length -2;
    carouselSlide.style.transform = 'translateX('+(-size*counter)+'px)';
}
if(carouselImages[counter].id === 'firstClone'){
    carouselSlide.style.transition = "none";
    counter = carouselImages.length - counter;
    carouselSlide.style.transform = 'translateX('+(-size*counter)+'px)';
}
});
